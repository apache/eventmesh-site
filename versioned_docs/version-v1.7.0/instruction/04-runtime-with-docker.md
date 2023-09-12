# EventMesh Runtime with Docker

The documentation introduces the steps to install the latest release of EventMesh Runtime with Docker and connect to Apache RocketMQ. It's recommended to use a Linux-based system with [Docker Engine](https://docs.docker.com/engine/install/). Please follow the [Docker tutorial](https://docs.docker.com/get-started/) to get familiar with the basic concepts (registry, volume, etc.) and commands of Docker.

## 1. Dependencies

```
64-bit OS，we recommend Linux/Unix；
64-bit JDK 1.8+;
Gradle 7.0+, we recommend 7.0.*
4g+ available disk to deploy eventmesh-store
If you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.
```

## 2. Pull EventMesh Image

Download the pre-built image of [`eventmesh`](https://hub.docker.com/r/eventmesh/eventmesh) from Docker Hub with `docker pull`:

```console
sudo docker pull eventmesh/eventmesh:v1.4.0
```

To verify that the `eventmesh/eventmesh` image is successfully installed, list the downloaded images with `docker images`:

```console
$ sudo docker images
REPOSITORY            TAG       IMAGE ID       CREATED         SIZE
eventmesh/eventmesh   v1.4.0    6e2964599c78   16 months ago   937MB
```

![runtime_docker_1](/images/install/runtime_docker_1.png)

## 3. Edit Configuration

Edit the `eventmesh.properties` to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime. To integrate RocketMQ as a connector, these two configuration files should be created: `eventmesh.properties` and `rocketmq-client.properties`.

```shell
sudo mkdir -p /data/eventmesh/rocketmq/conf
cd /data/eventmesh/rocketmq/conf
sudo touch eventmesh.properties
sudo touch rocketmq-client.properties
```

![runtime_docker_2](/images/install/runtime_docker_2.png)

### 4. Configure `eventmesh.properties`

The `eventmesh.properties` file contains the properties of EventMesh runtime environment and integrated plugins. Please refer to the [default configuration file](https://github.com/apache/eventmesh/blob/master/eventmesh-runtime/conf/eventmesh.properties) for the available configuration keys.

```shell
sudo vim eventmesh.properties
```

| Configuration Key | Default Value |  Description |
|-|-|-|
| `eventMesh.server.http.port` | 10105 | EventMesh HTTP server port |
| `eventMesh.server.tcp.port` | 10000 | EventMesh TCP server port  |
| `eventMesh.server.grpc.port` | 10205 | EventMesh gRPC server port |

### 5. Configure `rocketmq-client.properties`

The `rocketmq-client.properties` file contains the properties of the Apache RocketMQ nameserver.

```shell
sudo vim rocketmq-client.properties
```

Please refer to the [default configuration file](https://github.com/apache/eventmesh/blob/1.3.0/eventmesh-runtime/conf/rocketmq-client.properties) and change the value of `eventMesh.server.rocketmq.namesrvAddr` to the nameserver address of RocketMQ.

| Configuration Key | Default Value | Description |
|-|-|-|
| `eventMesh.server.rocketmq.namesrvAddr` | `127.0.0.1:9876;127.0.0.1:9876` | The address of RocketMQ nameserver |

## 6. Run and Manage EventMesh Container

Run an EventMesh container from the `eventmesh/eventmesh` image with the `docker run` command. The `-p` option of the command binds the container port with the host machine port. The `-v` option of the command mounts the configuration files from files in the host machine.

```shell
sudo docker run -d -p 10000:10000 -p 10105:10105 \
-v `pwd`/data/eventmesh/rocketmq/conf/eventmesh.properties:/data/app/eventmesh/conf/eventmesh.properties \
-v `pwd`/data/eventmesh/rocketmq/conf/rocketmq-client.properties:/data/app/eventmesh/conf/rocketmq-client.properties \
eventmesh/eventmesh:v1.4.0
```

The `docker ps` command lists the details (id, name, status, etc.) of the running containers. The container id is the unique identifier of the container.

```shell
$ sudo docker ps
CONTAINER ID   IMAGE                        COMMAND                  CREATED         STATUS         PORTS                                                                                          NAMES
5bb6b6092672   eventmesh/eventmesh:v1.4.0   "/bin/sh -c 'sh star…"   5 seconds ago   Up 3 seconds   0.0.0.0:10000->10000/tcp, :::10000->10000/tcp, 0.0.0.0:10105->10105/tcp, :::10105->10105/tcp   eager_driscoll
```

![runtime_docker_3](/images/install/runtime_docker_3.png)

As you can see from this message, the ```container id``` is ``5bb6b6092672``, and the ```name`` is ``eager_driscoll``, and they can both be used to uniquely identify this container. **Note**: On your computer, their values may be different from the ones here.

## 7. Managing EventMesh Containers

After successfully running an EventMesh container, you can manage the container by entering it, viewing logs, deleting it, and so on.


To connect to the EventMesh container:

```shell
sudo docker exec -it [container id or name] /bin/bash
```

To read the log of the EventMesh container:

```shell
tail -f ../logs/eventmesh.out
```

![runtime_docker_4](/images/install/runtime_docker_4.png)

To stop or remove the container:

```shell
sudo docker stop [container id or name]

sudo docker rm -f [container id or name]
```

![runtime_docker_5](/images/install/runtime_docker_5.png)

## 8. Explore more

Now that EventMesh is running through a container, you can refer to the [``eventmesh-examples`` module](https://github.com/apache/eventmesh/tree/master/eventmesh-examples) to write and test your own code.

I hope you enjoy the process and get more out of it!