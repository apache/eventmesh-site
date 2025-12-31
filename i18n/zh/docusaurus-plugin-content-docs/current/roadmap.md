---
sidebar_position: 1
---

# EventMesh 产品路线图

下表列出了 EventMesh 的新特性和 Bug 修复情况,详情请参考 [Release Notes](https://eventmesh.apache.org/events/release-notes/v1.12.0/).

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

|                  服务和中间件                  | 源 |   汇   |
|:------------------------------------------:|:------:|:------:|
|     [RocketMQ](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-rocketmq)     |    ✅    |    ✅    |
|        [Kafka](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-kafka)        |    ✅    |    ✅    |
|       [Pulsar](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pulsar)       |    ✅    |    ✅    |
|     [RabbitMQ](./design-document/connect/rabbitmq-connector)     |    ✅    |    ✅    |
|         [HTTP](./design-document/connect/http-connector)         |    ✅    |    ✅    |
|         [JDBC](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-jdbc)         |    ⬜    |    ✅    |
|       [Spring](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-spring)       |    ✅    |    ✅    |
| [OpenFunction](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-openfunction) |    ✅    |    ✅    |
|         [文件](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-file)         |    ✅    |    ✅    |
|                      邮件                       |    ⬜    |    ⬜    |
|        [Redis](./design-document/connect/redis-connector)        |    ✅    |    ✅    |
|        [S3 存储](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-s3)        |    ⬜    |    ✅    |
|                    ClickHouse                    |    ⬜    |    ⬜    |
|      [MongoDB](./design-document/connect/mongodb-connector)      |    ✅    |    ✅    |
|   [Prometheus](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-prometheus)   |    ✅    |    ⬜    |
|      [Knative](./design-document/connect/knative-connector)      |    ✅    |    ✅    |
|      [Pravega](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pravega)      |    ✅    |    ✅    |
|         更多连接器正在计划中 ...         |   N/A   |   N/A   |

|                  平台和产品                  | 源 |   汇   |
|:------------------------------------------:|:------:|:------:|
|     [飞书/Lark](./design-document/connect/lark-connector)      |    ⬜    |    ✅    |
|     [钉钉](./design-document/connect/dingtalk-connector)     |    ⬜    |    ✅    |
|        [企业微信](./design-document/connect/wecom-connector)        |    ⬜    |    ✅    |
|       [微信](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-wechat)       |    ⬜    |    ✅    |
|                      GitHub                      |    ⬜    |    ⬜    |
|                     ChatGPT                      |    ⬜    |    ⬜    |
|        [Slack](./design-document/connect/slack-connector)        |    ⬜    |    ✅    |
|         更多连接器正在计划中 ...         |   N/A   |   N/A   |

## 事件存储实现状态

|                  服务和中间件                  | 接入 |   Topic 管理   |
|:------------------------------------------:|:------:|:------:|
|     RocketMQ     |    ✅    |    ✅    |
|     Kafka     |    ✅    |    ✅    |
|        Standalone        |    ✅    |    ✅    |
|       Pulsar       |    ✅    |    ⬜    |
|                      RabbitMQ                      |  ✅   |    ⬜    |
|                     Redis                     |    ✅    |    ⬜    |
|         支持实现更多事件存储 ...         |   N/A   |   N/A   |
