---
sidebar_position: 1
---

# Development Roadmap

The development roadmap of Apache EventMesh is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the [Release Notes](https://eventmesh.apache.org/events/release-notes/v1.10.0/). The order of the features listed below doesn't correspond to their priorities.

## List of Features and Milestones

| Status                                    | Description                     | Reference |
|-------------------------------------------|---------------------------------|  --- |
| **Implemented in 1.0.0**                  | Support HTTP                    | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.0.0**                  | Support TCP                     | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.0.0**                  | Support Pub/Sub Event           | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.1.1**                  | Provide Java SDK                | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.1.1**                  | Support HTTPS                   | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.2.0**                  | Support RocketMQ as EventStore  | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.2.0**                  | Support Heartbeat               | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.3.0**                  | Integrate with OpenSchema       | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.3.0**                  | Integrate with OpenTelemetry    | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.3.0**                  | Support CloudEvents             | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.4.0**                  | Support gRPC                    | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.5.0**                  | Provide Golang SDK              | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.5.0**                  | Support Nacos Registry          | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.5.0**                  | Support Mesh Bridge             | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.5.0**                  | Support  Federal Government     | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.5.0**                  | Support Mesh Bridge             | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.6.0**                  | Integrate with Consul           | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.6.0**                  | Support Webhook                 | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.6.0**                  | Support etcd                    | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.7.0**                           | Support Knative Eventing Infrastructure | [GitHub Issue](https://github.com/apache/issues/790), [GSoC '22](https://issues.apache.org/jira/browse/COMDEV-463) |
| **Implemented in 1.7.0**                           | Support Pravega as EventStore   | [GitHub Issue](https://github.com/apache/issues/270)  |
| **Implemented in 1.7.0**                           | Support Kafka as EventStore     | [GitHub Issue](https://github.com/apache/issues/676) |
| **Implemented in 1.7.0**                           | Support Pulsar as EventStore    | [GitHub Issue](https://github.com/apache/issues/676) |
| **Implemented in 1.7.0**                           | Support CNCF Serverless Workflow| [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.7.0**                           | Support Redis                   | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.7.0**                           | Provide Rust SDK                        | [GitHub Issue](https://github.com/apache/issues/815) |
| **Implemented in 1.7.0**                           | Support Zookeeper               | [GitHub Issue](https://github.com/apache/issues/417) |
| **Implemented in 1.7.0**                           | Support RabbitMQ as EventStore               | [GitHub Issue](https://github.com/apache/issues/1553) |
| **Implemented in 1.8.0**                           | Provide Dashboard                       | [GitHub Issue](https://github.com/apache/issues/700), [GSoC '22](https://issues.apache.org/jira/browse/COMDEV-465)
| **In Progress**                           | Source/Sink Connector            | [GitHub Issue](https://github.com/apache/eventmesh/issues/3492) |
| **In Progress**                           | K8s integration                 | [GitHub Issue](https://github.com/apache/eventmesh/issues/3327)  |
| **In Progress**                           | OpenFunction integration        | [GitHub Issue](https://github.com/apache/eventmesh/issues/2040)  |
| **In Progress**                           | OpenSergo integration        | [GitHub Issue](https://github.com/apache/eventmesh/issues/2805)  |
| Planned                                   | Transaction Event               | [GitHub Issue](https://github.com/apache/issues/697) |
| Planned                                   | Provide NodeJS SDK              | [GitHub Issue](https://github.com/apache/eventmesh/) |
| Planned                                   | Provide PHP    SDK              | [GitHub Issue](https://github.com/apache/eventmesh/3) |
| Planned                                   | Event Query Language (EQL)      | [GitHub Issue](https://github.com/apache/eventmesh/) |
| Planned                                   | WebAssembly Runtime             | [GitHub Issue](https://github.com/apache/eventmesh/) |

## Connector Implementation Status

|                  Service / Middleware                  | Source |   Sink   |
|:------------------------------------------:|:------:|:------:|
|     [RocketMQ](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-rocketmq)     |    ✅    |    ✅    |
|        [Kafka](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-kafka)        |    ✅    |    ✅    |
|       [Pulsar](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pulsar)       |    ✅    |    ✅    |
|     [RabbitMQ](./design-document/connect/rabbitmq-connector)     |    ✅    |    ✅    |
|         [HTTP](./design-document/connect/http-connector)         |    ✅    |    ✅    |
|         [JDBC](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-jdbc)         |    ⬜    |    ✅    |
|       [Spring](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-spring)       |    ✅    |    ✅    |
| [OpenFunction](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-openfunction) |    ✅    |    ✅    |
|         [File](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-file)         |    ✅    |    ✅    |
|                      Email                  |    ⬜    |    ⬜    |
|        [Redis](./design-document/connect/redis-connector)        |    ✅    |    ✅    |
|        [S3 File](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-s3)        |    ⬜    |    ✅    |
|                    ClickHouse                    |    ⬜    |    ⬜    |
|      [MongoDB](./design-document/connect/mongodb-connector)      |    ✅    |    ✅    |
|   [Prometheus](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-prometheus)   |    ✅    |    ⬜    |
|      [Knative](./design-document/connect/knative-connector)      |    ✅    |    ✅    |
|      [Pravega](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pravega)      |    ✅    |    ✅    |
|         More connectors will be added...         |   N/A   |   N/A   |

|                  Platform / Product                  | Source |   Sink   |
|:------------------------------------------:|:------:|:------:|
| [Feishu/Lark](./design-document/connect/lark-connector) |    ⬜    |    ✅    |
|     [DingTalk](./design-document/connect/dingtalk-connector)     |    ⬜    |    ✅    |
|        [WeCom](./design-document/connect/wecom-connector)        |    ⬜    |    ✅    |
|       [WeChat](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-wechat)       |    ⬜    |    ✅    |
|                      GitHub                      |    ⬜    |    ⬜    |
|                     ChatGPT                      |    ⬜    |    ⬜    |
|        [Slack](./design-document/connect/slack-connector)        |    ⬜    |    ✅    |
|         More connectors will be added...         |   N/A   |   N/A   |

## Event Store Implementation Status

| Service / Middleware | Ingress | Topic Management |
|:------------------------:|:------:|:------:|
| RocketMQ | ✅ | ✅ |
| Kafka | ✅ | ✅ |
| Standalone | ✅ | ✅ |
| Pulsar | ✅ | ⬜ |
| RabbitMQ | ✅ | ⬜ |
| Redis | ✅ | ⬜ |
| Support for more Event Stores... | N/A | N/A |