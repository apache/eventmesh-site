"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[6895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(r),h=o,d=m["".concat(a,".").concat(h)]||m[h]||c[h]||s;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=h;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[m]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},69307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={},i="\u901a\u8fc7 Prometheus \u89c2\u5bdf Metrics",u={unversionedId:"design-document/observability/prometheus",id:"version-v1.4.0/design-document/observability/prometheus",title:"\u901a\u8fc7 Prometheus \u89c2\u5bdf Metrics",description:"\u4e0b\u8f7d Prometheus",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4.0/design-document/02-observability/03-prometheus.md",sourceDirName:"design-document/02-observability",slug:"/design-document/observability/prometheus",permalink:"/zh/docs/v1.4.0/design-document/observability/prometheus",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.4.0/design-document/02-observability/03-prometheus.md",tags:[],version:"v1.4.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5206\u5e03\u5f0f\u8ffd\u8e2a",permalink:"/zh/docs/v1.4.0/design-document/observability/tracing"},next:{title:"\u901a\u8fc7 Zipkin \u89c2\u5bdf Trace",permalink:"/zh/docs/v1.4.0/design-document/observability/zipkin"}},a={},p=[{value:"\u4e0b\u8f7d Prometheus",id:"\u4e0b\u8f7d-prometheus",level:2},{value:"2\u3001\u5728prometheus.yml\u4e2d\u6dfb\u52a0\u914d\u7f6e",id:"2\u5728prometheusyml\u4e2d\u6dfb\u52a0\u914d\u7f6e",level:3},{value:"\u8fd0\u884c Prometheus \u548c EventMesh",id:"\u8fd0\u884c-prometheus-\u548c-eventmesh",level:2},{value:"\u8f93\u5165\u60f3\u89c2\u5bdf\u7684 Metrics",id:"\u8f93\u5165\u60f3\u89c2\u5bdf\u7684-metrics",level:3}],l={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u901a\u8fc7-prometheus-\u89c2\u5bdf-metrics"},"\u901a\u8fc7 Prometheus \u89c2\u5bdf Metrics"),(0,o.kt)("h2",{id:"\u4e0b\u8f7d-prometheus"},"\u4e0b\u8f7d Prometheus"),(0,o.kt)("p",null,"\u5b98\u7f51\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"https://prometheus.io/")),(0,o.kt)("p",null,"\u672c\u5730\u4e0b\u8f7dPrometheus\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"https://prometheus.io/download/")),(0,o.kt)("p",null,"\u9009\u62e9\u81ea\u5df1\u7535\u8111\u5bf9\u5e94\u7684\u7248\u672c\u4e0b\u8f7d\u5e76\u89e3\u538b\u7f29"),(0,o.kt)("h3",{id:"2\u5728prometheusyml\u4e2d\u6dfb\u52a0\u914d\u7f6e"},"2\u3001\u5728prometheus.yml\u4e2d\u6dfb\u52a0\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u662fPrometheus\u7684\u65b0\u624b\uff0c\u53ef\u4ee5\u76f4\u63a5\u590d\u5236eventmesh-runtime/conf/prometheus.yml\u66ff\u6362"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5341\u5206\u4e86\u89e3Prometheus\uff0c\u53ef\u4ee5\u81ea\u884c\u914d\u7f6e\uff0ceventmesh\u9ed8\u8ba4\u7684\u5bfc\u51fa\u7684\u7aef\u53e3\u4e3a19090\u3002"),(0,o.kt)("p",null,"ps\uff1a\u5982\u679c\u9700\u8981\u66f4\u6362\u7aef\u53e3\u7684\u8bdd\uff0c\u8bf7\u4fee\u6539eventmesh-runtime/conf/eventmesh.properties\u4e2d\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"#prometheusPort\neventMesh.metrics.prometheus.port=19090\n")),(0,o.kt)("h2",{id:"\u8fd0\u884c-prometheus-\u548c-eventmesh"},"\u8fd0\u884c Prometheus \u548c EventMesh"),(0,o.kt)("p",null,"\u53cc\u51fbPrometheus.exe\u8fd0\u884c"),(0,o.kt)("p",null,"\u8fd0\u884ceventmesh-starter(\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v1.4.0/instruction/runtime"},"eventmesh-runtime-quickstart"),")"),(0,o.kt)("p",null,"\u8fd0\u884ceventmesh-example(\u53c2\u8003","[eventmesh-sdk-java-quickstart]","(/zh/docs/v1.4.0/instruction/demo"),(0,o.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\uff1ahttp://localhost:9090/"),(0,o.kt)("h3",{id:"\u8f93\u5165\u60f3\u89c2\u5bdf\u7684-metrics"},"\u8f93\u5165\u60f3\u89c2\u5bdf\u7684 Metrics"),(0,o.kt)("p",null,"\u8f93\u5165\u2019",(0,o.kt)("strong",{parentName:"p"},"eventmesh_"),"\u2018 \u5c31\u4f1a\u51fa\u73b0\u76f8\u5173\u7684\u6307\u6807\u7684\u63d0\u793a"))}m.isMDXComponent=!0}}]);