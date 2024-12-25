"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[9126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,f=d["".concat(u,".").concat(g)]||d[g]||l[g]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},22223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="EventMesh Upgrade Guide",s={unversionedId:"upgrade-guide/upgrade-guide",id:"version-v1.10.0/upgrade-guide/upgrade-guide",title:"EventMesh Upgrade Guide",description:"This article briefly introduces the precautions for upgrading EventMesh from version 1.2.0 to the latest version.",source:"@site/versioned_docs/version-v1.10.0/upgrade-guide/01-upgrade-guide.md",sourceDirName:"upgrade-guide",slug:"/upgrade-guide/upgrade-guide",permalink:"/docs/v1.10.0/upgrade-guide/upgrade-guide",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/upgrade-guide/01-upgrade-guide.md",tags:[],version:"v1.10.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gRPC Protocol",permalink:"/docs/v1.10.0/sdk-java/grpc"}},u={},p=[{value:"1. Precautions",id:"1-precautions",level:2},{value:"2. Service upgrade installation",id:"2-service-upgrade-installation",level:2}],c={toc:p},d="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-upgrade-guide"},"EventMesh Upgrade Guide"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article briefly introduces the precautions for upgrading EventMesh from version 1.2.0 to the latest version.")),(0,a.kt)("h2",{id:"1-precautions"},"1. Precautions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you are using EventMesh for the first time, you can ignore this chapter.")),(0,a.kt)("h2",{id:"2-service-upgrade-installation"},"2. Service upgrade installation"),(0,a.kt)("p",null,"The upgrade and startup of the EventMesh Runtime module can be done in accordance with the ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/docs/instruction/runtime"},"Deployment Guide"),"."),(0,a.kt)("p",null,"For differences and changes between versions, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes"},"Release Notes")," of different versions. Compatibility between versions can be achieved."),(0,a.kt)("p",null,"If you need to use the latest features, follow the release note to upgrade to the corresponding version That\u2019s it, and different plug-in module components can be packaged and configured separately. You can refer to the corresponding ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/docs/design-document/"},"Feature design documents and Guidelines"),"."))}l.isMDXComponent=!0}}]);