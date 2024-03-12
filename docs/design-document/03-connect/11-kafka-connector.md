# Kafka

## KafkaSinkConnector：From EventMesh to Kafka

1. Start your EventMesh Runtime.
2. Enable sinkConnector and check `sink-config.yml`.
3. Start your KafkaConnectServer, which will subscribe to the topic defined in `pubSubConfig.subject` in the EventMesh Runtime, The received data is published to `connectorConfig.topic` in Kafka.
4. Using the Topic specified in `pubSubConfig.subject`, send a message to EventMesh, which you will then see in Kafka.

```yaml
# Common configuration
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
  # kafka connection parameters ↓
  bootstrapServers: 127.0.0.1:9092
  topic: TopicTest
  keyConverter: org.apache.kafka.common.serialization.StringSerializer
  valueConverter: org.apache.kafka.common.serialization.StringSerializer
```

## KafkaSourceConnector：From Kafka to EventMesh

1. Start your EventMesh Runtime.
2. Enable sourceConnector and check `source-config.yml`.
3. Start your KafkaConnectServer, which will subscribe to Kafka's `connectorConfig.topic` and send the read data to `pubSubConfig.subject` in the EventMesh Runtime.
4. Send a message to Kafka, and you'll receive it in EventMesh.

```yaml
# Common configuration
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
  # kafka connection parameters ↓
  bootstrapServers: 127.0.0.1:9092
  topic: TopicTest
  groupID: kafkaSource
  sessionTimeoutMS: 10000
  maxPollRecords: 1000
```