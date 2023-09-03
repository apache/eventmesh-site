"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[2141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>C});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),v=p(n),m=i,C=v["".concat(l,".").concat(m)]||v[m]||u[m]||a;return n?r.createElement(C,o(o({ref:t},c),{},{components:n})):r.createElement(C,o({ref:t},c))}));function C(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[v]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o="TCP \u534f\u8bae",s={unversionedId:"sdk-java/tcp",id:"version-v1.2.0/sdk-java/tcp",title:"TCP \u534f\u8bae",description:"EventMesh Java SDK \u5b9e\u73b0\u4e86\u540c\u6b65\u3001\u5f02\u6b65\u548c\u5e7f\u64ad TCP \u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002 \u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a EventMeshHttpClientConfig \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh TCP \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 host \u548c port \u5b57\u6bb5\u9700\u8981\u548c EventMesh runtime eventmesh.properties \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2.0/sdk-java/03-tcp.md",sourceDirName:"sdk-java",slug:"/sdk-java/tcp",permalink:"/zh/docs/v1.2.0/sdk-java/tcp",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.2.0/sdk-java/03-tcp.md",tags:[],version:"v1.2.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP \u534f\u8bae",permalink:"/zh/docs/v1.2.0/sdk-java/http"},next:{title:"gRPC \u534f\u8bae",permalink:"/zh/docs/v1.2.0/sdk-java/grpc"}},l={},p=[{value:"TCP \u6d88\u8d39\u8005",id:"tcp-\u6d88\u8d39\u8005",level:2},{value:"TCP \u751f\u4ea7\u8005",id:"tcp-\u751f\u4ea7\u8005",level:2},{value:"\u5f02\u6b65\u751f\u4ea7\u8005",id:"\u5f02\u6b65\u751f\u4ea7\u8005",level:3},{value:"\u540c\u6b65\u751f\u4ea7\u8005",id:"\u540c\u6b65\u751f\u4ea7\u8005",level:3}],c={toc:p};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tcp-\u534f\u8bae"},"TCP \u534f\u8bae"),(0,i.kt)("p",null,"EventMesh Java SDK \u5b9e\u73b0\u4e86\u540c\u6b65\u3001\u5f02\u6b65\u548c\u5e7f\u64ad TCP \u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002 \u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"EventMeshHttpClientConfig")," \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh TCP \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," \u5b57\u6bb5\u9700\u8981\u548c EventMesh runtime ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.eventmesh.client.tcp.conf.EventMeshTCPClientConfig;\nimport org.apache.eventmesh.client.tcp.common.ReceiveMsgHook;\nimport io.cloudevents.CloudEvent;\n\npublic class AsyncSubscribe implements ReceiveMsgHook<CloudEvent> {\n  public static void main(String[] args) throws InterruptedException {\n    EventMeshTCPClientConfig eventMeshTcpClientConfig = EventMeshTCPClientConfig.builder()\n      .host(eventMeshIp)\n      .port(eventMeshTcpPort)\n      .userAgent(userAgent)\n      .build();\n    /* ... */\n  }\n}\n")),(0,i.kt)("h2",{id:"tcp-\u6d88\u8d39\u8005"},"TCP \u6d88\u8d39\u8005"),(0,i.kt)("p",null,"\u6d88\u8d39\u8005\u5e94\u8be5\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ReceiveMsgHook")," \u7c7b\uff0c\u5176\u88ab\u5b9a\u4e49\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-sdk-java/src/main/java/org/apache/eventmesh/client/tcp/common/ReceiveMsgHook.java"},"ReceiveMsgHook.java"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface ReceiveMsgHook<ProtocolMessage> {\n  Optional<ProtocolMessage> handle(ProtocolMessage msg);\n}\n")),(0,i.kt)("p",null,"\u7c7b ",(0,i.kt)("inlineCode",{parentName:"p"},"EventMeshTCPClient")," \u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe")," \u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u63a5\u6536\u8bdd\u9898\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriptionMode")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriptionType"),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," \u65b9\u6cd5\u5c06\u4f1a\u5728\u6d88\u8d39\u8005\u4ece\u8ba2\u9605\u7684\u8bdd\u9898\u4e2d\u6536\u5230\u6d88\u606f\u65f6\u88ab\u8c03\u7528\u3002\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriptionType")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"SYNC"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," \u7684\u8fd4\u56de\u503c\u5c06\u88ab\u53d1\u9001\u56de\u751f\u4ea7\u8005\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.tcp.EventMeshTCPClient;\nimport org.apache.eventmesh.client.tcp.EventMeshTCPClientFactory;\nimport org.apache.eventmesh.client.tcp.common.ReceiveMsgHook;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\nimport io.cloudevents.CloudEvent;\n\npublic class TCPConsumer implements ReceiveMsgHook<CloudEvent> {\n  public static TCPConsumer handler = new TCPConsumer();\n  private static EventMeshTCPClient<CloudEvent> client;\n\n  public static void main(String[] args) throws Exception {\n    client = EventMeshTCPClientFactory.createEventMeshTCPClient(\n      eventMeshTcpClientConfig,\n      CloudEvent.class\n    );\n    client.init();\n\n    client.subscribe(\n      "eventmesh-sync-topic",\n      SubscriptionMode.CLUSTERING,\n      SubscriptionType.SYNC\n    );\n\n    client.registerSubBusiHandler(handler);\n    client.listen();\n  }\n\n  @Override\n  public Optional<CloudEvent> handle(CloudEvent message) {\n    log.info("Messaged received: {}", message);\n    return Optional.of(message);\n  }\n}\n')),(0,i.kt)("h2",{id:"tcp-\u751f\u4ea7\u8005"},"TCP \u751f\u4ea7\u8005"),(0,i.kt)("h3",{id:"\u5f02\u6b65\u751f\u4ea7\u8005"},"\u5f02\u6b65\u751f\u4ea7\u8005"),(0,i.kt)("p",null,"\u7c7b ",(0,i.kt)("inlineCode",{parentName:"p"},"EventMeshTCPClient")," \u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," \u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u63a5\u6536\u5c06\u88ab\u53d1\u5e03\u7684\u6d88\u606f\u548c\u4e00\u4e2a\u53ef\u9009\u7684 timeout \u503c\uff0c\u5e76\u8fd4\u56de\u6765\u81ea\u6d88\u8d39\u8005\u7684\u54cd\u5e94\u6d88\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/* ... */\nclient = EventMeshTCPClientFactory.createEventMeshTCPClient(eventMeshTcpClientConfig, CloudEvent.class);\nclient.init();\n\nCloudEvent event = CloudEventBuilder.v1()\n  .withId(UUID.randomUUID().toString())\n  .withSubject(ExampleConstants.EVENTMESH_GRPC_ASYNC_TEST_TOPIC)\n  .withSource(URI.create("/"))\n  .withDataContentType(ExampleConstants.CLOUDEVENT_CONTENT_TYPE)\n  .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n  .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n  .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n  .build();\nclient.publish(event, 1000);\n')),(0,i.kt)("h3",{id:"\u540c\u6b65\u751f\u4ea7\u8005"},"\u540c\u6b65\u751f\u4ea7\u8005"),(0,i.kt)("p",null,"\u7c7b ",(0,i.kt)("inlineCode",{parentName:"p"},"EventMeshTCPClient")," \u5b9e\u73b0\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"rr")," \u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u63a5\u6536\u5c06\u88ab\u53d1\u5e03\u7684\u6d88\u606f\u548c\u4e00\u4e2a\u53ef\u9009\u7684 timeout \u503c\uff0c\u5e76\u8fd4\u56de\u6765\u81ea\u6d88\u8d39\u8005\u7684\u54cd\u5e94\u6d88\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/* ... */\nclient = EventMeshTCPClientFactory.createEventMeshTCPClient(eventMeshTcpClientConfig, CloudEvent.class);\nclient.init();\n\nCloudEvent event = CloudEventBuilder.v1()\n  .withId(UUID.randomUUID().toString())\n  .withSubject(ExampleConstants.EVENTMESH_GRPC_ASYNC_TEST_TOPIC)\n  .withSource(URI.create("/"))\n  .withDataContentType(ExampleConstants.CLOUDEVENT_CONTENT_TYPE)\n  .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n  .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n  .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n  .build();\n\nPackage response = client.rr(event, 1000);\nCloudEvent replyEvent = EventFormatProvider\n  .getInstance()\n  .resolveFormat(JsonFormat.CONTENT_TYPE)\n  .deserialize(response.getBody().toString().getBytes(StandardCharsets.UTF_8));\n')))}v.isMDXComponent=!0}}]);