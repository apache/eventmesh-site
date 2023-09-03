"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8",s={unversionedId:"instruction/store",id:"version-v1.7.0/instruction/store",title:"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8",description:"eventmesh\u5728\u975estandalone\u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56RocketMQ\u4f5c\u4e3a\u5b58\u50a8\u5c42\uff1b\u82e5\u91c7\u7528standalone\u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884cruntime\u7684\u90e8\u7f72\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7.0/instruction/01-store.md",sourceDirName:"instruction",slug:"/instruction/store",permalink:"/zh/docs/v1.7.0/instruction/store",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.7.0/instruction/01-store.md",tags:[],version:"v1.7.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5bfc\u5165 Eclipse \u5feb\u901f\u5165\u95e8\u8bf4\u660e",permalink:"/zh/docs/v1.7.0/instruction/eclipse"},next:{title:"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8\uff08\u4f7f\u7528 Docker\uff09",permalink:"/zh/docs/v1.7.0/instruction/store-with-docker"}},c={},l=[{value:"1. \u4f9d\u8d56",id:"1-\u4f9d\u8d56",level:2},{value:"2. \u4e8c\u8fdb\u5236\u90e8\u7f72",id:"2-\u4e8c\u8fdb\u5236\u90e8\u7f72",level:2},{value:"2.1 \u4e0b\u8f7d",id:"21-\u4e0b\u8f7d",level:3},{value:"2.2 \u542f\u52a8",id:"22-\u542f\u52a8",level:3}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u90e8\u7f72-eventmesh-\u7684\u4e8b\u4ef6\u5b58\u50a8"},"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8"),(0,o.kt)("p",null,"eventmesh\u5728\u975estandalone\u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56RocketMQ\u4f5c\u4e3a\u5b58\u50a8\u5c42\uff1b\u82e5\u91c7\u7528standalone\u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884cruntime\u7684\u90e8\u7f72\u3002"),(0,o.kt)("h2",{id:"1-\u4f9d\u8d56"},"1. \u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5efa\u8bae\u4f7f\u7528Linux/Unix\uff1b\n64\u4f4dJDK 1.8+\uff1b\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u83507.0.*\uff1b\n4g+\u53ef\u7528\u78c1\u76d8\u7528\u4e8eeventmesh-store\u670d\u52a1\u5668\uff1b\n")),(0,o.kt)("h2",{id:"2-\u4e8c\u8fdb\u5236\u90e8\u7f72"},"2. \u4e8c\u8fdb\u5236\u90e8\u7f72"),(0,o.kt)("h3",{id:"21-\u4e0b\u8f7d"},"2.1 \u4e0b\u8f7d"),(0,o.kt)("p",null,"\u4ece",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/download/"},"RocketMQ\u5b98\u65b9\u7f51\u7ad9")," \u4e0b\u8f7dBinary\u4ee3\u7801\uff08\u63a8\u8350\u4f7f\u75284.9.*\u7248\u672c\uff09\uff0c\u8fd9\u91cc\u4ee54.9.4\u4e3a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unzip rocketmq-all-4.9.4-bin-release.zip\ncd rocketmq-all-4.9.4-bin-release/\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_1",src:r(86721).Z,width:"1674",height:"346"})),(0,o.kt)("h3",{id:"22-\u542f\u52a8"},"2.2 \u542f\u52a8"),(0,o.kt)("p",null,"\u542f\u52a8Name Server\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nohup sh bin/mqnamesrv & tail -f ~/logs/rocketmqlogs/namesrv.log\n")),(0,o.kt)("p",null,"\u5982\u679c\u5728\u770b\u5230The Name Server boot success...\uff0c\u5219\u8bf4\u660eName Server\u542f\u52a8\u6210\u529f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_2",src:r(85127).Z,width:"1676",height:"846"})),(0,o.kt)("p",null,"\u542f\u52a8Broker\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nohup sh bin/mqbroker -n localhost:9876 & tail -f ~/logs/rocketmqlogs/broker.log\n")),(0,o.kt)("p",null,"\u5982\u679c\u5728\u770b\u5230The broker boot success...\uff0c\u5219\u8bf4\u660eBroker\u542f\u52a8\u6210\u529f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_3",src:r(99934).Z,width:"1676",height:"652"})))}u.isMDXComponent=!0},86721:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_1-cf2134e63e6f1a8fd073dc6fc80d706f.png"},85127:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_2-6cb39241202920164fbc621facde31dd.png"},99934:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_3-f5dbf255935a30437ddbda7601f2d9f7.png"}}]);