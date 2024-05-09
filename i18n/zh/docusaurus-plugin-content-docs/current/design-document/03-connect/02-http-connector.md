# HTTP

## HTTP Source Connector

### 配置

使用 HTTP source connector 前，需要进行 server 的配置。
- 请在 `/resource/server-config.yml` 中配置 `sourceEnable`为`true` 以开启 source 功能。
- 请在 `/resource/source-config.yml`中配置 source connector, 在此仅说明 `connectorConfig` 下的配置：
  - `connectorName`, connector 的名称
  - （必需） `path`, 接口的路径
  - （必需） `port`, 接口的端口
  - `idleTimeout`, 空闲 TCP 连接超时时间，单位为秒。超过 `idleTimeout` 秒没有进行数据接收或发送的连接将会发生超时并被关闭。默认为 0, 不会发生超时。

### 启动

1. 启动 EventMesh Runtime
2. 启动 eventmesh-connector-http

完成后，HTTP source connector 会作为一个 HTTP 服务器对外提供服务。

### 发送消息

你可以通过 HTTP 向 source connector 发送消息。

```yaml
connectorConfig:
    connectorName: httpSource
    path: /test
    port: 3755
    idleTimeout: 5
```

上述的例子在`source-config.yml`中配置了一个 URL `http://localhost:3755/test`.

你可以按照 [cloudevent-spec](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/bindings/http-protocol-binding.md) 中的规定，以`binary`模式或者`structured`模式发送消息。

这里是两个例子：

以`binary`模式发送消息。

```shell
curl --location --request POST 'http://localhost:3755/test' \
--header 'ce-id: 1' \
--header 'ce-specversion: 1.0' \
--header 'ce-type: com.example.someevent' \
--header 'ce-source: /mycontext' \
--header 'ce-subject: test_topic' \
--header 'Content-Type: text/plain' \
--data-raw 'testdata'
```

以`structured`模式发送消息。

```shell
curl --location --request POST 'http://localhost:3755/test' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
    "id": "1",
    "specversion": "1.0",
    "type": "com.example.someevent",
    "source": "/mycontext",
    "subject":"test_topic",
    "datacontenttype":"text/plain",
    "data": "testdata"
}'
```



## HTTP Sink Connector

HTTP sink connector 拥有两种模式：common 和 webhook。

首先，无论是哪种模式，都具备sinkConnector的基本功能，即将消息发送给目标HTTP服务器。当收到HTTP服务器的响应时，common模式只关心响应的状态码，以判断是否发送成功，而webook模式除了关心是否发送成功以外，还将响应的数据（称为回调数据）进行存储，并对外提供回调数据暴露服务。两者的具体差别如下：

- 默认空闲 TCP 连接超时时间

  common模式的默认值为5000ms，webhook模式则为15000ms。

- 响应结果的处理

  common模式只关心响应的状态码，而webhook模式还会存储回调数据，并对外提供回调数据暴露服务。



### 配置

使用 HTTP sink connector 前，需要进行 sink 的配置。

- 请在 `/resource/server-config.yml` 中配置 `sinkEnable`为`true` 以开启sink 功能。

- 请在 `/resource/sink-config.yml`中配置 sink connector,在此仅说明 `connectorConfig` 下的配置：

  common模式的最简配置：

  ```yaml
  connectorConfig:
    connectorName: httpSink
    urls:
     - http://127.0.0.1:8987/test
  ```

  webhook模式的最简配置：

  ```yaml
  connectorConfig:
    connectorName: httpSink
    urls:
     - http://127.0.0.1:8987/test
    webhookConfig:
      activate: true
      port: 8988
  ```



HTTP sink connector 的所有配置如下：

| 属性                            | 类型    | 是否必填     | 说明                                | 备注                                                         |
| ------------------------------- | ------- | ------------ | ----------------------------------- | ------------------------------------------------------------ |
| connectorName                   | String  | 是           | connector名称                       |                                                              |
| urls                            | List    | 是           | 接收消息的URL列表                   | HTTP协议默认端口为80,HTTPS协议则为443<br />合法URL格式为：<br />http://127.0.0.1:8987/test<br />http://127.0.0.1/test<br />https://example.com:4943/test<br/>https://example.com/test<br/> |
| keepAlive                       | Boolean | 否           | 是否使用HTTP持久连接                | 默认：true                                                   |
| keepAliveTimeout                | Integer | 否           | HTTP持久连接超时时长                | 单位：ms，默认：60000                                        |
| connectionTimeout               | Integer | 否           | TCP连接超时时长                     | 单位：ms，默认：5000                                         |
| idleTimeout                     | Integer | 否           | TCP空闲超时时长                     | 单位：ms，默认：5000（common），15000（webhook）             |
| maxConnectionPoolSize           | Integer | 否           | 客户端的最大HTTP连接数              | 默认：5                                                      |
| retryConfig                     | Object  |              | 重试机制的相关配置                  |                                                              |
| retryConfig.maxRetries          | Integer | 否           | 最大重试次数                        | 不包含首次尝试，默认：2                                      |
| retryConfig.interval            | Integer | 否           | 重试间隔                            | 单位：ms，默认：2000                                         |
| retryConfig.retryOnNonSuccess   | Boolean | 否           | 是否重试收到非2xx响应的请求         | 默认：false，仅重试网络层面的错误请求                        |
| webhookConfig                   | Object  |              | Webhook模式的相关配置               |                                                              |
| webhookConfig.activate          | Boolean | 否           | 是否启用Webhook模式                 | 默认：false                                                  |
| webhookConfig.exportPath        | String  | 否           | 导出回调数据的路径                  | 默认：/export<br/>请求方式固定为GET<br/>请求参数有<br />type：peek(默认值，获取数据)/poll(获取并删除数据)<br />pageNum：当type为peek时，必须大于0,当type为poll时，该参数无效<br/>pageSize：必须大于0 |
| webhookConfig.port              | Integer | 是（启用时） | 导出回调数据服务器的端口            |                                                              |
| webhookConfig.serverIdleTimeout | Integer | 否           | 导出回调数据服务器的TCP空闲超时时长 | 单位：ms，默认：5000                                         |
| webhookConfig.maxStorageSize    | Integer | 否           | 存储回调数据队列的最大值            | 默认：5000                                                   |



### 启动

1. 启动 EventMesh Runtime
2. 启动 eventmesh-connector-http

完成之后，向 EventMesh 发送消息，然后你的消息就会通过HTTP请求发生给目标HTTP服务器了。如果启用webhook模式，则还会同时开启一个 HTTP 服务器对外提供回调数据暴露服务。





### 数据格式

HTTP sink connector 发送消息的数据格式如下：

- type：sinkConnector，由connectorName、协议、模式所组成
- time：发送请求的时间
- uuid：请求唯一标识，在webhook模式中和回调数据结构的uuid一一对应
- eventId：事件ID，由type和offset组成
- data：实际需要发送的数据

```json
{
    "type": "httpSink.http.webhook",
    "time": "2024-05-09T22:27:02.028",
    "uuid": "951d88ee-2503-4df3-a1dd-6e4a6a1c3d3b",
    "eventId": "httpSink.http.webhook-0",
    "data": ${ConnectRecord}
}
```



启用webhook模式时，则还会同时开启一个 HTTP 服务器对外提供回调数据暴露服务。获取的回调数据格式如下：

- pageNum：当前页数
- pageSize：每页的大小
- pageItems：获取的回调数据数组
- pageItem的字段含义如下：
  - data：从回调服务器返回的回调数据
  - metadata：元数据，字段含义如下：
    - url: 获取回调数据请求的URL
    - code：获取回调数据请求得到的响应状态码，如果发生的网络层面的错误（无法收到响应），则为-1
    - message：获取回调数据请求得到的响应信息，如果发生的网络层面的错误（无法收到响应），则为相关异常信息
    - uuid：获取回调数据请求的唯一标识，和上面发送消息时所携带的uuid一一对应
    - receivedTime：获取回调数据请求得到响应的时间
    - retryNum：重试次数
    - retriedBy：如果发送重试，则记录被重试的请求的uuid，否则为null

```json
{
    "pageNum": 1,
    "pageSize": 10,
    "pageItems": [
        {
            "data": "callbackData",
            "metadata": {
                "url": "http://127.0.0.1:8987/test",
                "code": 200,
                "message": "OK",
                "receivedTime": "2024-05-09 22:53:21.556",
                "uuid": "fba29061-1a1f-4482-9c83-43ba4e0bcf3f",
                "retriedBy": null,
                "retryNum": 0
            }
        }
    ]
}
```

