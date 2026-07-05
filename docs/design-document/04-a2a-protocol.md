---
title: A2A Protocol
sidebar_position: 4
---

# EventMesh A2A (Agent-to-Agent) Protocol

## Overview

The **EventMesh A2A (Agent-to-Agent) Protocol** is a specialized, high-performance protocol plugin that enables asynchronous communication, collaboration, and task coordination between autonomous agents.

Starting from v2.0, A2A adopts the **MCP (Model Context Protocol)** architecture, transforming EventMesh into a robust **Agent Collaboration Bus**. It bridges the gap between synchronous LLM-based tool calls (JSON-RPC 2.0) and asynchronous Event-Driven Architectures (EDA), enabling scalable, distributed, and decoupled agent systems.

## Core Features

### 1. MCP over CloudEvents

- **Standard Compliance**: Fully supports standard MCP methods such as `tools/call`, `resources/read`, and `tools/list`.
- **Event-Driven**: Maps synchronous RPC calls to asynchronous Request/Response event streams, leveraging EventMesh's high-concurrency processing capabilities.
- **Transport Agnostic**: All MCP messages are encapsulated within standard CloudEvents envelopes, running over any transport layer supported by EventMesh (HTTP, TCP, gRPC, Kafka).

### 2. Dual-Mode Support (Hybrid Architecture)

A2A Protocol features a unique Dual-Mode architecture that simultaneously supports:

1. **JSON-RPC 2.0 (MCP Mode)**:
   - **Target**: LLMs, scripts (Python/JS), LangChain integration.
   - **Benefit**: Extremely low barrier to entry. Clients send simple JSON objects; the adaptor automatically wraps them in CloudEvents.
2. **Native CloudEvents (Power Mode)**:
   - **Target**: EventMesh native apps, Knative, serverless functions.
   - **Benefit**: Full control over event metadata. Allows pass-through of custom or binary data.

The `EnhancedA2AProtocolAdaptor` intelligently detects the payload format. If `jsonrpc: "2.0"` is present, it engages the MCP translation engine; otherwise, it treats the payload as a standard CloudEvent (delegating to the underlying CloudEvents adaptor).

### 3. Native Pub/Sub Semantics

- **O(1) Broadcast**: Publishers send messages once to a topic, and EventMesh efficiently fans out to all subscribers.
- **Temporal Decoupling**: Solves the scalability issues of traditional P2P webhook callbacks (consumers need not be online at publish time).
- **Backpressure Isolation**: A slow subscriber does not block the publisher.

### 4. High Performance and Routing

- **Batch Processing**: Natively supports JSON-RPC Batch requests. EventMesh automatically splits them into parallel event streams.
- **Intelligent Routing**: Extracts routing hints (`_agentId` for P2P, `_topic` for Pub/Sub) from MCP parameters and injects them into CloudEvents attributes for zero-decoding routing.

### 5. Streaming Support

Preserves message order for streaming operations (`message/sendStream`) using sequence IDs (`seq` extension attribute).

### 6. Agent Discovery and Lifecycle

- **AgentCard**: Agents register their capabilities via AgentCard, supporting online/offline status and heartbeat.
- **Task Management**: Full task lifecycle with `task/get`, `task/list`, `task/cancel`, `task/subscribe` operations and TTL-based auto-cleanup.

## Architecture

### Core Components

```
+-------------------------------------------------------------+
|                EventMesh A2A Protocol v2.0                  |
|              (MCP over CloudEvents Architecture)            |
+-------------------------------------------------------------+
|  +-------------+  +-------------+  +-------------+          |
|  | MCP/JSON-RPC|  | Native      |  |  Protocol   |          |
|  |   Handler   |  | Pub/Sub     |  |  Delegator  |          |
|  +-------------+  +-------------+  +-------------+          |
+-------------------------------------------------------------+
|  +-------------------------------------------------------+  |
|  |           Enhanced A2A Protocol Adaptor               |  |
|  |      (Intelligent Parsing & CloudEvent Mapping)       |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
|              EventMesh Protocol Infrastructure             |
|  +-------------+  +-------------+  +-------------+          |
|  | CloudEvents |  |    HTTP     |  |    gRPC     |          |
|  |  Protocol   |  |  Protocol   |  |  Protocol   |          |
|  +-------------+  +-------------+  +-------------+          |
+-------------------------------------------------------------+
```

### Gateway Runtime Architecture

The A2A Gateway provides a standalone HTTP server (Netty-based) that orchestrates agent task submission, response handling, and SSE streaming.

| Component | Module | Responsibility |
| :--- | :--- | :--- |
| `A2AGatewayServer` | runtime | Netty HTTP server entry point, pre-registers mock agents |
| `A2AGatewayHttpHandler` | runtime | HTTP request router, supports SSE streaming |
| `A2AGatewayService` | runtime | Core orchestration: task submission, response handling, SSE push |
| `TaskRegistry` | runtime | In-memory task state machine + TTL auto-cleanup (5 min) |
| `A2APublishSubscribeService` | runtime | AgentCard registration, discovery, heartbeat |
| `InMemoryA2AMessageTransport` | runtime | In-memory pub/sub (replaceable by EventMesh broker) |
| `A2AClient` | protocol-a2a | Java SDK with typed API |
| `EnhancedA2AProtocolAdaptor` | protocol-a2a | Intelligent parsing and CloudEvent mapping |
| `A2AProtocolConstants` | protocol-a2a | Protocol version, standard operations, CE extensions |

### Asynchronous RPC Mapping

To support the MCP Request/Response model within an event-driven architecture, A2A defines the following mapping rules:

| MCP Concept | CloudEvent Mapping | Description |
| :--- | :--- | :--- |
| **Action** (`method`) | **Type**: `org.apache.eventmesh.a2a.<method>.req` <br> **Extension**: `a2amethod` | Request event type. |
| **Response** (`result`) | **Type**: `org.apache.eventmesh.a2a.common.response` <br> **Extension**: `mcptype=response` | Response event type. |
| **Correlation** (`id`) | **Extension**: `collaborationid` (on Response) <br> **ID**: Preserved on Request | Links Response to Request. |
| **P2P Routing** (`params._agentId`) | **Extension**: `targetagent` | Routing target Agent ID. |
| **Pub/Sub Topic** (`params._topic`) | **Subject**: `<topic_name>` | Broadcast Topic. |
| **Streaming Seq** (`params._seq`) | **Extension**: `seq` | Sequence order for streaming. |

### Protocol Constants

The `A2AProtocolConstants` class defines the following standard operations (protocol version `0.3`):

| Category | Operations |
| :--- | :--- |
| **Message** | `message/send`, `message/sendStream` |
| **Task** | `task/get`, `task/list`, `task/cancel`, `task/subscribe` |
| **Notification Config** | `notification/config/set`, `get`, `list`, `delete` |
| **Agent Card** | `agent/card/get`, `register`, `delete`, `list`, `update` |

## Protocol Message Format

### 1. MCP Request (P2P)

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

### 2. MCP Request (Pub/Sub)

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

### 3. Native CloudEvents Request

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

## Usage Guide

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

// Sync task (returns typed TaskResult)
TaskResult result = client.sendTaskSync("weather-agent", "Beijing", null);

// Async task (returns taskId)
String taskId = client.sendTaskAsync("weather-agent", "Shanghai", null);

// Query status
TaskResult status = client.getTaskStatus(taskId);

// Cancel
boolean cancelled = client.cancelTask(taskId);

// List agents
List<String> agents = client.listAgents();

client.shutdown();
```

### 2. EventMesh SDK (CloudEvents Mode)

```java
// See eventmesh-examples/src/main/java/org/apache/eventmesh/a2a/demo/ce/CloudEventsCaller.java

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

### 3. Gateway REST API

The A2A Gateway provides a full REST API for external clients and non-Java agents:

```bash
# Sync task
curl -X POST 'http://localhost:10105/a2a/tasks?mode=sync' \
  -H 'Content-Type: application/json' \
  -d '{"targetAgent":"weather-agent","message":"Beijing"}'

# Async task
curl -X POST 'http://localhost:10105/a2a/tasks?mode=async' \
  -H 'Content-Type: application/json' \
  -d '{"targetAgent":"weather-agent","message":"Shanghai"}'

# Query status
curl http://localhost:10105/a2a/tasks/{taskId}

# SSE stream
curl -N http://localhost:10105/a2a/tasks/{taskId}/stream

# List agents
curl http://localhost:10105/a2a/agents
```

#### REST API Endpoints

| Method | Path | Description |
|------|------|------|
| POST | `/a2a/tasks?mode=sync` | Submit task synchronously (wait for result) |
| POST | `/a2a/tasks?mode=async` | Submit task asynchronously (return taskId) |
| GET | `/a2a/tasks/{taskId}` | Get task status |
| DELETE | `/a2a/tasks/{taskId}` | Cancel task |
| GET | `/a2a/tasks/{taskId}/wait` | Long-poll wait for result |
| GET | `/a2a/tasks/{taskId}/stream` | SSE stream of task status updates |
| GET | `/a2a/agents` | List registered agents |
| POST | `/a2a/heartbeat` | Agent heartbeat |
| GET | `/a2a/cards/list` | List all AgentCards |
| POST | `/a2a/cards/card/{org}/{unit}/{agent}` | Register AgentCard |

## SPI Registration

The A2A protocol adaptor is registered via Java SPI:

```
# META-INF/eventmesh/org.apache.eventmesh.protocol.api.ProtocolAdaptor
a2a=org.apache.eventmesh.protocol.a2a.EnhancedA2AProtocolAdaptor
```

At runtime, `ProtocolPluginFactory` loads the adaptor by key `a2a`. The adaptor delegates to `cloudevents` or `http` adaptors for underlying transport.

## Version History

- **v2.0.0**: Fully embraced MCP (Model Context Protocol)
  - Introduced `EnhancedA2AProtocolAdaptor` supporting JSON-RPC 2.0.
  - Implemented async RPC over CloudEvents pattern.
  - Added native Pub/Sub support via `_topic` parameter.
  - Added streaming support via `_seq` parameter.

- **v2.1.0**: Gateway Runtime Architecture
  - Added `A2AGatewayServer` (Netty HTTP) standalone gateway service.
  - Implemented `TaskRegistry` task state machine + TTL auto-cleanup (5 min).
  - Added SSE streaming response (`GET /a2a/tasks/{taskId}/stream`).
  - `A2AClient` SDK returns typed objects (`TaskResult`, `List<String>`).
  - AgentCard registration, discovery, and heartbeat management.

## Module Structure

| Module | Path | Description |
| :--- | :--- | :--- |
| Protocol Plugin | `eventmesh-protocol-plugin/eventmesh-protocol-a2a` | A2A protocol adaptor, JSON-RPC models, MCP methods |
| Runtime Gateway | `eventmesh-runtime/src/main/java/.../a2a/` | Gateway server, service, task registry, transport |
| Examples | `eventmesh-examples/src/main/java/.../a2a/demo/` | MCP caller/provider, CloudEvents caller/provider, gateway demo |

## References

- [A2A Protocol Design Document](https://github.com/apache/eventmesh/tree/master/docs/a2a-protocol) (source code)
- [MCP Specification](https://modelcontextprotocol.io/)
- [CloudEvents Specification](https://cloudevents.io/)
