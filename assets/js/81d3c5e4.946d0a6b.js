"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[2733],{78907:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v1.8.0","label":"v1.8.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-v1.8.0","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction to EventMesh","href":"/docs/v1.8.0/introduction","docId":"introduction"},{"type":"link","label":"Development Roadmap","href":"/docs/v1.8.0/roadmap","docId":"roadmap"},{"type":"category","label":"Design Document","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"Event Handling and Integration","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh Runtime Protocol","href":"/docs/v1.8.0/design-document/event-handling-and-integration/runtime-protocol","docId":"design-document/event-handling-and-integration/runtime-protocol"},{"type":"link","label":"HTTPS","href":"/docs/v1.8.0/design-document/event-handling-and-integration/https","docId":"design-document/event-handling-and-integration/https"},{"type":"link","label":"CloudEvents Integration","href":"/docs/v1.8.0/design-document/event-handling-and-integration/cloudevents","docId":"design-document/event-handling-and-integration/cloudevents"},{"type":"link","label":"Event Bridge","href":"/docs/v1.8.0/design-document/event-handling-and-integration/event-bridge","docId":"design-document/event-handling-and-integration/event-bridge"},{"type":"link","label":"Use Webhook to subscribe events","href":"/docs/v1.8.0/design-document/event-handling-and-integration/webhook","docId":"design-document/event-handling-and-integration/webhook"},{"type":"link","label":"EventMesh Workflow","href":"/docs/v1.8.0/design-document/event-handling-and-integration/workflow","docId":"design-document/event-handling-and-integration/workflow"},{"type":"link","label":"Knative Connector","href":"/docs/v1.8.0/design-document/event-handling-and-integration/knative-connector","docId":"design-document/event-handling-and-integration/knative-connector"}]},{"type":"category","label":"Observability","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh Metrics (OpenTelemetry and Prometheus)","href":"/docs/v1.8.0/design-document/observability/metrics-export","docId":"design-document/observability/metrics-export"},{"type":"link","label":"Distributed Tracing","href":"/docs/v1.8.0/design-document/observability/tracing","docId":"design-document/observability/tracing"},{"type":"link","label":"Observe Metrics with Prometheus","href":"/docs/v1.8.0/design-document/observability/prometheus","docId":"design-document/observability/prometheus"},{"type":"link","label":"Collect Trace with Zipkin","href":"/docs/v1.8.0/design-document/observability/zipkin","docId":"design-document/observability/zipkin"},{"type":"link","label":"Collect Trace with Jaeger","href":"/docs/v1.8.0/design-document/observability/jaeger","docId":"design-document/observability/jaeger"}]},{"type":"link","label":"EventMesh Schema Registry (OpenSchema)","href":"/docs/v1.8.0/design-document/schema-registry","docId":"design-document/schema-registry"},{"type":"link","label":"Service Provider Interface","href":"/docs/v1.8.0/design-document/spi","docId":"design-document/spi"},{"type":"link","label":"EventMesh Stream","href":"/docs/v1.8.0/design-document/stream","docId":"design-document/stream"}]},{"type":"category","label":"Installation and Deployment","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Import EventMesh into eclipse","href":"/docs/v1.8.0/instruction/eclipse","docId":"instruction/eclipse"},{"type":"link","label":"EventMesh Store","href":"/docs/v1.8.0/instruction/store","docId":"instruction/store"},{"type":"link","label":"EventMesh Store with Docker","href":"/docs/v1.8.0/instruction/store-with-docker","docId":"instruction/store-with-docker"},{"type":"link","label":"EventMesh Runtime","href":"/docs/v1.8.0/instruction/runtime","docId":"instruction/runtime"},{"type":"link","label":"EventMesh Runtime with Docker","href":"/docs/v1.8.0/instruction/runtime-with-docker","docId":"instruction/runtime-with-docker"},{"type":"link","label":"Run eventmesh-sdk-java demo","href":"/docs/v1.8.0/instruction/demo","docId":"instruction/demo"}]},{"type":"category","label":"EventMesh SDK for Java","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Installation","href":"/docs/v1.8.0/sdk-java/intro","docId":"sdk-java/intro"},{"type":"link","label":"HTTP Protocol","href":"/docs/v1.8.0/sdk-java/http","docId":"sdk-java/http"},{"type":"link","label":"TCP Protocol","href":"/docs/v1.8.0/sdk-java/tcp","docId":"sdk-java/tcp"},{"type":"link","label":"gRPC Protocol","href":"/docs/v1.8.0/sdk-java/grpc","docId":"sdk-java/grpc"}]},{"type":"category","label":"Upgrade Guide","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"EventMesh Upgrade Guide","href":"/docs/v1.8.0/upgrade-guide/upgrade-guide","docId":"upgrade-guide/upgrade-guide"}]}]},"docs":{"design-document/event-handling-and-integration/cloudevents":{"id":"design-document/event-handling-and-integration/cloudevents","title":"CloudEvents Integration","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/event-bridge":{"id":"design-document/event-handling-and-integration/event-bridge","title":"Event Bridge","description":"event-bridge","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/https":{"id":"design-document/event-handling-and-integration/https","title":"HTTPS","description":"1. Configuration in eventmesh-runtime","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/knative-connector":{"id":"design-document/event-handling-and-integration/knative-connector","title":"Knative Connector","description":"Prerequisite","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/runtime-protocol":{"id":"design-document/event-handling-and-integration/runtime-protocol","title":"EventMesh Runtime Protocol","description":"TCP Protocol","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/webhook":{"id":"design-document/event-handling-and-integration/webhook","title":"Use Webhook to subscribe events","description":"Webhook usage process","sidebar":"tutorialSidebar"},"design-document/event-handling-and-integration/workflow":{"id":"design-document/event-handling-and-integration/workflow","title":"EventMesh Workflow","description":"Business Problem","sidebar":"tutorialSidebar"},"design-document/observability/jaeger":{"id":"design-document/observability/jaeger","title":"Collect Trace with Jaeger","description":"Jaeger","sidebar":"tutorialSidebar"},"design-document/observability/metrics-export":{"id":"design-document/observability/metrics-export","title":"EventMesh Metrics (OpenTelemetry and Prometheus)","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/observability/prometheus":{"id":"design-document/observability/prometheus","title":"Observe Metrics with Prometheus","description":"Prometheus","sidebar":"tutorialSidebar"},"design-document/observability/tracing":{"id":"design-document/observability/tracing","title":"Distributed Tracing","description":"Overview of OpenTelemetry","sidebar":"tutorialSidebar"},"design-document/observability/zipkin":{"id":"design-document/observability/zipkin","title":"Collect Trace with Zipkin","description":"Zipkin","sidebar":"tutorialSidebar"},"design-document/schema-registry":{"id":"design-document/schema-registry","title":"EventMesh Schema Registry (OpenSchema)","description":"Overview of Schema and Schema Registry","sidebar":"tutorialSidebar"},"design-document/spi":{"id":"design-document/spi","title":"Service Provider Interface","description":"Introduction","sidebar":"tutorialSidebar"},"design-document/stream":{"id":"design-document/stream","title":"EventMesh Stream","description":"Overview of Event Streaming","sidebar":"tutorialSidebar"},"instruction/demo":{"id":"instruction/demo","title":"Run eventmesh-sdk-java demo","description":"Maven Central","sidebar":"tutorialSidebar"},"instruction/eclipse":{"id":"instruction/eclipse","title":"Import EventMesh into eclipse","description":"We recommend using Intellij IDEA for development, if you wish to use Eclipse, you can refer to the following steps to import the project.","sidebar":"tutorialSidebar"},"instruction/runtime":{"id":"instruction/runtime","title":"EventMesh Runtime","description":"The EventMesh Runtime is a stateless mesh node in an EventMesh cluster that is responsible for event transfer between the Source Connector and the Sink Connector, and can use EventMesh Storage as a storage queue for events.","sidebar":"tutorialSidebar"},"instruction/runtime-with-docker":{"id":"instruction/runtime-with-docker","title":"EventMesh Runtime with Docker","description":"The documentation introduces the steps to install the latest release of EventMesh Runtime with Docker and connect to Apache RocketMQ. It\'s recommended to use a Linux-based system with Docker Engine. Please follow the Docker tutorial to get familiar with the basic concepts (registry, volume, etc.) and commands of Docker.","sidebar":"tutorialSidebar"},"instruction/store":{"id":"instruction/store","title":"EventMesh Store","description":"1 Dependencies","sidebar":"tutorialSidebar"},"instruction/store-with-docker":{"id":"instruction/store-with-docker","title":"EventMesh Store with Docker","description":"If you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction to EventMesh","description":"CI status","sidebar":"tutorialSidebar"},"roadmap":{"id":"roadmap","title":"Development Roadmap","description":"The development roadmap of Apache EventMesh is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the release notes. The order of the features listed below doesn\'t correspond to their priorities.","sidebar":"tutorialSidebar"},"sdk-java/grpc":{"id":"sdk-java/grpc","title":"gRPC Protocol","description":"EventMesh SDK for Java implements the gRPC producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshGrpcClientConfig class that specifies the configuration of EventMesh gRPC client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"sdk-java/http":{"id":"sdk-java/http","title":"HTTP Protocol","description":"EventMesh SDK for Java implements the HTTP producer and consumer of asynchronous messages. Both the producer and consumer require an instance of EventMeshHttpClientConfig class that specifies the configuration of EventMesh HTTP client. The liteEventMeshAddr, userName, and password fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"sdk-java/intro":{"id":"sdk-java/intro","title":"Installation","description":"Maven Central","sidebar":"tutorialSidebar"},"sdk-java/tcp":{"id":"sdk-java/tcp","title":"TCP Protocol","description":"EventMesh SDK for Java implements the TCP producer and consumer of synchronous, asynchronous, and broadcast messages. Both the producer and consumer require an instance of EventMeshTCPClientConfig class that specifies the configuration of EventMesh TCP client. The host and port fields should match the eventmesh.properties file of EventMesh runtime.","sidebar":"tutorialSidebar"},"upgrade-guide/upgrade-guide":{"id":"upgrade-guide/upgrade-guide","title":"EventMesh Upgrade Guide","description":"This article briefly introduces the precautions for upgrading EventMesh from version 1.2.0 to the latest version.","sidebar":"tutorialSidebar"}}}')}}]);