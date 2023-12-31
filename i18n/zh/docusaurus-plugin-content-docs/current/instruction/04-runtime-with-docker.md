# EventMesh Runtime 快速开始（使用 Docker）

您可以使用 Docker 部署 EventMesh Runtime。本文将以 RocketMQ 事件存储为例，您也可以选择其它 [EventMesh 支持的事件存储](https://github.com/apache/eventmesh/tree/master/eventmesh-storage-plugin)。

## 1. 前提

1. 建议使用 64 位的 Linux 系统；
2. 请预先安装 Docker Engine。Docker 的安装过程可以参考 [Docker 官方文档](https://docs.docker.com/engine/install/)；
3. 建议掌握基础的 Docker 概念和命令行，例如注册中心、挂载等等。不过这不是必须的，因为本次操作所需的命令都已为您列出；
4. 若您选择非 standalone 模式，请确保 [RocketMQ 已成功启动](https://rocketmq.apache.org/docs/quick-start/) 并且可以使用 IP 地址访问到；若您保持默认的 standalone 模式，则无需启动 RocketMQ。

## 2. 获取 EventMesh Runtime 镜像

首先，您可以打开一个命令行，并且使用下面的 `pull` 命令从 [Docker Hub](https://hub.docker.com/r/apache/eventmesh/tags) 中下载 [最新版本的 EventMesh](https://eventmesh.apache.org/events/release-notes/) 。

```shell
sudo docker pull apache/eventmesh:latest
```

您可以使用以下命令列出并查看本地已有的镜像。

```shell
sudo docker images
```

如果终端显示如下所示的镜像信息，则说明 EventMesh 镜像已经成功下载到本地。

```shell
$ sudo docker images
REPOSITORY         TAG       IMAGE ID       CREATED      SIZE
apache/eventmesh   latest    f32f9e5e4694   2 days ago   917MB
```

## 3. 挂载配置文件

如果您使用 standalone 模式启动 EventMesh Runtime，并且没有自定义配置，可以跳转至下一步骤。

首先，在宿主机上创建 EventMesh 的配置文件目录。此目录可以自由指定：

```shell
sudo mkdir -p /data/eventmesh/conf
cd /data/eventmesh/conf
```

### 3.1 EventMesh Runtime 配置

此配置文件中包含 EventMesh Runtime 环境和集成的插件的配置。

下载配置文件（替换下载链接中的`1.10.0`为您正在使用的版本）：

```shell
sudo wget https://raw.githubusercontent.com/apache/eventmesh/1.10.0-prepare/eventmesh-runtime/conf/eventmesh.properties
```

编辑 `eventmesh.properties`：

```shell
sudo vim eventmesh.properties
```

指定事件存储为 RocketMQ：

```properties
# storage plugin
eventMesh.storage.plugin.type=rocketmq
```

请检查配置文件里的默认端口是否已被占用，如果被占用，请修改为未被占用的端口：

| 属性                             | 默认值 | 备注          |
| -------------------------------- | ------ | ------------- |
| eventMesh.server.tcp.port        | 10000  | TCP 监听接口  |
| eventMesh.server.http.port       | 10105  | HTTP 监听接口 |
| eventMesh.server.grpc.port       | 10205  | gRPC 监听接口 |
| eventMesh.server.admin.http.port | 10106  | HTTP 管理接口 |

### 3.2 事件存储配置

以 RocketMQ 为例，配置文件中包含连接 RocketMQ namesrv 所需的参数。

下载配置文件（替换下载链接中的`1.10.0`为您正在使用的版本）：

```shell
sudo wget https://raw.githubusercontent.com/apache/eventmesh/1.10.0-prepare/eventmesh-storage-plugin/eventmesh-storage-rocketmq/src/main/resources/rocketmq-client.properties
```

编辑 `rocketmq-client.properties`：

```shell
sudo vim rocketmq-client.properties
```

如果您正在运行的 namesrv 地址不是配置文件中的默认值，请将其修改为实际正在运行的 namesrv 地址。

| 属性                                  | 默认值                        | 备注                     |
| ------------------------------------- | ----------------------------- | ------------------------ |
| eventMesh.server.rocketmq.namesrvAddr | 127.0.0.1:9876;127.0.0.1:9876 | RocketMQ namesrv address |

>如果您无法使用给出的链接下载配置文件，您可以在 EventMesh 二进制发行版的`conf`路径下找到所有的配置文件。

## 4. 运行 EventMesh Runtime 容器

使用以下命令启动 EventMesh 容器：

```shell
sudo docker run -d --name eventmesh -p 10000:10000 -p 10105:10105 -p 10205:10205 -p 10106:10106 -v /data/eventmesh/conf/eventmesh.properties:/data/app/eventmesh/conf/eventmesh.properties -v /data/eventmesh/conf/rocketmq-client.properties:/data/app/eventmesh/conf/rocketmq-client.properties -t apache/eventmesh:latest
```

`docker run`命令参数介绍：

- `-p <宿主机端口>:<容器端口>`：绑定容器端口和宿主机端口。如果您修改过 EventMesh Runtime 配置中的默认端口，或者宿主机的端口已被占用，请相应地修改为您指定的端口。

- `-v <宿主机路径>:<容器路径>`：将宿主机中的配置文件挂载到容器中。如果您存放 EventMesh 配置文件的路径不是`/data/eventmesh/conf`，请修改宿主机路径为您指定的路径。如果您没有自定义配置文件，请删除此参数。
- `--name eventmesh`：自定义的容器名称。此名称是唯一的。
- `-t apache/eventmesh:latest`：容器使用的镜像。

执行`docker run`命令后，将会返回容器的 ID。使用此命令查看所有正在运行的容器的状态：

```shell
sudo docker ps
```

将会打印：

```shell
CONTAINER ID   IMAGE                      COMMAND               CREATED          STATUS         PORTS                                                                                                                                                                 NAMES
b7a1546ee96a   apache/eventmesh:latest   "bash bin/start.sh"   10 seconds ago   Up 8 seconds   0.0.0.0:10000->10000/tcp, :::10000->10000/tcp, 0.0.0.0:10105-10106->10105-10106/tcp, :::10105-10106->10105-10106/tcp, 0.0.0.0:10205->10205/tcp, :::10205->10205/tcp   eventmesh
```

如果 EventMesh Runtime 容器不在此命令打印的列表中，则代表容器未能成功启动。您可以使用以下命令查看启动时的日志（将`eventmesh`替换为您指定的容器名称或 ID）：

```shell
sudo docker logs eventmesh
```

## 5. 查看 EventMesh 日志

成功启动 EventMesh 容器后，您可以通过以下步骤查看 EventMesh Runtime 输出的日志，检查 EventMesh 的运行状态。

进入容器（将`eventmesh`替换为您指定的容器名称或 ID）：

```shell
sudo docker exec -it eventmesh /bin/bash
```

查看日志：

```shell
cd logs
tail -n 50 -f eventmesh.out
```

当日志输出`server state:RUNNING`，则代表 EventMesh Runtime 启动成功了。

## 6. 构建 EventMesh Runtime 镜像（可选）

EventMesh 基于 JDK8 开发，二进制发行版和容器镜像基于 JDK8 构建。

要在 JDK8 环境下运行容器，请在 EventMesh 源代码的项目根目录下执行：

```shell
sudo docker build -t yourname/eventmesh:yourtag -f docker/Dockerfile_jdk8 .
```

如果您希望以 JDK11 作为容器的运行环境，则执行：

```shell
sudo docker build -t yourname/eventmesh:yourtag -f docker/Dockerfile_jdk11 .
```
