# Spring

## SpringSinkConnector：From EventMesh to Spring BlockingQueue

1. Start your EventMesh Runtime.
2. Enable sinkConnector and check `sink-config.yml`.
3. Start your SpringBoot project that depends on the [Eventmesh-Connector-Spring] project, It will subscribe to the topic defined in `pubSubConfig.subject` in the EventMesh Runtime. And will receive the data of rice into the org/apache/eventmesh/connector/spring/sink/connector/SpringSinkConnector. In Java ` queue ` attribute, the usage is as follows.

```java
@Component
class MySinkApp{
    
    @Resource
    SpringSinkConnector connector;
    
    void letsUseEventMeshSpring(){
        //This queue can be fetched for use
        BlockingQueue<ConnectRecord> queue = connector.getQueue();
    }
}
```

4. Using the Topic specified in `pubSubConfig.subject`, send a message to the EventMesh, which you will then see in the above queue.

```yaml
# Common configuration
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TEST-TOPIC-SPRING
  idc: FT
  env: PRD
  group: springSink
  appId: 5033
  userName: springSinkUser
  passWord: springPassWord
connectorConfig:
  connectorName: springSink
```

## SpringSourceConnector：From Spring BlockingQueue to EventMesh

1. Start your EventMesh Runtime.
2. Enable sinkConnector and check  `source-config.yml`.
3. Start your SpringBoot project that depends on the [Eventmesh-Connector-Spring] project,And send the data you send using [SpringSourceConnector] to `pubSubConfig.subject` in the EventMesh Runtime, as follows.

```java
@Component
class MySourceApp{
    
    @Resource
    SpringSourceConnector connector;
    
    void letsUseEventMeshSpring(){
        //Send a message here
        connector.send(new Object());
    }
}
```

4. Send a message to the [SpringSourceConnector], and you will receive it in EventMesh.

```yaml
# 公共配置
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TEST-TOPIC-SPRING
  idc: FT
  env: PRD
  group: springSource
  appId: 5033
  userName: springSourceUser
  passWord: springPassWord
connectorConfig:
  connectorName: springSource
```

>Note: This Connector project cannot run independently. It is a Springboot-starter, and the SpringBoot application needs to rely on this project.