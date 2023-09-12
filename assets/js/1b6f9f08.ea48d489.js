"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5896],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:0},i="Introduction to EventMesh",s={unversionedId:"introduction",id:"version-v1.1.1/introduction",title:"Introduction to EventMesh",description:"CI status",source:"@site/versioned_docs/version-v1.1.1/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/v1.1.1/introduction",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.1.1/introduction.md",tags:[],version:"v1.1.1",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Development Roadmap",permalink:"/docs/v1.1.1/roadmap"}},l={},p=[{value:"Features",id:"features",level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction-to-eventmesh"},"Introduction to EventMesh"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/actions/workflows/ci.yml"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/actions/workflow/status/apache/eventmesh/ci.yml?logo=github&style=for-the-badge",alt:"CI status"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://codecov.io/gh/apache/eventmesh"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/codecov/c/gh/apache/eventmesh/master?logo=codecov&style=for-the-badge",alt:"CodeCov"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0.html"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/apache/eventmesh?style=for-the-badge",alt:"License"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/releases"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/apache/eventmesh?style=for-the-badge",alt:"GitHub Release"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/t/the-asf/shared_invite/zt-1y375qcox-UW1898e4kZE_pqrNsrBM2g"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-join_chat-blue.svg?logo=slack&style=for-the-badge",alt:"Slack Status"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Apache EventMesh")," is a fully serverless platform used to build distributed ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Event-driven_architecture"},"event-driven"),"  applications. "),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"Apache EventMesh has a vast amount of features to help users achieve their goals. Let us share with you some of the key features EventMesh has to offer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Built around the ",(0,n.kt)("a",{parentName:"li",href:"https://cloudevents.io"},"CloudEvents")," specification."),(0,n.kt)("li",{parentName:"ul"},"Rapidly extensible language sdk around ",(0,n.kt)("a",{parentName:"li",href:"https://grpc.io"},"gRPC")," protocols."),(0,n.kt)("li",{parentName:"ul"},"Rapidly extensible middleware by connectors such as ",(0,n.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org"},"Apache RocketMQ"),", ",(0,n.kt)("a",{parentName:"li",href:"https://kafka.apache.org"},"Apache Kafka"),", ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org"},"Apache Pulsar"),", ",(0,n.kt)("a",{parentName:"li",href:"https://rabbitmq.com"},"RabbitMQ"),", ",(0,n.kt)("a",{parentName:"li",href:"https://redis.io"},"Redis"),", ",(0,n.kt)("a",{parentName:"li",href:"https://cncf.pravega.io"},"Pravega"),", and ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Relational_database"},"RDMS"),"(in progress) using ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Java_Database_Connectivity"},"JDBC"),"."),(0,n.kt)("li",{parentName:"ul"},"Rapidly extensible controller such as ",(0,n.kt)("a",{parentName:"li",href:"https://consulproject.org/en/"},"Consul"),", ",(0,n.kt)("a",{parentName:"li",href:"https://nacos.io"},"Nacos"),", ",(0,n.kt)("a",{parentName:"li",href:"https://etcd.io"},"ETCD")," and ",(0,n.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/"},"Zookeeper"),"."),(0,n.kt)("li",{parentName:"ul"},"Guaranteed at-least-once delivery."),(0,n.kt)("li",{parentName:"ul"},"Deliver events between multiple EventMesh deployments."),(0,n.kt)("li",{parentName:"ul"},"Event schema management by catalog service."),(0,n.kt)("li",{parentName:"ul"},"Powerful event orchestration by ",(0,n.kt)("a",{parentName:"li",href:"https://serverlessworkflow.io/"},"Serverless workflow")," engine."),(0,n.kt)("li",{parentName:"ul"},"Powerful event filtering and transformation."),(0,n.kt)("li",{parentName:"ul"},"Rapid, seamless scalability."),(0,n.kt)("li",{parentName:"ul"},"Easy Function develop and framework integration.")))}h.isMDXComponent=!0}}]);