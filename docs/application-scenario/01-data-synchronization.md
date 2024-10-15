# Data Synchronization

*   **Application Scenario Name**

&emsp;&emsp;**Data Synchronization**
 

*   **Application Scenario Description**

&emsp;&emsp;Large enterprises typically have central data management platforms that connect multiple business systems.Upstream business systems often need to distribute data to multiple downstream systems, while each of these systems may also perform asynchronous data changes, additions, and deletions. This requires efficient data synchronization.Traditional data synchronization methods typically rely on message queues or request/response models, but both approaches have limitations: the message queue approach makes it difficult to segment data for different business units, leading to data management challenges; the request/response model, on the other hand, puts a significant performance burden on the central data management platform, resulting in high coupling that hampers system upgrades and maintenance.

&emsp;&emsp;Therefore, EventMesh is introduced to handle user data synchronization based on the Event-Driven Architecture (EDA). The data management center only needs to publish data change information to different event sources. Each business system can then configure event targets and subscribe to the relevant event sources to achieve data synchronization. During the subscription process, business systems can bind transformation rules (for data splitting and desensitization) and filtering rules to decouple the system architecture.
  
*   **Application Scenario Implementation Proposal**

&emsp;&emsp;In the data synchronization scenario, Geely Auto implemented an event integration platform based on EventMesh. For example, in Geely's user center system, most internal business systems cache user data locally after integrating with the user center. As these business systems frequently modify user data asynchronously, there is a strong demand for data synchronization.

<div align="center">
<img src="/images/application-scenario/s1_img1.png" width="80%" />
</div>

&emsp;&emsp;Geely Automobile's event integration platform, built on EventMesh, enables the user center to publish new and changed user data as "events" within an event-driven architecture. Business systems subscribe to event sources to retrieve necessary user data updates. For instance, the finance system may only be interested in payment information updates, while the customer service system cares about contact information changes.

&emsp;&emsp;To address the unique data needs of different business systems, the platform utilizes EventMesh's filter/transformer capabilities. Event sources are configured with transformation and filtering rules, enabling business systems to subscribe and process user data splitting and desensitization. This approach decouples direct interactions between the business systems and the user center while reducing the performance load on the user center.

&emsp;&emsp;To ensure high performance and availability, Geely Automobile's event integration platform is deployed using a multi-region, multi-cluster, cross-cloud architecture, catering to data from various business areas. Different business systems can consume events across regions, clusters, and clouds, enabling data access and synchronization while minimizing data synchronization latency. This architecture ensures stable system operation,even under high concurrency conditions.

*   **Reference**

&emsp;&emsp;["Apache EventMesh the event grid helps build an event platform" in CommunityOverCode Asia 2024](https://asia.communityovercode.org/)

&emsp;&emsp;["How Geely Automobile implements event integration platform based on EventMesh to promote efficient business integration"](https://mp.weixin.qq.com/s/BLHbIq5KyjnhoVlmw9_DBw)