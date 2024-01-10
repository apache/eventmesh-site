# TCP 协议文档

#### 1. 协议格式

**消息组成详解：**

```
魔术字：9 位，当前值为“EventMesh”

通信协议版本号：4 位，当前值为“0000”

消息总长度值 (length)：4 位，int 类型

消息头长度值 (headerLength)：4 位，int 类型

消息头 (header)：长度 = headerLength

消息体 (body)：长度 = length - headerLength - 4 - 4
```

#### 2. 业务逻辑层

+ 消息组成

消息头（header）+ 消息体（body）

```java
public class Package {

    private Header header;
    private Object body;
}

public class Header {

    private Command cmd;
    private int code;
    private String msg;
    private String seq;
}
```

+ 详解

消息头 (header)：类型为 Header，Header 中有 Command 字段，用于区分不同的消息类型

消息体 (body)：对于不同的消息类型，body 的类型不同

| 消息命令字                                                   | body 类型     |
| ------------------------------------------------------------ | ------------ |
| HEARTBEAT_REQUEST, HEARTBEAT_RESPONSE, HELLO_RESPONSE, CLIENT_GOODBYE_REQUEST, CLIENT_GOODBYE_RESPONSE, SERVER_GOODBYE_REQUEST, SERVER_GOODBYE_RESPONSE, LISTEN_REQUEST, LISTEN_RESPONSE, UNSUBSCRIBE_REQUEST, SUBSCRIBE_RESPONSE, UNSUBSCRIBE_RESPONSE, ASYNC_MESSAGE_TO_SERVER_ACK, BROADCAST_MESSAGE_TO_SERVER_ACK | 无           |
| HELLO_REQUEST                                                | UserAgent    |
| SUBSCRIBE_REQUEST                                            | Subscription |
| REQUEST_TO_SERVER, REQUEST_TO_CLIENT, RESPONSE_TO_SERVER, RESPONSE_TO_CLIENT, ASYNC_MESSAGE_TO_SERVER, ASYNC_MESSAGE_TO_CLIENT, BROADCAST_MESSAGE_TO_SERVER, BROADCAST_MESSAGE_TO_CLIENT, ASYNC_MESSAGE_TO_CLIENT_ACK, BROADCAST_MESSAGE_TO_CLIENT_ACK, RESPONSE_TO_CLIENT_ACK, REQUEST_TO_CLIENT_ACK | OpenMessage  |
| REDIRECT_TO_CLIENT                                           | RedirectInfo |

#### 3. Client 与 EventMesh Runtime(Server) 交互场景详解

```java
public enum Command {

    //心跳
    HEARTBEAT_REQUEST(0),                              //client 发给 server 的心跳包
    HEARTBEAT_RESPONSE(1),                             //server 回复 client 的心跳包

    //握手
    HELLO_REQUEST(2),                                  //client 发给 server 的握手请求
    HELLO_RESPONSE(3),                                 //server 回复 client 的握手请求

    //断连
    CLIENT_GOODBYE_REQUEST(4),                         //client 主动断连时通知 server
    CLIENT_GOODBYE_RESPONSE(5),                        //server 回复 client 的主动断连通知
    SERVER_GOODBYE_REQUEST(6),                         //server 主动断连时通知 client
    SERVER_GOODBYE_RESPONSE(7),                        //client 回复 server 的主动断连通知

    //订阅管理
    SUBSCRIBE_REQUEST(8),                              //client 发给 server 的订阅请求
    SUBSCRIBE_RESPONSE(9),                             //server 回复 client 的订阅请求
    UNSUBSCRIBE_REQUEST(10),                           //client 发给 server 的取消订阅请求
    UNSUBSCRIBE_RESPONSE(11),                          //server 回复 client 的取消订阅请求

    //监听
    LISTEN_REQUEST(12),                                //client 发给 server 的启动监听请求
    LISTEN_RESPONSE(13),                               //server 回复 client 的监听请求

    //RR
    REQUEST_TO_SERVER(14),                             //client 将 RR 请求发送给 server
    REQUEST_TO_CLIENT(15),                             //server 将 RR 请求推送给 client
    REQUEST_TO_CLIENT_ACK(16),                         //client 收到 RR 请求后 ACK 给 server
    RESPONSE_TO_SERVER(17),                            //client 将 RR 回包发送给 server
    RESPONSE_TO_CLIENT(18),                            //server 将 RR 回包推送给 client
    RESPONSE_TO_CLIENT_ACK(19),                        //client 收到回包后 ACK 给 server

    //异步事件
    ASYNC_MESSAGE_TO_SERVER(20),                       //client 将异步事件发送给 server
    ASYNC_MESSAGE_TO_SERVER_ACK(21),                   //server 收到异步事件后 ACK 给 client
    ASYNC_MESSAGE_TO_CLIENT(22),                       //server 将异步事件推送给 client
    ASYNC_MESSAGE_TO_CLIENT_ACK(23),                   //client 收到异步事件后 ACK 给 server

    //广播
    BROADCAST_MESSAGE_TO_SERVER(24),                   //client 将广播消息发送给 server
    BROADCAST_MESSAGE_TO_SERVER_ACK(25),               //server 收到广播消息后 ACK 给 client
    BROADCAST_MESSAGE_TO_CLIENT(26),                   //server 将广播消息推送给 client
    BROADCAST_MESSAGE_TO_CLIENT_ACK(27),               //client 收到广播消息后 ACK 给 server

    //重定向指令
    REDIRECT_TO_CLIENT(30),                            //server 将重定向指令推动给 client
}
```

#### 4. Client 发起交互

| 场景           | Client 向 Server 发送消息命令字 | Server 回复 Client 消息的命令字    | 说明 |
| -------------- | ---------------------------- | ------------------------------- | ---- |
| 握手           | HELLO_REQUEST                | HELLO_RESPONSE                  |      |
| 心跳           | HEARTBEAT_REQUEST            | HEARTBEAT_RESPONSE              |      |
| 订阅           | SUBSCRIBE_REQUEST            | SUBSCRIBE_RESPONSE              |      |
| 取消订阅       | UNSUBSCRIBE_REQUEST          | UNSUBSCRIBE_RESPONSE            |      |
| 开始监听消息   | LISTEN_REQUEST               | LISTEN_RESPONSE                 |      |
| 发送 RR 请求     | REQUEST_TO_SERVER            | RESPONSE_TO_CLIENT              |      |
| 发送 RR 回包     | RESPONSE_TO_SERVER           | 无                              |      |
| 发送异步事件   | ASYNC_MESSAGE_TO_SERVER      | ASYNC_MESSAGE_TO_SERVER_ACK     |      |
| 发送广播事件   | BROADCAST_MESSAGE_TO_SERVER  | BROADCAST_MESSAGE_TO_SERVER_ACK |      |
| 客户端主动断连 | CLIENT_GOODBYE_REQUEST       | CLIENT_GOODBYE_RESPONSE         |      |

#### 5. Server 发起交互

| 场景               | Server 向 Client 发送消息命令字 | Client 回复 Server 消息命令字      | 说明 |
| ------------------ | ---------------------------- | ------------------------------- | ---- |
| 客户端接收 RR 请求   | REQUEST_TO_CLIENT            | REQUEST_TO_CLIENT_ACK           |      |
| 客户端接收 RR 回包   | RESPONSE_TO_CLIENT           | RESPONSE_TO_CLIENT_ACK          |      |
| 客户端接收异步事件 | ASYNC_MESSAGE_TO_CLIENT      | ASYNC_MESSAGE_TO_CLIENT_ACK     |      |
| 客户端接收广播事件 | BROADCAST_MESSAGE_TO_CLIENT  | BROADCAST_MESSAGE_TO_CLIENT_ACK |      |
| 服务端主动断连     | SERVER_GOODBYE_REQUEST       | 无                              |      |
| 服务端进行重定向   | REDIRECT_TO_CLIENT           | 无                              |      |
|                    |                              |                                 |      |

#### 6. 消息类型

+ 发送 RR 消息

![rr-msg](/images/design-document/sync-message.png)

+ 发送异步单播消息

![async-msg](/images/design-document/async-message.png)

+ 发送广播消息

![broadcast-msg](/images/design-document/broadcast-message.png)

## HTTP 协议文档

Java 类`EventMeshMessage`的`content`字段表示一个特殊的协议，因此，如果您要使用 eventmesh-sdk-java 的 http-client，则只需设计协议的`content`即可。`EventMeshMessage`组成如下：

```java
public class EventMeshMessage {

    private String bizSeqNo;

    private String uniqueId;

    private String topic;

    private String content;

    private Map<String, String> prop;

    private long createTime = System.currentTimeMillis();
}
```

#### 1. 消息发送方式与组成

**消息发送方式**：POST 方式

**消息组成**：请求头 (RequestHeader) + 请求体 (RequestBody)

+ 心跳消息

**RequestHeader**

| Key      | 说明             |
| -------- | ---------------- |
| Env      | client 所属环境   |
| Region   | client 所属区域   |
| Idc      | client 所属 IDC    |
| Dcn      | client 所在 DCN    |
| Sys      | client 所属子系统 |
| Pid      | client 进程号     |
| Ip       | client Ip        |
| Username | client 用户名    |
| Passwd   | client 密码      |
| Version  | 协议版本         |
| Language | 语言描述         |
| Code     | 请求码           |

**RequestBody**

| Key               | 说明                           |
| ----------------- | ------------------------------ |
| clientType        | 客户端类型                     |
| heartbeatEntities | 心跳实体，包含 topic、url 等信息 |

+ 订阅消息：

**RequestHeader**

与心跳消息一致

**RequestBody**

| Key   | 说明              |
| ----- | ----------------- |
| topic | 客户端订阅的 topic |
| url   | topic 对应的 url    |

+ 取消订阅消息：

**RequestHeader**

与心跳消息一致

**RequestBody**

与订阅消息一致

+ 发送异步事件：

**RequestHeader**

与心跳消息一致

**RequestBody**

| Key      | 说明                    |
| -------- | ----------------------- |
| topic    | 客户端请求的 topic       |
| content  | 客户端发送的 topic 的内容 |
| ttl      | 客户端请求超时时间      |
| bizSeqNo | 客户端请求业务流水号    |
| uniqueId | 客户端请求消息唯一标识  |

#### 2. Client 发起交互

| 场景         | Client 向 Server 发送消息请求码 | Server 回复 Client 消息的响应码            | 说明 |
| ------------ | ---------------------------- | --------------------------------------- | ---- |
| 心跳         | HEARTBEAT(203)               | SUCCESS(0)/EVENTMESH_HEARTBEAT_ERROR(19)    |      |
| 订阅         | SUBSCRIBE(206)               | SUCCESS(0)/EVENTMESH_SUBSCRIBE_ERROR(17)    |      |
| 取消订阅     | UNSUBSCRIBE(207)             | SUCCESS(0)/EVENTMESH_UNSUBSCRIBE_ERROR(18)  |      |
| 发送异步事件 | MSG_SEND_ASYNC(104)          | SUCCESS(0)/EVENTMESH_SEND_ASYNC_MSG_ERR(14) |      |

#### 3. Server 发起交互

| 场景               | Server 向 Client 发送消息请求码 | Client 回复 Server 消息响应码 | 说明                   |
| ------------------ | ---------------------------- | -------------------------- | ---------------------- |
| 客户端接收异步事件 | HTTP_PUSH_CLIENT_ASYNC(105)  | retCode                    | retCode 值为 0 时代表成功 |

## gRPC 协议文档

#### 1. protobuf

在 `eventmesh-protocol-gprc` 模块有 EventMesh gRPC 客户端的 protobuf 文件。the protobuf 文件路径是 `/src/main/proto/eventmesh-client.proto`.

用 gradle build 生成 gRPC 代码在 `/build/generated/source/proto/main`. 生成代码用于 `eventmesh-sdk-java` 模块。

#### 2. gRPC 数据模型

+ 消息

以下消息数据模型用于 `publish()`, `requestReply()` 和 `broadcast()` APIs.

```protobuf
message RequestHeader {
    string env = 1;
    string region = 2;
    string idc = 3;
    string ip = 4;
    string pid = 5;
    string sys = 6;
    string username = 7;
    string password = 8;
    string language = 9;
    string protocolType = 10;
    string protocolVersion = 11;
    string protocolDesc = 12;
}

message SimpleMessage {
   RequestHeader header = 1;
   string producerGroup = 2;
   string topic = 3;
   string content = 4;
   string ttl = 5;
   string uniqueId = 6;
   string seqNum = 7;
   string tag = 8;
   map<string, string> properties = 9;
}

message BatchMessage {
   RequestHeader header = 1;
   string producerGroup = 2;
   string topic = 3;

   message MessageItem {
      string content = 1;
      string ttl = 2;
      string uniqueId = 3;
      string seqNum = 4;
      string tag = 5;
      map<string, string> properties = 6;
   }

   repeated MessageItem messageItem = 4;
}

message Response {
   string respCode = 1;
   string respMsg = 2;
   string respTime = 3;
}
```

+ 订阅

以下订阅数据模型用于 `subscribe()` 和 `unsubscribe()` APIs.

```protobuf
message Subscription {
   RequestHeader header = 1;
   string consumerGroup = 2;

   message SubscriptionItem {
      enum SubscriptionMode {
         CLUSTERING = 0;
         BROADCASTING = 1;
      }

      enum SubscriptionType {
         ASYNC = 0;
         SYNC = 1;
      }

      string topic = 1;
      SubscriptionMode mode = 2;
      SubscriptionType type = 3;
   }

   repeated SubscriptionItem subscriptionItems = 3;
   string url = 4;
}
```

+ 心跳

以下心跳数据模型用于 `heartbeat()` API.

```protobuf
message Heartbeat {
  enum ClientType {
     PUB = 0;
     SUB = 1;
  }

  RequestHeader header = 1;
  ClientType clientType = 2;
  string producerGroup = 3;
  string consumerGroup = 4;

  message HeartbeatItem {
     string topic = 1;
     string url = 2;
  }

  repeated HeartbeatItem heartbeatItems = 5;
}
```

#### 3. gRPC 服务接口

+ 事件生产端服务 APIs

```protobuf
service PublisherService {
   # 异步事件生产
   rpc publish(SimpleMessage) returns (Response);

   # 同步事件生产
   rpc requestReply(SimpleMessage) returns (Response);

   # 批量事件生产
   rpc batchPublish(BatchMessage) returns (Response);
}
```

+ 事件消费端服务 APIs

```protobuf
service ConsumerService {
   # 所消费事件通过 HTTP Webhook 推送事件
   rpc subscribe(Subscription) returns (Response);

   # 所消费事件通过 TCP stream 推送事件
   rpc subscribeStream(Subscription) returns (stream SimpleMessage);

   rpc unsubscribe(Subscription) returns (Response);
}
```

+ 客户端心跳服务 API

```protobuf
service HeartbeatService {
   rpc heartbeat(Heartbeat) returns (Response);
}
```
