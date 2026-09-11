# 微信

## WeChatSinkConnector：从 EventMesh 到微信

`eventmesh-connector-wechat` 将 EventMesh 中的事件下沉为微信公众号模板消息。

1. 启动你的 EventMesh Runtime。
2. 启用 sinkConnector（在 `server-config.yml` 中设置 `sinkEnable: true`）并检查 `sink-config.yml`。
3. 使用在 `pubSubConfig.subject` 中指定的 Topic，向 EventMesh 发送消息。

```yaml
pubSubConfig:
  # 默认端口 10000
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
  # 公众号 AppID / AppSecret，请参考：
  # https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html
  appId: weChatAppId
  appSecret: weChatAppSecret
```

### 消息体

连接器会将事件 payload 原样 POST 到公众号模板消息发送接口。payload 必须是该接口接受的 JSON，例如：

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

data 为 null 的记录会被忽略。与企业微信 / 钉钉 / 飞书不同，该连接器不会读取 CloudEvent extension 来拼模板，请把完整的模板 JSON 放在事件体中。

### 注意事项

- 这是公众号 API（`api.weixin.qq.com`），不是企业微信。企业微信群机器人请使用 `eventmesh-connector-wecom`。
- 需要在微信公众号后台申请消息模板，并使用对应的 `template_id`。
- 连接器会将 access token 缓存 120 分钟。

### 官方参考

- [获取 access token](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html)
- [模板消息](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Template_Message_Interface.html)
