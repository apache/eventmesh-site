# HTTP

## HTTP Source Connector

### Configuration

Before using HTTP source connector, you need to configure the server.

- Please configure `sourceEnable` to `true` in `/resource/server-config.yml` to enable source functionality.
- Please configure the source connector in `/resource/source-config.yml`, only the configuration under `connectorConfig`
  is described here:
    - `connectorName`, name of the connector.
    - (required) `path`, path of the API.
    - (required) `port`, port of the API.
    - `idleTimeout`, idle TCP connection timeout in seconds. A connection will timeout and be closed if no data is received nor sent within the `idleTimeout` seconds. The default is 0, which means don't timeout.

### Startup

1. start EventMesh Runtime
2. start eventmesh-connector-http

When finished, the HTTP source connector will act as an HTTP server.

### Sending messages

You can send messages to the source connector via HTTP.

```yaml
connectorConfig:
  connectorName: httpSource
  path: /test
  port: 3755
  idleTimeout: 5
```

The above example configures a URL `http://localhost:3755/test` in `source-config.yml`.

You can send messages in `binary` mode or `structured` mode as specified
in [cloudevent-spec](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/bindings/http-protocol-binding.md).

Here are two examples:

1. Sending a message in `binary` mode.

```shell
curl --location --request POST 'http://localhost:3755/test' \
--header 'ce-id: 1' \
--header 'ce-specversion: 1.0' \
--header 'ce-type: com.example.someevent' \
--header 'ce-source: /mycontext' \
--header 'ce-subject: test_topic' \
--header 'Content-Type: text/plain' \
--data-raw 'testdata'
```

2. Sending a message in `structured` mode.

```shell
curl --location --request POST 'http://localhost:3755/test' \
--header 'Content-Type: application/cloudevents+json' \
--data-raw '{
    "id": "1",
    "specversion": "1.0",
    "type": "com.example.someevent",
    "source": "/mycontext",
    "subject":"test_topic",
    "datacontenttype":"text/plain",
    "data": "testdata"
}'
```

## HTTP Sink Connector

The HTTP sink connector has two modes: common and webhook.

First of all, either mode has the basic function of sinkConnector, which is to send a message to the target HTTP server.
When the response is received from the HTTP server, the common mode only cares about the status code of the response to
determine whether it was sent successfully, while the webook mode not only cares about whether it was sent successfully
or not, but also stores the data of the response (called the callback data) and provides callback data exposure services
to the outside world.

The specific differences between the two are as follows:

- Default Idle TCP Connection Timeout

  The default value is 5000ms for common mode and 15000ms for webhook mode.

- Processing of response results

  The common mode only cares about the status code of the response, while the webhook mode will also store the callback
  data and provide callback data exposure services to the public.

### Configuration

Before using the HTTP sink connector, you need to configure the sink.

- Please configure `sinkEnable` to true in `/resource/server-config.yml` to enable sink function.

- Please configure the sink connector in `/resource/sink-config.yml`, only the configuration under `connectorConfig` is
  described here:

  The simplest configuration of the common mode:

  ```yaml
  connectorConfig:
    connectorName: httpSink
    urls:
     - http://127.0.0.1:8987/test
  ```

  The simplest configuration for webhook mode:

  ```yaml
  connectorConfig:
    connectorName: httpSink
    urls:
     - http://127.0.0.1:8987/test
    webhookConfig:
      activate: true
      port: 8988
  ```

All configurations for the HTTP sink connector are listed below:

| Field                           | Type    | Required or not    | Clarification                                              | Remark                                                                                                                                                                                                                                                                     |
|---------------------------------|---------|--------------------|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| connectorName                   | String  | yes                | Connector Name                                             |                                                                                                                                                                                                                                                                            |
| urls                            | List    | yes                | List of URLs to receive messages                           | The default port is 80 for HTTP protocol and 443 for HTTPS protocol<br />The legal URL format are:<br />http://127.0.0.1:8987/test<br />http://127.0.0.1/test<br />https://example.com:4943/test<br/>https://example.com/test<br/>                                         |
| keepAlive                       | Boolean | no                 | Whether to use HTTP persistent connection                  | Default: true                                                                                                                                                                                                                                                              |
| keepAliveTimeout                | Integer | no                 | HTTP persistent connection timeout                         | Unit: ms,default: 60000                                                                                                                                                                                                                                                    |
| connectionTimeout               | Integer | no                 | TCP connection timeout                                     | Unit: ms,default: 5000                                                                                                                                                                                                                                                     |
| idleTimeout                     | Integer | no                 | TCP idle timeout                                           | Unit: ms,default: 5000(common), 15000(webhook)                                                                                                                                                                                                                             |
| maxConnectionPoolSize           | Integer | no                 | Maximum number of HTTP connections for the client          | Default: 5                                                                                                                                                                                                                                                                 |
| retryConfig                     | Object  |                    | Configuration of the retry mechanism                       |                                                                                                                                                                                                                                                                            |
| retryConfig.maxRetries          | Integer | no                 | Maximum number of retries                                  | Does not include first attempt, default: 2                                                                                                                                                                                                                                 |
| retryConfig.interval            | Integer | no                 | Retry interval                                             | Unit: ms, default: 2000                                                                                                                                                                                                                                                    |
| retryConfig.retryOnNonSuccess   | Boolean | no                 | Whether to retry requests that receive a non-2xx response  | Default: false, retries only network level error requests                                                                                                                                                                                                                  |
| webhookConfig                   | Object  |                    | Configuration of Webhook Mode                              |                                                                                                                                                                                                                                                                            |
| webhookConfig.activate          | Boolean | no                 | Whether to enable Webhook mode                             | Default: false                                                                                                                                                                                                                                                             |
| webhookConfig.exportPath        | String  | no                 | Callback data exposure path                                | Default: /export<br/>The request method is fixed to GET<br/>Request Parameters:<br />type：peek (default value, get data)/poll (get and delete data)<br />pageNum: must be greater than 0 when type is peek, invalid when type is poll<br/>pageSize: must be greater than 0 |
| webhookConfig.port              | Integer | Yes (when enabled) | Callback data exposure port                                |                                                                                                                                                                                                                                                                            |
| webhookConfig.serverIdleTimeout | Integer | no                 | TCP idle timeout length for servers exposing callback data | Unit: ms, default: 5000                                                                                                                                                                                                                                                    |
| webhookConfig.maxStorageSize    | Integer | no                 | Store the maximum value of the callback data queue         | Default: 5000                                                                                                                                                                                                                                                              |

### Startup

1. start EventMesh Runtime
2. start eventmesh-connector-http

Once that's done, send a message to the EventMesh, and then your message will happen to the target HTTP server via an
HTTP request. If webhook mode is enabled, an HTTP server will also be opened at the same time to provide callback data
exposure to the outside world.

### Data Format

The data format of the message sent by the HTTP sink connector is as follows:

- type: consists of connectorName, protocol, and mode.
- time: the time the request was sent
- uuid: request unique identifier, one-to-one with the uuid of the callback data structure in webhook mode
- eventId: event ID, composed of type and offset
- data：actual data to be sent

```json
{
  "type": "httpSink.http.webhook",
  "time": "2024-05-09T22:27:02.028",
  "uuid": "951d88ee-2503-4df3-a1dd-6e4a6a1c3d3b",
  "eventId": "httpSink.http.webhook-0",
  "data": ${ConnectRecord}
}
```

When webhook mode is enabled, an HTTP server is also enabled to provide callback data exposure to the outside world. The
format of the callback data is as follows:

- pageNum: current page number
- pageSize: size per page
- pageItems: the callback data array obtained
- The meaning of the fields of pageItem is as follows:
    - data: callback data returned from the callback server
    - metadata: metadata, the fields have the following meanings:
        - url: the URL to get the callback data
        - code: the status code of the response to the request callback data, or -1 if a network level error occurred (
          response could not be received).
        - message: response information from the request callback data, or exception information if a network level
          error occurred (response could not be received).
        - uuid: a unique request identifier for the callback data, corresponding to the uuid carried in the message sent
          above.
        - receivedTime: response time for requesting callback data
        - retryNum: number of retries
        - retriedBy: record the uuid of the request being retried if a retry is sent, otherwise null

```json
{
  "pageNum": 1,
  "pageSize": 10,
  "pageItems": [
    {
      "data": "callbackData",
      "metadata": {
        "url": "http://127.0.0.1:8987/test",
        "code": 200,
        "message": "OK",
        "receivedTime": "2024-05-09 22:53:21.556",
        "uuid": "fba29061-1a1f-4482-9c83-43ba4e0bcf3f",
        "retriedBy": null,
        "retryNum": 0
      }
    }
  ]
}
```

