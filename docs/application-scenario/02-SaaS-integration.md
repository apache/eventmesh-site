# The SaaS composite application integration standardization

*   Application scenario name

&emsp;&emsp;**The SaaS composite application integration standardization**
 

*   Application scenario description

&emsp;&emsp;A SaaS composite application consists of multiple PBCs (Package Business Capabilities). A PBC can be defined as a SaaS application module with clearly defined business capabilities. Each module is business-driven and capable of independently fulfilling business requirements without external dependencies. Enterprise solutions are typically composed of multiple SaaS application modules, integrating various complex functionalities to present a unified and comprehensive user experience.

&emsp;&emsp;The diagram below illustrates a single PBC, a combination of PBCs, and multiple composite PBCs:

<div align="center">
<img src="/images/application-scenario/s2_img1.png" width="80%" />
</div>

<!-- ![PBC-structure](../../static/images/application-scenario/s2_img1.png) -->


&emsp;&emsp;From the above architecture, it is clear that each SaaS application module (PBC) has a low degree of coupling. Modifying or adjusting a specific module does not affect the operation of other existing modules.This facilitates agile development and efficient iterative updates. However, one challenge of SaaS composite applications is the lack of standardized integration between different applications, as the absence of a unified communication protocol can hinder the implementation of this architecture.

&emsp;&emsp;This issue can be solved by EventMesh. EventMesh integrates TCP and HTTP protocols, and supports bi-directional asynchronous communication between Client and Server through gRPC (Google’s open-source high-performance RPC framework based on HTTP/2) with SDKs available for multiple languages such as Java, Python, C, and Go. Users do not need to worry about which communication protocol is used in different scenarios when using the SDK; the event-driven asynchronous communication can be achieved through the SDK APIs integrated by EventMesh, enabling the seamless event flow between different SaaS application modules.

<div align="center">
<img src="/images/application-scenario/s2_img2.png" width="60%" />
</div>

*   Application scenario implementation proposal

&emsp;&emsp;Regarding the specific implementation of the scenario, EventMesh officially introduced the `gRPC` framework starting from version v1.4.0. gRPC defines API interface data models using Protobuf. In the gRPC Protobuf event model, each event is represented by the `SimpleMessage` data model, with the event content stored in the `content` field.

<div align="center">
<img src="/images/application-scenario/s2_img3.png" width="60%" />
</div>

&emsp;&emsp;The gRPC event scenarios supported by EventMesh include: event sending and batch event sending, event broadcasting, event request and response, event subscription, and event pushing (for more details, see: [eventmesh-client.proto](https://github.com/apache/eventmesh/blob/master/eventmesh-protocol-plugin/eventmesh-protocol-grpc/src/main/proto/eventmesh-client.proto)).

&emsp;&emsp;1. The event publishing service provides the following interfaces:


```java
service PublisherService {

   rpc publish(SimpleMessage) returns (Response);

   rpc requestReply(SimpleMessage) returns (SimpleMessage);

   rpc batchPublish(BatchMessage) returns (Response);
}
```

&emsp;&emsp;Events are presented in the SimpleMessage data model. Event publishing supports three modes: `synchronous publishing`, `asynchronous publishing`, and `batch publishing`.

&emsp;&emsp; `Synchronous publishing` means the event producer sends the event to EventMesh, waits for the event to be successfully delivered to the event consumer, and receives a response from the event consumer. The end-to-end event publishing process is only considered complete once this is done.

&emsp;&emsp; `Asynchronous publishing` means the event producer sends the event to EventMesh without waiting for the event to be successfully delivered to the event consumer.

&emsp;&emsp; `Batch publishing` refers to asynchronously sending a batch of events to EventMesh.

&emsp;&emsp;2. The event subscription service provides the following interfaces:

```java
service ConsumerService {

   rpc subscribe(Subscription) returns (Response);

   rpc subscribeStream(stream Subscription) returns (stream SimpleMessage);

   rpc unsubscribe(Subscription) returns (Response);
}
```

&emsp;&emsp;Event subscription supports two modes: `cluster` and `broadcast`. In cluster mode, only one instance within the event consumer cluster will consume the event. In broadcast mode, every instance in the cluster will consume the event.

&emsp;&emsp;These subscription modes are defined in the subscription data model. Additionally, the subscription service provides two subscription interfaces: `the subscribe API` and `the subscribeStream API`. `The subscribe API` pushes events to consumers via a URL, also known as a webhook. This scenario is suitable for cloud-native microservices, custom applications, and functions. `The subscribeStream API` pushes events to consumers using gRPC bidirectional streaming, allowing the event consumer to return an acknowledgment (Ack) to the event producer. This supports the producer's need for synchronous event publishing using RequestReply.

&emsp;&emsp;3. Event subscription service provides the following interfaces:

&emsp;&emsp;To improve the performance of event production and consumption, the EventMesh server (`EventMesh Runtime`) defines thread pools within the gRPC service. Moreover, independent parameters are configured based on different performance requirements for event production and consumption. These parameters can be found in the EventMesh configuration file (`eventmesh.properties`).

&emsp;&emsp;For example, the following are the number of threads for event production, subscription, and pushing:

```java
eventMesh.server.sendmsg.threads.num=50
eventMesh.server.clientmanage.threads.num=30
eventMesh.server.pushmsg.threads.num=50
```

&emsp;&emsp;When the gRPC service starts, it begins listening for client requests. Once a new request arrives, it is dispatched to the thread pool of the corresponding service, and the appropriate processor (`Processor`) handles it. This prevents blocking the handling of subsequent requests, thereby improving concurrency.

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

&emsp;&emsp;For instance, the above code is the implementation of the event publishing service. It uses a `threadPoolExecutor` to send events to the thread pool for downstream `SendAsyncMessageProcessor` handling.


*   Reference

&emsp;&emsp;["How Does Apache Eventmesh Solve The Saas Composite Application Integration Standardization Problem" in ApacheCon Asia 2022](https://www.youtube.com/watch?v=0v-tjIYkDIw)

&emsp;&emsp;[A Blog by Huawei Cloud Middleware Team](https://mp.weixin.qq.com/s/Z3DAw_YtKJWXftdFjAm2rA)

&emsp;&emsp;[The Code of EventMesh in Github](https://github.com/apache/eventmesh/tree/master/eventmesh-protocol-plugin/eventmesh-protocol-grpc/src/main/proto)