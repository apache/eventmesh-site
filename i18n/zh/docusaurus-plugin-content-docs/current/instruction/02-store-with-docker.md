# Event Store Docker 部署

## 1. 前提

- 建议使用 64 位的 Linux / Unix 系统
- 4GB+ 可用磁盘，用于 Event Store 服务器。

本文将以 RocketMQ 事件存储为例，您也可以选择其它 [EventMesh 支持的事件存储](../roadmap.md#事件存储实现状态)。EventMesh 在非 standalone 模式下，依赖 RocketMQ 作为存储层。若您保持默认的 standalone 模式，则可跳过该步，直接进行 EventMesh Runtime 的部署。

在生产环境应使用 standalone 之外的事件存储，以支持更大的吞吐量和更高的可用性。

## 2. Docker 部署

### 2.1 拉取镜像

在命令行输入如下命令直接从 Docker Hub 上获取 RocketMQ 镜像：

```shell
#获取 rocketmq 镜像
sudo docker pull apache/rocketmq:4.9.4
```

您可以使用以下命令列出并查看本地已有的镜像：

```shell
sudo docker images
```

如果终端显示如下所示的镜像信息，则说明 RocketMQ 镜像已经成功下载到本地。

```shell
REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
apache/rocketmq   4.9.4     a2a50ca263c3   13 months ago   548MB
```

![rocketmq_docker_1](/images/install/rocketmq_docker_1.png)

### 2.2 运行容器

运行 namesrv 容器和 broker 容器：

```shell
sudo docker run -d -p 9876:9876 \
  -v `pwd`/data/namesrv/logs:/root/logs \
  -v `pwd`/data/namesrv/store:/root/store \
  --name rmqnamesrv \
  apache/rocketmq:4.9.4 \
  sh mqnamesrv
```

运行 broker 容器：

```shell
sudo docker run -d -p 10911:10911 -p 10909:10909 \
  -v `pwd`/data/broker/logs:/root/logs \
  -v `pwd`/data/broker/store:/root/store \
  --name rmqbroker \
  --link rmqnamesrv:namesrv \
  -e "NAMESRV_ADDR=namesrv:9876" \
  apache/rocketmq:4.9.4 \
  sh mqbroker -c ../conf/broker.conf

```

![rocketmq_docker_2](/images/install/rocketmq_docker_2.png)

请注意 `rocketmq-broker ip` 是 `pod ip`, 如果你想修改这个 ip, 可以通过挂载容器中 `broker.conf` 文件的方式并修改文件中的 `brokerIP1` 配置项为自定义值。

至此 Event Store 的部署已完成，请转至下一步完成 [EventMesh Runtime](04-runtime-with-docker.md) 的部署。
