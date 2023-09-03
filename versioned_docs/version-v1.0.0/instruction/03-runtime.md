# EventMesh Runtime

EventMesh Runtime is the core component of Apache EventMesh. It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+.

Here, we take JDK 8 as an example. JDK 8 could be installed with the system package manager or the [openjdk:8-jdk](https://hub.docker.com/_/openjdk) Docker image.

## 1 Run on your local machine

### 1.1 Dependencies

```
64-bit OS，we recommend Linux/Unix；
64-bit JDK 1.8+;
Gradle 7.0+, we recommend 7.0.*;
4g+ available disk to deploy eventmesh-store;
```

Gradle is the build automation tool used by Apache EventMesh. Please refer to the [offical guide](https://docs.gradle.org/current/userguide/installation.html) to install the latest release of Gradle.

### 1.2 Download Source Code

Download and extract the source code of the latest release from [EventMesh download](https://eventmesh.apache.org/download). For example, with the current latest version, you will get `apache-eventmesh-1.9.0-source.tar.gz`.

```console
tar -xvzf apache-eventmesh-1.9.0-source.tar.gz
cd apache-eventmesh-1.9.0-src/
```

![runtime_1](/images/install/runtime_1.png)

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

### 1.3 Build and Load Plugins

Apache EventMesh introduces the SPI (Service Provider Interface) mechanism, which enables EventMesh to discover and load the plugins at runtime. The plugins could be installed with these methods:

- Gradle Dependencies: Declare the plugins as the build dependencies in `eventmesh-starter/build.gradle`.

```gradle
dependencies {
   implementation project(":eventmesh-runtime")

   // Example: Load the RocketMQ plugin
   implementation project(":eventmesh-connector-plugin:eventmesh-connector-rocketmq")
}
```

- Plugin directory: EventMesh loads the plugins in the `dist/plugin` directory based on `eventmesh.properties`. The `installPlugin` task of Gradle builds and moves the plugins into the `dist/plugin` directory.

```console
gradle installPlugin
```

![runtime_5](/images/install/runtime_5.png)

### 1.4 启动Runtime

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
4g+ available disk to deploy eventmesh-store;
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

![runtime_6](/images/install/runtime_6.png)


View the output log:

```console
cd /root/apache-eventmesh-1.9.0/logs
tail -f eventmesh.out
```
![runtime_7](/images/install/runtime_7.png)

You can stop the run with the following command：

```console
bash bin/stop.sh
```

![runtime_8](/images/install/runtime_8.png)
![runtime_9](/images/install/runtime_9.png)
