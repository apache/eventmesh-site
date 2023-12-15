# Event Store

## 1 Dependencies

```text
64-bit OS, we recommend Linux/Unix.
64-bit JDK 1.8+;
Gradle 7.0+, we recommend 7.0.*
4GB+ available disk to deploy Event Store
If you choose standalone mode, you could skip this file and go to the next step: Start EventMesh Runtime; if not, you could choose RocketMQ as the store layer.
```

## 2 Download

Download the Binary code (recommended: 4.9.*) from [RocketMQ Official](https://rocketmq.apache.org/download/). Here we take 4.9.4 as an example.

```
unzip rocketmq-all-4.9.4-bin-release.zip
cd rocketmq-4.9.4/
```

![rocketmq_1](/images/install/rocketmq_1.png)

### 3 Start

Start Name Server:

```console
nohup sh bin/mqnamesrv &
tail -f ~/logs/rocketmqlogs/namesrv.log
```

![rocketmq_2](/images/install/rocketmq_2.png)

Start Broker:

```console
nohup sh bin/mqbroker -n localhost:9876 &
tail -f ~/logs/rocketmqlogs/broker.log
```

The deployment of Event Store has finished, please go to the next step: [Start EventMesh Runtime](03-runtime.md)

## Reference

For more details about RocketMQ, please refer to <https://rocketmq.apache.org/docs/quick-start/>