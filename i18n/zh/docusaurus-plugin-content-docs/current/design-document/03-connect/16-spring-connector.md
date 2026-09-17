# Spring

`eventmesh-connector-spring` 是 Spring Boot starter，不是独立的 `main()` 连接器。把它加到 Spring Boot 应用里，`EventMeshAutoConfiguration` 会注册 Source、Sink 和 connect-server Bean。

Source 从应用里取出对象（`SpringSourceConnector.send`）并发布到 EventMesh。Sink 从 EventMesh 接收事件，交给带 `@EventMeshListener` 的方法。

## SpringSinkConnector：从 EventMesh 到 Spring

1. 启动 EventMesh Runtime。
2. 启用 sink（在 `server-config.yml` 中设置 `sinkEnable: true`）并检查 `sink-config.yml`。
3. 启动依赖 `eventmesh-connector-spring` 的 Spring Boot 应用。`EventMeshListenerBeanPostProcessor` 会启动 `SpringSinkConnector`，并从 sink 队列取出记录调用每个 `@EventMeshListener` 方法。
4. 向 EventMesh 的 `pubSubConfig.subject` 发送消息后，监听方法会收到它。

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

## SpringSourceConnector：从 Spring 到 EventMesh

1. 启动 EventMesh Runtime。
2. 启用 source（在 `server-config.yml` 中设置 `sourceEnable: true`）并检查 `source-config.yml`。
3. 启动 Spring Boot 应用。`SpringConnectServer`（`CommandLineRunner`）会启动 `SpringSourceConnector`。注入该 Bean 并调用 `send`。
4. 消息会发布到 EventMesh Runtime 中 `pubSubConfig.subject` 指定的 Topic。

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

### 配置项

`pubSubConfig` 是与 Runtime 交互的 EventMesh TCP 客户端配置。

`sourceConnectorConfig` / `sinkConnectorConfig` 字段：

- `connectorName`：连接器名称。

`server-config.yml`：

- `sourceEnable`：由 `SpringConnectServer` 启动 `SpringSourceConnector`。
- `sinkEnable`：由 `EventMeshListenerBeanPostProcessor` 启动 `SpringSinkConnector`。

`@EventMeshListener.requestTimeout` 是队列 poll 超时（秒，默认 5）。

以 `eventmesh.connector.` 开头的 Spring 环境属性会写到 Source 记录的 extension 上（去掉前缀并把 key 转成小写）。

### 注意事项

- 该模块不能单独运行。需要作为 Spring Boot 应用的依赖（`META-INF/spring.factories` 自动配置）。
- 自带的 `server-config.yml` 中 `sourceEnable: true`、`sinkEnable: true`。不需要的一侧请关掉。
- 自带的 `source-config.yml` / `sink-config.yml` 使用 `connectorConfig`。Java 配置类上 Jackson 绑定的是 `sourceConnectorConfig` 和 `sinkConnectorConfig`，请用这两个字段名。
- `SpringConnectServer` 只启动 source worker。sink worker 由 `EventMeshListenerBeanPostProcessor` 启动，不是 `SpringConnectServer`。
- `@EventMeshListener` 方法必须恰好一个参数。`String` 按文本接收 payload 字节；其他类型按 JSON 反序列化。
- 完整示例见 `eventmesh-examples`（`SpringPubController` / `SpringSubHandler`）。

### 官方参考

- [Spring Boot 自动配置](https://docs.spring.io/spring-boot/reference/using/auto-configurations.html)
