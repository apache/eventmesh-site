# EventMesh Runtime Quick Start

EventMesh Runtime is a stateful Mesh node in the EventMesh cluster, responsible for event transmission between Source Connectors and Sink Connectors. It uses Event Store as a storage queue for events.

![EventMesh Runtime](../../static/images/design-document/runtime.png)

## 1. Binary Distribution Deployment

### 1.1 Environment

- Recommended to use 64-bit Linux/Unix systems
- 64-bit JDK 8 or JDK 11

### 1.2 Download

Download the latest version of the Binary Distribution from the [EventMesh Download](https://eventmesh.apache.org/download) page and extract it:

```shell
wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-bin.tar.gz
tar -xvzf apache-eventmesh-1.10.0-bin.tar.gz
cd apache-eventmesh-1.10.0
```

### 1.3 Configuration

This document provides an example of deploying it with RocketMQ as Event Store, but you can also choose another [Event Store supported by EventMesh](../roadmap.md#event-store-implementation-status). If you choose a non-standalone mode, ensure that [RocketMQ is successfully started](https://rocketmq.apache.org/docs/quick-start/) and accessible via IP address. If you stick to the default standalone mode, RocketMQ doesn't need to be started.

#### 1.3.1 EventMesh Runtime Configuration

This configuration file includes settings for the EventMesh Runtime environment and integrated plugins.

```shell
vim conf/eventmesh.properties
```

Specify RocketMQ as Event Store:

```properties
# storage plugin
eventMesh.storage.plugin.type=rocketmq
```

Check if the default ports in the configuration file are occupied. If occupied, modify them to unused ports:

| Property                           | Default | Remarks             |
| ---------------------------------- | ------- | ------------------- |
| eventMesh.server.tcp.port           | 10000   | TCP listening port  |
| eventMesh.server.http.port          | 10105   | HTTP listening port |
| eventMesh.server.grpc.port          | 10205   | gRPC listening port |
| eventMesh.server.admin.http.port    | 10106   | HTTP management port |

#### 1.3.2 Event Store Configuration

In the case of RocketMQ, the configuration file includes parameters required to connect to the RocketMQ namesrv.

Edit `rocketmq-client.properties`:

```shell
vim conf/rocketmq-client.properties
```

If the namesrv address you are running is different from the default value in the configuration file, modify it to the actual running namesrv address.

| Property                                  | Default                        | Remarks                            |
| ----------------------------------------- | ------------------------------ | ----------------------------------- |
| eventMesh.server.rocketmq.namesrvAddr     | 127.0.0.1:9876;127.0.0.1:9876  | RocketMQ namesrv address           |

### 1.4 Start

Execute the `start.sh` script to start EventMesh Runtime:

```shell
bash bin/start.sh
```

If the script only prints the following three lines without any other error messages, it means the script has executed successfully:

```shell
EventMesh using Java version: 8, path: /usr/local/openjdk-8/bin/java
EVENTMESH_HOME : /data/app/eventmesh
EVENTMESH_LOG_HOME : /data/app/eventmesh/logs
```

Next, view the logs output by EventMesh to check its runtime status:

```shell
tail -n 50 -f logs/eventmesh.out
```

When the log output shows `server state:RUNNING`, it means EventMesh Runtime has started successfully.

Stop EventMesh Runtime:

```shell
bash bin/stop.sh
```

When the script prints `shutdown server ok!`, it means EventMesh Runtime has stopped.

## 2. Build Binary Distribution

### 2.1 Environment

- Recommended to use 64-bit Linux/Unix systems
- 64-bit JDK 8 or JDK 11
- [Gradle](https://docs.gradle.org/current/userguide/installation.html) 7.0+ (optional), the build commands provided in this document use the Gradle Wrapper, and you don't need to configure the Gradle environment yourself. You can also check the recommended Gradle version for your EventMesh version in the `gradle/wrapper/gradle-wrapper.properties` file and use your local Gradle version for compilation.

### 2.2 Download

Download the Source Code from [EventMesh Download](https://eventmesh.apache.org/download) and extract it:

```shell
wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-source.tar.gz
tar -xvzf apache-eventmesh-1.10.0-source.tar.gz
cd apache-eventmesh-1.10.0-src/
```

You can also choose to clone the code from GitHub:

```shell
git clone https://github.com/apache/eventmesh.git
cd eventmesh/
```

### 2.3 Build

EventMesh is developed based on JDK8, and the binary distribution is also built based on JDK8. It is recommended to run EventMesh Runtime in a JDK8 environment.

#### Run in a JDK8 Environment

Some source code needs to be generated under JDK11:

```shell
./gradlew clean generateGrammarSource --parallel --daemon
```

The `generateGrammarSource` task will generate the source code required for `ANTLR` under the `org.apache.eventmesh.connector.jdbc.antlr4.autogeneration` package.

Next, build EventMesh Runtime under JDK8:

```shell
./gradlew clean dist -x spotlessJava -x generateGrammarSource --parallel --daemon
```

After the build is complete, proceed to [2.4 Package Plugins](#24-package-plugins).

> You can switch between JDK versions using `update-alternatives` or `JAVA_HOME` and check the current JDK version with `java -version`.

#### Run in a JDK11 Environment

If you want to use JDK11 as the runtime environment for EventMesh, execute:

```shell
./gradlew clean dist --parallel --daemon
```

After the build is complete, proceed to [2.4 Package Plugins](#24-package-plugins).

### 2.4 Package Plugins

The `installPlugin` task will copy the built plugins to the `dist` directory:

```shell
./gradlew installPlugin
```

EventMesh will load the plugins from the `plugin` directory based on the configuration in `eventmesh.properties`.

After a successful build, the `dist` directory in the project root contains the binary files for EventMesh. For configuration and startup, refer to [Binary Distribution Deployment](#1-binary-distribution-deployment).

## 3. Start from Source Code

### 3.1 Dependencies

- Recommended to use 64-bit Linux/Unix systems
- 64-bit JDK 8 or JDK 11
- [Gradle](https://docs.gradle.org/current/userguide/installation.html) 7.0+ (optional), the build commands provided in this document use the Gradle Wrapper, and you don't need to configure the Gradle environment yourself. You can also check the recommended Gradle version for your EventMesh version in the `gradle/wrapper/gradle-wrapper.properties` file and use your local Gradle version for compilation.
- It is recommended to use an IDE (Integrated Development Environment) to import EventMesh. `Intellij IDEA` is recommended as the IDE.

### 3.2 Download

Clone the code from GitHub:

```shell
git clone https://github.com/apache/eventmesh.git
cd eventmesh/
```

You can also download the Source Code release from [EventMesh Download](https://eventmesh.apache.org/download) and extract it:

```shell
wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-source.tar.gz
tar -xvzf apache-eventmesh-1.10.0-source.tar.gz
cd apache-eventmesh-1.10.0-src/
```

### 3.3 Project Structure Explanation

| Module Name                | Description                          |
| -------------------------- | ------------------------------------ |
| eventmesh-common           | EventMesh common classes and methods module |
| eventmesh-connector-api    | EventMesh Connector plugin interface definition module |
| eventmesh-connector-plugin | EventMesh Connector plugin module    |
| eventmesh-runtime          | EventMesh Runtime runtime module      |
| eventmesh-sdk-java         | EventMesh Java client SDK             |
| eventmesh-starter          | EventMesh local startup project entry point |
| eventmesh-spi              | EventMesh SPI loading module          |

> Plugin modules follow the SPI specification defined by EventMesh, and custom SPI interfaces need to be annotated with `@EventMeshSPI`.
>
> Plugin instances need to be configured in the corresponding module under the `/main/resources/META-INF/eventmesh` directory with a mapping file for interface and implementation classes. The file name is the fully qualified class name of the SPI interface.
>
> The content of the file is the mapping from the plugin instance name to the plugin instance. For details, refer to the `eventmesh-connector-rocketmq` plugin module.

### 3.4 Plugin Explanation

#### 3.4.1 Install Plugins

EventMesh has an SPI mechanism that allows EventMesh to discover and load plugins. There are two ways to install plugins:

- Classpath loading: During local development, you can add dependencies in the `build.gradle` of the `eventmesh-starter` module. For example, to add the Kafka Connector plugin:

```groovy
dependencies {
   implementation project(":eventmesh-runtime")
    // Example: Add the Kafka Connector plugin
   implementation project(":eventmesh-connectors:eventmesh-connector-kafka")
}
```

- File loading: By installing the plugin to the plugin directory, EventMesh will automatically load the plugins in the plugin directory based on certain conditions during runtime. Please refer to [2.3 Build](#23-build) and [2.4 Package Plugins](#24-package-plugins).

>When you make changes to the source code, it is recommended to add the `build` task to the command provided in [2.3 Build](#23-build) to recompile and run unit tests. For example:
>
>```shell
>./gradlew clean build dist -x spotlessJava -x generateGrammarSource --parallel --daemon
>```

#### 3.4.2 Use Plugins

EventMesh will load the plugins by default from the `dist/plugin` directory. You can change the plugin directory using `-DeventMeshPluginDir=your_plugin_directory`. The plugin instances needed at runtime can be configured in the `confPath` directory in the `eventmesh.properties` file. For example, by setting the following, you declare the use of the RocketMQ Connector plugin:

```properties
# connector plugin
eventMesh.connector.plugin.type=rocketmq
```

### 3.5 Configure VM Options

```properties
-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml
-Deventmesh.log.home=eventmesh-runtime/logs
-Deventmesh.home=eventmesh-runtime
-DconfPath=eventmesh-runtime/conf
```

If the operating system is Windows, replace the forward slash with a backslash `\`.

### 3.6 Start

Run the `main()` method of the `org.apache.eventmesh.starter.StartUp` class in the `eventmesh-starter` module to start EventMesh Runtime.

### 3.7 Stop

When the following logs are printed to the console, EventMesh Runtime has stopped.

```
DEBUG StatusConsoleListener Shutdown hook enabled. Registering a new one.
WARN StatusConsoleListener Unable to register Log4j shutdown hook because JVM is shutting down. Using SimpleLogger
```