# ChatGPT

## ChatGPT Source Connector

### Configuration

Before using ChatGPT source connector, you need to configure the server.
- Please configure `sourceEnable` to `true` in `/resource/server-config.yml` to enable source functionality.
- Please configure the source connector in `/resource/source-config.yml`:
  - `connectorConfig`
    - `connectorName`, name of the connector.
    - `path`, path of the API.
    - `port`, port of the API.
    - `idleTimeout`, idle TCP connection timeout in seconds. The default is 0, which means don't timeout.
    - `proxyEnable`, Proxy switch for openai request, default false.
    - `parsePromptFileName`, parse prompt template required by the user to use the parse request, default to the "prompt" file in the resource folder.
  - `openaiConfig`
    - (required) `token`, token of the openai
    - `model`, model of the openai
    - `timeout`, openai connection timeout in seconds. The default is 0, which means don't timeout.
    - `temperature`, https://platform.openai.com/docs/api-reference/chat/create `temperature`.
    - `maxTokens`, https://platform.openai.com/docs/api-reference/chat/create `max_tokens`.
    - `frequencyPenalty`, https://platform.openai.com/docs/api-reference/chat/create `presence_penalty`.
    - `user`,  https://platform.openai.com/docs/api-reference/chat/create `user`.
    - `stop`, https://platform.openai.com/docs/api-reference/chat/create `stop`.
    - `logitBias`, https://platform.openai.com/docs/api-reference/chat/create `logit_bias`.
  - `openaiProxyConfig`, If `connectorConfig. proxyEnable` is true, then this configuration is required
    - `host`, host of the openai proxy
    - `port`, port of the openai proxy

### Startup

1. start EventMesh Runtime
2. start eventmesh-connector-chatgpt

When finished, the ChatGPT source connector will act as an HTTP server.

### Sending messages

You can send messages to the source connector via HTTP.

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

The above example configures a URL `http://localhost:3756/chatgpt` in `source-config.yml`.

You can send messages in `CHAT` or `PARSE` request type, default `CHAT`,

#### CHAT

The request type of "CHAT" is a conversation with ChatGPT

- Construct a request body
  - `requestType`, default is `CHAT`.
  - `type`, default is `cloudevents`.
  - `source`, default is `/`.
  - `subject`, default is `chatGPT`.
  - `datacontenttype`, default is `text/plain`.
  - (required) `text`, you want to talk to ChatGPT about.

For example:
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

The request type of "PARSE" is a output parse and parse result that connector will get from ChatGPT.
- Construct a request body
  - (required)`requestType`, the value must be `PARSE`.
  - `type`, default is `cloudevents`.
  - `source`, default is `/`.
  - `subject`, default is `chatGPT`.
  - `datacontenttype`, default is `application/json`.
  - (required) `text`, unstructured data. e.g.,an article or a description.
  - (required) `fields`, field info, chatGPT according to field info Extract information from text.

For example:
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
If `datacontenttype` is `application/json`, ChatGPT result:

```json
{
  "gift": false,
  "delivery_days": 2,
  "price_value": ["It's slightly more expensive than the other leaf blowers out there, but I think it's worth it for the extra features."]
}
```
If `datacontenttype` is `application/xml`, The root node of xml is fixed as `<root></root>`, ChatGPT result:

```xml
<data>
  <gift>False</gift>
  <delivery_days>2</delivery_days>
  <price_value>["It's slightly more expensive than the other leaf blowers out there"]</price_value>
</data>
```
