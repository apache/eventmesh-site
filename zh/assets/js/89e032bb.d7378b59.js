"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[9821],{3905:(e,n,t)=>{t.d(n,{Zo:()=>b,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},b=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(t),p=o,d=u["".concat(m,".").concat(p)]||u[p]||l[p]||i;return t?r.createElement(d,a(a({ref:n},b),{},{components:t})):r.createElement(d,a({ref:n},b))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},69667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={},a="RabbitMQ",c={unversionedId:"design-document/connect/rabbitmq-connector",id:"design-document/connect/rabbitmq-connector",title:"RabbitMQ",description:"RabbitMQSinkConnector\uff1a\u4ece eventmesh \u5230 rabbitmq\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design-document/03-connect/03-rabbitmq-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/rabbitmq-connector",permalink:"/zh/docs/next/design-document/connect/rabbitmq-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/03-rabbitmq-connector.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Knative",permalink:"/zh/docs/next/design-document/connect/knative-connector"},next:{title:"EventMesh \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3 (OpenSchema)",permalink:"/zh/docs/next/design-document/schema-registry"}},m={},s=[{value:"RabbitMQSinkConnector\uff1a\u4ece eventmesh \u5230 rabbitmq\u3002",id:"rabbitmqsinkconnector\u4ece-eventmesh-\u5230-rabbitmq",level:2},{value:"RabbitMQSourceConnector\uff1a\u4ece rabbitmq \u5230 eventmesh\u3002",id:"rabbitmqsourceconnector\u4ece-rabbitmq-\u5230-eventmesh",level:2}],b={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rabbitmq"},"RabbitMQ"),(0,o.kt)("h2",{id:"rabbitmqsinkconnector\u4ece-eventmesh-\u5230-rabbitmq"},"RabbitMQSinkConnector\uff1a\u4ece eventmesh \u5230 rabbitmq\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 rabbitmq \u670d\u52a1\u548c eventmesh-runtime\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u7528 sinkConnector \u5e76\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5411 eventmesh \u53d1\u9001\u5e26\u6709\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," \u4e2d\u5b9a\u4e49\u7684\u4e3b\u9898\u6d88\u606f\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"pubSubConfig:\n  # \u9ed8\u8ba4\u7aef\u53e3 10000\n  meshAddress: your.eventmesh.server:10000\n  subject: TopicTest  \n  idc: FT  \n  env: PRD  \n  group: rabbitmqSink  \n  appId: 5031  \n  userName: rabbitmqSinkUser  \n  passWord: rabbitmqPassWord  \nconnectorConfig:  \n  connectorName: rabbitmqSink  \n  host: your.rabbitmq.server\n  port: 5672  \n  username: coyrqpyz  \n  passwd: passwd \n  virtualHost: coyrqpyz  \n  exchangeType: TOPIC  \n  # \u4f7f\u7528\u5185\u7f6e\u7684 exchangeName \u6216\u5728\u8fde\u63a5\u5230 rabbitmq \u670d\u52a1\u540e\u521b\u5efa\u65b0\u7684 exchangeName\u3002\n  exchangeName: amq.topic  \n  # \u5982\u679c\u5728\u8fde\u63a5\u4e4b\u524d\u4e0d\u5b58\u5728\uff0crabbitmq \u670d\u52a1\u5c06\u81ea\u52a8\u521b\u5efa routingKey \u548c queueName\u3002\n  routingKey: eventmesh  \n  queueName: eventmesh  \n  autoAck: true\n")),(0,o.kt)("h2",{id:"rabbitmqsourceconnector\u4ece-rabbitmq-\u5230-eventmesh"},"RabbitMQSourceConnector\uff1a\u4ece rabbitmq \u5230 eventmesh\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 rabbitmq \u670d\u52a1\u5668\u548c eventmesh-runtime\u3002 "),(0,o.kt)("li",{parentName:"ol"},"\u542f\u7528 sourceConnector \u5e76\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"li"},"source-config.yml"),"\uff08\u4e0e sink-config.yml \u57fa\u672c\u76f8\u540c\uff09\u3002 "),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 RabbitMQConnectorServer\uff0c\u4f60\u4f1a\u5728 rabbitmq \u670d\u52a1\u4e2d\u627e\u5230\u8be5channel\u3002 "),(0,o.kt)("li",{parentName:"ol"},"\u5411\u961f\u5217\u53d1\u9001\u4e00\u4e2a cloudevent \u6d88\u606f\uff0c\u7136\u540e\u4f60\u5c06\u5728 eventmesh \u4e2d\u63a5\u6536\u5230\u8be5\u6d88\u606f\u3002")))}u.isMDXComponent=!0}}]);