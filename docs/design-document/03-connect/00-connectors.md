# Connectors

## Connector

A connector is an image or instance that interacts with a specific external service or underlying data source (e.g., Databases) on behalf of user applications. A connector is either a Source or a Sink.

Connector runs as a standalone service by `main()`.

## Source

A source connector obtains data from an underlying data producer, and delivers it to targets after original data has been transformed into CloudEvents. It doesn't limit the way how a source retrieves data. (e.g., A source may pull data from a message queue or act as an HTTP server waiting for data sent to it).

## Sink

A sink connector receives CloudEvents and does some specific business logics. (e.g., A MySQL Sink extracts useful data from CloudEvents and writes them to a MySQL database).

## CloudEvents

A specification for describing event data in common formats to provide interoperability across services, platforms and systems.

## Implements

Add a new connector by implementing the source/sink interface using [eventmesh-openconnect-java](https://github.com/apache/eventmesh/tree/master/eventmesh-openconnect/eventmesh-openconnect-java).

## Technical Solution

### Structure and process

![source-sink connector architecture](../../../static/images/design-document/connector-architecture.png)

### Design Detail

![eventmesh-connect-detail](../../../static/images/design-document/connector-design-detail.png)

### Description

#### Worker

Worker is divided into Source Worker and Sink Worker, which are triggered by the `Application` class and implement the methods of the `ConnectorWorker` interface respectively, which include the worker's running life cycle, and the worker carries the running of the connector. Workers can be lightweight and independent through mirroring Running, the eventmesh-sdk-java module is integrated internally, and the CloudEvents protocol is used to interact with EventMesh. Currently, the TCP client is used by default. In the future, support for dynamic configuration can be considered.

#### Connector

Connectors are divided into Source Connector and Sink Connector. Connectors have their own configuration files and run independently. Workers perform reflective loading and configuration analysis to complete Connector initialization and subsequent operation. Source Connector implements the poll method, and Sink Connector implements The put method uniformly uses `ConnectorRecord` to carry data. Both Source Connector and Sink Connector can operate independently.

#### ConnectorRecord with CloudEvents

`ConnectorRecord` is a connector layer data protocol. When workers interact with EventMesh, a protocol adapter needs to be developed to convert `ConnectorRecord` to CloudEvents protocol.

#### Registry

The Registry module is responsible for storing the synchronization progress of synchronizing data of different Connector instances, ensuring high availability between multiple Connector images or instances.
