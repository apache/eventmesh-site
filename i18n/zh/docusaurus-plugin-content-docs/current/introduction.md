---
sidebar_position: 0
---

# Apache EventMesh

[![CI status](https://img.shields.io/github/actions/workflow/status/apache/eventmesh/ci.yml?logo=github&style=for-the-badge)](https://github.com/apache/eventmesh/actions/workflows/ci.yml)
[![CodeCov](https://img.shields.io/codecov/c/gh/apache/eventmesh/master?logo=codecov&style=for-the-badge)](https://codecov.io/gh/apache/eventmesh)
[![License](https://img.shields.io/github/license/apache/eventmesh?style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![GitHub Release](https://img.shields.io/github/v/release/apache/eventmesh?style=for-the-badge)](https://github.com/apache/eventmesh/releases)
[![Slack Status](https://img.shields.io/badge/slack-join_chat-blue.svg?logo=slack&style=for-the-badge)](https://join.slack.com/t/the-asf/shared_invite/zt-1y375qcox-UW1898e4kZE_pqrNsrBM2g)

**Apache EventMesh** 是一个动态的云原生事件驱动架构基础设施，用于分离应用程序和后端中间件层，它支持广泛的用例，包括复杂的混合云、使用了不同技术栈的分布式架构。

## 特性

- **通信协议**：EventMesh 可以使用 TCP、HTTP 或 gRPC 与客户端通信。
- **CloudEvents**: EventMesh 支持[CloudEvents](https://cloudevents.io) 规范作为事件的格式。CloudEvents 是一种描述事件数据的公共格式的规范，用于在服务、平台和系统之间提供互操作性。
- **Schema 注册**: EventMesh 实现了 schema 注册，该 schema 注册可以接收并存储来自客户端的模式，并提供其他客户端检索模式的接口。
- **可观察性**: EventMesh 暴露了一系列 metrics，例如 HTTP 协议的平均延迟和传递消息数。这些 metrics 可以使用 Prometheus 或 OpenTelemetry 收集和分析。
- **事件工作流程编排**：EventMesh Workflow 可以接收事件，并根据工作流定义和当前工作流状态决定触发哪个命令。工作流定义可以使用 [Serverless Workflow](https://serverlessworkflow.io) DSL 编写。

## 组件

Apache EventMesh 由多个组件组成，这些组件集成了不同的中间件和消息协议，以增强应用程序运行时的功能。

- **eventmesh-runtime**：中间件，在生产者和消费者之间传输事件，支持云原生应用程序和微服务。
- **eventmesh-sdk-java**：支持 HTTP，TCP 和[gRPC](https://grpc.io/)协议的 Java SDK。
- **eventmesh-connector-plugin**：插件集合，连接中间件，例如[Apache Kafka](https://kafka.apache.org/)，[Apache RocketMQ](https://rocketmq.apache.org/)，[Apache Pulsar](https://pulsar.apache.org/)和[Redis](https://redis.io/)。
- **eventmesh-registry-plugin**：插件集合，集成服务注册表，例如[Nacos](https://nacos.io/)和[etcd](https://etcd.io/)。
- **eventmesh-security-plugin**：插件集合，实现安全机制，例如 ACL（访问控制列表），身份验证和授权。
- **eventmesh-protocol-plugin**：插件集合，实现消息协议，例如[CloudEvents](https://cloudevents.io/)和[MQTT](https://mqtt.org/)。
- **eventmesh-admin**：控制面板，管理客户端，主题和订阅。
