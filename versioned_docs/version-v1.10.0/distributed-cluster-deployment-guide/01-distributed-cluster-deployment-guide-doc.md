## Distributed Consistency Protocol for EventMesh
- **Current State:**
  - Kafka utilizes KRaft for in-sync replication among brokers.
  - Event-mesh does not fully implement JRaft.
  - A partially functional JRaft PR has been merged, but it requires a fixed cluster list defined in the `eventmesh.properties` file (immutable).
  - This limits elastic scaling of EventMesh cluster nodes.
- **JRaft Potential:**
  - JRaft allows for elastic scaling by dynamically discovering new clusters.
  - Nodes can be added by specifying IP and port in `eventmesh.properties`.
  - Leader election occurs if the leading node fails.
  - Recovered leading nodes become followers.
- **Impact on Registry Center:**
  - Implementing JRaft eliminates the need for Nacos as a registry center.
  - Existing SDK pattern relies on static IP insertion in `eventmesh.properties`.
  - Node failure results in service failure.
- **Solutions:**
  - **Gateway Proxy Layer:** A future solution for the new architecture. Like Nginx.
  - **JRaft Protocol:** Enables dynamic scaling and cluster discovery.

**Next Steps:**
- Evaluating the feasibility of fully functional JRaft implementation for dynamic cluster management.
- Or using reverse proxy like Nginx to achieve the cluster register.