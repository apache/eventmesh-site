# Event Store

## 1. Prerequisites

- 64-bit OS, we recommend Linux/Unix.

- 64-bit JDK 8 or JDK 11

- 4GB+ available disk to deploy Event Store

This document provides an example of deploying it with RocketMQ as Event Store, but you can also choose another [Event Store supported by EventMesh](../roadmap.md#event-store-implementation-status). If you choose default standalone mode, you could skip this file and go to the next step: Deploy EventMesh Runtime; if not, you could choose RocketMQ as the store layer.

In a production environment, you should use an Event Store other than standalone to support greater throughput and higher availability.

## 2. Download

Download the Binary code (recommended: 4.9.*) from [RocketMQ Official](https://rocketmq.apache.org/download/). Here we take 4.9.4 as an example.

```shell
unzip rocketmq-all-4.9.4-bin-release.zip
cd rocketmq-4.9.4/
```

![rocketmq_1](/images/install/rocketmq_1.png)

## 3. Start

Start Name Server:

```shell
nohup sh bin/mqnamesrv &
tail -f ~/logs/rocketmqlogs/namesrv.log
```

![rocketmq_2](/images/install/rocketmq_2.png)

Start Broker:

```shell
nohup sh bin/mqbroker -n localhost:9876 &
tail -f ~/logs/rocketmqlogs/broker.log
```

The deployment of Event Store has finished, please go to the next step: [Start EventMesh Runtime](./03-runtime.md)

## Reference

For more details about RocketMQ, please refer to https://rocketmq.apache.org/docs/quick-start/.