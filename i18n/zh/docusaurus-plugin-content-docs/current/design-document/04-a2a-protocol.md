---
title: A2A 协议
sidebar_position: 4
---

# EventMesh A2A（Agent-to-Agent）协议

## 概述

**EventMesh A2A（Agent-to-Agent）协议**是一个专用的高性能协议插件，用于实现自治 Agent 之间的异步通信、协作和任务协调。

从 v2.0 开始，A2A 采用了 **MCP（Model Context Protocol）** 架构，将 EventMesh 转变为一个强大的 **Agent 协作总线**。它弥合了基于 LLM 的同步工具调用（JSON-RPC 2.0）与异步事件驱动架构（EDA）之间的差距，实现了可扩展、分布式和解耦的 Agent 系统。

## 核心特性

### 1. MCP over CloudEvents

- **标准合规**：完全支持 MCP 定义的标准方法，如 `tools/call`、`resources/read` 和 `tools/list`。
- **事件驱动**：将同步 RPC 调用映射为异步请求/响应事件流，充分利用 EventMesh 的高并发处理能力。
- **传输无关**：所有 MCP 消息都封装在标准 CloudEvents 信封中，可在 EventMesh 支持的任意传输层（HTTP、TCP、gRPC、Kafka）上运行。

### 2. 双模式支持（混合架构）

A2A 协议具有独特的双模式架构，同时支持：

1. **JSON-RPC 2.0（MCP 模式）**：
   - **目标用户**：LLM、脚本（Python/JS）、LangChain 集成。
   - **优势**：极低的使用门槛。客户端发送简单的 JSON 对象，适配器自动将其封装为 CloudEvents。
2. **原生 CloudEvents（Power 模式）**：
   - **目标用户**：EventMesh 原生应用、Knative、Serverless 函数。
   - **优势**：完全控制事件元数据，支持自定义或二进制数据的透传。

`EnhancedA2AProtocolAdaptor` 会智能检测负载格式。如果存在 `jsonrpc: "2.0"`，则启用 MCP 翻译引擎；否则，将负载视为标准 CloudEvent（委托给底层 CloudEvents 适配器处理）。

### 3. 原生 Pub/Sub 语义

- **O(1) 广播**：发布者只需向 Topic 发送一次消息，EventMesh 即可高效扇出到所有订阅者。
- **时间解耦**：解决了传统 P2P Webhook 回调的可扩展性问题（消费者无需在发布时在线）。
- **背压隔离**：慢速订阅者不会阻塞发布者。

### 4. 高性能与路由

- **批处理**：原生支持 JSON-RPC Batch 请求。EventMesh 自动将其拆分为并行事件流。
- **智能路由**：从 MCP 参数中提取路由提示（`_agentId` 用于 P2P，`_topic` 用于 Pub/Sub），注入到 CloudEvents 属性中，实现零解码路由。

### 5. 流式支持

通过序列 ID（`seq` 扩展属性）为流式操作（`message/sendStream`）保持消息顺序。

### 6. Agent 发现与生命周期

- **AgentCard**：Agent 通过 AgentCard 注册自身能力，支持在线/离线状态和心跳。
- **任务管理**：完整的任务生命周期，支持 `task/get`、`task/list`、`task/cancel`、`task/subscribe` 操作及基于 TTL 的自动清理。

## 架构

### 核心组件

```
+-------------------------------------------------------------+
|                EventMesh A2A Protocol v2.0                  |
|              (MCP over CloudEvents 架构)                     |
+-------------------------------------------------------------+
|  +-------------+  +-------------+  +-------------+          |
|  | MCP/JSON-RPC|  | 原生        |  |  协议       |          |
|  |   处理器    |  | Pub/Sub     |  |  委托器     |          |
|  +-------------+  +-------------+  +-------------+          |
+-------------------------------------------------------------+
|  +-------------------------------------------------------+  |
|  |           增强 A2A 协议适配器                          |  |
|  |      (智能解析与 CloudEvent 映射)                      |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
|              EventMesh 协议基础设施                         |
|  +-------------+  +-------------+  +-------------+          |
|  | CloudEvents |  |    HTTP     |  |    gRPC     |          |
|  |   协议      |  |   协议      |  |   协议      |          |
|  +-------------+  +-------------+  +-------------+          |
+-------------------------------------------------------------+
```

### 网关运行时架构

A2A 网关提供独立的 HTTP 服务器（基于 Netty），负责编排 Agent 任务提交、响应处理和 SSE 流式推送。

| 组件 | 模块 | 职责 |
| :--- | :--- | :--- |
| `A2AGatewayServer` | runtime | Netty HTTP 服务器入口，预注册 mock agent |
| `A2AGatewayHttpHandler` | runtime | HTTP 请求路由，支持 SSE 流式响应 |
| `A2AGatewayService` | runtime | 核心编排：任务提交、响应处理、SSE 推送 |
| `TaskRegistry` | runtime | 内存任务状态机 + TTL 自动清理（5 分钟） |
| `A2APublishSubscribeService` | runtime | AgentCard 注册、发现、心跳 |
| `InMemoryA2AMessageTransport` | runtime | 内存 Pub/Sub（可替换为 EventMesh broker） |
| `A2AClient` | protocol-a2a | Java SDK，提供类型化 API |
| `EnhancedA2AProtocolAdaptor` | protocol-a2a | 智能解析与 CloudEvent 映射 |
| `A2AProtocolConstants` | protocol-a2a | 协议版本、标准操作、CE 扩展属性 |

### 异步 RPC 映射

为在事件驱动架构中支持 MCP 请求/响应模型，A2A 定义了以下映射规则：

| MCP 概念 | CloudEvent 映射 | 说明 |
| :--- | :--- | :--- |
| **动作**（`method`） | **Type**: `org.apache.eventmesh.a2a.<method>.req` <br> **Extension**: `a2amethod` | 请求事件类型 |
| **响应**（`result`） | **Type**: `org.apache.eventmesh.a2a.common.response` <br> **Extension**: `mcptype=response` | 响应事件类型 |
| **关联**（`id`） | **Extension**: `collaborationid`（响应上） <br> **ID**: 请求上保留 | 将响应关联到请求 |
| **P2P 路由**（`params._agentId`） | **Extension**: `targetagent` | 路由目标 Agent ID |
| **Pub/Sub Topic**（`params._topic`） | **Subject**: `<topic_name>` | 广播 Topic |
| **流式序列**（`params._seq`） | **Extension**: `seq` | 流式消息顺序 |

### 协议常量

`A2AProtocolConstants` 类定义了以下标准操作（协议版本 `0.3`）：

| 类别 | 操作 |
| :--- | :--- |
| **消息** | `message/send`、`message/sendStream` |
| **任务** | `task/get`、`task/list`、`task/cancel`、`task/subscribe` |
| **通知配置** | `notification/config/set`、`get`、`list`、`delete` |
| **Agent Card** | `agent/card/get`、`register`、`delete`、`list`、`update` |

## 协议消息格式

### 1. MCP 请求（P2P）

```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "get_weather",
    "_agentId": "weather-service"
  },
  "id": "req-123"
}
```

### 2. MCP 请求（Pub/Sub）

```json
{
  "jsonrpc": "2.0",
  "method": "market/update",
  "params": {
    "price": 50000,
    "_topic": "market.btc"
  }
}
```

### 3. 原生 CloudEvents 请求

```json
{
  "specversion": "1.0",
  "type": "com.example.rpc.request",
  "source": "my-app",
  "id": "evt-123",
  "data": "...",
  "protocol": "A2A",
  "targetagent": "target-agent-001"
}
```

## 使用指南

### 1. A2AClient Java SDK

```java
A2AClient client = A2AClient.builder()
    .gatewayUrl("http://localhost:10105")
    .namespace("global")
    .agentName("my-agent")
    .agentCard(card)
    .heartbeatInterval(30_000)
    .build();

client.start();

// 同步任务（返回类型化的 TaskResult）
TaskResult result = client.sendTaskSync("weather-agent", "Beijing", null);

// 异步任务（返回 taskId）
String taskId = client.sendTaskAsync("weather-agent", "Shanghai", null);

// 查询状态
TaskResult status = client.getTaskStatus(taskId);

// 取消任务
boolean cancelled = client.cancelTask(taskId);

// 列出 Agent
List<String> agents = client.listAgents();

client.shutdown();
```

### 2. EventMesh SDK（CloudEvents 模式）

```java
// 参见 eventmesh-examples/src/main/java/org/apache/eventmesh/a2a/demo/ce/CloudEventsCaller.java

CloudEvent event = CloudEventBuilder.v1()
    .withId(UUID.randomUUID().toString())
    .withSource(URI.create("ce-client"))
    .withType("com.example.rpc.request")
    .withData("application/text", "RPC Payload".getBytes())
    .withExtension("protocol", "A2A")
    .withExtension("targetagent", "target-agent-001")
    .build();

producer.publish(event);
```

### 3. 网关 REST API

A2A 网关为外部客户端和非 Java Agent 提供完整的 REST API：

```bash
# 同步任务
curl -X POST 'http://localhost:10105/a2a/tasks?mode=sync' \
  -H 'Content-Type: application/json' \
  -d '{"targetAgent":"weather-agent","message":"Beijing"}'

# 异步任务
curl -X POST 'http://localhost:10105/a2a/tasks?mode=async' \
  -H 'Content-Type: application/json' \
  -d '{"targetAgent":"weather-agent","message":"Shanghai"}'

# 查询状态
curl http://localhost:10105/a2a/tasks/{taskId}

# SSE 流
curl -N http://localhost:10105/a2a/tasks/{taskId}/stream

# 列出 Agent
curl http://localhost:10105/a2a/agents
```

#### REST API 端点

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/a2a/tasks?mode=sync` | 同步提交任务（等待结果） |
| POST | `/a2a/tasks?mode=async` | 异步提交任务（返回 taskId） |
| GET | `/a2a/tasks/{taskId}` | 获取任务状态 |
| DELETE | `/a2a/tasks/{taskId}` | 取消任务 |
| GET | `/a2a/tasks/{taskId}/wait` | 长轮询等待结果 |
| GET | `/a2a/tasks/{taskId}/stream` | SSE 流式获取任务状态更新 |
| GET | `/a2a/agents` | 列出已注册的 Agent |
| POST | `/a2a/heartbeat` | Agent 心跳 |
| GET | `/a2a/cards/list` | 列出所有 AgentCard |
| POST | `/a2a/cards/card/{org}/{unit}/{agent}` | 注册 AgentCard |

## SPI 注册

A2A 协议适配器通过 Java SPI 注册：

```
# META-INF/eventmesh/org.apache.eventmesh.protocol.api.ProtocolAdaptor
a2a=org.apache.eventmesh.protocol.a2a.EnhancedA2AProtocolAdaptor
```

运行时，`ProtocolPluginFactory` 通过 key `a2a` 加载适配器。适配器将底层传输委托给 `cloudevents` 或 `http` 适配器。

## 版本历史

- **v2.0.0**：全面拥抱 MCP（Model Context Protocol）
  - 引入 `EnhancedA2AProtocolAdaptor`，支持 JSON-RPC 2.0。
  - 实现基于 CloudEvents 的异步 RPC 模式。
  - 通过 `_topic` 参数添加原生 Pub/Sub 支持。
  - 通过 `_seq` 参数添加流式支持。

- **v2.1.0**：网关运行时架构
  - 添加 `A2AGatewayServer`（Netty HTTP）独立网关服务。
  - 实现 `TaskRegistry` 任务状态机 + TTL 自动清理（5 分钟）。
  - 添加 SSE 流式响应（`GET /a2a/tasks/{taskId}/stream`）。
  - `A2AClient` SDK 返回类型化对象（`TaskResult`、`List<String>`）。
  - AgentCard 注册、发现和心跳管理。

## 模块结构

| 模块 | 路径 | 说明 |
| :--- | :--- | :--- |
| 协议插件 | `eventmesh-protocol-plugin/eventmesh-protocol-a2a` | A2A 协议适配器、JSON-RPC 模型、MCP 方法 |
| 运行时网关 | `eventmesh-runtime/src/main/java/.../a2a/` | 网关服务器、服务、任务注册表、传输层 |
| 示例 | `eventmesh-examples/src/main/java/.../a2a/demo/` | MCP 调用方/提供方、CloudEvents 调用方/提供方、网关示例 |

## 参考

- [A2A 协议设计文档](https://github.com/apache/eventmesh/tree/master/docs/a2a-protocol)（源码）
- [MCP 规范](https://modelcontextprotocol.io/)
- [CloudEvents 规范](https://cloudevents.io/)
