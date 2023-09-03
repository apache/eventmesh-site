"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=s(r),g=a,v=l["".concat(p,".").concat(g)]||l[g]||d[g]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[l]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},61913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="EventMesh \u5347\u7ea7\u6307\u5f15",u={unversionedId:"upgrade-guide/upgrade-guide",id:"version-v1.1.1/upgrade-guide/upgrade-guide",title:"EventMesh \u5347\u7ea7\u6307\u5f15",description:"\u672c\u6587\u7b80\u5355\u4ecb\u7ecdEventMesh\u4ece1.2.0\u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1.1/upgrade-guide/01-upgrade-guide.md",sourceDirName:"upgrade-guide",slug:"/upgrade-guide/upgrade-guide",permalink:"/zh/docs/v1.1.1/upgrade-guide/upgrade-guide",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.1.1/upgrade-guide/01-upgrade-guide.md",tags:[],version:"v1.1.1",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTPS",permalink:"/zh/docs/v1.1.1/design-document/event-handling-and-integration/https"}},p={},s=[{value:"1. \u6ce8\u610f\u4e8b\u9879",id:"1-\u6ce8\u610f\u4e8b\u9879",level:2},{value:"2. \u670d\u52a1\u5347\u7ea7\u5b89\u88c5",id:"2-\u670d\u52a1\u5347\u7ea7\u5b89\u88c5",level:2}],c={toc:s};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-\u5347\u7ea7\u6307\u5f15"},"EventMesh \u5347\u7ea7\u6307\u5f15"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7b80\u5355\u4ecb\u7ecdEventMesh\u4ece1.2.0\u7248\u672c\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684\u6ce8\u610f\u4e8b\u9879\u3002")),(0,a.kt)("h2",{id:"1-\u6ce8\u610f\u4e8b\u9879"},"1. \u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u662f\u9996\u6b21\u63a5\u89e6\u5e76\u4f7f\u7528EventMesh\uff0c\u60a8\u53ef\u4ee5\u5ffd\u7565\u8be5\u7ae0\u8282\u3002")),(0,a.kt)("h2",{id:"2-\u670d\u52a1\u5347\u7ea7\u5b89\u88c5"},"2. \u670d\u52a1\u5347\u7ea7\u5b89\u88c5"),(0,a.kt)("p",null,"EventMesh\u8fd0\u884c\u65f6\u6a21\u5757\u7684\u5347\u7ea7\u548c\u542f\u52a8\u53ef\u4ee5\u6309\u7167 ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/docs/instruction/runtime"},"\u8bbe\u8ba1\u6587\u6863")," \u5b8c\u6210. "),(0,a.kt)("p",null,"\u7248\u672c\u4e4b\u95f4\u7684\u5dee\u5f02\u548c\u53d8\u5316\uff0c\u8bf7\u53c2\u8003\u4e0d\u540c\u7248\u672c\u7684",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes"},"release notes"),"\u3002\u53ef\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7248\u672c\u95f4\u7684\u517c\u5bb9\u6027\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528\u6700\u65b0\u7684\u529f\u80fd\uff0c\u6309\u7167\u7248\u672c\u8bf4\u660e\u5347\u7ea7\u5230\u76f8\u5e94\u7684\u7248\u672c\u5373\u53ef\uff0c\u4e0d\u540c\u7684\u63d2\u4ef6\u6a21\u5757\u7ec4\u4ef6\u53ef\u4ee5\u5355\u72ec\u6253\u5305\u914d\u7f6e\u3002\u53ef\u4ee5\u53c2\u8003\u76f8\u5e94\u7684",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/docs/design-document/"},"\u529f\u80fd\u8bbe\u8ba1\u6587\u6863\u548c\u6307\u5357")))}l.isMDXComponent=!0}}]);