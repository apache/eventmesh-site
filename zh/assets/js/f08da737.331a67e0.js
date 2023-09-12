"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[8162],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),i=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=i(t.components);return n.createElement(m.Provider,{value:e},t.children)},d="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=i(a),h=r,k=d["".concat(m,".").concat(h)]||d[h]||o[h]||l;return a?n.createElement(k,s(s({ref:e},u),{},{components:a})):n.createElement(k,s({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=h;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[d]="string"==typeof t?t:r,s[1]=p;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97616:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1},s="EventMesh\u4ea7\u54c1\u8def\u7ebf\u56fe",p={unversionedId:"roadmap",id:"version-v1.2.0/roadmap",title:"EventMesh\u4ea7\u54c1\u8def\u7ebf\u56fe",description:"\u4e0b\u8868\u5217\u51fa\u4e86EventMesh\u7684\u65b0\u7279\u6027\u548cbug\u4fee\u590d\u60c5\u51b5\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 release notes.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2.0/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/zh/docs/v1.2.0/roadmap",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.2.0/roadmap.md",tags:[],version:"v1.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Apache EventMesh",permalink:"/zh/docs/v1.2.0/introduction"},next:{title:"TCP \u534f\u8bae\u6587\u6863",permalink:"/zh/docs/v1.2.0/design-document/event-handling-and-integration/runtime-protocol"}},m={},i=[{value:"List of Features and Milestones",id:"list-of-features-and-milestones",level:2}],u={toc:i};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh\u4ea7\u54c1\u8def\u7ebf\u56fe"},"EventMesh\u4ea7\u54c1\u8def\u7ebf\u56fe"),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86EventMesh\u7684\u65b0\u7279\u6027\u548cbug\u4fee\u590d\u60c5\u51b5\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes/v1.9.0/"},"release notes"),"."),(0,r.kt)("h2",{id:"list-of-features-and-milestones"},"List of Features and Milestones"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support TCP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pub/Sub Event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Java SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Support HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support RocketMQ as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Heartbeat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with OpenSchema"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with OpenTelemetry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support CloudEvents"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.4.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support gRPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Golang SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Nacos Registry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Mesh Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support  Federal Government"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0 (to be released)")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with Consul"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0 (to be released)")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Webhook"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0 (to be released)")),(0,r.kt)("td",{parentName:"tr",align:null},"Support etcd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Knative Eventing Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/790"},"GitHub Issue"),", ",(0,r.kt)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/COMDEV-463"},"GSoC '22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/700"},"GitHub Issue"),", ",(0,r.kt)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/COMDEV-465"},"GSoC '22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Kafka as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/676"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pulsar as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/676"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Dledger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Redis"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Mesh Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Zookeeper"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide NodeJS SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction Event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/697"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Event Query Language (EQL)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/778"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata consistency persistent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/817"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/815"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"WebAssembly Runtime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/576"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter Chain"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/664"},"GitHub Issue"))))))}d.isMDXComponent=!0}}]);