# ChatGPT

## ChatGPT Source Connector

### 配置

在使用 ChatGPT source connector 之前，你需要配置服务端。
- 请在 `/resource/server-config.yml` 中将 `sourceEnable` 配置为 `true` 以启用 source 功能。
- 请在 `/resource/source-config.yml` 中配置 source connector：
  - `connectorConfig`
    - `connectorName`，connector 的名称。
    - `path`，API 的路径。
    - `port`，API 的端口。
    - `idleTimeout`，TCP 空闲连接超时时间（秒）。默认为 0，表示不超时。
    - `proxyEnable`，openai 请求的代理开关，默认为 false。
    - `parsePromptFileName`，用户使用解析请求时所需的解析提示词模板，默认为 resource 文件夹中的 "prompt" 文件。
  - `openaiConfig`
    - （必填）`token`，openai 的 token。
    - `model`，openai 的模型。
    - `timeout`，openai 连接超时时间（秒）。默认为 0，表示不超时。
    - `temperature`，https://platform.openai.com/docs/api-reference/chat/create `temperature`。
    - `maxTokens`，https://platform.openai.com/docs/api-reference/chat/create `max_tokens`。
    - `frequencyPenalty`，https://platform.openai.com/docs/api-reference/chat/create `presence_penalty`。
    - `user`，https://platform.openai.com/docs/api-reference/chat/create `user`。
    - `stop`，https://platform.openai.com/docs/api-reference/chat/create `stop`。
    - `logitBias`，https://platform.openai.com/docs/api-reference/chat/create `logit_bias`。
  - `openaiProxyConfig`，如果 `connectorConfig.proxyEnable` 为 true，则此配置为必填。
    - `host`，openai 代理的主机。
    - `port`，openai 代理的端口。

### 启动

1. 启动 EventMesh Runtime。
2. 启动 eventmesh-connector-chatgpt。

启动完成后，ChatGPT source connector 将作为 HTTP 服务器运行。

### 发送消息

你可以通过 HTTP 向 source connector 发送消息。

```yaml
connectorConfig:
  connectorName: chatgptSource
  path: /chatgpt
  port: 3756
  idleTimeout: 0
  proxyEnable: false
  parsePromptFileName: prompt
openaiConfig:
  token:
  model: gpt-3.5-turbo
  timeout: 0
  temperature: 1
  maxTokens:
  frequencyPenalty: 0
  presencePenalty: 0
  user: eventMesh
  stop: []
  logitBias: {}

openaiProxyConfig:
  host: 127.0.0.1
  port: 7890
```

上面的示例在 `source-config.yml` 中配置了 URL `http://localhost:3756/chatgpt`。

你可以使用 `CHAT` 或 `PARSE` 请求类型发送消息，默认为 `CHAT`。

#### CHAT

"CHAT" 请求类型是与 ChatGPT 进行对话。

- 构建请求体
  - `requestType`，默认为 `CHAT`。
  - `type`，默认为 `cloudevents`。
  - `source`，默认为 `/`。
  - `subject`，默认为 `chatGPT`。
  - `datacontenttype`，默认为 `text/plain`。
  - （必填）`text`，你想与 ChatGPT 聊天的内容。

例如：
```shell
curl --location --request POST 'http://localhost:3756/chatgpt' \
--data-raw '{
    "requestType": "CHAR",
    "type": "com.example.someevent",
    "source": "/mycontext",
    "subject":"test_topic",
    "datacontenttype":"text/plain",
    "text": "can you tell me a story."
}'
```

#### PARSE

"PARSE" 请求类型是输出解析，connector 将从 ChatGPT 获取解析结果。
- 构建请求体
  - （必填）`requestType`，值必须为 `PARSE`。
  - `type`，默认为 `cloudevents`。
  - `source`，默认为 `/`。
  - `subject`，默认为 `chatGPT`。
  - `datacontenttype`，默认为 `application/json`。
  - （必填）`text`，非结构化数据。例如一篇文章或一段描述。
  - （必填）`fields`，字段信息，ChatGPT 根据字段信息从文本中提取信息。

例如：
```shell
curl --location --request POST 'http://localhost:3756/chatgpt' \
--data-raw '{
    "requestType": "PARSE",
    "type": "com.example.someevent",
    "source": "/mycontext",
    "subject":"test_topic",
    "datacontenttype":"application/json",
    "text": "This leaf blower is pretty amazing.  It has four settings: candle blower, gentle breeze, windy city, and tornado. It arrived in two days, just in time for my wife's anniversary present. I think my wife liked it so much she was speechless. So far I've been the only one using it, and I've been using it every other morning to clear the leaves on our lawn. It's slightly more expensive than the other leaf blowers out there, but I think it's worth it for the extra features.",
    "fields": "gift:Was the item purchased as a gift for someone else? Answer True if yes, False if not or unknown;delivery_days:How many days did it take for the product to arrive? If this information is not found, output -1;price_value:Extract any sentences about the value or price, and output them as a comma separated Python list"
}'
```
如果 `datacontenttype` 为 `application/json`，ChatGPT 结果：

```json
{
  "gift": false,
  "delivery_days": 2,
  "price_value": ["It's slightly more expensive than the other leaf blowers out there, but I think it's worth it for the extra features."]
}
```
如果 `datacontenttype` 为 `application/xml`，xml 的根节点固定为 `<root></root>`，ChatGPT 结果：

```xml
<data>
  <gift>False</gift>
  <delivery_days>2</delivery_days>
  <price_value>["It's slightly more expensive than the other leaf blowers out there"]</price_value>
</data>
```
