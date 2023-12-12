# 连接器

## 连接器

连接器是一个桥梁，代表用户应用程序与特定的外部服务或底层数据源（例如数据库）进行交互。连接器的类型可以是源（Source）或汇（Sink）。

## 数据源（Source端）

源连接器从底层数据生产者获取数据，并在原始数据被转换为CloudEvents后将其传递给目标。源连接器不限制源如何检索数据（例如，源可以从消息队列中获取数据，也可以充当等待接收数据的HTTP服务器）。

CloudEvents是以通用格式描述事件数据的规范，以提供服务、平台和系统之间的互操作性。

## 数据汇（Sink端）

汇连接器接收CloudEvents并执行特定的业务逻辑（例如，MySQL的汇连接器从CloudEvents中提取有用的数据，并将其写入MySQL数据库）。

## 实现

使用[eventmesh-openconnect-java](https://github.com/apache/eventmesh/tree/master/eventmesh-openconnect/eventmesh-openconnect-java)实现源/汇接口即可添加新的连接器。

## 连接器实现状态

|                  连接器名称                  | Source |   Sink   |
|:------------------------------------------:|:------:|:------:|
|     [RocketMQ](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-rocketmq)     |    ✅    |    ✅    |
|                     ChatGPT                      |    ⬜    |    ⬜    |
|                    ClickHouse                    |    ⬜    |    ⬜    |
|     [Dingtalk](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-dingtalk)     |    ⬜    |    ✅    |
|                      Email                       |    ⬜    |    ⬜    |
|     [Feishu/Lark](../lark-connector)      |    ⬜    |    ✅    |
|         [File](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-file)         |    ✅    |    ✅    |
|                      Github                      |    ⬜    |    ⬜    |
|         [Http](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-http)         |    ✅    |    ⬜    |
|         [Jdbc](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-jdbc)         |    ⬜    |    ✅    |
|        [Kafka](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-kafka)        |    ✅    |    ✅    |
|      [Knative](../knative-connector)      |    ✅    |    ✅    |
|      [MongoDB](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-mongodb)      |    ✅    |    ✅    |
| [OpenFunction](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-openfunction) |    ✅    |    ✅    |
|      [Pravega](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pravega)      |    ✅    |    ✅    |
|   [Prometheus](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-prometheus)   |    ✅    |    ⬜    |
|       [Pulsar](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pulsar)       |    ✅    |    ✅    |
|     [RabbitMQ](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-rabbitmq)     |    ✅    |    ✅    |
|        [Redis](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-redis)        |    ✅    |    ✅    |
|        [S3 File](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-s3)         |    ⬜    |    ✅    |
|        [Slack](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-slack)        |    ⬜    |    ✅    |
|       [Spring](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-spring)       |    ✅    |    ✅    |
|        [WeCom](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-wecom)        |    ⬜    |    ✅    |
|       [WeChat](https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-wechat)       |    ⬜    |    ✅    |
|         更多连接器正在计划中...         |   N/A   |   N/A   |