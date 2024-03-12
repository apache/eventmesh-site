# Kafka

## KafkaSinkConnector：从 EventMesh 到 Kafka

1. 启动你的 EventMesh Runtime。
2. 启用 sinkConnector 并检查 `sink-config.yml`。
3. 启动你的 KafkaConnectServer，它将订阅到 EventMesh Runtime 中 `pubSubConfig.subject` 中定义的主题，并将收到的数据发布到 Kafka 中的 `connectorConfig.topic`。
4. 使用在 `pubSubConfig.subject` 中指定的 Topic，向 EventMesh 发送消息，然后你将在 Kafka 看到该消息。

```yaml
# 公共配置
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TopicTest
  idc: FT
  env: PRD
  group: kafkaSink
  appId: 5031
  userName: kafkaSinkUser
  passWord: kafkaPassWord
connectorConfig:
  connectorName: kafkaSink
  # kafka连接参数 ↓
  bootstrapServers: 127.0.0.1:9092
  topic: TopicTest
  keyConverter: org.apache.kafka.common.serialization.StringSerializer
  valueConverter: org.apache.kafka.common.serialization.StringSerializer
```

## KafkaSourceConnector：从 Kafka 到 EventMesh

1. 启动你的 EventMesh Runtime。
2. 启用 sourceConnector 并检查 `source-config.yml`。 
3. 启动你的 KafkaConnectServer，它将订阅 Kafka的 `connectorConfig.topic `，并将读取的数据发送到 EventMesh Runtime 中的 `pubSubConfig.subject`。 
4. 向 Kafka 发送一个消息，然后你将在 EventMesh 中接收到该消息

```yaml
# 公共配置
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TopicTest
  idc: FT
  env: PRD
  group: kafkaSource
  appId: 5032
  userName: kafkaSourceUser
  passWord: kafkaPassWord
connectorConfig:
  connectorName: kafkaSource
  # kafka连接参数 ↓
  bootstrapServers: 127.0.0.1:9092
  topic: TopicTest
  groupID: kafkaSource
  sessionTimeoutMS: 10000
  maxPollRecords: 1000
```