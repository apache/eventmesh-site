# WeChat

## WeChatSinkConnector: From EventMesh to WeChat

`eventmesh-connector-wechat` sinks events from EventMesh as WeChat Official Account template messages.

1. launch your EventMesh Runtime.
2. enable sinkConnector (`sinkEnable: true` in `server-config.yml`) and check `sink-config.yml`.
3. send a message to EventMesh with the topic defined in `pubSubConfig.subject`

```yaml
pubSubConfig:
  # default port 10000
  meshAddress: your.eventmesh.server:10000
  subject: TEST-TOPIC-WECHAT
  idc: FT
  env: PRD
  group: weChatSink
  appId: 5034
  userName: weChatSinkUser
  passWord: weChatPassWord
sinkConnectorConfig:
  connectorName: weChatSink
  # Official Account AppID / AppSecret. Please refer to:
  # https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html
  appId: weChatAppId
  appSecret: weChatAppSecret
```

### Message body

The connector posts the event payload as-is to the Official Account template-send API. The payload must be JSON that interface accepts, for example:

```json
{
  "touser": "OPENID",
  "template_id": "TEMPLATE_ID",
  "url": "https://example.com",
  "data": {
    "first": {
      "value": "EventMesh notification",
      "color": "#173177"
    },
    "keyword1": {
      "value": "TEST-TOPIC-WECHAT"
    }
  }
}
```

Records with null data are ignored. Unlike WeCom / DingTalk / Lark, this connector does not read CloudEvent extension keys for the template; put the full template JSON in the event body.

### Precautions

- This is the Official Account API (`api.weixin.qq.com`), not WeCom. For WeCom group robots, use `eventmesh-connector-wecom`.
- Apply for a message template in the WeChat Official Account admin console and use that `template_id`.
- The connector caches the access token for 120 minutes.

### Official references

- [Get access token](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html)
- [Template message](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html)
