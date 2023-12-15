# Event Bridge

![event-bridge](/images/eventmesh-bridge.png)

Event Bridge supports message delivery across mesh clusters. Below is a detailed design and experience steps for this feature.

![event-bridge-detail](/images/design-document/event-bridge-detail.png)

> Note: To experience this feature locally, you need to start two EventMesh instances and modify the port configuration in the `eventmesh-runtime` directory's `eventmesh.properties` file to avoid port conflicts. For the sake of the following descriptions, the event-bridge feature is presented according to the information in the above diagram.

## 01 Remote Subscription

**Description**: Initiates a remote subscription command to cluster2 EventMesh. Upon receiving the command, cluster2 EventMesh will invoke the local subscription interface of cluster1 EventMesh with the subscription information.

**URL**: http://{cluster2 address}/eventmesh/subscribe/remote

**Request Method**: POST

**Request Parameters**: application/json format

| Parameter      | Type   | Required | Description                                                  |
| -------------- | ------ | -------- | ------------------------------------------------------------ |
| url            | String | Yes      | Identifies the subscription URL, temporarily useless, will be replaced by (/eventmesh/bridge/publish) later, currently only for strong validation, will actually be replaced by the cluster2 EventMesh configuration information |
| consumerGroup  | String | Yes      | Identifies the consumer group information, will be replaced by the configuration information of cluster2 EventMesh |
| topic          | List   | Yes      | Identifies the subscription information list                 |
| mode           | String | Yes      | Identifies the consumption mode, divided into clustering mode and broadcast mode |
| topic          | String | Yes      | Identifies the subscribed topic                               |
| type           | String | Yes      | Identifies the consumption type, divided into synchronous and asynchronous |
| remoteMesh     | String | No       | Identifies the remote mesh address, prioritized by obtaining from the registration center based on the topic, if not obtained, use this field to replace |

**Request Example**:

```json
{
  "url": "http://127.0.0.1:8088/sub/test",
  "consumerGroup": "TEST-GROUP",
  "topic": [
    {
      "mode": "CLUSTERING",
      "topic": "TEST-TOPIC-HTTP-ASYNC",
      "type": "ASYNC"
    }
  ],
  "remoteMesh" : "http://127.0.0.1:10105/eventmesh/subscribe/local"
}
```

## 02 Local Subscription

**Description**: Initiates a local subscription command to cluster2 EventMesh. Upon receiving the subscription command, cluster2 EventMesh will start locally listening for messages received from Event Store and push them to the URL in the subscription information.

**URL**: http://{cluster2 address}/eventmesh/subscribe/local

**Request Method**: POST

**Request Parameters**: application/json format

| Parameter      | Type   | Required | Description                                                  |
| -------------- | ------ | -------- | ------------------------------------------------------------ |
| url            | String | Yes      | Identifies the subscription URL                               |
| consumerGroup  | String | Yes      | Identifies the consumer group information                    |
| topic          | List   | Yes      | Identifies the subscription information list                 |
| mode           | String | Yes      | Identifies the consumption mode, divided into clustering mode and broadcast mode |
| topic          | String | Yes      | Identifies the subscribed topic                               |
| type           | String | Yes      | Identifies the consumption type, divided into synchronous and asynchronous |

**Request Example**:

```JSON
{
  "url": "http://127.0.0.1:8088/sub/test",
  "consumerGroup": "TEST-GROUP",
  "topic": [
    {
      "mode": "CLUSTERING",
      "topic": "TEST-TOPIC-HTTP-ASYNC",
      "type": "ASYNC"
    }
  ]
}
```

## 03 Send Message

**Description**: Sends a message to cluster1 EventMesh. Upon receiving the message, cluster1 EventMesh will send it to Event Store, and then push the message received from Event Store to the URL `/eventmesh/bridge/publish` of cluster2 EventMesh.

**URL**: http://{cluster1 address}/eventmesh/publish/TEST-TOPIC-HTTP-ASYNC

**Request Method**: POST

**Request Parameters**: application/json format

**Request Example**:

```json
{
    "name":"test",
    "age":"19"
}
```

## 04 Remote Unsubscribe

**Description**: Sends an unsubscribe command to cluster2 EventMesh. Upon receiving the command, cluster2 EventMesh will send it to cluster1 EventMesh, and cluster1 EventMesh will locally execute the unsubscribe.

**URL**: http://{cluster2 address}/eventmesh/unsubscribe/remote

**Request Method**: POST

**Request Parameters**: application/json format

| Parameter      | Type   | Required | Description                                                  |
| -------------- | ------ | -------- | ------------------------------------------------------------ |
| url            | String | Yes      | Identifies the URL to unsubscribe, temporarily useless, will be replaced by (/eventmesh/bridge/publish) later, currently only for strong validation, will actually be replaced by the group information of cluster2 eventmesh |
| consumerGroup  | String | Yes      | Identifies the consumer group information to unsubscribe from, will use the group information of EventMesh cluster2 to replace |
| topic          | List   | Yes      | Identifies the subscription topic information list            |

**Request Example**:

```json
{
  "consumerGroup": "EventMeshTest-consumerGroup",
  "url": "http://127.0.0.1:8088/sub/test",
  "topic": [
    "TEST-TOPIC-HTTP-ASYNC"
  ]
}
```

## 05 Local Unsubscribe

**Description**: Sends an unsubscribe command to cluster2 EventMesh. Upon receiving the command, cluster2 EventMesh will locally execute the unsubscribe.

**URL**: http://{cluster2 address}/eventmesh/unsubscribe/local

**Request Method**: POST

**Request Parameters**: application/json format

| Parameter      | Type   | Required | Description                  |
| -------------- | ------ | -------- | ---------------------------- |
| url            | String | Yes      | Identifies the URL to unsubscribe from |
| consumerGroup  | String | Yes      | Identifies the consumer group information to unsubscribe from |
| topic          | List   | Yes      | Identifies the subscription topic information list |

**Request Example**:

```json
{
  "consumerGroup": "EventMeshTest-consumerGroup",
  "url": "http://127.0.0.1:8088/sub/test",
  "topic": [
    "TEST-TOPIC-HTTP-ASYNC"
  ]
}
```
