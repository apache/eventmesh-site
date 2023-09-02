# Eventmesh-runtime 快速入门说明

EventMesh Runtime 是 Apache EventMesh（孵化）的核心组件。它是在生产者和消费者之间传输事件的中间件。该文档介绍了在本地或测试环境中安装和启动最新版 EventMesh Runtime 的步骤。EventMesh Runtime 需要一个基于 Linux 的系统，并配备 JDK（Java 开发包）8+。

在此，我们以 JDK 8 为例。可以使用系统软件包管理器或 [openjdk:8-jdk](https://hub.docker.com/_/openjdk) Docker 映像安装 JDK 8。

## 1 源码部署

### 1.1 依赖

```
建议使用64位操作系统，建议使用Linux / Unix；
64位JDK 1.8.*；(最好使用1.8，其他版本可能会有jvm参数找不到的问题)；
Gradle至少为7.0, 推荐 7.0.*；
4GB 以上可用磁盘，以部署 eventmesh-store；
```

Gradle 是 Apache EventMesh（孵化）使用的构建自动化工具。请参考 [官方指南](https://docs.gradle.org/current/userguide/installation.html) 安装最新版本的 Gradle。

### 1.2 下载源码

从 [EventMesh download](https://eventmesh.apache.org/download) 下载并提取最新版本的源代码。比如目前最新版，您将获得`apache-eventmesh-1.9.0-source.tar.gz`。

```console
tar -xvzf apache-eventmesh-1.9.0-source.tar.gz
cd apache-eventmesh-1.9.0-src/
```

![runtime_1](/images/install/runtime_1.png)

使用 Gradle 构建源代码。

```console
gradle clean dist
```

![runtime_2](/images/install/runtime_2.png)

编辑 `eventmesh.properties` 以更改 EventMesh Runtime 的配置（如 TCP 端口、客户端黑名单）。

```console
cd dist
vim conf/eventmesh.properties
```

### 1.3 构建并加载插件

Apache EventMesh引入了 SPI 机制，使 EventMesh 能够在运行时发现并加载插件。有两种方式安装插件：

1. Gradle 依赖项： 在 `eventmesh-starter/build.gradle` 中将插件声明为构建依赖项。

```gradle
dependencies {
   implementation project(":eventmesh-runtime")

    // 示例： 加载 RocketMQ 插件
   implementation project(":eventmesh-connector-plugin:eventmesh-connector-rocketmq")
}
```

2. 插件目录： EventMesh 会根据 `eventmesh.properties` 加载 `dist/plugin` 目录中的插件。Gradle 的 `installPlugin` 任务会构建插件并将其移动到 `dist/plugin` 目录中。

```console
gradle installPlugin
```

![runtime_5](/images/install/runtime_5.png)

### 1.4 启动Runtime

执行 `start.sh` 脚本启动 EventMesh Runtime 服务器。

```console
bash bin/start.sh
```
![runtime_4](/images/install/runtime_4.png)

查看输出日志：

```console
tail -f logs/eventmesh.out
```
![runtime_3](/images/install/runtime_3.png)

## 2 二进制部署

### 2.1 依赖

```
建议使用64位操作系统，建议使用Linux / Unix；
64位JDK 1.8+；
Gradle至少为7.0, 推荐 7.0.*；
4GB 以上可用磁盘，以部署 eventmesh-store；
```

### 2.2 下载

在 [EventMesh download](https://eventmesh.apache.org/download) 页面选择1.5.0版本的 Binary Distribution 进行下载, 您将获得`apache-eventmesh-1.9.0-bin.tar.gz`。

```console
# 解压
tar -xvzf apache-eventmesh-1.9.0-bin.tar.gz
cd apache-eventmesh-1.9.0
```

### 2.3 部署

编辑 `eventmesh.properties` 以更改 EventMesh Runtime 的配置（如 TCP 端口、客户端黑名单）。

```console
vim conf/eventmesh.properties
```

执行 `start.sh` 脚本启动 EventMesh Runtime 服务器。

```console
bash bin/start.sh
```

![runtime_6](/images/install/runtime_6.png)


查看输出日志：

```console
cd /root/apache-eventmesh-1.9.0/logs
tail -f eventmesh.out
```
![runtime_7](/images/install/runtime_7.png)

停止：

```console
bash bin/stop.sh
```

![runtime_8](/images/install/runtime_8.png)
![runtime_9](/images/install/runtime_9.png)
