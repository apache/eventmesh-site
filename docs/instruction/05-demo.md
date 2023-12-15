# Run Java SDK Demo

[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java)

> eventmesh-sdk-java acts as a client of EventMesh Runtime and communicates with it, to publish and subscribe the messages.
>
> The eventmesh-sdk-java supports ASYNC messages and BROADCAST messages. ASYNC messages indicate that producers only send messages and do not care about receiving reply messages. BROADCAST messages mean that producers send a message once, and all consumers subscribed to the broadcast topic will receive the message.
>
> eventmesh-sdk-java supports HTTP, TCP and gRPC protocols.

The test demos of TCP, HTTP and GRPC are in the module `eventmesh-examples`.

## 1. TCP

### 1.1 ASYNC

- Start consumer to subscribe the topic (we have created the TEST-TOPIC-TCP-ASYNC by default, you can also create other topic to test)

```
Run the main method of org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribe
```

- Start producer to publish async message

```
Run the main method of org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublish
```

### 1.2 BROADCAST

- Start subscriber to subscribe the topic (we have created the TEST-TOPIC-TCP-BROADCAST by default, you can also create other topic to test)

```
Run the main method of org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribeBroadcast
```

- Start publisher to publish async message

```
Run the main method of org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublishBroadcast
```

More information about EventMesh-TCP, please refer to [EventMesh TCP](../sdk-java/03-tcp.md)

## 2 HTTP

>For HTTP, the eventmesh-sdk-java implements sending and subscribing to asynchronous events.
>
>In the demo, the `content` field of the Java class `EventMeshMessage` represents a special protocol. Therefore, if you are using the eventmesh-sdk-java's http-client, you only need to design the content of the protocol and provide the consumer's application at the same time.

### 2.1 ASYNC

- The subscriber is a SpringBoot demo, so run this demo to start subscriber (we have created the topic TEST-TOPIC-HTTP-ASYNC by default, you can also create other topic to test)

```
Run the main method of org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication
```

- Start publisher to publish message

```
Run the main method of org.apache.eventmesh.http.demo.pub.eventmeshmessage.AsyncPublishInstance
```
More information about EventMesh-HTTP, please refer to [EventMesh HTTP](../sdk-java/02-http.md)

## 3 GRPC

>The eventmesh-sdk-java implements the gRPC protocol. It can asynchronously or synchronously send events to the EventMesh Runtime.
>
>It can subscribe to consume events through Webhook and event streaming, and also supports the CNCF CloudEvents protocol.

### 3.1 ASYNC Publish & Webhook Subscribe

>Producers can asynchronously send events to the EventMesh Runtime without waiting for the events to be stored in the `event-store`.
>
>For Webhook consumers, events will be pushed to the consumer's HTTP Endpoint URL, i.e., the consumer's `subscribeUrl`. This method is similar to the previously mentioned Http eventmesh client.

- Start publisher to publish message (we have created the topic TEST-TOPIC-GRPC-ASYNC by default, you can also create other topic to test)

```
Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.AsyncPublishInstance
```

- Start webhook subscriber

```
Run the main method of org.apache.eventmesh.grpc.sub.app.SpringBootDemoApplication
```

###  3.2 SYNC Publish & Stream Subscribe

>Producers synchronously send events to the EventMesh Runtime while waiting for the events to be stored in the `event-store`.
>
>For event stream consumers, events are pushed in a streaming to the `ReceiveMsgHook` client. This method is similar to the eventmesh client.

- Start Request-Reply publisher to publish message (we have created the topic TEST-TOPIC-GRPC-RR by default, you can also create other topic to test)

```
Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.RequestReplyInstance
```

- Start stream subscriber

```
Run the main method of org.apache.eventmesh.grpc.sub.EventmeshAsyncSubscribe
```

### 3.3 Publish BATCH Message

>Asynchronously batch publish multiple events to the EventMesh Runtime.

- Start publisher to publish batch message (we have created the TEST-TOPIC-GRPC-ASYNC by default, you can also create other topic to test.)

```
Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.BatchPublishInstance
```

More information about EventMesh-gRPC, please refer to [EventMesh gRPC](../sdk-java/04-grpc.md).

## 4. Run Demo with shell scripts

Please refer to [EventMesh Store](./01-store.md) and [EventMesh Runtime](./03-runtime.md) to finish the necessary deployment before try our demo.

After finishing the deployment of store and runtime, you can run our demos in module `eventmesh-examples`:

gradle：

```shell
cd apache-eventmesh-1.9.0-src/eventmesh-examples
gradle clean dist

cd ./dist/bin
```

![demo_1](/images/install/demo_1.png)

### 4.1 TCP
#### TCP Sub

```shell
bash tcp_eventmeshmessage_sub.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_tcp_pub.out
```
![demo_2](/images/install/demo_2.png)

#### TCP Pub

```shell
bash tcp_pub_eventmeshmessage.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_tcp_sub.out
```

![demo_3](/images/install/demo_3.png)

### 4.2 TCP Broadcast

#### TCP Sub Broadcast

```shell
sh tcp_sub_eventmeshmessage_broadcast.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_tcp_sub_broadcast.out
```

![demo_4](/images/install/demo_4.png)

#### TCP Pub Broadcast

```shell
sh tcp_pub_eventmeshmessage_broadcast.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_tcp_pub_broadcast.out
```

![demo_5](/images/install/demo_5.png)

### 4.3 HTTP

#### HTTP Sub

```shell
sh http_sub.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_http_sub.out
```

![demo_6](/images/install/demo_6.png)

#### HTTP Pub

```shell
sh http_pub_eventmeshmessage.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_http_pub.out
```

![demo_7](/images/install/demo_7.png)

You can see the run logs for the different modes under the `/logs` directory.