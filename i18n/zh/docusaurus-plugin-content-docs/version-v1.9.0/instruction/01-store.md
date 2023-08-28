# eventmesh-store 部署

eventmesh在非standalone模式下，依赖RocketMQ作为存储层；若采用standalone模式，则可跳过该步，直接进行runtime的部署。

## 1. 依赖

```
建议使用64位操作系统，建议使用Linux/Unix；
64位JDK 1.8+；
Gradle至少为7.0, 推荐7.0.*；
4g+可用磁盘用于eventmesh-store服务器；
```

## 2. 二进制部署

### 2.1 下载

从[RocketMQ官方网站](https://rocketmq.apache.org/download/) 下载Binary代码（推荐使用4.9.*版本），这里以4.9.4为例：

```
unzip rocketmq-all-4.9.4-bin-release.zip
cd rocketmq-all-4.9.4-bin-release/
```

![rocketmq_1](/images/install/rocketmq_1.png)

### 2.2 启动

启动Name Server：

```
nohup sh bin/mqnamesrv & tail -f ~/logs/rocketmqlogs/namesrv.log
```

如果在看到The Name Server boot success...，则说明Name Server启动成功。

![rocketmq_2](/images/install/rocketmq_2.png)

启动Broker：

```
nohup sh bin/mqbroker -n localhost:9876 & tail -f ~/logs/rocketmqlogs/broker.log
```

如果在看到The broker boot success...，则说明Broker启动成功。

![rocketmq_3](/images/install/rocketmq_3.png)
