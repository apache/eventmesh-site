---
sidebar_position: 1
---

# EventMesh 产品路线图

下表列出了 EventMesh 的新特性和 Bug 修复情况，详情请参考 [Release Notes](https://eventmesh.apache.org/events/release-notes/v1.10.0/)。

## List of Features and Milestones

| Status                                    | Description                     | Reference |
|-------------------------------------------|---------------------------------|  --- |
| **Implemented in 1.0.0**                  | Support HTTP                    | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.0.0**                  | Support TCP                     | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.0.0**                  | Support Pub/Sub Event           | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.1.1**                  | Provide Java SDK                | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.1.1**                  | Support HTTPS                   | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.2.0**                  | Support RocketMQ as EventStore  | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.2.0**                  | Support Heartbeat               | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.3.0**                  | Integrate with OpenSchema       | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.3.0**                  | Integrate with OpenTelemetry    | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.3.0**                  | Support CloudEvents             | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.4.0**                  | Support gRPC                    | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.5.0**                  | Provide Golang SDK              | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.5.0**                  | Support Nacos Registry          | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.5.0**                  | Support Mesh Bridge             | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.5.0**                  | Support  Federal Government     | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.6.0 (to be released)** | Integrate with Consul           | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.6.0 (to be released)** | Support Webhook                 | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **Implemented in 1.6.0 (to be released)** | Support etcd                    | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **In Progress**                           | Knative Eventing Infrastructure | [GitHub Issue](https://github.com/apache/eventmesh/issues/790), [GSoC '22](https://issues.apache.org/jira/browse/COMDEV-463) |
| **In Progress**                           | Dashboard                       | [GitHub Issue](https://github.com/apache/eventmesh/issues/700), [GSoC '22](https://issues.apache.org/jira/browse/COMDEV-465) |
| **In Progress**                           | Support Kafka as EventStore     | [GitHub Issue](https://github.com/apache/eventmesh/issues/676) |
| **In Progress**                           | Support Pulsar as EventStore    | [GitHub Issue](https://github.com/apache/eventmesh/issues/676) |
| **In Progress**                           | Support Dledger                 | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **In Progress**                           | Workflow                        | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **In Progress**                           | Support Redis                   | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **In Progress**                           | Support Mesh Bridge             | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| **In Progress**                           | Support Zookeeper               | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| Planned                                   | Provide NodeJS SDK              | [GitHub Issue](https://github.com/apache/eventmesh/issues/417) |
| Planned                                   | Transaction Event               | [GitHub Issue](https://github.com/apache/eventmesh/issues/697) |
| Planned                                   | Event Query Language (EQL)      | [GitHub Issue](https://github.com/apache/eventmesh/issues/778) |
| Planned                                   | Metadata consistency persistent | [GitHub Issue](https://github.com/apache/eventmesh/issues/817)  |
| Planned                                   | Rust SDK                        | [GitHub Issue](https://github.com/apache/eventmesh/issues/815) |
| Planned                                   | WebAssembly Runtime             | [GitHub Issue](https://github.com/apache/eventmesh/issues/576) |
| Planned                                   | Filter Chain                    | [GitHub Issue](https://github.com/apache/eventmesh/issues/664) |

## 连接器实现状态

|                  连接器名称                  | 源 |   汇   |
|:------------------------------------------:|:------:|:------:|
|     [RocketMQ](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-rocketmq)     |    ✅    |    ✅    |
|                     ChatGPT                      |    ⬜    |    ⬜    |
|                    ClickHouse                    |    ⬜    |    ⬜    |
|     [钉钉](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-dingtalk)     |    ⬜    |    ✅    |
|                      邮件                       |    ⬜    |    ⬜    |
|     [飞书/Lark](./design-document/connect/lark-connector)      |    ⬜    |    ✅    |
|         [文件](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-file)         |    ✅    |    ✅    |
|                      GitHub                      |    ⬜    |    ⬜    |
|         [HTTP](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-http)         |    ✅    |    ⬜    |
|         [Jdbc](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-jdbc)         |    ⬜    |    ✅    |
|        [Kafka](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-kafka)        |    ✅    |    ✅    |
|      [Knative](./design-document/connect/knative-connector)      |    ✅    |    ✅    |
|      [MongoDB](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-mongodb)      |    ✅    |    ✅    |
| [OpenFunction](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-openfunction) |    ✅    |    ✅    |
|      [Pravega](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pravega)      |    ✅    |    ✅    |
|   [Prometheus](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-prometheus)   |    ✅    |    ⬜    |
|       [Pulsar](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pulsar)       |    ✅    |    ✅    |
|     [RabbitMQ](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-rabbitmq)     |    ✅    |    ✅    |
|        [Redis](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-redis)        |    ✅    |    ✅    |
|        [S3 存储](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-s3)        |    ⬜    |    ✅    |
|        [Slack](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-slack)        |    ⬜    |    ✅    |
|       [Spring](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-spring)       |    ✅    |    ✅    |
|        [企业微信](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-wecom)        |    ⬜    |    ✅    |
|       [微信](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-wechat)       |    ⬜    |    ✅    |
|         更多连接器正在计划中 ...         |   N/A   |   N/A   |
