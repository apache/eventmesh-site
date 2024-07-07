# Distributed Consistency Protocol for EventMesh
## **Background Knowledge and Current State:**
* Kafka utilizes KRaft for insync replication of message from main broker to following brokers.
* In order to prevent the loss of messages, Kafka has a leadership election mechanism
* EventMesh does not fully implement JRaft protocol.
* A partially functional JRaft PR has been merged, but it requires a fixed IP cluster list defined in the `eventmesh.properties` file (immutable after initiation). Once a node fails the whole cluster fails. This limits elastic scaling of EventMesh cluster nodes during runtime.

## **Using a Distributed Consistency Protocol:**
### **Solutions: Implement fully functional JRaft Protocol Interface**
**Result**
* Enables dynamic scaling and dynamic cluster discovery.
* If a main node registers in the cluster it will be the main node and start to sync the message among followers.  
* Leader election occurs if the leading node fails.
Recovered leading node will become a follower.
* Node failure will no longer results in service failure.
* Once implement the Jraft interface no need to deploy Nacos.

## **Using the Reverse Proxy:**
**Current State:** Nginx can be the reverse proxy of EventMesh. In the SDK we set the Nginx IP address, Nginx will transfer the subscription address to a EventMesh runtime.  
### **Solutions: Add Gateway Proxy Layer:** A next generation of functional solution for the new architecture. Like Nginx. 
**Current Flaws**
* Nginx is not in EventMesh eco-system, It can't percept the EventMesh runtime state like online or offline.
* Once the runtime node is down the client have nothing to do but connect to another runtime node, at that time the runtime just sync the subscription infomation from the Nacos.(Currently we don't have the toggle stream mechanism and we don't have further plan of solution).
* Currently failover mechanism is not functional.