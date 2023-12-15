# EventMesh Runtime 快速入门说明

EventMesh Runtime 是 EventMesh 集群中有状态的 Mesh 节点，负责 Source Connector 与 Sink Connector 之间的事件传输，并可以使用 Event Store 作为事件的存储队列。

![EventMesh Runtime](/images/design-document/runtime.png)

## 1 本地构建运行

### 1.1 源码启动

#### 1.1.1 依赖

- 建议使用 64 位操作系统，建议使用 Linux / Unix。

- 64 位 JDK 1.8 或 JDK 11

- Gradle 7.0+, 可于 `gradle/wrapper/gradle-wrapper.properties` 文件中查看推荐版本。

#### 1.1.2 下载源码

从 [EventMesh download](https://eventmesh.apache.org/download) 下载并提取最新版本的源代码。比如目前最新版，您将获得`apache-eventmesh-1.9.0-source.tar.gz`。

#### 1.1.3 本地启动

**1.1.3.1 项目结构说明：**

- eventmesh-common : EventMesh 公共类与方法模块
- eventmesh-connector-api : EventMesh Connector 插件接口定义模块
- eventmesh-connector-plugin : EventMesh Connector 插件模块
- eventmesh-runtime : EventMesh 运行时模块
- eventmesh-sdk-java : EventMesh Java 客户端 SDK
- eventmesh-starter : EventMesh 本地启动运行项目入口
- eventmesh-spi : EventMesh SPI 加载模块

> 注：插件模块遵循 EventMesh 定义的 SPI 规范，自定义的 SPI 接口需要使用注解 `@EventMeshSPI` 标识。
>
> 插件实例需要在对应模块中的 `/main/resources/META-INF/eventmesh` 下配置相关接口与实现类的映射文件，文件名为 SPI 接口全类名。
>
> 文件内容为插件实例名到插件实例的映射，具体可以参考 eventmesh-connector-rocketmq 插件模块。

**1.1.3.2 插件说明**

***1.1.3.2.1 安装插件***

有两种方式安装插件

- classpath 加载：本地开发可以通过在 eventmesh-starter 模块 build.gradle 中进行声明，例如声明使用 rocketmq 插件

```gradle
   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")
```

- 文件加载：通过将插件安装到插件目录，EventMesh 在运行时会根据条件自动加载插件目录下的插件，可以通过执行以下命令安装插件

```shell
./gradlew clean jar dist && ./gradlew installPlugin
```

***1.1.3.2.2 使用插件***

EventMesh 会默认加载 `dist/plugin` 目录下的插件，可以通过`-DeventMeshPluginDir=your_plugin_directory`来改变插件目录。运行时需要使用的插件实例可以在
`confPath`目录下面的`eventmesh.properties`中进行配置。例如通过以下设置声明在运行时使用 rocketmq 插件。

```properties
#connector plugin
eventMesh.connector.plugin.type=rocketmq
```

**1.1.3.3 配置 VM 启动参数**

```properties
-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml
-Deventmesh.log.home=eventmesh-runtime/logs
-Deventmesh.home=eventmesh-runtime
-DconfPath=eventmesh-runtime/conf
```

> 注：如果操作系统为 Windows, 可能需要将文件分隔符换成'\'

**1.1.3.4 启动运行**

```
运行 org.apache.eventmesh.starter.StartUp 的 main 方法
```

### 1.2 本地二进制构建

#### 1.2.1 依赖

- 建议使用 64 位操作系统，建议使用 Linux / Unix。

- 64 位 JDK 1.8 或 JDK 11

- Gradle 7.0+, 可于 `gradle/wrapper/gradle-wrapper.properties` 文件中查看当前版本推荐的 Gradle 版本。

Gradle 是 Apache EventMesh 使用的构建自动化工具。请参考 [官方指南](https://docs.gradle.org/current/userguide/installation.html) 安装最新版本的 Gradle。

#### 1.2.2 下载源码

从 [EventMesh download](https://eventmesh.apache.org/download) 下载并提取最新版本的源代码。比如目前最新版，您将获得`apache-eventmesh-1.9.0-source.tar.gz`。

```console
tar -xvzf apache-eventmesh-1.9.0-source.tar.gz
cd apache-eventmesh-1.9.0-src/
```

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

#### 1.2.3 构建并加载插件

Apache EventMesh 引入了 SPI 机制，使 EventMesh 能够在运行时发现并加载插件。有两种方式安装插件：

1. Gradle 依赖项：在 `eventmesh-starter/build.gradle` 中将插件声明为构建依赖项。

```gradle
dependencies {
   implementation project(":eventmesh-runtime")

    // 示例：加载 RocketMQ 插件
   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")
}
```

2. 插件目录：EventMesh 会根据 `eventmesh.properties` 加载 `dist/plugin` 目录中的插件。Gradle 的 `installPlugin` 任务会构建插件并将其移动到 `dist/plugin` 目录中。

```console
gradle installPlugin
```

#### 1.2.4 启动 Runtime

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

## 2 远程部署

### 2.1 依赖

- 建议使用 64 位操作系统，建议使用 Linux / Unix。

- 64 位 JDK 1.8 或 JDK 11

- Gradle 7.0+, 可于 `gradle/wrapper/gradle-wrapper.properties` 文件中查看当前版本推荐的 Gradle 版本。

### 2.2 下载

在 [EventMesh download](https://eventmesh.apache.org/download) 页面选择 1.5.0 版本的 Binary Distribution 进行下载，您将获得`apache-eventmesh-1.9.0-bin.tar.gz`。

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

如果看到"EventMeshTCPServer[port=10000] started...."，则说明设置成功。

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