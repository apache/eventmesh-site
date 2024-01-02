# Event Store 事件存储

## 1 前提

- 建议使用 64 位的 Linux / Unix 系统
- 64 位 JDK 8 或 JDK 11
- 4GB+ 可用磁盘，用于 Event Store 服务器。

本文将以 RocketMQ 事件存储为例，您也可以选择其它 [EventMesh 支持的事件存储](../roadmap.md#事件存储实现状态)。EventMesh 在非 standalone 模式下，依赖 RocketMQ 作为存储层。若您保持默认的 standalone 模式，则可跳过该步，直接进行 EventMesh Runtime 的部署。

在生产环境应使用 standalone 之外的事件存储，以支持更大的吞吐量和更高的可用性。

## 2 下载

从 [RocketMQ 官方网站](https://rocketmq.apache.org/download/) 下载 Binary 代码（推荐使用 4.9.* 版本），这里以 4.9.4 为例：

```
unzip rocketmq-all-4.9.4-bin-release.zip
cd rocketmq-all-4.9.4-bin-release/
```

![rocketmq_1](/images/install/rocketmq_1.png)

## 3 启动

启动 Name Server：

```
nohup sh bin/mqnamesrv & tail -f ~/logs/rocketmqlogs/namesrv.log
```

如果在看到 The Name Server boot success...，则说明 Name Server 启动成功。

![rocketmq_2](/images/install/rocketmq_2.png)

启动 Broker：

```
nohup sh bin/mqbroker -n localhost:9876 &
tail -f ~/logs/rocketmqlogs/broker.log
```

如果看到 The broker boot success...，则说明 Broker 启动成功

至此 Event Store 的部署已完成，请转至下一步完成 [EventMesh Runtime](./03-runtime.md) 的部署

## 参考

关于 RocketMQ 的其他更多资料，请参考 https://rocketmq.apache.org/docs/quick-start/.
