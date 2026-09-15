# Pulsar

`eventmesh-connector-pulsar` is a source and sink connector. The source consumes messages from a Pulsar topic and publishes them to EventMesh. The sink takes events from EventMesh and produces them to Pulsar.

## PulsarSinkConnector: From EventMesh to Pulsar

1. Start Pulsar and EventMesh Runtime.
2. Enable sinkConnector (`sinkEnable: true` in `server-config.yml`) and check `sink-config.yml`.
3. Start `PulsarConnectServer`. It subscribes to `pubSubConfig.subject` in EventMesh Runtime and publishes each record to `connectorConfig.topic` in Pulsar.
4. Send a message to EventMesh on that subject; it appears on the Pulsar topic.

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

## PulsarSourceConnector: From Pulsar to EventMesh

1. Start Pulsar and EventMesh Runtime.
2. Enable sourceConnector (`sourceEnable: true` in `server-config.yml`) and check `source-config.yml`.
3. Start `PulsarConnectServer`. It subscribes to Pulsar `connectorConfig.topic` with subscription name `pubSubConfig.group` and sends each message to `pubSubConfig.subject` in EventMesh Runtime.
4. Send a message to that Pulsar topic; it appears in EventMesh.

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

### Configuration

`pubSubConfig` is the EventMesh TCP client used to publish into or subscribe from Runtime. `connectorConfig` fields:

- `connectorName`: name of the connector.
- `serviceUrl`: Pulsar broker address passed to `PulsarClient.builder().serviceUrl()`.
- `topic`: Pulsar topic to produce (sink) or consume (source).

The source subscription name is `pubSubConfig.group`.

### Precautions

- Bundled `server-config.yml` sets `sourceEnable: true` and `sinkEnable: true`. Turn off the side you are not running.
- Create the Pulsar topic first, or enable auto-topic creation on the broker.
- `serviceUrl` is the Pulsar binary protocol address (commonly `pulsar://host:6650`). The sample uses `127.0.0.1:6650`.
- This connector does not set token or TLS auth. The broker must accept an unauthenticated client.
- Source `poll` uses `consumer.batchReceive()` and acknowledges the batch after building records.
- Sink `put` sends each record as a Pulsar message. CloudEvent extensions become message properties.

### Official references

- [Pulsar Java client](https://pulsar.apache.org/docs/client-libraries-java/)
- [Messaging concepts](https://pulsar.apache.org/docs/concepts-messaging/)
