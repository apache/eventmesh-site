# EventMesh Runtime Quick Start

The EventMesh Runtime is a stateful mesh node in an EventMesh cluster that is responsible for event transfer between the Source Connector and the Sink Connector, and can use Event Store as a storage queue for events.

![EventMesh Runtime](/images/design-document/runtime.png)

## 1 Run on your local machine

### 1.1 Run from source code

#### 1.1.1 Dependencies

- 64-bit OS, we recommend Linux/Unix.

- 64-bit JDK 1.8 or JDK 11

- Gradle 7.0+, The recommended version can be found in the `gradle/wrapper/gradle-wrapper.properties` file.

#### 1.1.2 Download source code

Download and extract the source code of the latest release from [EventMesh download](https://eventmesh.apache.org/download). For example, with the current latest version, you will get `apache-eventmesh-1.9.0-source.tar.gz`.

#### 1.1.3 Run form local

**1.1.3.1 Description of the project structure:**

- eventmesh-common : EventMesh public classes and methods module
- eventmesh-connector-api : EventMesh Connector plugin interface definition module
- eventmesh-connector-plugin : EventMesh Connector plugin module
- eventmesh-runtime : EventMesh Runtime module
- eventmesh-sdk-java : EventMesh Java client SDK
- eventmesh-starter : EventMesh Runtime local startup and project portal
- eventmesh-spi : EventMesh SPI loader module

> Note: Plugin modules follow the SPI specification defined by eventmesh, custom SPI interfaces need to be marked with the annotation `@EventMeshSPI`.
>
> Plugin instances need to be configured in the corresponding module under `/main/resources/META-INF/eventmesh` with a mapping file of the relevant interfaces to their implementation classes, with the name of the file being the full class name of the SPI interface.
>
> The content of the file is the mapping from the plugin instance name to the plugin instance, see eventmesh-connector-rocketmq plugin module for details.

**1.1.3.2 Plugin Description**

***1.1.3.2.1 Installing the plugin***

There are two ways to install the plugin

- classpath loading: Local developers can install the plugin by declaring it in the eventmesh-starter module build.gradle, e.g., declare that it uses the rocketmq plugin

```gradle
   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")
```

- File loading: By installing the plugin to the plugin directory, EventMesh will automatically load the plugins in the plugin directory according to the conditions at runtime, you can install the plugin by executing the following command

```shell
. /gradlew clean jar dist && . /gradlew installPlugin
```

***1.1.3.2.2 Using Plugins ***

EventMesh will load plugins in the `dist/plugin` directory by default, you can change the plugin directory with `-DeventMeshPluginDir=your_plugin_directory`. Examples of plugins to be used at runtime can be found in the
`confPath` directory under `eventmesh.properties`. For example declare the use of the rocketmq plugin at runtime with the following settings.

```properties
#connector plugin
eventMesh.connector.plugin.type=rocketmq
```

**1.1.3.3 Configuring the VM startup parameters**

```properties
-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml
-Deventmesh.log.home=eventmesh-runtime/logs
-Deventmesh.home=eventmesh-runtime
-DconfPath=eventmesh-runtime/conf
```

> Note: If your operating system is Windows, you may need to replace the file separator with '\'.

**1.1.3.4 Getting up and running**

```
Run org.apache.eventmesh.starter.
```

### 1.2 Run form local binary

#### 1.1.1 Dependencies

- 64-bit OS, we recommend Linux/Unix.

- 64-bit JDK 1.8 or JDK 11

- Gradle 7.0+, The current recommended version can be found in the `gradle/wrapper/gradle-wrapper.properties` file.

Gradle is the build automation tool used by Apache EventMesh. Please refer to the [offical guide](https://docs.gradle.org/current/userguide/installation.html) to install the latest release of Gradle.

### 1.1.2 Download Source Code

Download and extract the source code of the latest release from [EventMesh download](https://eventmesh.apache.org/download). For example, with the current latest version, you will get `apache-eventmesh-1.9.0-source.tar.gz`.

```console
tar -xvzf apache-eventmesh-1.9.0-source.tar.gz
cd apache-eventmesh-1.9.0-src/
```

Build the source code with Gradle.

```console
gradle clean dist
```

![runtime_2](/images/install/runtime_2.png)

Edit the `eventmesh.properties` to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime.

```console
cd dist
vim conf/eventmesh.properties
```

### 1.1.3 Build and Load Plugins

Apache EventMesh  introduces the SPI (Service Provider Interface) mechanism, which enables EventMesh to discover and load the plugins at runtime. The plugins could be installed with these methods:

- Gradle Dependencies: Declare the plugins as the build dependencies in `eventmesh-starter/build.gradle`.

```gradle
dependencies {
   implementation project(":eventmesh-runtime")

   // Example: Load the RocketMQ plugin
   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")
}
```

- Plugin directory: EventMesh loads the plugins in the `dist/plugin` directory based on `eventmesh.properties`. The `installPlugin` task of Gradle builds and moves the plugins into the `dist/plugin` directory.

```console
gradle installPlugin
```

### 1.1.4 启动 Runtime

Execute the `start.sh` script to start the EventMesh Runtime server.

```console
bash bin/start.sh
```

![runtime_4](/images/install/runtime_4.png)

View the output log:

```console
tail -f logs/eventmesh.out
```

![runtime_3](/images/install/runtime_3.png)

## 2 Remote deployment

### 2.1 Dependencies

```
64-bit OS，we recommend Linux/Unix；
64-bit JDK 1.8+;
Gradle 7.0+, we recommend 7.0.*;
4GB+ available disk to deploy Event Store;
```

### 2.2 Download

Download and extract the executable binaries of the latest release from [EventMesh download](https://eventmesh.apache.org/download).For example, with the current latest version, you will get `apache-eventmesh-1.9.0.tar.gz`.


```console
tar -xvzf apache-eventmesh-1.9.0-bin.tar.gz
cd apache-eventmesh-1.9.0
```

### 2.3 Deploy

Edit the `eventmesh.properties` to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime. The executable binaries contain all plugins in the bundle, thus there's no need to build them from source code.

```console
vim conf/eventmesh.properties
```

Execute the `start.sh` script to start the EventMesh Runtime server.

```console
bash bin/start.sh
```

If you see "EventMeshTCPServer[port=10000] started...." , then the setup was successful.

![runtime_6](/images/install/runtime_6.png)


View the output log:

```console
cd /root/apache-eventmesh-1.9.0/logs
tail -f eventmesh.out
```

![runtime_7](/images/install/runtime_7.png)

You can stop the run with the following command:

```console
bash bin/stop.sh
```

![runtime_8](/images/install/runtime_8.png)

![runtime_9](/images/install/runtime_9.png)