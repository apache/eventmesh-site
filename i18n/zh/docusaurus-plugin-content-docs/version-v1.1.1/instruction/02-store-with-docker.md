# eventmesh-store docker部署

eventmesh在非standalone模式下，依赖RocketMQ作为存储层；若采用standalone模式，则可跳过该步，直接进行runtime的部署。

## 1. 依赖

```
建议使用64位操作系统，建议使用Linux/Unix；
64位JDK 1.8+；
Gradle至少为7.0, 推荐7.0.*；
4g+可用磁盘用于eventmesh-store服务器；
```

## 2. Docker部署

### 2.1 拉取镜像
在命令行输入如下命令直接从 docker hub 上获取 RocketMQ 镜像：

```shell
#获取 rocketmq 镜像
sudo docker pull apache/rocketmq:4.9.4
```

您可以使用以下命令列出并查看本地已有的镜像：

```shell
sudo docker images
```

如果终端显示如下所示的镜像信息，则说明 EventMesh 镜像已经成功下载到本地。

```shell
REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
apache/rocketmq   4.9.4     a2a50ca263c3   13 months ago   548MB
```

![rocketmq_docker_1](/images/install/rocketmq_docker_1.png)

### 2.2 运行容器

运行namerv容器和broker容器：

```shell
sudo docker run -d -p 9876:9876 \
  -v `pwd`/data/namesrv/logs:/root/logs \
  -v `pwd`/data/namesrv/store:/root/store \
  --name rmqnamesrv \
  apache/rocketmq:4.9.4 \
  sh mqnamesrv
```

运行broker容器：

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

请注意 **rocketmq-broker ip** 是 **pod ip**, 如果你想修改这个ip, 可以通过挂载容器中 **broker.conf** 文件的方式并修改文件中的 **brokerIP1** 配置项为自定义值。


至此eventmesh-store的部署已完成，请转至下一步完成 [eventmesh-runtime](https://github.com/apache/incubator-eventmesh/blob/master/docs/zh/instruction/02-runtime-with-docker.md) 的部署。
