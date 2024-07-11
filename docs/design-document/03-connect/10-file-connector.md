# File

## FileSinkConnector: Writes File file from EventMesh

1. Start your EventMesh Runtime.
2. Enable sinkConnector and check `sink-config.yml`.
3. Started FileConnectServer, It will subscribe to the topic defined in `pubSubConfig.subject` in the EventMesh Runtime, And write the data to the path located : `connectorConfig.topic`/Year/Month/Day ; the file named:【 `connectorConfig.topic` + Current time Hour (24 hours) + timestamp 】.
4. Using the Topic specified in `pubSubConfig.subject`, send a message to EventMesh, which you will persist in the file.

```yaml
# Common configuration
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
    #topic Generally, the configuration is the same as that of pubSubConfig.subject. The generated file name contains the configuration value of this property
    topic: TopicTest
```

## FileSourceConnector: Read from File to EventMesh

1. Start your EventMesh Runtime.
2. Enable sinkConnector and check `source-config.yml`.
3. Started FileConnectServer, It sends the data read from `connectorConfig.filePath` to `pubSubConfig.subject` in the EventMesh Runtime.
4. The append to the file content is recognized, and you receive the message in EventMesh.

```yaml
# Common configuration
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
    # Source file address
    filePath: userFilePath
```

> Special note: System.in and System.out are used if the source file or import file cannot be retrieved.