# Prometheus

`eventmesh-connector-prometheus` is a source connector. It runs a PromQL range query against Prometheus on a sliding time window and publishes each series result to EventMesh. This module has no sink (`sinkEnable` stays false).

## PrometheusSourceConnector: From Prometheus to EventMesh

1. Start Prometheus and EventMesh Runtime.
2. Enable sourceConnector (`sourceEnable: true` in `server-config.yml`) and check `source-config.yml`.
3. Start `PrometheusConnectServer`. It queries Prometheus and sends each result to `pubSubConfig.subject` in EventMesh Runtime.

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

### Configuration

`pubSubConfig` is the EventMesh TCP client used to publish into Runtime. `connectorConfig` fields:

- `connectorName`: name of the connector.
- `connectorId`: id of this connector instance.
- `address`: Prometheus base URL (`scheme://host:port`).
- `api`: HTTP path, typically `/api/v1/query_range`.
- `initTime`: Unix timestamp in seconds for the first window start. If omitted, the connector uses the current time.
- `query`: PromQL expression (for example `up`).
- `interval`: window size and poll period, in seconds. After a successful commit the next window starts at `start + interval`.
- `step`: Prometheus range-query resolution (for example `1s`, `15s`).

### Precautions

- Source only. The bundled `server-config.yml` sets `sourceEnable: true` and `sinkEnable: false`. There is no Prometheus sink in this connector.
- Each poll POSTs JSON `{query, start, end, step}` to `{address}/{api}`. `end` is `start + interval`. Times are Unix seconds.
- If the next window would end in the future, poll sleeps for `interval` seconds.
- HTTP calls retry up to 3 times with a 1 second wait. Failed polls log an error and return no records.
- Prometheus must be reachable from the connector process. The sample `address` uses HTTPS on localhost.

### Official references

- [HTTP API: range queries](https://prometheus.io/docs/prometheus/latest/querying/api/#range-queries)
- [Querying Prometheus](https://prometheus.io/docs/prometheus/latest/querying/basics/)
