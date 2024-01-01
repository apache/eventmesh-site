# EventMesh Runtime with Docker

You can deploy EventMesh Runtime using Docker. This document provides an example of deploying it with RocketMQ as Event Store, but you can also choose another [Event Store supported by EventMesh](https://github.com/apache/eventmesh/tree/master/eventmesh-storage-plugin).

## 1. Prerequisites

1. It is recommended to use a 64-bit Linux system.
2. Ensure Docker Engine is installed. Refer to the [official Docker documentation](https://docs.docker.com/engine/install/) for the installation process.
3. Familiarity with basic Docker concepts and command-line operations (e.g., registry, mounting) is recommended but not mandatory, as the required commands are provided.
4. If you choose a non-standalone mode, ensure that [RocketMQ is successfully started](https://rocketmq.apache.org/docs/quick-start/) and accessible via IP address. If you stick to the default standalone mode, RocketMQ doesn't need to be deployed.

## 2. Pull the EventMesh Runtime Image

First, open a command line and use the following `pull` command to download the [latest version of EventMesh](https://eventmesh.apache.org/events/release-notes/) from [Docker Hub](https://hub.docker.com/r/apache/eventmesh/tags).

```shell
sudo docker pull apache/eventmesh:latest
```

You can use the following command to list and view the locally available images.

```shell
sudo docker images
```

If the terminal displays image information similar to the following, it indicates that the EventMesh image has been successfully downloaded locally.

```shell
$ sudo docker images
REPOSITORY         TAG       IMAGE ID       CREATED      SIZE
apache/eventmesh   latest    f32f9e5e4694   2 days ago   917MB
```

## 3. Mount Configuration Files

If you are starting EventMesh Runtime in standalone mode and haven't customized the configuration, you can proceed to the next step.

First, create the EventMesh configuration file directory on the host machine. This directory can be freely specified:

```shell
sudo mkdir -p /data/eventmesh/conf
cd /data/eventmesh/conf
```

### 3.1 EventMesh Runtime Configuration

This configuration file includes parameters required for the EventMesh Runtime environment and integration with other plugins.

Download the configuration file (replace `1.10.0` in the download link with the version you are using):

```shell
sudo wget https://raw.githubusercontent.com/apache/eventmesh/1.10.0-prepare/eventmesh-runtime/conf/eventmesh.properties
```

Edit `eventmesh.properties`:

```shell
sudo vim eventmesh.properties
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

### 3.2 Event Store Configuration

In the case of RocketMQ, the configuration file includes parameters required to connect to the RocketMQ namesrv.

Download the configuration file (replace `1.10.0` in the download link with the version you are using):

```shell
sudo wget https://raw.githubusercontent.com/apache/eventmesh/1.10.0-prepare/eventmesh-storage-plugin/eventmesh-storage-rocketmq/src/main/resources/rocketmq-client.properties
```

Edit `rocketmq-client.properties`:

```shell
sudo vim rocketmq-client.properties
```

If the namesrv address you are running is different from the default value in the configuration file, modify it to the actual running namesrv address.

| Property                                  | Default                        | Remarks                            |
| ----------------------------------------- | ------------------------------ | ----------------------------------- |
| eventMesh.server.rocketmq.namesrvAddr     | 127.0.0.1:9876;127.0.0.1:9876  | RocketMQ namesrv address           |

>If you are unable to download the configuration files using the provided links, you can find all the configuration files in the `conf` path of the EventMesh binary distribution.

## 4. Run the EventMesh Runtime Container

Use the following command to start the EventMesh container:

```shell
sudo docker run -d --name eventmesh -p 10000:10000 -p 10105:10105 -p 10205:10205 -p 10106:10106 -v /data/eventmesh/conf/eventmesh.properties:/data/app/eventmesh/conf/eventmesh.properties -v /data/eventmesh/conf/rocketmq-client.properties:/data/app/eventmesh/conf/rocketmq-client.properties -t apache/eventmesh:latest
```

Explanation of `docker run` command parameters:

- `-p <host port>:<container port>`: Bind the container port to the host port. If you modified the default ports in EventMesh Runtime configuration or if the host's ports are already occupied, modify them accordingly.
- `-v <host path>:<container path>`: Mount the configuration files from the host to the container. If the path where you store EventMesh configuration files is not `/data/eventmesh/conf`, modify the host path accordingly. If you haven't customized the configuration files, please remove this parameter.
- `--name eventmesh`: Custom name for the container. This name must be unique.
- `-t apache/eventmesh:latest`: Image used by the container.

After executing the `docker run` command, the container ID will be returned. Use the following command to view the status of all running containers:

```shell
sudo docker ps
```

It will print:

```shell
CONTAINER ID   IMAGE                      COMMAND               CREATED          STATUS         PORTS                                                                                                                                                                 NAMES
b7a1546ee96a   apache/eventmesh:latest   "bash bin/start.sh"   10 seconds ago   Up 8 seconds   0.0.0.0:10000->10000/tcp, :::10000->10000/tcp, 0.0.0.0:10105-10106->10105-10106/tcp, :::10105-10106->10105-10106/tcp, 0.0.0.0:10205->10205/tcp, :::10205->10205/tcp   eventmesh
```

If the EventMesh Runtime container is not in the list printed by this command, it means the container failed to start. You can use the following command to view the logs at the time of startup (replace `eventmesh` with the container name or ID you specified):

```shell
sudo docker logs eventmesh
```

## 5. View EventMesh Logs

After successfully starting the EventMesh container, you can follow these steps to view the logs output by EventMesh and check the runtime status.

Enter the container (replace `eventmesh` with the container name or ID you specified):

```shell
sudo docker exec -it eventmesh /bin/bash
```

View the logs:

```shell
cd logs
tail -n 50 -f eventmesh.out
```

When the log output shows `server state:RUNNING`, it means EventMesh Runtime has started successfully.

## 6. Build EventMesh Runtime Image (Optional)

EventMesh is developed based on JDK8. The binary distribution and container image are built based on JDK8 and are also compatible with JDK11.

To run the container in a JDK8 environment, execute the following command in the root directory of the EventMesh source code:

```shell
sudo docker build -t yourname/eventmesh:yourtag -f docker/Dockerfile_jdk8 .
```

If you want to use JDK11 as the container's runtime environment, execute:

```shell
sudo docker build -t yourname/eventmesh:yourtag -f docker/Dockerfile_jdk11 .
```