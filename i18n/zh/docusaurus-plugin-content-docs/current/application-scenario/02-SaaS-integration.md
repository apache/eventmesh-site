# SaaS组合式应用集成标准化

*   **应用场景名称**

&emsp;&emsp;**SaaS组合式应用集成标准化**
 

*   **应用场景描述**

&emsp;&emsp;Saas组合式应用由多个PBC（Package Business Capability）组成，PBC可以被定义为具有明确业务能力的SaaS应用程序模块，该模块以业务为驱动，能独立完成业务需求，不需要外部依赖。企业解决方案通常由多个SaaS应用程序模块进行组合，以呈现完整统一的用户体验。

&emsp;&emsp;下图为单一PBC、组合PBC和多个组合PBC的示意图：

<div align="center">
<img src="/images/application-scenario/s2_img1.png" width="80%" />
</div>

&emsp;&emsp;由以上架构可见，每个SaaS应用程序模块（PCB）之间的耦合程度较低，对某个业务进行修改调整时，均不会影响到其他现有业务的运行，这有助于敏捷开发与高效的迭代更新。但SaaS组合式应用存在各个应用间集成标准的问题，各应用之间缺乏统一的通讯协议标准就给业务落地该架构带来了困难。

&emsp;&emsp;该问题可以使用Eventmesh解决，EventMesh整合了TCP和HTTP协议，同时通过gRPC(谷歌开源的基于HTTP/2的高性能RPC框架)支持Java、Python、C、Go等多语言SDK，从而支持Client和Server双向异步通讯。用户在使用SDK时无需考虑不同场景所使用的具体通讯协议，基于EventMesh所整合的SDK API即可进行事件驱动的异步通讯，实现了不同SaaS应用程序模块之间的事件流转。

<div align="center">
<img src="/images/application-scenario/s2_img2.png" width="60%" />
</div>

*   **应用场景实施方案**

&emsp;&emsp;关于场景的具体实现，EventMesh从v1.4.0版本开始正式引入 `gRPC` 框架，`gRPC` 通过 Protobuf 定义API接口数据模型，统一由CloudEvents定义事件模型。在gRPC的Protobuf事件模型中，每个事件是以 `SimpleMessage` 的数据模型呈现，事件的实体内容放在 `content` 字段里，CloudEvents是业界流行的事件模型。

<div align="center">
<img src="/images/application-scenario/s2_img3.png" width="60%" />
</div>

&emsp;&emsp;在EventMesh所支持的gRPC事件使用场景包括：事件发送和批量事件发送、事件广播、事件请求和响应、事件订阅和推送（详见代码：[eventmesh-client.proto](https://github.com/apache/eventmesh/blob/master/eventmesh-protocol-plugin/eventmesh-protocol-grpc/src/main/proto/eventmesh-client.proto)）

&emsp;&emsp;1.事件发送服务提供了以下接口：

```java
service PublisherService {

   rpc publish(SimpleMessage) returns (Response);

   rpc requestReply(SimpleMessage) returns (SimpleMessage);

   rpc batchPublish(BatchMessage) returns (Response);
}
```

&emsp;&emsp;事件是以SimpleMessage的数据模型呈现。事件发送支持同步发送、异步发送和批量发送三种模式：

&emsp;&emsp;同步发送是指事件生产者发送事件到EventMesh，并等待事件成功推送到事件消费者，并收到事件消费者的返回，才算完成整个端到端的事件发送过程；

&emsp;&emsp;异步发送是指事件生产者发送事件到EventMesh即可，无需等待事件被成功推送到事件消费者；

&emsp;&emsp;批量发送是指异步发送一批事件到EventMesh。

&emsp;&emsp;2.事件订阅服务提供以下接口：

```java
service ConsumerService {

   rpc subscribe(Subscription) returns (Response);

   rpc subscribeStream(stream Subscription) returns (stream SimpleMessage);

   rpc unsubscribe(Subscription) returns (Response);
}
```

&emsp;&emsp;事件订阅支持两种方式：集群(cluster) 和广播(broadcast)。在集群模式中，事件消费者集群里只有一个实例能消费到事件；而广播模式让集群里每一个实例都消费到事件。

&emsp;&emsp;这些订阅模式是在订阅数据模型里定义的。另外订阅服务提供两种订阅接口：`subscribe API` 和 `subscribeStream API`。`subscribe API`是通过url方式推送事件到消费者，这里url又叫webhook，这种场景适合云原生微服务和自定义应用及函数；`subscribeStream API`是通过gRPC 双向流(Bidirectional Streaming) 推送事件到消费者，同时可以让事件消费者返回确认信息 (Ack) 给事件生产者。这就满足了生产者RequestReply同步事件发送的需求。

&emsp;&emsp;3.事件订阅服务提供以下接口：

&emsp;&emsp;为了提高事件生产和消费的性能，EventMesh服务端(EventMesh Runtime) 在gRPC的服务里定义了线程池(ThreadPool)，而且针对事件生产和消费的对性能要求的不同，配置独立的参数。这些参数都可以在EventMesh配置文件(`eventmesh.properties`)里找到。

&emsp;&emsp;例如以下分别是事件生产，订阅和推送的线程数：

```java
eventMesh.server.sendmsg.threads.num=50
eventMesh.server.clientmanage.threads.num=30
eventMesh.server.pushmsg.threads.num=50
```

&emsp;&emsp;当gRPC服务启动后，它会监听客户端的请求，一旦有新请求进来，它会分发到对应服务的线程池，然后让对应的处理器(Processor)处理，这样就不会阻塞下一个请求的处理，从而提高了并发量。

```java
public void publish(SimpleMessage request, StreamObserver<Response> responseObserver){
    cmdLogger.info("cmd={}|{}|client2eventMesh|from={}|to={}", "AsyncPublish",
        EventMeshConstants.PROTOCOL_GRPC, request.getHeader().getIp(),
        eventMeshGrpcServer.getEventMeshGrpcConfiguration().eventMeshIp);

    EventEmitter<Response> emitter = new EventEmitter<>(responseObserver);

    threadPoolExecutor.submit(() -> {
        SendAsyncMessageProcessor sendAsyncMessageProcessor = new SendAsyncMessageProcessor(eventMeshGrpcServer);
        try {
            sendAsyncMessageProcessor.process(request, emitter);
        } catch (Exception e) {
            logger.error("Error code {}, error message {}", StatusCode.EVENTMESH_SEND_ASYNC_MSG_ERR.getRetCode(),
                StatusCode.EVENTMESH_SEND_ASYNC_MSG_ERR.getErrMsg(), e);
            ServiceUtils.sendRespAndDone(StatusCode.EVENTMESH_SEND_ASYNC_MSG_ERR, e.getMessage(), emitter);
        }
    });
}
```

&emsp;&emsp;比如以上代码是事件发送服务(publish service) 的实现。它使用了`threadPoolExecutor`把事件发送到线程池让下游`SendAsyncMessageProcessor`处。

*   **参考资料**

&emsp;&emsp;[ApacheCon Asia 2022会议演讲《EventMesh如何解决SaaS组合式应用集成标准化问题》](https://www.youtube.com/watch?v=0v-tjIYkDIw)

&emsp;&emsp;[华为云中间件团队的技术博客](https://mp.weixin.qq.com/s/Z3DAw_YtKJWXftdFjAm2rA)

&emsp;&emsp;[EventMesh项目源代码](https://github.com/apache/eventmesh/tree/master/eventmesh-protocol-plugin/eventmesh-protocol-grpc/src/main/proto)