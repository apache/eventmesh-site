# Pulsar

`eventmesh-connector-pulsar` 同时提供 Source 和 Sink。Source 从 Pulsar Topic 消费消息并发布到 EventMesh；Sink 从 EventMesh 接收事件并写入 Pulsar。

## PulsarSinkConnector：从 EventMesh 到 Pulsar

1. 启动 Pulsar 和 EventMesh Runtime。
2. 启用 sinkConnector（在 `server-config.yml` 中设置 `sinkEnable: true`）并检查 `sink-config.yml`。
3. 启动 `PulsarConnectServer`。它会订阅 EventMesh Runtime 中 `pubSubConfig.subject` 指定的 Topic，并把每条记录发布到 Pulsar 的 `connectorConfig.topic`。
4. 向 EventMesh 的该 Topic 发送消息后，可在 Pulsar Topic 上看到它。

```yaml
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TopicTest
  idc: FT
  env: PRD
  group: pulsarSink
  appId: 5031
  userName: pulsarSinkUser
  passWord: pulsarPassWord
connectorConfig:
  connectorName: pulsarSink
  serviceUrl: 127.0.0.1:6650
  topic: TopicTest
```

## PulsarSourceConnector：从 Pulsar 到 EventMesh

1. 启动 Pulsar 和 EventMesh Runtime。
2. 启用 sourceConnector（在 `server-config.yml` 中设置 `sourceEnable: true`）并检查 `source-config.yml`。
3. 启动 `PulsarConnectServer`。它会以 `pubSubConfig.group` 为订阅名消费 Pulsar 的 `connectorConfig.topic`，并把每条消息发送到 EventMesh Runtime 中 `pubSubConfig.subject` 指定的 Topic。
4. 向该 Pulsar Topic 发送消息后，可在 EventMesh 中收到它。

```yaml
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TopicTest
  idc: FT
  env: PRD
  group: pulsarSource
  appId: 5032
  userName: pulsarSourceUser
  passWord: pulsarPassWord
connectorConfig:
  connectorName: pulsarSource
  serviceUrl: 127.0.0.1:6650
  topic: TopicTest
```

### 配置项

`pubSubConfig` 是与 Runtime 交互的 EventMesh TCP 客户端配置。`connectorConfig` 字段：

- `connectorName`：连接器名称。
- `serviceUrl`：传给 `PulsarClient.builder().serviceUrl()` 的 Pulsar broker 地址。
- `topic`：Sink 写入或 Source 消费的 Pulsar Topic。

Source 的订阅名是 `pubSubConfig.group`。

### 注意事项

- 自带的 `server-config.yml` 中 `sourceEnable: true`、`sinkEnable: true`。不需要的一侧请关掉。
- 请先在 Pulsar 上创建 Topic，或打开 broker 的自动创建。
- `serviceUrl` 是 Pulsar 二进制协议地址（常见形式 `pulsar://host:6650`）。示例使用 `127.0.0.1:6650`。
- 该连接器不配置 token 或 TLS 认证。broker 需要接受未认证客户端。
- Source 的 `poll` 使用 `consumer.batchReceive()`，组装记录后对整批 ack。
- Sink 的 `put` 把每条记录作为 Pulsar 消息发送。CloudEvent 扩展会写成消息 properties。

### 官方参考

- [Pulsar Java 客户端](https://pulsar.apache.org/docs/client-libraries-java/)
- [消息概念](https://pulsar.apache.org/docs/concepts-messaging/)
