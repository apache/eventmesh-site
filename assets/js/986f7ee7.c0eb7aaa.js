"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[7348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="Collect Trace with Zipkin",p={unversionedId:"design-document/observability/zipkin",id:"version-v1.8.0/design-document/observability/zipkin",title:"Collect Trace with Zipkin",description:"Zipkin",source:"@site/versioned_docs/version-v1.8.0/design-document/02-observability/04-zipkin.md",sourceDirName:"design-document/02-observability",slug:"/design-document/observability/zipkin",permalink:"/docs/v1.8.0/design-document/observability/zipkin",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.8.0/design-document/02-observability/04-zipkin.md",tags:[],version:"v1.8.0",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observe Metrics with Prometheus",permalink:"/docs/v1.8.0/design-document/observability/prometheus"},next:{title:"Collect Trace with Jaeger",permalink:"/docs/v1.8.0/design-document/observability/jaeger"}},s={},c=[{value:"Zipkin",id:"zipkin",level:2},{value:"Configuration",id:"configuration",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"collect-trace-with-zipkin"},"Collect Trace with Zipkin"),(0,i.kt)("h2",{id:"zipkin"},"Zipkin"),(0,i.kt)("p",null,"Distributed tracing is a method used to profile and monitor applications built with microservices architecture. Distributed tracing helps pinpoint where failures occur and what causes poor performance."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zipkin.io"},"Zipkin")," is a distributed tracing system that helps collect timing data needed to troubleshoot latency problems in service architectures. EventMesh exposes a collection of trace data that could be collected and analyzed by Zipkin. Please follow ",(0,i.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart.html"},'the "Zipkin Quickstart" tutorial')," to download and install the latest release of Zipkin."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To enable the trace exporter of EventMesh Runtime, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventMesh.server.trace.enabled")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/eventmesh.properties")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"# Trace plugin\neventMesh.server.trace.enabled=true\neventMesh.trace.plugin=zipkin\n")),(0,i.kt)("p",null,"To customize the behavior of the trace exporter such as timeout or export interval, edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"exporter.properties")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"# Set the maximum batch size to use\neventmesh.trace.max.export.size=512\n# Set the queue size. This must be >= the export batch size\neventmesh.trace.max.queue.size=2048\n# Set the max amount of time an export can run before getting(TimeUnit=SECONDS)\neventmesh.trace.export.timeout=30\n# Set time between two different exports (TimeUnit=SECONDS)\neventmesh.trace.export.interval=5\n")),(0,i.kt)("p",null,"To send the exported trace data to Zipkin, edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh.trace.zipkin.ip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh.trace.zipkin.port")," fields in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/zipkin.properties")," file to match the configuration of the Zipkin server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"# Zipkin's IP and Port\neventmesh.trace.zipkin.ip=localhost\neventmesh.trace.zipkin.port=9411\n")))}u.isMDXComponent=!0}}]);