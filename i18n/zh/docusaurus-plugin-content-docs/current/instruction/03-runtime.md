# EventMesh Runtime 快速开始

EventMesh Runtime 是 EventMesh 集群中有状态的 Mesh 节点，负责 Source Connector 与 Sink Connector 之间的事件传输，并可以使用 Event Store 作为事件的存储队列。

![EventMesh Runtime](../../../../../static/images/design-document/runtime.png)

## 1. 部署二进制发行版

### 1.1 环境

- 建议使用 64 位的 Linux / Unix 系统
- 64 位 JDK 8 或 JDK 11

### 1.2 下载

从 [EventMesh Download](https://eventmesh.apache.org/download) 页面下载最新版本的 Binary Distribution 发行版并解压：

```shell
wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-bin.tar.gz
tar -xvzf apache-eventmesh-1.10.0-bin.tar.gz
cd apache-eventmesh-1.10.0
```

### 1.3 配置

本文将以 RocketMQ 事件存储为例，您也可以选择其它 [EventMesh 支持的事件存储](../roadmap.md#事件存储实现状态)。若您选择非 standalone 模式，请确保 [RocketMQ 已成功启动](https://rocketmq.apache.org/docs/quick-start/) 并且可以使用 IP 地址访问到；若您保持默认的 standalone 模式，则无需启动 RocketMQ。

#### 1.3.1 EventMesh Runtime 配置

此配置文件中包含 EventMesh Runtime 环境和集成的插件的配置。

```shell
vim conf/eventmesh.properties
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

#### 1.3.2 事件存储配置

以 RocketMQ 为例，配置文件中包含连接 RocketMQ namesrv 所需的参数。

编辑 `rocketmq-client.properties`：

```shell
vim conf/rocketmq-client.properties
```

如果您正在运行的 namesrv 地址不是配置文件中的默认值，请将其修改为实际正在运行的 namesrv 地址。

| 属性                                  | 默认值                        | 备注                     |
| ------------------------------------- | ----------------------------- | ------------------------ |
| eventMesh.server.rocketmq.namesrvAddr | 127.0.0.1:9876;127.0.0.1:9876 | RocketMQ namesrv address |

### 1.4 启动

执行 `start.sh` 脚本启动 EventMesh Runtime：

```shell
bash bin/start.sh
```

若脚本仅打印以下三行，未输出其它错误信息，则代表脚本执行成功：

```shell
EventMesh using Java version: 8, path: /usr/local/openjdk-8/bin/java
EVENTMESH_HOME : /data/app/eventmesh
EVENTMESH_LOG_HOME : /data/app/eventmesh/logs
```

接着，查看 EventMesh Runtime 输出的日志，检查 EventMesh 的运行状态：

```shell
tail -n 50 -f logs/eventmesh.out
```

当日志输出`server state:RUNNING`，则代表 EventMesh Runtime 启动成功了。

停止 EventMesh Runtime：

```shell
bash bin/stop.sh
```

脚本打印`shutdown server ok!`时，代表 EventMesh Runtime 已停止。

## 2. 构建二进制分发包

### 2.1 环境

- 建议使用 64 位的 Linux / Unix 系统
- 64 位 JDK 8 或 JDK 11
- [Gradle](https://docs.gradle.org/current/userguide/installation.html) 7.0+（可选），本文档中给出的构建命令使用 Gradle Wrapper，无需用户自行配置 Gradle 环境。您也可以于 `gradle/wrapper/gradle-wrapper.properties` 文件中查看您使用的 EventMesh 版本所推荐的 Gradle 版本，使用您本机的 Gradle 编译。

### 2.2 下载

从 [EventMesh Download](https://eventmesh.apache.org/download) 下载 Source Code 源代码并解压：

```shell
wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-source.tar.gz
tar -xvzf apache-eventmesh-1.10.0-source.tar.gz
cd apache-eventmesh-1.10.0-src/
```

您也可以选择从 GitHub 拉取代码：

```shell
git clone https://github.com/apache/eventmesh.git
cd eventmesh/
```

### 2.3 构建

EventMesh 基于 JDK8 开发，二进制发行版也基于 JDK8 构建。推荐在 JDK8 环境下运行 EventMesh Runtime。

#### 在 JDK8 环境运行

部分源代码需要在 JDK11 下生成：

```shell
./gradlew clean generateGrammarSource --parallel --daemon
```

`generateGrammarSource`任务会在`org.apache.eventmesh.connector.jdbc.antlr4.autogeneration`包下生成`ANTLR`所需的源代码。

接着，在 JDK8 下构建 EventMesh Runtime：

```shell
./gradlew clean dist -x spotlessJava -x generateGrammarSource --parallel --daemon
```

构建完成后，请前往 [2.4 打包插件](#24-打包插件)。

> 您可以使用`update-alternatives`或`JAVA_HOME`等方式切换 JDK 版本，并使用`java -version`查看当前 JDK 版本。

#### 在 JDK11 环境运行

如果您希望以 JDK11 作为 EventMesh Runtime 的运行环境，则执行：

```shell
./gradlew clean dist --parallel --daemon
```

构建完成后，请前往 [2.4 打包插件](#24-打包插件)。

### 2.4 打包插件

`installPlugin` 任务会将构建完毕的插件复制到 `dist` 目录中：

```shell
./gradlew installPlugin
```

EventMesh 会根据 `eventmesh.properties` 中的配置，加载 `plugin` 目录下的插件。

构建成功后，项目根目录下的 `dist` 目录即为 EventMesh 的二进制文件目录。配置与启动请参考 [部署二进制发行版](#1-部署二进制发行版)。

## 3. 从源代码启动

### 3.1 依赖

- 建议使用 64 位的 Linux / Unix 系统
- 64 位 JDK 8 或 JDK 11
- [Gradle](https://docs.gradle.org/current/userguide/installation.html) 7.0+（可选），本文档中给出的构建命令使用 Gradle Wrapper，无需用户自行配置 Gradle 环境。您也可以于 `gradle/wrapper/gradle-wrapper.properties` 文件中查看您使用的 EventMesh 版本所推荐的 Gradle 版本，使用您本机的 Gradle 编译。
- 推荐使用 IDE（集成开发环境）导入 EventMesh。推荐使用`Intellij IDEA`作为 IDE。

### 3.2 下载

从 GitHub 拉取代码：

```shell
git clone https://github.com/apache/eventmesh.git
cd eventmesh/
```

您也可以从 [EventMesh Download](https://eventmesh.apache.org/download) 下载 Source Code 源代码发行版并解压：

```shell
wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-source.tar.gz
tar -xvzf apache-eventmesh-1.10.0-source.tar.gz
cd apache-eventmesh-1.10.0-src/
```

### 3.3 项目结构说明

| 模块名称                   | 描述                                 |
| -------------------------- | ------------------------------------ |
| eventmesh-common           | EventMesh 公共类与方法模块           |
| eventmesh-connector-api    | EventMesh Connector 插件接口定义模块 |
| eventmesh-connector-plugin | EventMesh Connector 插件模块         |
| eventmesh-runtime          | EventMesh Runtime 运行时模块         |
| eventmesh-sdk-java         | EventMesh Java 客户端 SDK            |
| eventmesh-starter          | EventMesh 本地启动运行项目入口       |
| eventmesh-spi              | EventMesh SPI 加载模块               |

> 插件模块遵循 EventMesh 定义的 SPI 规范，自定义的 SPI 接口需要使用注解 `@EventMeshSPI` 标识。
>
> 插件实例需要在对应模块中的 `/main/resources/META-INF/eventmesh` 下配置相关接口与实现类的映射文件，文件名为 SPI 接口的全限定类名。
>
> 文件内容为插件实例名到插件实例的映射，具体可以参考 `eventmesh-connector-rocketmq` 插件模块。

### 3.4 插件说明

#### 3.4.1 安装插件

EventMesh 具有 SPI 机制，使 EventMesh 能够发现并加载插件。有两种方式安装插件：

- Classpath 加载：本地开发时可以通过在 `eventmesh-starter` 模块的 `build.gradle` 中添加依赖，例如添加 Kafka Connector 插件：

```gradle
dependencies {
   implementation project(":eventmesh-runtime")
    // 示例：加载 Kafka Connector 插件
   implementation project(":eventmesh-connectors:eventmesh-connector-kafka")
}
```

- 文件加载：通过将插件安装到插件目录，EventMesh 在运行时会根据条件自动加载插件目录下的插件。请参考 [2.3 构建](#23-构建) 和 [2.4 打包插件](#24-打包插件)。

>当您对源代码作出更改后，建议在 [2.3 构建](#23-构建) 给出的命令中添加`build`任务，以重新编译和运行单元测试。如：
>
>```shell
>./gradlew clean build dist -x spotlessJava -x generateGrammarSource --parallel --daemon
>```

#### 3.4.2 使用插件

EventMesh 会默认加载 `dist/plugin` 目录下的插件，可以通过`-DeventMeshPluginDir=your_plugin_directory`来改变插件目录。运行时需要使用的插件实例可以在
`confPath`目录下面的`eventmesh.properties`中进行配置。例如通过以下设置声明使用 RocketMQ Connector 插件。

```properties
# connector plugin
eventMesh.connector.plugin.type=rocketmq
```

### 3.5 配置 VM 参数

```properties
-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml
-Deventmesh.log.home=eventmesh-runtime/logs
-Deventmesh.home=eventmesh-runtime
-DconfPath=eventmesh-runtime/conf
```

如果操作系统为 Windows，需要将斜杠替换为反斜杠`\`。

### 3.6 启动

运行`eventmesh-starter`模块下`org.apache.eventmesh.starter.StartUp`类的`main()`方法即可启动 EventMesh Runtime。

### 3.7 停止

控制台打印以下日志时，EventMesh Runtime 已停止。

```log
DEBUG StatusConsoleListener Shutdown hook enabled. Registering a new one.
WARN StatusConsoleListener Unable to register Log4j shutdown hook because JVM is shutting down. Using SimpleLogger
```
