# Spring

`eventmesh-connector-spring` is a Spring Boot starter, not a standalone `main()` connector. Add the module to a Spring Boot application. `EventMeshAutoConfiguration` registers the source, sink, and connect-server beans.

The source takes objects from your application (`SpringSourceConnector.send`) and publishes them to EventMesh. The sink takes events from EventMesh and delivers them to methods annotated with `@EventMeshListener`.

## SpringSinkConnector: From EventMesh to Spring

1. Start EventMesh Runtime.
2. Enable the sink (`sinkEnable: true` in `server-config.yml`) and check `sink-config.yml`.
3. Start the Spring Boot application that depends on `eventmesh-connector-spring`. `EventMeshListenerBeanPostProcessor` starts `SpringSinkConnector` and invokes each `@EventMeshListener` method with records from the sink queue.
4. Send a message to EventMesh on `pubSubConfig.subject`; the listener method receives it.

```java
@Component
public class SpringSubHandler {

    @EventMeshListener
    public void onMessage(String message) {
        // handle payload
    }
}
```

```yaml
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TEST-TOPIC-SPRING
  idc: FT
  env: PRD
  group: springSink
  appId: 5033
  userName: springSinkUser
  passWord: springPassWord
sinkConnectorConfig:
  connectorName: springSink
```

## SpringSourceConnector: From Spring to EventMesh

1. Start EventMesh Runtime.
2. Enable the source (`sourceEnable: true` in `server-config.yml`) and check `source-config.yml`.
3. Start the Spring Boot application. `SpringConnectServer` (a `CommandLineRunner`) starts `SpringSourceConnector`. Inject that bean and call `send`.
4. The payload is published to `pubSubConfig.subject` in EventMesh Runtime.

```java
@RestController
public class SpringPubController {

    @Autowired
    private SpringSourceConnector springSourceConnector;

    @RequestMapping("/spring/pub")
    public String publish() {
        springSourceConnector.send("{\"content\":\"testSpringPublishMessage\"}");
        return "success!";
    }
}
```

```yaml
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TEST-TOPIC-SPRING
  idc: FT
  env: PRD
  group: springSource
  appId: 5033
  userName: springSourceUser
  passWord: springPassWord
sourceConnectorConfig:
  connectorName: springSource
```

### Configuration

`pubSubConfig` is the EventMesh TCP client used to publish into or subscribe from Runtime.

`sourceConnectorConfig` / `sinkConnectorConfig` fields:

- `connectorName`: name of the connector.

`server-config.yml`:

- `sourceEnable`: start `SpringSourceConnector` from `SpringConnectServer`.
- `sinkEnable`: start `SpringSinkConnector` from `EventMeshListenerBeanPostProcessor`.

`@EventMeshListener.requestTimeout` is the queue poll timeout in seconds (default 5).

Spring environment properties whose keys start with `eventmesh.connector.` are copied onto source records as extensions (prefix stripped, key lowercased).

### Precautions

- This module cannot run on its own. Depend on it from a Spring Boot application (`META-INF/spring.factories` auto-configuration).
- Bundled `server-config.yml` sets `sourceEnable: true` and `sinkEnable: true`. Turn off the side you are not running.
- Bundled `source-config.yml` / `sink-config.yml` use a `connectorConfig` key. Jackson binds `sourceConnectorConfig` and `sinkConnectorConfig` on the Java config classes; use those field names.
- `SpringConnectServer` starts only the source worker. The sink worker is started by `EventMeshListenerBeanPostProcessor`, not by `SpringConnectServer`.
- `@EventMeshListener` methods must take exactly one argument. `String` receives the payload bytes as text; any other type is JSON-deserialized.
- See `eventmesh-examples` (`SpringPubController` / `SpringSubHandler`) for a full sample.

### Official references

- [Spring Boot auto-configuration](https://docs.spring.io/spring-boot/reference/using/auto-configurations.html)
