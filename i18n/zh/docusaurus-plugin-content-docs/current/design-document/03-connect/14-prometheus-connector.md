# Prometheus

`eventmesh-connector-prometheus` 是一个 Source 连接器。它按滑动时间窗口对 Prometheus 执行 PromQL 区间查询，并把每条序列结果发布到 EventMesh。该模块没有 Sink（`sinkEnable` 保持为 false）。

## PrometheusSourceConnector：从 Prometheus 到 EventMesh

1. 启动 Prometheus 和 EventMesh Runtime。
2. 启用 sourceConnector（在 `server-config.yml` 中设置 `sourceEnable: true`）并检查 `source-config.yml`。
3. 启动 `PrometheusConnectServer`。它会查询 Prometheus，并将每条结果发送到 EventMesh Runtime 中 `pubSubConfig.subject` 指定的 Topic。

```yaml
pubSubConfig:
  meshAddress: 127.0.0.1:10000
  subject: TopicTest
  idc: FT
  env: PRD
  group: prometheusSource
  appId: 5032
  userName: prometheusSourceUser
  passWord: prometheusPassWord
connectorConfig:
  connectorName: prometheusSource
  connectorId: prometheusSourceId
  address: https://127.0.0.1:9090
  api: /api/v1/query_range
  initTime: 1237507200
  query: up
  interval: 60
  step: 1s
```

### 配置项

`pubSubConfig` 是向 Runtime 发布消息的 EventMesh TCP 客户端配置。`connectorConfig` 字段：

- `connectorName`：连接器名称。
- `connectorId`：连接器实例 ID。
- `address`：Prometheus 基础 URL（`scheme://host:port`）。
- `api`：HTTP 路径，一般为 `/api/v1/query_range`。
- `initTime`：第一个窗口起始时间的 Unix 秒。若省略，连接器使用当前时间。
- `query`：PromQL 表达式（例如 `up`）。
- `interval`：窗口大小和轮询周期，单位秒。提交成功后，下一个窗口从 `start + interval` 开始。
- `step`：Prometheus 区间查询的分辨率（例如 `1s`、`15s`）。

### 注意事项

- 仅 Source。自带的 `server-config.yml` 中 `sourceEnable: true`、`sinkEnable: false`。该连接器没有 Prometheus Sink。
- 每次 poll 会把 JSON `{query, start, end, step}` POST 到 `{address}/{api}`。`end` 为 `start + interval`。时间为 Unix 秒。
- 如果下一个窗口会落到未来，poll 会休眠 `interval` 秒。
- HTTP 最多重试 3 次，间隔 1 秒。失败的 poll 会记错误日志并返回空记录。
- Prometheus 必须能被连接器进程访问。示例 `address` 使用本机 HTTPS。

### 官方参考

- [HTTP API：区间查询](https://prometheus.io/docs/prometheus/latest/querying/api/#range-queries)
- [查询 Prometheus](https://prometheus.io/docs/prometheus/latest/querying/basics/)
