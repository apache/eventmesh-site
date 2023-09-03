"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[872],{67725:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v1.9.0","label":"v1.9.0","banner":null,"badge":true,"noIndex":false,"className":"docs-version-v1.9.0","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Apache EventMesh","href":"/zh/docs/introduction","docId":"introduction"},{"type":"link","label":"EventMesh\u4ea7\u54c1\u8def\u7ebf\u56fe","href":"/zh/docs/roadmap","docId":"roadmap"},{"type":"category","label":"\u5b89\u88c5\u4e0e\u90e8\u7f72","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u5bfc\u5165 Eclipse \u5feb\u901f\u5165\u95e8\u8bf4\u660e","href":"/zh/docs/instruction/eclipse","docId":"instruction/eclipse"},{"type":"link","label":"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8","href":"/zh/docs/instruction/store","docId":"instruction/store"},{"type":"link","label":"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8\uff08\u4f7f\u7528 Docker\uff09","href":"/zh/docs/instruction/store-with-docker","docId":"instruction/store-with-docker"},{"type":"link","label":"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e","href":"/zh/docs/instruction/runtime","docId":"instruction/runtime"},{"type":"link","label":"\u4f7f\u7528 Docker \u5feb\u901f\u5165\u95e8 EventMesh\uff08\u6682\u65f6\u53ea\u652f\u6301\u52301.4.0\u7248\u672c\uff09","href":"/zh/docs/instruction/runtime-with-docker","docId":"instruction/runtime-with-docker"},{"type":"link","label":"\u8fd0\u884c eventmesh-sdk-java demo","href":"/zh/docs/instruction/demo","docId":"instruction/demo"}]},{"type":"category","label":"EventMesh SDK for Java","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"\u5b89\u88c5 SDK","href":"/zh/docs/sdk-java/intro","docId":"sdk-java/intro"},{"type":"link","label":"HTTP \u534f\u8bae","href":"/zh/docs/sdk-java/http","docId":"sdk-java/http"},{"type":"link","label":"TCP \u534f\u8bae","href":"/zh/docs/sdk-java/tcp","docId":"sdk-java/tcp"},{"type":"link","label":"gRPC \u534f\u8bae","href":"/zh/docs/sdk-java/grpc","docId":"sdk-java/grpc"}]},{"type":"category","label":"\u8bbe\u8ba1\u6587\u6863","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"Event Handling and Integration","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"TCP \u534f\u8bae\u6587\u6863","href":"/zh/docs/design-document/event-handling-and-integration/runtime-protocol","docId":"design-document/event-handling-and-integration/runtime-protocol"},{"type":"link","label":"HTTPS","href":"/zh/docs/design-document/event-handling-and-integration/https","docId":"design-document/event-handling-and-integration/https"},{"type":"link","label":"CloudEvents \u96c6\u6210","href":"/zh/docs/design-document/event-handling-and-integration/cloudevents","docId":"design-document/event-handling-and-integration/cloudevents"},{"type":"link","label":"Event Bridge","href":"/zh/docs/design-document/event-handling-and-integration/event-bridge","docId":"design-document/event-handling-and-integration/event-bridge"},{"type":"link","label":"\u4f7f\u7528 Webhook \u8ba2\u9605\u4e8b\u4ef6","href":"/zh/docs/design-document/event-handling-and-integration/webhook","docId":"design-document/event-handling-and-integration/webhook"},{"type":"link","label":"EventMesh \u5de5\u4f5c\u6d41","href":"/zh/docs/design-document/event-handling-and-integration/workflow","docId":"design-document/event-handling-and-integration/workflow"},{"type":"link","label":"Knative Connector\u63d2\u4ef6","href":"/zh/docs/design-document/event-handling-and-integration/knative-connector","docId":"design-document/event-handling-and-integration/knative-connector"}]},{"type":"link","label":"EventMesh SPI","href":"/zh/docs/design-document/spi","docId":"design-document/spi"},{"type":"category","label":"Observability","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus\uff09","href":"/zh/docs/design-document/observability/metrics-export","docId":"design-document/observability/metrics-export"},{"type":"link","label":"\u5206\u5e03\u5f0f\u8ffd\u8e2a","href":"/zh/docs/design-document/observability/tracing","docId":"design-document/observability/tracing"},{"type":"link","label":"\u901a\u8fc7 Prometheus \u89c2\u5bdf Metrics","href":"/zh/docs/design-document/observability/prometheus","docId":"design-document/observability/prometheus"},{"type":"link","label":"\u901a\u8fc7 Zipkin \u89c2\u5bdf Trace","href":"/zh/docs/design-document/observability/zipkin","docId":"design-document/observability/zipkin"},{"type":"link","label":"\u901a\u8fc7 Jaeger \u89c2\u5bdf Trace","href":"/zh/docs/design-document/observability/jaeger","docId":"design-document/observability/jaeger"}]},{"type":"link","label":"EventMesh Stream","href":"/zh/docs/design-document/stream","docId":"design-document/stream"},{"type":"link","label":"EventMesh \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3 (OpenSchema)","href":"/zh/docs/design-document/schema-registry","docId":"design-document/schema-registry"}]},{"type":"category","label":"\u5347\u7ea7\u6307\u5357","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh \u5347\u7ea7\u6307\u5f15","href":"/zh/docs/upgrade-guide/upgrade-guide","docId":"upgrade-guide/upgrade-guide"}]}]},"docs":{"design-document/event-handling-and-integration/cloudevents":{"id":"design-document/event-handling-and-integration/cloudevents","title":"CloudEvents \u96c6\u6210","description":"\u4ecb\u7ecd","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/event-bridge":{"id":"design-document/event-handling-and-integration/event-bridge","title":"Event Bridge","description":"event-bridge","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/https":{"id":"design-document/event-handling-and-integration/https","title":"HTTPS","description":"1.\u5728eventmesh-runtime \u4e2d\u914d\u7f6e","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/knative-connector":{"id":"design-document/event-handling-and-integration/knative-connector","title":"Knative Connector\u63d2\u4ef6","description":"\u51c6\u5907","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/runtime-protocol":{"id":"design-document/event-handling-and-integration/runtime-protocol","title":"TCP \u534f\u8bae\u6587\u6863","description":"1. \u534f\u8bae\u683c\u5f0f","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/webhook":{"id":"design-document/event-handling-and-integration/webhook","title":"\u4f7f\u7528 Webhook \u8ba2\u9605\u4e8b\u4ef6","description":"Webhook \u4f7f\u7528\u6d41\u7a0b","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/workflow":{"id":"design-document/event-handling-and-integration/workflow","title":"EventMesh \u5de5\u4f5c\u6d41","description":"\u4e1a\u52a1\u573a\u666f","sidebar":"tutorialSidebar"},"design-document/observability/jaeger":{"id":"design-document/observability/jaeger","title":"\u901a\u8fc7 Jaeger \u89c2\u5bdf Trace","description":"Jaeger","sidebar":"tutorialSidebar"},"design-document/observability/metrics-export":{"id":"design-document/observability/metrics-export","title":"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus\uff09","description":"\u4ecb\u7ecd","sidebar":"tutorialSidebar"},"design-document/observability/prometheus":{"id":"design-document/observability/prometheus","title":"\u901a\u8fc7 Prometheus \u89c2\u5bdf Metrics","description":"\u4e0b\u8f7d Prometheus","sidebar":"tutorialSidebar"},"design-document/observability/tracing":{"id":"design-document/observability/tracing","title":"\u5206\u5e03\u5f0f\u8ffd\u8e2a","description":"OpenTelemetry\u6982\u8ff0","sidebar":"tutorialSidebar"},"design-document/observability/zipkin":{"id":"design-document/observability/zipkin","title":"\u901a\u8fc7 Zipkin \u89c2\u5bdf Trace","description":"1\u3001\u4e0b\u8f7d\u548c\u8fd0\u884cZipkin","sidebar":"tutorialSidebar"},"design-document/schema-registry":{"id":"design-document/schema-registry","title":"EventMesh \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3 (OpenSchema)","description":"Schema \u548c Schema \u6ce8\u518c\u6982\u8ff0","sidebar":"tutorialSidebar"},"design-document/spi":{"id":"design-document/spi","title":"EventMesh SPI","description":"\u4ecb\u7ecd","sidebar":"tutorialSidebar"},"design-document/stream":{"id":"design-document/stream","title":"EventMesh Stream","description":"\u4e8b\u4ef6\u6d41\u6982\u8ff0","sidebar":"tutorialSidebar"},"instruction/demo":{"id":"instruction/demo","title":"\u8fd0\u884c eventmesh-sdk-java demo","description":"Maven Central","sidebar":"tutorialSidebar"},"instruction/eclipse":{"id":"instruction/eclipse","title":"\u5bfc\u5165 Eclipse \u5feb\u901f\u5165\u95e8\u8bf4\u660e","description":"\u4f9d\u8d56","sidebar":"tutorialSidebar"},"instruction/runtime":{"id":"instruction/runtime","title":"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e","description":"EventMesh Runtime \u662f Apache EventMesh\uff08\u5b75\u5316\uff09\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002\u5b83\u662f\u5728\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u4e4b\u95f4\u4f20\u8f93\u4e8b\u4ef6\u7684\u4e2d\u95f4\u4ef6\u3002\u8be5\u6587\u6863\u4ecb\u7ecd\u4e86\u5728\u672c\u5730\u6216\u6d4b\u8bd5\u73af\u5883\u4e2d\u5b89\u88c5\u548c\u542f\u52a8\u6700\u65b0\u7248 EventMesh Runtime \u7684\u6b65\u9aa4\u3002EventMesh Runtime \u9700\u8981\u4e00\u4e2a\u57fa\u4e8e Linux \u7684\u7cfb\u7edf\uff0c\u5e76\u914d\u5907 JDK\uff08Java \u5f00\u53d1\u5305\uff098+\u3002","sidebar":"tutorialSidebar"},"instruction/runtime-with-docker":{"id":"instruction/runtime-with-docker","title":"\u4f7f\u7528 Docker \u5feb\u901f\u5165\u95e8 EventMesh\uff08\u6682\u65f6\u53ea\u652f\u6301\u52301.4.0\u7248\u672c\uff09","description":"\u672c\u7bc7\u5feb\u901f\u5165\u95e8\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u4f7f\u7528 docker \u90e8\u7f72 EventMesh\uff0c\u4ee5 RocketMQ \u4f5c\u4e3a\u5bf9\u63a5\u7684\u4e2d\u95f4\u4ef6\u3002","sidebar":"tutorialSidebar"},"instruction/store":{"id":"instruction/store","title":"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8","description":"eventmesh\u5728\u975estandalone\u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56RocketMQ\u4f5c\u4e3a\u5b58\u50a8\u5c42\uff1b\u82e5\u91c7\u7528standalone\u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884cruntime\u7684\u90e8\u7f72\u3002","sidebar":"tutorialSidebar"},"instruction/store-with-docker":{"id":"instruction/store-with-docker","title":"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8\uff08\u4f7f\u7528 Docker\uff09","description":"eventmesh\u5728\u975estandalone\u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56RocketMQ\u4f5c\u4e3a\u5b58\u50a8\u5c42\uff1b\u82e5\u91c7\u7528standalone\u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884cruntime\u7684\u90e8\u7f72\u3002","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Apache EventMesh","description":"CI status","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"EventMesh\u4ea7\u54c1\u8def\u7ebf\u56fe","description":"\u4e0b\u8868\u5217\u51fa\u4e86EventMesh\u7684\u65b0\u7279\u6027\u548cbug\u4fee\u590d\u60c5\u51b5\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 release notes.","sidebar":"tutorialSidebar"},"sdk-java/grpc":{"id":"sdk-java/grpc","title":"gRPC \u534f\u8bae","description":"EventMesh Java SDK \u5b9e\u73b0\u4e86 gRPC \u540c\u6b65\u3001\u5f02\u6b65\u548c\u5e7f\u64ad\u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002\u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a EventMeshHttpClientConfig \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh gRPC \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 liteEventMeshAddr\u3001userName \u548c password \u5b57\u6bb5\u9700\u8981\u548c EventMesh runtime eventmesh.properties \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002","sidebar":"tutorialSidebar"},"sdk-java/http":{"id":"sdk-java/http","title":"HTTP \u534f\u8bae","description":"EventMesh Java SDK \u5b9e\u73b0\u4e86 HTTP \u5f02\u6b65\u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002\u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a EventMeshHttpClientConfig \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh HTTP \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 liteEventMeshAddr\u3001userName \u548c password \u5b57\u6bb5\u9700\u8981\u548c EventMesh runtime eventmesh.properties \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002","sidebar":"tutorialSidebar"},"sdk-java/intro":{"id":"sdk-java/intro","title":"\u5b89\u88c5 SDK","description":"Maven Central","sidebar":"tutorialSidebar"},"sdk-java/tcp":{"id":"sdk-java/tcp","title":"TCP \u534f\u8bae","description":"EventMesh Java SDK \u5b9e\u73b0\u4e86\u540c\u6b65\u3001\u5f02\u6b65\u548c\u5e7f\u64ad TCP \u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002 \u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a EventMeshHttpClientConfig \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh TCP \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 host \u548c port \u5b57\u6bb5\u9700\u8981\u548c EventMesh runtime eventmesh.properties \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002","sidebar":"tutorialSidebar"},"upgrade-guide/upgrade-guide":{"id":"upgrade-guide/upgrade-guide","title":"EventMesh \u5347\u7ea7\u6307\u5f15","description":"\u672c\u6587\u7b80\u5355\u4ecb\u7ecdEventMesh\u4ece1.2.0\u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879\u3002","sidebar":"tutorialSidebar"}}}')}}]);