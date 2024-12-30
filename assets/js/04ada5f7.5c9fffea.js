"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[8977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="Observe Metrics with Prometheus",s={unversionedId:"design-document/observability/prometheus",id:"design-document/observability/prometheus",title:"Observe Metrics with Prometheus",description:"Prometheus",source:"@site/docs/design-document/02-observability/03-prometheus.md",sourceDirName:"design-document/02-observability",slug:"/design-document/observability/prometheus",permalink:"/docs/next/design-document/observability/prometheus",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/02-observability/03-prometheus.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Distributed Tracing",permalink:"/docs/next/design-document/observability/tracing"},next:{title:"Collect Trace with Zipkin",permalink:"/docs/next/design-document/observability/zipkin"}},c={},l=[{value:"Prometheus",id:"prometheus",level:2},{value:"Edit Prometheus Configuration",id:"edit-prometheus-configuration",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observe-metrics-with-prometheus"},"Observe Metrics with Prometheus"),(0,o.kt)("h2",{id:"prometheus"},"Prometheus"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus")," is an open-source system monitoring and alerting toolkit that collects and stores the metrics as time-series data. EventMesh exposes a collection of metrics data that could be scraped and analyzed by Prometheus. Please follow ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/first_steps/"},'the "First steps with Prometheus" tutorial')," to download and install the latest release of Prometheus."),(0,o.kt)("h2",{id:"edit-prometheus-configuration"},"Edit Prometheus Configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime/conf/prometheus.yml")," configuration file specifies the port of the metrics HTTP endpoint. The default metrics port is ",(0,o.kt)("inlineCode",{parentName:"p"},"19090"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"eventMesh.metrics.prometheus.port=19090\n")),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config"},"the Prometheus configuration guide")," to add the EventMesh metrics as a scrape target in the configuration file. Here's the minimum configuration that creates a job with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh")," and the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:19090"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'scrape_configs:\n  - job_name: "eventmesh"\n    static_configs:\n      - targets: ["localhost:19090"]\n')),(0,o.kt)("p",null,"Please navigate to the Prometheus dashboard (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9090"),") to view the list of metrics exported by EventMesh, which are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh_"),"."))}m.isMDXComponent=!0}}]);