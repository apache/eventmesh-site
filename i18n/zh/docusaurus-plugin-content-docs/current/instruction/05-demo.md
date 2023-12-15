# 运行 Java SDK Demo

[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java)

> eventmesh-sdk-java 作为客户端，与 EventMesh Runtime 通信，用于完成消息的发送和接收。
>
> eventmesh-sdk-java 支持异步消息和广播消息。异步消息表示生产者只发送消息，不关心回复消息。广播消息表示生产者发送一次消息，所有订阅广播主题的消费者都将收到消息。
>
> eventmesh-sdk-java 支持 HTTP、TCP 和 GRPC 协议。

TCP、HTTP 和 GRPC 示例都在`eventmesh-examples`模块下。

## 1. TCP

### 1.1 异步消息

- 创建主题 TEST-TOPIC-TCP-ASYNC，可以通过 rocketmq-console 或者 rocketmq tools 命令

- 启动消费者，订阅上一步骤已经创建的 Topic

```
运行 org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribe 的main方法
```

- 启动发送端，发送消息

```
运行 org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublish 的main方法
```

### 1.2 广播消息

- 创建主题 TEST-TOPIC-TCP-BROADCAST，可以通过 rocketmq-console 或者 rocketmq tools 命令

- 启动消费端，订阅上一步骤已经创建的 Topic

```
运行 org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribeBroadcast 的main方法
```

- 启动发送端，发送广播消息

```
运行 org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublishBroadcast 的main方法
```

更多关于 TCP 部分的内容，请参考 [EventMesh TCP](../sdk-java/03-tcp.md)

## 2. HTTP

> 对于 HTTP，eventmesh-sdk-java 对异步事件实现了发送与订阅。
>
> 在Demo中，Java 类`LiteMessage`的`content`字段表示一个特殊的协议。因此，如果您要使用 eventmesh-sdk-java 的 http-client，则只需设计协议的内容并在同一时间提供消费者的应用程序。

### 2.1 异步事件

> 生产者将事件发送给下游即可，无需等待响应。

- 创建主题 TEST-TOPIC-HTTP-ASYNC，可以通过 rocketmq-console 或者 rocketmq tools 命令

- 启动消费端，订阅 Topic

  异步事件消费端为 SpringBoot Demo，运行 Demo 即可启动服务并完成 Topic 订阅

```
运行 org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication 的main方法
```

- 启动发送端，发送消息

```
运行 org.apache.eventmesh.http.demo.pub.eventmeshmessage.AsyncPublishInstance 的main方法
```

更多关于 HTTP 部分的内容，请参考 [EventMesh HTTP](../sdk-java/02-http.md)。

## 3. GRPC

> eventmesh-sdk-java 实现了 gRPC 协议。它能异步或同步地发送事件到 EventMesh Runtime。
>
> 它可以通过 Webhook 和事件流方式订阅消费事件，同时也支持 CNCF CloudEvents 协议。

### 3.1 异步事件发送 和 Webhook 订阅

> 生产者可以异步地发送事件到 EventMesh Runtime，不需要等待事件储存到 `event-store`。
>
> 对于 Webhook 消费者，事件会推送到消费者的 HTTP Endpoint URL，即消费者的`subscribeUrl`。此方法和前面的 Http eventmesh client 类似。

- 在 rocketmq 创建主题 TEST-TOPIC-GRPC-ASYNC
- 启动 publisher 发送事件

```
运行 org.apache.eventmesh.grpc.pub.eventmeshmessage.AsyncPublishInstance 的main方法
```

- 启动 webhook 消费者

```
运行 org.apache.eventmesh.grpc.sub.app.SpringBootDemoApplication 的main方法
```

### 3.2 同步事件发送和事件流订阅

> 生产者同步地发送事件到 EventMesh Runtime，同时等待事件储存到 `event-store`。
>
> 对于事件流消费者，事件以流的形式推送到 `ReceiveMsgHook` 客户端。此方法类似于 eventmesh client。

- 在 rocketmq 创建主题 TEST-TOPIC-GRPC-RR
- 启动 Request-Reply publisher 发送事件

```
运行 org.apache.eventmesh.grpc.pub.eventmeshmessage.RequestReplyInstance 的main方法
```

- 启动 stream subscriber

```
运行 org.apache.eventmesh.grpc.sub.EventmeshAsyncSubscribe 的main方法
```

### 3.3 批量事件发布

> 异步地批量发布多个事件到 EventMesh Runtime。

- 在 rocketmq 创建主题 TEST-TOPIC-GRPC-ASYNC
- 启动 publisher 来批量发布事件

```
运行 org.apache.eventmesh.grpc.pub.eventmeshmessage.BatchPublishInstance 的main方法
```

更多关于 gRPC 部分的内容，请参考 [EventMesh gRPC](../sdk-java/04-grpc.md)。

## 4. 使用 Shell 脚本运行 Demo

请参考[EventMesh Store](./01-store.md) 和 [EventMesh Runtime](./03-runtime.md) 完成运行环境的部署

完成 store 和 runtime 的部署后，就可以在 eventmesh-examples 模块下运行我们的 demo 来体验 eventmesh 了：

gradle 编译：

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

打开对应 log 文件查看日志：

```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_tcp_pub.out
```

![demo_2](/images/install/demo_2.png)

#### TCP Pub

```shell
bash tcp_pub_eventmeshmessage.sh
```

打开对应 log 文件查看日志：

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

打开对应 log 文件查看日志：

```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_tcp_sub_broadcast.out
```

![demo_4](/images/install/demo_3.png)

#### TCP Pub Broadcast

```shell
sh tcp_pub_eventmeshmessage_broadcast.sh
```

打开对应 log 文件查看日志：

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

打开对应 log 文件查看日志：

```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_http_sub.out
```

![demo_6](/images/install/demo_6.png)

#### HTTP Pub

```shell
sh http_pub_eventmeshmessage.sh
```

打开对应 log 文件查看日志：

```
cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs
tail -f demo_http_pub.out
```

![demo_7](/images/install/demo_7.png)

你可以在 `/logs` 目录下面看到不同模式的运行日志。