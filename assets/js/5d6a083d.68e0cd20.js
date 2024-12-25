"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,v=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(v,o(o({ref:t},m),{},{components:n})):r.createElement(v,o({ref:t},m))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={},o="EventMesh Metrics (OpenTelemetry and Prometheus)",l={unversionedId:"design-document/observability/metrics-export",id:"version-v1.10.0/design-document/observability/metrics-export",title:"EventMesh Metrics (OpenTelemetry and Prometheus)",description:"Introduction",source:"@site/versioned_docs/version-v1.10.0/design-document/02-observability/01-metrics-export.md",sourceDirName:"design-document/02-observability",slug:"/design-document/observability/metrics-export",permalink:"/docs/v1.10.0/design-document/observability/metrics-export",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/design-document/02-observability/01-metrics-export.md",tags:[],version:"v1.10.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Workflow",permalink:"/docs/v1.10.0/design-document/event-handling-and-integration/workflow"},next:{title:"Distributed Tracing",permalink:"/docs/v1.10.0/design-document/observability/tracing"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"An overview of OpenTelemetry",id:"an-overview-of-opentelemetry",level:2},{value:"An overview of  Prometheus",id:"an-overview-of--prometheus",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Functional Requirements",id:"functional-requirements",level:3},{value:"Design Details",id:"design-details",level:2},{value:"Appendix",id:"appendix",level:2},{value:"References",id:"references",level:3}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eventmesh-metrics-opentelemetry-and-prometheus"},"EventMesh Metrics (OpenTelemetry and Prometheus)"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh"},"EventMesh")," is a dynamic cloud-native eventing infrastructure."),(0,i.kt)("h2",{id:"an-overview-of-opentelemetry"},"An overview of OpenTelemetry"),(0,i.kt)("p",null,"OpenTelemetry is a collection of tools, APIs, and SDKs. You can use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) for analysis in order to understand your software's performance and behavior."),(0,i.kt)("h2",{id:"an-overview-of--prometheus"},"An overview of  Prometheus"),(0,i.kt)("p",null,"Power your metrics and alerting with a leading open-source monitoring solution."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dimensional data"),(0,i.kt)("li",{parentName:"ul"},"Powerful queries"),(0,i.kt)("li",{parentName:"ul"},"Great visualization"),(0,i.kt)("li",{parentName:"ul"},"Efficient storage"),(0,i.kt)("li",{parentName:"ul"},"Simple operation"),(0,i.kt)("li",{parentName:"ul"},"Precise alerting"),(0,i.kt)("li",{parentName:"ul"},"Many client libraries"),(0,i.kt)("li",{parentName:"ul"},"Many integrations")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"functional-requirements"},"Functional Requirements"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Requirement ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to observe HTTP metrics from Prometheus"),(0,i.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to observe TCP metrics from Prometheus"),(0,i.kt)("td",{parentName:"tr",align:null},"Functionality")))),(0,i.kt)("h2",{id:"design-details"},"Design Details"),(0,i.kt)("p",null,"use the meter instrument provided by OpenTelemetry to observe the metrics exist in EventMesh then export to Prometheus."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Initialize a meter instrument")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"set the Prometheus server")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"different metrics observer built"))),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span"},"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span")))}c.isMDXComponent=!0}}]);