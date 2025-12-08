# 云服务的Serverless事件总线

*   **应用场景名称**

&emsp;&emsp;**云服务的Serverless事件总线**
 

*   **应用场景描述**

&emsp;&emsp;云服务提供商可以基于 `EventMesh` 构建 Serverless 事件总线，用于承载和管理来自传统应用、云原生服务以及SaaS合作伙伴应用等不同来源的各类事件。在此场景下，基于 `EventMesh` 的 Serverless 事件总线帮助开发者构建松耦合、分布式、事件驱动的Serverless微服务应用，而无需管理底层基础设施。

&emsp;&emsp;Serverless 事件总线支持跨不同云环境的异步事件通信。它通过在不同服务之间路由事件，简化协议管理的复杂性，尤其适用于多云、混合云架构以及第三方SaaS系统的事件处理；同时该总线可以部署在分布式环境下，借助 `EventMesh` 的跨区域故障转移和负载均衡功能，即使在高负载下也能确保事件的可靠传递。

*   **应用场景实施方案**

&emsp;&emsp;云服务厂商华为云所提供的的Serverless事件总线服务 `EventGrid` 便是基于 `EventMesh` 的实际应用。`EventGrid` 以 `EventMesh` 作为运行时引擎，支持华为云服务、自定义应用、SaaS应用以标准化、中心化的方式接入，以标准化的 `CloudEvents` 协议在应用之间灵活路由事件，从而构建松耦合、分布式的事件驱动架构，为华为云创造更多的应用场景，也进一步丰富了开发者生态。

&emsp;&emsp;作为Serverless架构下事件驱动架构的关键一环，它提供弹性、异步、去中心化的事件治理服务，对事件提供汇聚、模型校验、过滤、路由、转换和推送等核心功能，还包括容错重试、死信储存、事件查询跟踪、事件工作流等增强特性。

<div align="center">
<img src="/images/application-scenario/s3_img1_zh.png" width="70%"/>
</div>

&emsp;&emsp;以上是华为云 `EventGrid` 的总体架构图， 可见 `EventGrid` 对接了诸多云服务作为事件源，包括分布式消息服务、对象存储服务(OBS)和分布式缓存服务。事件源所产生的各种事件，推送至 `EventGrid` 事件总线(Bus Runtime)的事件通道中。事件总线为 `EventGrid` 用户以租户为单位配置事件通道，一个租户下允许有多个事件通道，承载来自不同事件源的事件。

&emsp;&emsp;`EventGrid` 作为华为云服务的标准事件中心，可以实现各个云服务之间的联动。云服务作为事件源或者事件目标部署在华为云的无服务器（Serverless）应用平台上，应用推送业务实时事件到事件网格，事件网格对事件进行过滤、路由和转化，从而触发订阅事件的云服务。`EventGrid` 现已内置100+华为云事件源，支持自定义和伙伴事件扩展；同时有海量官方数据源支持，覆盖数据库、消息、函数计算、大数据类、DevOps平台、IOT等，支持自定义事件集成。

&emsp;&emsp;`EventGrid` 用户通过订阅的方式消费事件，通过在订阅的配置项里定义事件源、事件目标、事件过滤和转换规则，`EventGrid` 就能从事件总线里提取相关事件，然后实时推送到所定义的事件目标中。推送方式可以是同步和异步：同步推送一般是以HTTP协议，适合应用和微服务；异步推送一般是推动到SaaS伙伴应用的消息队列中。

*   **参考资料**

&emsp;&emsp;[ApacheCon Asia 2022会议演讲《EventMesh如何解决SaaS组合式应用集成标准化问题](https://www.youtube.com/watch?v=0v-tjIYkDIw)

&emsp;&emsp;[华为云中间件团队的技术博客](https://mp.weixin.qq.com/s/Z3DAw_YtKJWXftdFjAm2rA)

&emsp;&emsp;[华为云EventGrid使用教程文档](https://www.huaweicloud.com/product/eventgrid.html)