# Spring

## SpringSinkConnector：从 EventMesh 到 Spring 的 BlockingQueue

1. 启动你的 EventMesh Runtime。
2. 启用 sinkConnector 并检查 `sink-config.yml`。
3. 启动你依赖了 [eventmesh-connector-spring] 工程的 SpringBoot 项目 ，它将订阅到 EventMesh Runtime 中 `pubSubConfig.subject` 中定义的主题，并将收到的数据饭入到 org/apache/eventmesh/connector/spring/sink/connector/SpringSinkConnector.java 中的 `queue` 属性，用法如下。

```java
@Component
class MySinkApp{
    
    @Resource
    SpringSinkConnector connector;
    
    void letsUseEventMeshSpring(){
        //这个queue可以获取出来以供使用
        BlockingQueue<ConnectRecord> queue = connector.getQueue();
    }
}
```

4. 使用在 `pubSubConfig.subject` 中指定的 Topic，向 EventMesh 发送消息，然后你将在 上述队列中 看到该消息。

```yaml
# 公共配置
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

## SpringSourceConnector：从 Spring 的 BlockingQueue 到 EventMesh

1. 启动你的 EventMesh Runtime。
2. 启用 sourceConnector 并检查 `source-config.yml`。 
3. 启动你依赖了 [eventmesh-connector-spring] 工程的 SpringBoot 项目，并将你使用 [SpringSourceConnector] 发送的数据发送到 EventMesh Runtime 中的 `pubSubConfig.subject`，用法如下。 

```java
@Component
class MySourceApp{
    
    @Resource
    SpringSourceConnector connector;
    
    void letsUseEventMeshSpring(){
        //这里发送消息
        connector.send(new Object());
    }
}
```

4. 向 connector 发送一个消息，然后你将在 EventMesh 中接收到该消息。

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

>注意事项: 本Connector工程不能独立运行，其实是SpringBoot-Starter，需要SpringBoot应用依赖此工程。