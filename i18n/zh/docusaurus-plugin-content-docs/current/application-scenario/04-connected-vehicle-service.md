# Serverless化车联网解决方案

*   **应用场景名称**

&emsp;&emsp;**Serverless化车联网解决方案**
 

*   **应用场景描述**

&emsp;&emsp;车联网场景下，由于汽车数量庞大，且车企旗下存在多种不同型号的新老车型，车企数据处理的业务量巨大。一辆汽车有上百种传感器，不停在产生数据，且在早晚用车高峰的场景下，车联网数据将会激增；同时汽车行业缺少车联网开发套件来降低开发成本和缩短上线时间，对Serverless化车联网业务解决方案有着广泛需求。

&emsp;&emsp;Serverless化车联网业务解决方案可使用 `EventMesh` 作为事件总线与事件中心。来自汽车各传感器、GPS设备和云平台的海量数据可通过API网关或者利用IOTS设备接入，数据经由事件驱动的架构处理后，能够提供实时响应，在高峰流量期间（如早晚高峰）实现流畅的扩展。


*   **应用场景实施方案**

&emsp;&emsp;基于 `EventMesh` 的Serverless化车联网业务解决方案，在事件驱动的架构上灵活扩展，自动伸缩，满足了高并发，快速弹性的需求，在数据高峰期动态扩展，以实现高并发数据处理；`EventMesh` 同时提供了灵活的路由能力，通过不同的配置规则，可将事件路由到不同的系统与服务。

<div align="center">
<img src="/images/application-scenario/s4_img1_zh.png" width="80%"/>
</div>

&emsp;&emsp;上图为Serverless化车联网业务解决方案的简要示意图，首先基于`EventMesh` 的filter\transformer能力，进行数据清洗过滤与函数计算处理，数据处理后将进行分布式对象存储并产生事件。`EventMesh` 根据不同的配置规则，将事件路由至相应的服务（包括削峰填谷的消费服务、AI智能推荐服务以及多个部门多个业务的相应服务）。这允许各种服务只需对特定事件做出响应，而无需与数据源直接耦合。

&emsp;&emsp;除此之外，该解决方案具备自动伸缩、容错重试机制以及跨区域支持等功能，即使在高负载条件下也能确保事件的可靠传递。基于 `EventMesh` 集成外部Webhooks，还可以将事件推送到其他系统或第三方服务，便于后续的服务扩展。

*   **参考资料**

&emsp;&emsp;[ApacheCon Asia 2022 会议演讲《EventMesh如何解决SaaS组合式应用集成标准化问题》](https://www.youtube.com/watch?v=0v-tjIYkDIw)

&emsp;&emsp;[Community Over Code NA 2023 会议演讲《Apache EventMesh in Huawei Cloud Next Generation of Enterprise Cloud Native Event Centre: EventGrid》"](https://communityovercode.org/past-sessions/community-over-code-na-2023/)

&emsp;&emsp;[CoCAsia 2023 会议演讲《基于EventMesh构建超大规模云原生事件网格——EventGrid》](https://github.com/apache/eventmesh-site/blob/master/meetup/WangHaijun_HUAWEI_ApacheCon_Asia_0801.pdf)