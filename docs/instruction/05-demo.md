# Run eventmesh-sdk-java demo

[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java)

> eventMesh-sdk-java as the client, and communicate with eventmesh-runtime, to finish the message sub and pub
>
> eventMesh-sdk-java support both async and broadcast.
>
> eventMesh-sdk-java support HTTP, TCP and gRPC.

The test demos of TCP, HTTP and GRPC are in the module **eventmesh-examples**:

## 1. TCP DEMO

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


## 2 HTTP DEMO

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

## 3 GRPC DEMO

### 3.1 ASYNC PUBLISH & WEBHOOK SUBSCRIBE

- Start publisher to publish message (we have created the topic TEST-TOPIC-GRPC-ASYNC by default, you can also create other topic to test)

```
Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.AsyncPublishInstance
```

- Start webhook subscriber

```
Run the main method of org.apache.eventmesh.grpc.sub.app.SpringBootDemoApplication
```

###  3.2 SYNC PUBLISH & STREAM SUBSCRIBE

- Start Request-Reply publisher to publish message (we have created the topic TEST-TOPIC-GRPC-RR by default, you can also create other topic to test)

```
Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.RequestReplyInstance
```

- Start stream subscriber

```
Run the main method of org.apache.eventmesh.grpc.sub.EventmeshAsyncSubscribe
```

### 3.3 PUBLISH BATCH MESSAGE

- Start publisher to publish batch message (we have created the TEST-TOPIC-GRPC-ASYNC by default, you can also create other topic to test)

```
Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.BatchPublishInstance
```

More information about EventMesh-gRPC, please refer to [EventMesh gRPC](../sdk-java/04-grpc.md).

## 4. Run these demos by yourself

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
TCP Sub

```shell
bash tcp_eventmeshmessage_sub.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_tcp_pub.out
```
![demo_2](/images/install/demo_2.png)

TCP Pub

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

TCP Sub Broadcast

```shell
sh tcp_sub_eventmeshmessage_broadcast.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_tcp_sub_broadcast.out
```

![demo_4](/images/install/demo_4.png)

TCP Pub Broadcast

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

HTTP Sub

```shell
sh http_sub.sh
```

Open the corresponding log file to view the log:
```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_http_sub.out
```

![demo_6](/images/install/demo_6.png)

HTTP Pub

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