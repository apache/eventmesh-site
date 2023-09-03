"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="EventMesh Store",s={unversionedId:"instruction/store",id:"version-v1.8.0/instruction/store",title:"EventMesh Store",description:"If you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.",source:"@site/versioned_docs/version-v1.8.0/instruction/01-store.md",sourceDirName:"instruction",slug:"/instruction/store",permalink:"/docs/v1.8.0/instruction/store",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.8.0/instruction/01-store.md",tags:[],version:"v1.8.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import EventMesh into eclipse",permalink:"/docs/v1.8.0/instruction/eclipse"},next:{title:"EventMesh Store with Docker",permalink:"/docs/v1.8.0/instruction/store-with-docker"}},l={},c=[{value:"1. Dependencies",id:"1-dependencies",level:2},{value:"2. Binary Deployment",id:"2-binary-deployment",level:2},{value:"2.1 Downloa",id:"21-downloa",level:3},{value:"2.2 Start",id:"22-start",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eventmesh-store"},"EventMesh Store"),(0,o.kt)("p",null,"If you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer."),(0,o.kt)("h2",{id:"1-dependencies"},"1. Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n4g+ available disk to deploy eventmesh-store;\n")),(0,o.kt)("h2",{id:"2-binary-deployment"},"2. Binary Deployment"),(0,o.kt)("h3",{id:"21-downloa"},"2.1 Downloa"),(0,o.kt)("p",null,"Download the Binary code (recommended: 4.9.*) from ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/download/"},"RocketMQ Official"),". Here we take 4.9.4 as an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unzip rocketmq-all-4.9.4-bin-release.zip\ncd rocketmq-4.9.4/\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_1",src:n(86721).Z,width:"1674",height:"346"})),(0,o.kt)("h3",{id:"22-start"},"2.2 Start"),(0,o.kt)("p",null,"Start Name Server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nohup sh bin/mqnamesrv &\ntail -f ~/logs/rocketmqlogs/namesrv.log\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_2",src:n(85127).Z,width:"1676",height:"846"})),(0,o.kt)("p",null,"Start Broker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nohup sh bin/mqbroker -n localhost:9876 &\ntail -f ~/logs/rocketmqlogs/broker.log\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_3",src:n(99934).Z,width:"1676",height:"652"})))}d.isMDXComponent=!0},86721:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rocketmq_1-cf2134e63e6f1a8fd073dc6fc80d706f.png"},85127:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rocketmq_2-6cb39241202920164fbc621facde31dd.png"},99934:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rocketmq_3-f5dbf255935a30437ddbda7601f2d9f7.png"}}]);