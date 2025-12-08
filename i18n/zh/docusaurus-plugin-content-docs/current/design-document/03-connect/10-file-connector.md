# File

## FileSinkConnector：从 EventMesh 写入文件 File

1. 启动你的 EventMesh Runtime。
2. 启用 sinkConnector 并检查 `sink-config.yml`。
3. 启动你的 FileConnectServer，它将订阅到 EventMesh Runtime 中 `pubSubConfig.subject` 中定义的主题，并将数据写入到 路径位于： `connectorConfig.topic`/年/月/日；名为： 【 `connectorConfig.topic` + 当前时间小时位（24 小时制） + 时间戳】的文件。
4. 使用在 `pubSubConfig.subject` 中指定的 Topic，向 EventMesh 发送消息，然后你将在 文件 中持久化该消息。

```yaml
# 公共配置
pubSubConfig:
    meshAddress: 127.0.0.1:10000
    subject: TopicTest
    idc: FT
    env: PRD
    group: fileSink
    appId: 5031
    userName: fileSinkUser
    passWord: filePassWord
connectorConfig:
    connectorName: fileSink
    #主题 一般和pubSubConfig.subject配置成一样的，生成文件的文件名中含有此属性配置值
    topic: TopicTest
```

## FileSourceConnector：从 File 文件读取 到 EventMesh

1. 启动你的 EventMesh Runtime。
2. 启用 sourceConnector 并检查 `source-config.yml`。 
3. 启动你的 FileConnectServer，它将从 `connectorConfig.filePath `中读取的数据发送到 EventMesh Runtime 中的 `pubSubConfig.subject`。 
4. 文件内容的 追加操作 会被识别，然后你将在 EventMesh 中接收到该消息。

```yaml
# 公共配置
pubSubConfig:
    meshAddress: 127.0.0.1:10000
    subject: TopicTest
    idc: FT
    env: PRD
    group: fileSource
    appId: 5032
    userName: fileSourceUser
    passWord: filePassWord
connectorConfig:
    connectorName: fileSource
    # 源文件地址
    filePath: userFilePath
```

> 特殊说明：如果没能获取源文件或汇入文件，则使用 System.in 和 System.out。