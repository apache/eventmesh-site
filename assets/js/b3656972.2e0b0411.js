"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[2178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s="EventMesh Store",i={unversionedId:"instruction/store",id:"version-v1.0.0/instruction/store",title:"EventMesh Store",description:"1 Dependencies",source:"@site/versioned_docs/version-v1.0.0/instruction/01-store.md",sourceDirName:"instruction",slug:"/instruction/store",permalink:"/docs/v1.0.0/instruction/store",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.0.0/instruction/01-store.md",tags:[],version:"v1.0.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import EventMesh into eclipse",permalink:"/docs/v1.0.0/instruction/eclipse"},next:{title:"EventMesh Store with Docker",permalink:"/docs/v1.0.0/instruction/store-with-docker"}},c={},l=[{value:"1 Dependencies",id:"1-dependencies",level:2},{value:"2 Download",id:"2-download",level:2},{value:"3 Start",id:"3-start",level:3},{value:"Reference",id:"reference",level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eventmesh-store"},"EventMesh Store"),(0,o.kt)("h2",{id:"1-dependencies"},"1 Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,o.kt)("h2",{id:"2-download"},"2 Download"),(0,o.kt)("p",null,"Download the Binary code (recommended: 4.9.*) from ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/download/"},"RocketMQ Official"),". Here we take 4.9.4 as an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unzip rocketmq-all-4.9.4-bin-release.zip\ncd rocketmq-4.9.4/\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_1",src:r(86721).Z,width:"1674",height:"346"})),(0,o.kt)("h3",{id:"3-start"},"3 Start"),(0,o.kt)("p",null,"Start Name Server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nohup sh bin/mqnamesrv &\ntail -f ~/logs/rocketmqlogs/namesrv.log\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_2",src:r(85127).Z,width:"1676",height:"846"})),(0,o.kt)("p",null,"Start Broker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nohup sh bin/mqbroker -n localhost:9876 &\ntail -f ~/logs/rocketmqlogs/broker.log\n")),(0,o.kt)("p",null,"The deployment of eventmesh-store has finished, please go to the next step: ",(0,o.kt)("a",{parentName:"p",href:"/docs/v1.0.0/instruction/runtime"},"Start Eventmesh-Runtime")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"For more details about RocketMQ, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"https://rocketmq.apache.org/docs/quick-start/")))}d.isMDXComponent=!0},86721:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_1-cf2134e63e6f1a8fd073dc6fc80d706f.png"},85127:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_2-6cb39241202920164fbc621facde31dd.png"}}]);