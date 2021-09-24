(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[561],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2949:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s=["components"],o={},l="Lightweight EventMesh SDK (CloudEvents)",u={unversionedId:"features/eventmesh-cloudevents-sdk-binding",id:"features/eventmesh-cloudevents-sdk-binding",isDocsHomePage:!1,title:"Lightweight EventMesh SDK (CloudEvents)",description:"Introduction",source:"@site/docs/features/eventmesh-cloudevents-sdk-binding.md",sourceDirName:"features",slug:"/features/eventmesh-cloudevents-sdk-binding",permalink:"/zh/docs/features/eventmesh-cloudevents-sdk-binding",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/features/eventmesh-cloudevents-sdk-binding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"EventMesh Metrics (OpenTelemetry+Prometheus)",permalink:"/zh/docs/features/eventmesh-metrics-export-design"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Functional Requirements",id:"functional-requirements",children:[]},{value:"Performance Requirements",id:"performance-requirements",children:[]}]},{value:"Design Details",id:"design-details",children:[]},{value:"Appendix",id:"appendix",children:[{value:"References",id:"references",children:[]}]}],c={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lightweight-eventmesh-sdk-cloudevents"},"Lightweight EventMesh SDK (CloudEvents)"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," is a dynamic\ncloud-native eventing infrastructure."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cloudevents/spec"},"CloudEvents")," is a specification for describing\nevent data in common formats to provide interoperability across services, platforms and systems."),(0,i.kt)("p",null,"As of May 2021, EventMesh contains the following\nmajor components: ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-sdk-java")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-connector-rocketmq"),".\nFor a customer to use EventMesh, ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime")," can be deployed as microservices to transmit\ncustomer's events between event producers and consumers. Customer's applications can then interact\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-runtime")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-sdk-java")," to publish/subscribe for events on given topics."),(0,i.kt)("p",null,"CloudEvents support has been a highly desired feature by EventMesh users. There are many reasons\nfor users to prefer using a SDK with CloudEvents support:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CloudEvents is a more widely accepted and supported way to describe events. ",(0,i.kt)("inlineCode",{parentName:"li"},"eventmesh-sdk-java"),"\ncurrently uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"LiteMessage")," structure to describe events, which is less standardized."),(0,i.kt)("li",{parentName:"ul"},"CloudEvents's Java SDK has a wider range of distribution methods. For example, EventMesh users\ncurrently need to use the SDK tarball or build from source for every EventMesh release. With\nCloudEvents support, it's easier for users to take a dependency on EventMesh's SDK using CloudEvents's\npublic distributions (e.g. through a Maven configuration)."),(0,i.kt)("li",{parentName:"ul"},"CloudEvents's SDK supports multiple languages. Although EventMesh currently only supports a Java SDK,\nin future if more languages need to be supported, the extensions can be easier with experience on\nbinding Java SDK with CloudEvents.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"functional-requirements"},"Functional Requirements"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Requirement ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F-1"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh users should be able to depend on a public SDK to publish/subscribe events in CloudEvents format"),(0,i.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F-2"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh users should continue to have access to existing EventMesh client features (e.g. load balancing) with an SDK that supports CloudEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Feature Parity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F-3"),(0,i.kt)("td",{parentName:"tr",align:null},"EventMesh developers should be able to sync ",(0,i.kt)("inlineCode",{parentName:"td"},"eventmesh-sdk-java")," and an SDK with CloudEvents support without much effort/pain"),(0,i.kt)("td",{parentName:"tr",align:null},"Maintainability")))),(0,i.kt)("h3",{id:"performance-requirements"},"Performance Requirements"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Requirement ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P-1"),(0,i.kt)("td",{parentName:"tr",align:null},"Client side latency for SDK with CloudEvents support should be similar to current SDK"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"design-details"},"Design Details"),(0,i.kt)("p",null,"Binding with the CloudEvents Java SDK (similar to what Kafka already did, see Reference for more details)\nshould be an easy way to achieve the requirements."),(0,i.kt)("p",null,"Design details TBD."),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloudevents.github.io/sdk-java/kafka"},"https://cloudevents.github.io/sdk-java/kafka"))))}p.isMDXComponent=!0}}]);