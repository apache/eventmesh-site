"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4378],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>U});var n=l(67294);function A(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){A(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t){if(null==e)return{};var l,n,A=function(e,t){if(null==e)return{};var l,n,A={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(A[l]=e[l]);return A}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(A[l]=e[l])}return A}var i=n.createContext({}),o=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},k=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var l=e.components,A=e.mdxType,a=e.originalType,i=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),m=o(l),u=A,U=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return l?n.createElement(U,r(r({ref:t},k),{},{components:l})):n.createElement(U,r({ref:t},k))}));function U(e,t){var l=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var a=l.length,r=new Array(a);r[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[m]="string"==typeof e?e:A,r[1]=d;for(var o=2;o<a;o++)r[o]=l[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}u.displayName="MDXCreateElement"},41161:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var n=l(87462),A=(l(67294),l(3905));const a={},r="EventMesh Stream",d={unversionedId:"design-document/stream",id:"version-v1.5.0/design-document/stream",title:"EventMesh Stream",description:"\u4e8b\u4ef6\u6d41\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.5.0/design-document/02-stream.md",sourceDirName:"design-document",slug:"/design-document/stream",permalink:"/zh/docs/v1.5.0/design-document/stream",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.5.0/design-document/02-stream.md",tags:[],version:"v1.5.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7 Zipkin \u89c2\u5bdf Trace",permalink:"/zh/docs/v1.5.0/design-document/observability/zipkin"},next:{title:"EventMesh \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3 (OpenSchema)",permalink:"/zh/docs/v1.5.0/design-document/schema-registry"}},i={},o=[{value:"\u4e8b\u4ef6\u6d41\u6982\u8ff0",id:"\u4e8b\u4ef6\u6d41\u6982\u8ff0",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u529f\u80fd\u8981\u6c42",id:"\u529f\u80fd\u8981\u6c42",level:3},{value:"\u8bbe\u8ba1\u7ec6\u8282",id:"\u8bbe\u8ba1\u7ec6\u8282",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",level:2},{value:"EventMesh-Stream \u7ec4\u4ef6",id:"eventmesh-stream-\u7ec4\u4ef6",level:3},{value:"Event\uff08\u4e8b\u4ef6\uff09",id:"event\u4e8b\u4ef6",level:4},{value:"Event Channel\uff08\u4e8b\u4ef6\u901a\u9053\uff09",id:"event-channel\u4e8b\u4ef6\u901a\u9053",level:4},{value:"Event EndPoint\uff08\u4e8b\u4ef6\u7aef\u70b9\uff09",id:"event-endpoint\u4e8b\u4ef6\u7aef\u70b9",level:4},{value:"Event Pipes &amp; Filters\uff08\u4e8b\u4ef6\u7ba1\u9053\u548c\u8fc7\u6ee4\u5668\uff09",id:"event-pipes--filters\u4e8b\u4ef6\u7ba1\u9053\u548c\u8fc7\u6ee4\u5668",level:4},{value:"Event Routes\uff08\u4e8b\u4ef6\u8def\u7531\u5668\uff09",id:"event-routes\u4e8b\u4ef6\u8def\u7531\u5668",level:4},{value:"Event Converter\uff08\u4e8b\u4ef6\u8f6c\u6362\u5668\uff09",id:"event-converter\u4e8b\u4ef6\u8f6c\u6362\u5668",level:4},{value:"EventMesh-Stream \u7ec4\u4ef6\u63a5\u53e3",id:"eventmesh-stream-\u7ec4\u4ef6\u63a5\u53e3",level:2},{value:"Component\uff08\u7ec4\u4ef6\uff09",id:"component\u7ec4\u4ef6",level:3},{value:"EndPoint\uff08\u7aef\u70b9\uff09",id:"endpoint\u7aef\u70b9",level:3},{value:"Producer\uff08\u751f\u4ea7\u8005\uff09",id:"producer\u751f\u4ea7\u8005",level:4},{value:"Consumer\uff08\u6d88\u8d39\u8005\uff09",id:"consumer\u6d88\u8d39\u8005",level:4}],k={toc:o};function m(e){let{components:t,...a}=e;return(0,A.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"eventmesh-stream"},"EventMesh Stream"),(0,A.kt)("h2",{id:"\u4e8b\u4ef6\u6d41\u6982\u8ff0"},"\u4e8b\u4ef6\u6d41\u6982\u8ff0"),(0,A.kt)("p",null,"\u4e8b\u4ef6\u6d41\u662f\u53d1\u5e03/\u8ba2\u9605\u67b6\u6784\u6a21\u5f0f\u7684\u4e00\u79cd\u5b9e\u73b0\uff0c\u5b83\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"\u6d88\u606f\u6216\u4e8b\u4ef6\uff1a\u72b6\u6001\u53d8\u5316\u3002")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"\u4e3b\u9898\uff1a\u6d88\u606f\u4e2d\u95f4\u4ef6\u4ee3\u7406\u4e2d\u7684\u5206\u533a\u3002")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"\u6d88\u8d39\u8005\uff1a\u53ef\u4ee5\u4ece\u4ee3\u7406\u4e3b\u9898\u8ba2\u9605\u8bfb\u53d6\u4e8b\u4ef6\u3002")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"\u751f\u4ea7\u8005\uff1a\u751f\u6210\u4e8b\u4ef6"))),(0,A.kt)("p",null,"\u4e8b\u4ef6\u6d41\u662f\u4e8b\u4ef6\u7684\u8fde\u7eed\u6d41\u52a8\uff0c\u4e3a\u4e86\u7ef4\u6301\u4e8b\u4ef6\u4e4b\u95f4\u7684\u79e9\u5e8f\uff0c\u4e8b\u4ef6\u6d41\u5e94\u8be5\u4ee5\u7279\u5b9a\u7684\u65b9\u5f0f\u4ece\u751f\u4ea7\u8005\u6d41\u5411\u6d88\u8d39\u8005\u3002"),(0,A.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,A.kt)("h3",{id:"\u529f\u80fd\u8981\u6c42"},"\u529f\u80fd\u8981\u6c42"),(0,A.kt)("table",null,(0,A.kt)("thead",{parentName:"table"},(0,A.kt)("tr",{parentName:"thead"},(0,A.kt)("th",{parentName:"tr",align:null},"\u9700\u6c42\u7f16\u53f7"),(0,A.kt)("th",{parentName:"tr",align:null},"\u9700\u6c42\u63cf\u8ff0"),(0,A.kt)("th",{parentName:"tr",align:null},"\u6ce8\u91ca"))),(0,A.kt)("tbody",{parentName:"table"},(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"F-1"),(0,A.kt)("td",{parentName:"tr",align:null},"EventMesh\u7528\u6237\u5e94\u8be5\u80fd\u591f\u5728 EventMesh \u4e2d\u5b9e\u73b0\u4e8b\u4ef6\u6d41\u529f\u80fd"),(0,A.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u6027")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"F-2"),(0,A.kt)("td",{parentName:"tr",align:null},"EventMesh\u7528\u6237\u53ef\u4ee5\u4e3a\u8def\u7531\u3001\u8fc7\u6ee4\u3001\u8f6c\u6362\u7b49\u5e94\u7528\u52a8\u6001\u7528\u6237\u7279\u5b9a\u903b\u8f91"),(0,A.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u6027")))),(0,A.kt)("h2",{id:"\u8bbe\u8ba1\u7ec6\u8282"},"\u8bbe\u8ba1\u7ec6\u8282"),(0,A.kt)("p",null,"\u6211\u4eec\u5f15\u5165\u4e86 EventMesh Stream \u7ec4\u4ef6\uff0c\u5141\u8bb8\u6211\u4eec\u5728 Apache Camel \u4e2d\u672c\u5730\u4f7f\u7528\u6765\u81ea Spring Cloud Stream \u7684\u7f16\u7a0b\u6a21\u578b\u548c\u7ed1\u5b9a\u5668\u62bd\u8c61\u3002"),(0,A.kt)("p",null,(0,A.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-cloud-stream"},"Spring-Cloud-Stream")," Spring Cloud Stream\u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\n\u4e0e\u5171\u4eab\u6d88\u606f\u4f20\u9012\u7cfb\u7edf\u8fde\u63a5\u7684\u3001\u9ad8\u5ea6\u53ef\u6269\u5c55\u7684\u4e8b\u4ef6\u9a71\u52a8\u5fae\u670d\u52a1\u6846\u67b6\u3002"),(0,A.kt)("p",null,(0,A.kt)("a",{parentName:"p",href:"https://camel.apache.org/"},"Apache Camel")," Camel \u662f\u4e00\u4e2a\u5f00\u6e90\u96c6\u6210\u6846\u67b6\uff0c\u4f7f\u60a8\u80fd\u591f\u5feb\u901f\u8f7b\u677e\u5730\u96c6\u6210\u5404\u79cd\u6d88\u8d39\u6216\u751f\u4ea7\u6570\u636e\u7684\u7cfb\u7edf\u3002"),(0,A.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Stream Architecture",src:l(76725).Z,width:"716",height:"332"})),(0,A.kt)("h2",{id:"\u8bbe\u8ba1"},"\u8bbe\u8ba1"),(0,A.kt)("h3",{id:"eventmesh-stream-\u7ec4\u4ef6"},"EventMesh-Stream \u7ec4\u4ef6"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Event\uff08\u4e8b\u4ef6\uff09"),(0,A.kt)("li",{parentName:"ul"},"Event Channel\uff08\u4e8b\u4ef6\u901a\u9053\uff09"),(0,A.kt)("li",{parentName:"ul"},"Event EndPoint\uff08\u4e8b\u4ef6\u7aef\u70b9\uff09"),(0,A.kt)("li",{parentName:"ul"},"Event Pipes & Filters\uff08\u4e8b\u4ef6\u7ba1\u9053\u548c\u8fc7\u6ee4\u5668\uff09"),(0,A.kt)("li",{parentName:"ul"},"Event Routes\uff08\u4e8b\u4ef6\u8def\u7531\u5668\uff09"),(0,A.kt)("li",{parentName:"ul"},"Event Converter\uff08\u4e8b\u4ef6\u8f6c\u6362\u5668\uff09")),(0,A.kt)("h4",{id:"event\u4e8b\u4ef6"},"Event\uff08\u4e8b\u4ef6\uff09"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u4e8b\u4ef6\u662f\u7cfb\u7edf\u4e2d\u4f20\u8f93\u6570\u636e\u7684\u6700\u5c0f\u5355\u4f4d\u3002\u5b83\u7684\u7ed3\u6784\u5206\u4e3a\u6807\u9898\u3001\u6b63\u6587\u548c\u9644\u4ef6\u3002")),(0,A.kt)("h4",{id:"event-channel\u4e8b\u4ef6\u901a\u9053"},"Event Channel\uff08\u4e8b\u4ef6\u901a\u9053\uff09"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u4e8b\u4ef6\u901a\u9053\u662f\u7cfb\u7edf\u4e2d\u7684\u903b\u8f91\u901a\u9053\uff0c\u6211\u4eec\u662f\u901a\u8fc7 Spring Cloud Stream \u7f16\u7a0b\u6a21\u578b\u5b9e\u73b0\u7684\uff0c\u5b83\u5177\u6709\u56f4\u7ed5\u6d88\u606f\u901a\u9053\u7684\u62bd\u8c61\u529f\u80fd\uff08\u622a\u81f3\u76ee\u524d\u7528\u7684\u662f Spring ",(0,A.kt)("inlineCode",{parentName:"p"},"MessageChannel"),"\uff09\u3002")),(0,A.kt)("h4",{id:"event-endpoint\u4e8b\u4ef6\u7aef\u70b9"},"Event EndPoint\uff08\u4e8b\u4ef6\u7aef\u70b9\uff09"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u4e8b\u4ef6\u7aef\u70b9\u662f\u5e94\u7528\u7a0b\u5e8f\u548c\u6d88\u606f\u4f20\u9012\u7cfb\u7edf\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e24\u79cd\u7c7b\u578b\u7684\u7aef\u70b9")),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\u7aef\u70b9 - \u51fa\u73b0\u5728\u8def\u7531\u5f00\u59cb\u5e76\u4ece\u4f20\u5165\u901a\u9053\u8bfb\u53d6\u4f20\u5165\u4e8b\u4ef6\u3002"),(0,A.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u8005\u7aef\u70b9 - \u51fa\u73b0\u5728\u8def\u7531\u7684\u672b\u5c3e\u5e76\u5c06\u4f20\u5165\u4e8b\u4ef6\u5199\u5165\u4f20\u51fa\u901a\u9053\u3002")),(0,A.kt)("h4",{id:"event-pipes--filters\u4e8b\u4ef6\u7ba1\u9053\u548c\u8fc7\u6ee4\u5668"},"Event Pipes & Filters\uff08\u4e8b\u4ef6\u7ba1\u9053\u548c\u8fc7\u6ee4\u5668\uff09"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u8fc7\u6ee4\u5668\u94fe\uff08Apache Camel ",(0,A.kt)("inlineCode",{parentName:"p"},"Processor"),"\uff09\u6765\u6784\u5efa\u8def\u7531\uff0c\u5176\u4e2d\u4e00\u4e2a\u8fc7\u6ee4\u5668\u7684\u8f93\u51fa\u88ab\u7528\u4e8e\u7ba1\u9053\u4e2d\u4e0b\u4e00\u4e2a\u8fc7\u6ee4\u5668\u7684\u8f93\u5165\u3002\u7ba1\u9053\u7684\u4e3b\u8981\u4f18\u70b9\u662f\u53ef\u4ee5\u521b\u5efa\u590d\u6742\u7684\u4e8b\u4ef6\u5904\u7406\u903b\u8f91\u3002")),(0,A.kt)("h4",{id:"event-routes\u4e8b\u4ef6\u8def\u7531\u5668"},"Event Routes\uff08\u4e8b\u4ef6\u8def\u7531\u5668\uff09"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u4e8b\u4ef6\u8def\u7531\u5668\u662f\u6d88\u8d39\u8005\u7684\u4e00\u79cd\u8fc7\u6ee4\u5668\uff0c\u5e76\u6839\u636e\u51b3\u7b56\u6807\u51c6\u5c06\u5b83\u4eec\u91cd\u5b9a\u5411\u5230\u9002\u5f53\u7684\u76ee\u6807\u7aef\u70b9\u3002")),(0,A.kt)("h4",{id:"event-converter\u4e8b\u4ef6\u8f6c\u6362\u5668"},"Event Converter\uff08\u4e8b\u4ef6\u8f6c\u6362\u5668\uff09"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u4e8b\u4ef6\u8f6c\u6362\u5668\u7528\u4e8e\u4fee\u6539\u4e8b\u4ef6\u5185\u5bb9\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a\u4e0d\u540c\u7684\u683c\u5f0f\uff08\u6362\u800c\u8a00\u4e4b cloudevents -> Event (Camel) -> Binder Message(Spring Message)\uff0c\u53cd\u4e4b\u4ea6\u7136\uff09\u3002")),(0,A.kt)("h2",{id:"eventmesh-stream-\u7ec4\u4ef6\u63a5\u53e3"},"EventMesh-Stream \u7ec4\u4ef6\u63a5\u53e3"),(0,A.kt)("h3",{id:"component\u7ec4\u4ef6"},"Component\uff08\u7ec4\u4ef6\uff09"),(0,A.kt)("p",null,"Component \u63a5\u53e3\u662f\u4e3b\u8981\u7684\u5165\u53e3\u70b9\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Component \u5bf9\u8c61\u4f5c\u4e3a\u5de5\u5382\u6765\u521b\u5efa EndPoint \u5bf9\u8c61\u3002"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Stream Component Interface",src:l(19248).Z,width:"491",height:"231"})),(0,A.kt)("h3",{id:"endpoint\u7aef\u70b9"},"EndPoint\uff08\u7aef\u70b9\uff09"),(0,A.kt)("p",null,"EndPoint \u4f5c\u4e3a\u521b\u5efa\u6d88\u8d39\u8005\u3001\u751f\u4ea7\u8005\u548c\u4e8b\u4ef6\u5bf9\u8c61\u7684\u5de5\u5382\u3002"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("inlineCode",{parentName:"li"},"createConsumer()")," \u2014 \u521b\u5efa\u6d88\u8d39\u8005\u7aef\u70b9\uff0c\u8be5\u7aef\u70b9\u8868\u793a\u8def\u7531\u5f00\u59cb\u7684\u6e90\u7aef\u70b9\u3002"),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("inlineCode",{parentName:"li"},"createProducer()")," \u2014 \u521b\u5efa\u751f\u4ea7\u8005\u7aef\u70b9\uff0c\u8be5\u7aef\u70b9\u8868\u793a\u8def\u7531\u672b\u7aef\u7684\u76ee\u6807\u7aef\u70b9\u3002")),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Stream Component Routes",src:l(27649).Z,width:"596",height:"112"})),(0,A.kt)("h4",{id:"producer\u751f\u4ea7\u8005"},"Producer\uff08\u751f\u4ea7\u8005\uff09"),(0,A.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4ee5\u4e0b\u7c7b\u578b\u7684\u751f\u4ea7\u8005"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u540c\u6b65\u751f\u4ea7\u8005\uff1a\u5904\u7406\u7ebf\u7a0b\u963b\u585e\uff0c\u76f4\u5230\u751f\u4ea7\u8005\u5b8c\u6210\u4e8b\u4ef6\u5904\u7406\u3002")),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Stream Sync Producer",src:l(89905).Z,width:"371",height:"112"})),(0,A.kt)("p",null,"\u672a\u6765\u5c06\u4f1a\u5b9e\u73b0\u7684\u751f\u4ea7\u8005\u7c7b\u578b\uff1a"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u751f\u4ea7\u8005 - \u751f\u4ea7\u8005\u5728\u5b50\u7ebf\u7a0b\u4e2d\u5904\u7406\u4e8b\u4ef6\u3002")),(0,A.kt)("h4",{id:"consumer\u6d88\u8d39\u8005"},"Consumer\uff08\u6d88\u8d39\u8005\uff09"),(0,A.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4ee5\u4e0b\u7c7b\u578b\u7684\u6d88\u8d39\u8005"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u4e8b\u4ef6\u9a71\u52a8\u7684\u6d88\u8d39\u8005\uff1a\u5f53\u6d88\u606f\u7ed1\u5b9a\u5668\u8c03\u7528\u6d88\u8d39\u8005\u4e2d\u7684\u65b9\u6cd5\u65f6\uff0c\u5f00\u59cb\u5904\u7406\u4f20\u5165\u8bf7\u6c42\u3002")),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Stream Event-Driven Consumer",src:l(67248).Z,width:"462",height:"92"})),(0,A.kt)("p",null,"\u672a\u6765\u5c06\u4f1a\u5b9e\u73b0\u7684\u6d88\u8d39\u8005\u7c7b\u578b\uff1a"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"\u5b9a\u65f6\u8f6e\u8bad\u6d88\u8d39\u8005"),(0,A.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u8f6e\u8be2\u6d88\u8d39\u8005")))}m.isMDXComponent=!0},76725:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/stream-architecture-619e3498c1cc2a3afa0830ff8a112b8f.png"},19248:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/stream-component-interface-ec9641e0807d88d099af905130cbbd1b.png"},27649:(e,t,l)=>{l.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlQAAABwCAYAAADYOu4gAAAGTHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjEtMDctMjVUMTUlM0EzNCUzQTQ1LjI4NVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChXaW5kb3dzJTIwTlQlMjAxMC4wJTNCJTIwV2luNjQlM0IlMjB4NjQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwQ2hyb21lJTJGOTEuMC40NDcyLjE2NCUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMGV0YWclM0QlMjJLTnZsbmNFLTZoU3RFZDAtcDZ6OCUyMiUyMHZlcnNpb24lM0QlMjIxNC45LjAlMjIlMjB0eXBlJTNEJTIyZGV2aWNlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyejI5M3Y0dkRUYnQzc1VEbDFvQTglMjIlMjBuYW1lJTNEJTIyUGFnZS0xJTIyJTNFN1ZuYlV0c3dFUDJhUE1MWVZoTENJNFJRT3FVem1ZRXA5SWtSOWliV1ZMWXlzbkxqNjd1eTVhc1Nra0lhMHRDbmVJJTJGa3RmYWMxV1dWRnVsSGl5JTJCU1RzTHZJZ0RlOHB4ZzBTSlhMYzl6WGFlSFB4cFpaa2k3NDJUQVdMTEFkQ3FCTyUyRllDQnN5N1RWa0FTYTJqRW9Jck5xbUR2b2hqOEZVTm8xS0tlYjNiU1BENlZ5ZDBEQlp3NTFOdW93OHNVR0dHOXZJb05INERiQnlxSW1EVEV0Rzhzd0dTa0FaaVhvSElvRVg2VWdpVlBVV0xQbkJOWHM1TDl0NzFtdFppWUJKaXRjMEw0SDBsUDlydSUyQlQyOERPJTJCJTJGUGMxdmJ1T0hFJTJCTmxSdm5VQkh3bnB0SUh4QVp4TUJRTWZXZWpWOHVja2hsSXhaQ2hXJTJGb01mQ2dTcHBpSXNlbFpLQ1dpRnJuTU8xeHdOdFlOU2t3UURWWEUwWER4RWFtWWFHZlJZcXl6NW5URXhkd1BxVlNuSWo3UmxENUpHQUVHaGdNaGwyYUk2QlFXYTJOM0MwWXhGVUZFb09RU3UlMkJRdmRJMElKZ3VMOUpxWG1yWU5GRmJrekRGcXNtaGNlQzZKeGdmRDlSJTJGdzNyWjR0MmlHT0xqUUNZeVd6Mm1TTUw5T1l2WUNCRmIlMkJiaVNsRW5SblJkQTVKb0ZUeFdaMTk2dVlNRjh3MlZKdzdqUTQ5ODVQTzNVblNacHJaWlpkcjNQVmxNOTJwYWdjZzdKY3BlSVVvYjlkcjQ2bDExQUtINUpFU0lUZFk1Z2ozdG1CelpIdXE1emJFJTJCWWY1SndjR3VkbnIzSWVId1BuN1VQanZHZHhmcDh1WmtlMkIzZDZCOGI3JTJCZkh2d1YxdlozdHd0eW5mM3ZmZ1BGJTJCMkZDd1dzYzdjZ0NZaEJFYXZpblFhSDFLbFFNWXA0amxFendvbHhhJTJGaXBJJTJCMFhxS1Fjdm1JaHBNYlA3V0JzUnZ6YWxGdHZGcFdyU0ZJaG1HRHpNRUZVNDltQVBxNTRncXQwcE0ybGhXajZXZmJ2RU51c3VQOHhsMDIwMjdUenZCUmVkeHVuaVc3alVWaDJ5d3V5cyUyRm1JclN2SExZTHJ2ODVmSmhySjNGM3RuWmF4N3o5cjUzayUyRlp2ZEFTNWVINW9nM3U0U3hLcTk5cDhnTzdpUiUyQkN3clE2Y3BQSEhlS3J4MUtDWjczbyUyRnNpdzFMOXFKU3dESXd2UzJ0YWo0UG1ZSzdDVTJuNlJ3cmlYcXptQ3JPWXVnWHQ3T2x2dSUyQjdyR2pYZVhQekNWVEpBTElpQXp4bnZkanZLaVpjJTJCN1ppTUlNVmxSdkdyQnFWV0xwZjl3VVhzdHp5UjR6ekJrUk5LZWVqV3oxWHJCb3ZZa0dnUDdOU0ZDbW1jWkFlSW5ZbFFXUE5LaTdwTnRSemYwJTJCQ1QxRFFXYVQzR214dWZTUWhHeHk5ZWVGQnMlMkZ4VEklMkJ0ZSUyRmpWRUJyOEIlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNFiT4mFAAAGh5JREFUeF7tnWuoF0Ufx39WHtHSIC0L6Zi+MchLiqmkUpkkQV6K0MDLiw54zzpleeuoebCyi6akaWWEJuhBvPXCDNNCDZU45g0SQjPyRaFBGoqW+vCb55n/M2fc/e/sfy8zu/tdiOr8Z+fy+c7Mfvc3s7vNrl+/fp1wgAAIgAAIgAAIgAAIVEygGQxVxexwIgiAAAiAAAiAAAgIAjBU6AggAAIgAAIgAAIgEJEADFVEgDgdBEAABEAABEAABGCo0AdAAARAAARAAARAICIBGKqIAHE6CIAACIAACIAACMBQoQ/kksCJEydo1KhRdPjw4SbtGzJkCK1bt47atm0bW7vPnTtHU6dOpfnz51OXLl1iyxcZgQAIgAAIZIcADFV2tEJNQxBgQzVt2jRatmxZ4iYHhiqEMEgKAiAAAjklAEOVU2GL3qxyhurSpUtUW1tLY8eOpf79+wtU9fX11LlzZxo9ejTt27ePBgwYIP4+YcIEWrJkifhvPqdDhw40d+5c8f8LFiyg6dOni7+vWrWKevToQRs2bEjcwBVdW7QfBEAABFwkAEPloiqoU2QCQREqXvY7efIk1dXVkRph4oJlZKu6urpkoqRx4t/ZYDU2NtKUKVOEgWrXrh2W/CIrhgxAAARAINsEYKiyrZ9TtW/WrJm1+ugv/PfbQ8VRJTZRHIXiqBQbq59++onWrl0rjNKmTZtoz5494r9btmwp0vFvb775Js2ePZsGDhwooliqCYOhsiY7CgYBEAABZwjAUDkjRfYrwobqiSeeIP73+++/Tw888EBijTp+/Di98sorIv8dO3aQl6Eqt4dKNUQNDQ2l5T42WGPGjGlSb97Ivnr1amHA5DIhDFVi0iJjEAABEMgkARiqTMrmZqXZSLGxWbx4sTA7/G/eXxT3IfNn0/byyy8LAxfWUHGd2CC1b9+efv75Z6qpqRF7n9SlQLXe+r4rGKq4VUV+IAACIJBtAjBU2dbPqdqrxoYjSNLsxBWtUqNSap6VGiq5+VxuPOclPn3vFZuuM2fOlJb8EKFyqsuhMiAAAiDgDAEYKmekyH5FvIyNHk2qtJXl8vEzVF7voVKfxOMoE++HYpPE/5aH+pSffG9Vq1atmjwZqEao5Ob1/fv34ym/SgXGeSAAAiCQcQIwVBkX0KXqexkbrl+UaJVfVEptt1+5LrFBXUAABEAABPJNAIYq3/qm2rogYxM2WmWaPqjcVCHEUBgvZ44fP55at24dQ27IAgRAAARAIA0CMFRpUC5IGSbGxiRaJaNScoN70NOCJuVmSQLey3X16lWxsZ9f1QBjlSX1UFcQAIGiEoChKqryCbQ7jLHxiz6ZRqXyvOS3dOlSmjlzJl27dk08wchPSsJYJdBhkSUIgAAIxEgAhipGmEXPKoyhYlZqtGrSpEn00UcflV67EBSVyrOh4rbxx5v//PNP0cyqqioYq6IPLrQfBEDAeQIwVM5LlJ0KhjVUsmUclfryyy9p6NCh4lULYQ+bb2gPW9co6Zs3b07Dhg2jjRs3RskG54IACIAACCRAAIYqAahFzbJSQxWVl61yo9a73Pn8ORt+NQMiVElSRt4gAAIgEB8BGKr4WBY+J1vGxla5SQnOe6hmzZolNqZjD1VSlJEvCIAACMRLAIYqXp6Fzs2WsbFVblJi4ym/pMgiXxAAARBIjgAMVXJsC5ezLWNjq9ykBMZ7qJIii3xBAARAIDkCMFTJsS1czraMja1yCycwGgwCIAACIOBLAIYKnSM2AraMja1yYwOHjEAABEAABDJPAIYq8xK60wBbxsZWue6QR01AAARAAARsE4Chsq1Ajsq3ZWxslZsj6dAUEAABEACBiARgqCICxOn/J2DL2NgqF9qDAAiAAAiAgCQAQ4W+EBsBm28s5w8p4wABEAABEAABWwRgqGyRR7kgAAIgAAIgAAK5IQBDlRsp0RAQAAEQAAEQAAFbBGCobJFHuSAAAiAAAiAAArkhAEOVGynREBAAARAAARAAAVsEYKhskUe5IAACIAACIAACuSEAQ5UbKdEQEAABEAABEAABWwRgqGyRR7kgAAIgAAIgAAK5IQBDlRsp0RAQAAEQAAEQAAFbBGCobJFHuSAAAiAAAiAAArkhAEOVGynREBAAARAAARAAAVsEYKhskUe5IAACIAACIAACuSEAQ5UbKdEQEAABEAABEAABWwRgqGyRR7kgAAIgAAIgAAK5IQBDlRsp0RAQAAEQAAEQAAFbBGCobJFHuSAAAiAAAiAAArkhAEOVGynREBAAARAAARAAAVsEYKhskUe5IAACIAACIAACuSEAQ5UbKdEQEAABEAABEAABWwRgqGyRR7kgAAIgAAIgAAK5IQBDFYOUv/76K+3cuZP2799Px44do9OnT9PZs2fpypUrVFVVRe3ataOOHTtS165dqV+/fjR48GCqrq6OoWRkEYUAdItCL/5zoUf8TKPkCD2i0LN3LnSzxx6GKgL7zz77jNauXUtHjx6lIUOGUP/+/al79+7UqVMnYaJatGhBly9fFubq1KlTdOTIEdq3bx/t2LGDunXrRmPHjqXnn38+Qg1waiUEoFsl1JI7B3okx7aSnKFHJdTsnwPd7GsAQ1WBBitXrqRFixYJU8SGaMSIEaFz2bJlC/EAYDM2Y8YMmjhxYug8cEI4AtAtHK+kU0OPpAmHyx96hOPlSmro5ooSRDBUIbQ4dOgQ1dbWishTXV0dDRgwIMTZ3kn37t1L9fX1IpK1ZMkS6tmzZ+Q8kUFTAtDNrR4BPaCHWwSyWRuMI/d0g6Ey1ISjSTU1NbR8+XKaPHmy4VnmyVasWEFTpkyh1atXYxnQHFtgSugWiCjVBNAjVdyBhUGPQEROJoBuTsqCCJWJLAsXLqQ1a9aI/VJ9+vQxOaWiNAcPHhT7qsaNG0dz5sypKA+c9H8C0M2t3gA9oAfmteh9AOMoOsOkckCEKoAsd97NmzfT1q1bqUOHDknpUMr3zJkzNHz4cHr66adhqiLQhm4R4CVwKvRIAGqELKFHBHgWT4VuFuEbFA1DVQYSh1V58/muXbtSMVOyKmyqBg0aJDar4ylAg16sJYFu4ZkleQb0SJJu+LyhR3hmLpwB3VxQoXwdYKh8+PCGv169etGBAwcSXebzk4eX//r27UuNjY3YqB5iHEG3ELBSSAo9UoAcogjoEQKWQ0mhm0NilKkKDJUPnEcffZRGjhyZyAZ0067BG9UbGhro22+/NT2l8Omgm1tdAHpAD50A5rXwfQLjKDwzG2fAUHlQ5/d68L4pfgGn7YNfGMr7qfCeqmAloFswozRTQI80aQeXBT2CGbmYArq5qIp3nWCoPLjwm875ib443jMVtSvwe6r4yT9+0zqO8gSgm1s9BHpADz8CmNfM+wbGkTkr2ylhqDQFeOMfv8V827ZttrUplT9s2DDxNnZsUPeXBLo5011FRaAH9AgigHktiBDGUTAht1LAUGl6PPbYY/Tiiy9W9DmZpKRlg7d06VLavXt3UkVkPl/o5paE0AN6BBHAvBZEiAjjKJiRSylgqBQ1+Cvd/GQff8zYtYM/tsxP/FVXV7tWNev1gW7WJWhSAegBPUwJYF7zJ4VxZNqL3ElXKEN14cIFat26tS99Xqb45ptvaN26de4o9L+ajB49mh5//HEs+3koA93c6q7QA3qYEsC85k8K48i0F8WTLsgfmJRSGEPFL8vkR0+fffZZmj17tqexGj9+PD344INWX5XgJxo/avzjjz/Sxx9/bKJrbtL89ddf4uEA3j/20ksvUbNmzW5oG3RzS27oAT1MCRR1XmM+/F1Y/n6r34FxZNqLoqcz8QcmpRTGUDEMXo/es2cP3XLLLVRbW3uDsXr44YfpnXfeceLpPl08firmtddeo++//95E11yleeihh+jIkSPUqlUroRkbq+bNm5faCN3ckht6QA9TAkWd1y5dukS33347tWzZkubOnSvmtJtvvrkJNowj014UT7ogf2BSSqEMFb99nKFdvHiRqqqqRLRDNVb8rT5Ok8Y3+0zEUdOwg+YPM/O/i3Z89913NHToUOKQ7K233iomnpkzZ4pJiCck6OZWj4Ae0MOUQJHntbfeeovq6+vppptuEjf5s2bNEnNaixYtBD6MI9NeFE+6IH9gUkpZQ/XGG2+Y5JGpNLwuzZv95MHGio9x48bRmjVr6Pz586UO7VLDLl++TG3atCG+s7l27Rpdv35d/Fv9x6W/mdbRtM4ffPABnT59uiTJbbfdJtpeU1NDq1atclo3NoFXr16l+fPn07x5827oVjzO+Le8/M4XBJfHEfed119/nR555BGxDUA/+MsEbOLz8rvrevC8xvNb0Y5//vmHeFM+jxU+uF/yIW8W77jjjkyMozzpVs4ffPLJJ4FNhaFSDNWnn34qjIqrB0fU+G5G/hP0/5xOT5PVv23cuJF+++23JkaYDdWYMWPo888/d143rnheDJM+PnRDyH3O9XEEPdyZ5bi/8LKXyzeIJjd+Jmn0G82///6b/v333yZisAHmr2OsX7/e+XHEc1qejkQNVZ5AcVuCQnq4k3NT8WPHjlHv3r3FXSxHFDnaM23aNJozZw61bdtWRBRdjogU7Q7cdT0QoXJnnPOYZj3q6uqa3Cxm9cYv7A1sly5d6I8//hCC8NzGhovfg8hz29133415LcWuGuQPTKpSqD1UQZvOsGZt0mXST8NvVN6+fbswUlOnThWTTfv27UsVgW7pa1KuROgBPUwJFHkPFS8h8Y0hR7Z4+e+FF14Qc9udd94p8GEcmfaieNIF+QOTUgpjqEwei8RTFSZdJt00J06coCeffFK8g4vDy14PDEC3dDUJKg16BBFK93fokS5v09I4cs0P2vCrE9hI3XPPPU1OhW6mJKOnM/EHJqUUxlAxjKAXd+G9HyZdJv00vBm9Y8eOvgVDt/Q1KVci9IAepgSK/B6qt99+m/jFpvfee68nLowj014UT7ogf2BSSqEMVRAQvJk2iJCbv0M3t3SBHtDDlADelO5PCuPItBe5kw6GStEC305yp2OGqQl0C0Mr+bTQI3nGYUqAHmFouZMWurmjhWlNYKg0Uvi6t2nXcSsddIMeQQS2bNlCS5cupd27dwclzd3vGB/ZlBS6ZUs3GCpNLw6z8sS7bds2Z5Tkp9xGjBiBDyOXUQS6OdNdRUWgB/QIIoB5LYgQxlEwIbdSwFB56NGpUydau3atE9/0429djR07lk6dOuVWz3GwNtDNLVGgB/TwI4B5zbxvYByZs7KdEobKQ4GVK1fS5s2baceOHbb1oSFDhoi35k6cONF6XVyvAHRzSyHoAT38CGBeM+8bGEfmrGynhKHyUYC/8TVy5EiaPHmyNY34keKGhgbib4vhMCMA3cw4pZUKeqRF2qwc6GHGybVU0M01RbzrA0Plo9OhQ4eoV69edODAAerTp0/qavJr8Pv27UuNjY3Us2fP1MvPaoHQzS3loAf0UAlgXqusP2AcVcYt7bNgqMoQ5421ixYtol27dnm+oTspsfitrYMGDaIZM2ZgI3oFkKFbBdASPAV6JAi3gqyhRwXQHDgFujkgQkAVYKgCAC1cuFDsp9q6dWsqporN1PDhw8W+Kf4cAY7KCEC3yrgldRb0SIpsZflCj8q42T4LutlWoHz5MFQG+nAnXrNmjXjyL8nlPw6H8xN948aNg5ky0CUoCXQLIpTu79AjXd5BpUGPIEJu/g7d3NSFawVDZagNh1trampo+fLliWxU5w3o/JHM1atXY5nPUBOTZNDNhFJ6aaBHeqxNSoIeJpTcSwPd3NMEhiqkJrwxsLa2llq0aEF1dXWxvKeK38dSX19Ply9fpiVLlmADekhNTJJDNxNK6aWBHumxNikJephQci8NdHNPE0SoKtCE3wvCm9W7desmokn8FvOwB7+Nne8yjh49Kjaf4z1TYQmGTw/dwjNL8gzokSTd8HlDj/DMXDgDurmgwn/rAEMVQQs2RLyvik0Rv6iuf//+1L17d+I327Zr105EsjjydPbsWfGm8yNHjtC+ffvEC0PZjPF+KTZkONIlAN3S5R1UGvQIIpTu79AjXd5xlQbd4iJZeT4wVJWzK53JXwXfuXMn7d+/n44dO0anT58WJurKlStUVVUlzFXHjh2pa9eu1K9fPxo8eDBVV1fHUDKyiEIAukWhF/+50CN+plFyhB5R6Nk7F7rZYw9DZY89SgYBEAABEAABEMgJARiqnAiJZoAACIAACIAACNgjAENljz1KBgEQAAEQAAEQyAkBGKqcCIlmgAAIgAAIgAAI2CMAQ2WPPUoGARAAARAAARDICQEYqpwIiWaAAAiAAAiAAAjYIwBDZY89SgYBEAABEAABEMgJARiqnAiJZoAACIAACIAACNgjkDlDtW7dOhozZkyJ2BdffEGjR4+2R1Ar+cSJEzRq1Cg6fPhwk1/4Tepc97Zt2xrV9dKlS+K7gQMHDhTt4+/9zZ07N3Se/GZ2fps7fyewZcuWvmVz/p07d3aGpa4zV7xHjx60YcMG6tKlixHDLCVyjb/Orgh6yDG3atUq0fwJEyYEjhtbfawIethiG6Zcvc+o5ybdf/haM3/+fPrwww9vuK549Q+u24IFC8R3aE2Pc+fOiWsCn8MvqPa6tplcg03mt3LtMa2v7XSZMlTcSdgcSGMixeZPuLhiqrhTTJs2jZYtWxbpwu9lqLizqIOBOZw8eTLUAPHrcCYdPs3Oym3bs2dPkwuaqTlMs55xlCXNssnEFEd5leRRBD24jXzwXKKPv0qYJXlOEfRIkl8Secc195vWLchQ6fOnab5qOt1Q6dc2/n3q1KnC2EW90YWhqkShCOfwhcfLVKgdR43kyAuUnBzZePH39tROwJ+IYdf++++/i8/CcCSHX90vnbh6l8EX9AEDBpS9ew0aVJwH31HwsX79+huiLrL+zz33nEjz1FNPlSJUettVg8G/cURL3l3v3btXtFVN895779GFCxfo66+/FhE02bZNmzaVon6uXNS9LhjqgFuxYgUdP35cRKxknb20l91N/U2y0e8u/f6u9yPJWGXl1ze4XL2esk6y/A4dOog/uRQh1IdpEfQwaXOE6SvWU4ugR9BcGSvQGDLzmvvVSJEaYdfnhWeeeaY0f8u5n40Kz+Fe89T9998vrgv8XViv1Q+v/qE2kcv3uhbwKoZaHl8jfvnll1KESjdU+rW13DzI85tsJ895csWFr7+TJ08u254Y5Ekli0xFqKRYfqFUNYLFRolN0fLly6lXr16is/oZqilTppSWknTHLSM3vXv3LkWe+Dt8nB93Cj18amKo2JTxxVvWS+bjVf9XX33V11CpBpP/+8yZM8IQNjY2kmwTc5BLfmyomCGXo/LhQZuFCJU6SXBbZHt5EvDTntumRvJ0UyZNKnORzH744YdS5I/7w5w5c2jhwoX01Vdfef7dq69JTVVdsrTkamIu8qwHt9/rBi6VWdmgEK8LZt70kPO911xpgCj1JPrcz/XnPiRXVPzmazl/ycAAz9/yGiHnZq95iv9WbsmvXISK61LuWqBeS2RdeMlPN1Rqm7k++jVXnQdVQ8Vp9WtVufakLmaFBWbKUHEby+1z0E2B7MDTp08va6jUTu+3rKRPYH7p/PZQybVrfZCpF3uv+suohdceKmksZXRKGkZ1ueK+++5rYqjkwNTvLFw0VOpeOa63eiemX+xMtZfjRA1lq3eBzJDvyLyWUv2WWPW+oGrMkTTJvNwYdY2/l6Eqkh76OK1wfk3sNK89MnkbH+XmysTARsg46GZan+v95mJ1bpaRKL5x1+cpNjhh91DJKLw6f6rl6cEH9Te/PVReqyFsEvV5UDVUcm+wGsCAoYrQ+eI6VTdNUijOX3bgIEOlbtr2C5UGTWCyPUGDSr/46nVU669eZMvdLevmQN5dcwfWDZU0aFkwVEF3WHpbvLSXoWQ5IemGikPm6uG1fCgnDMlVhqrl3/U+o0fBTJbysmCoiqKHGq2Mui8krnnOy+DmXQ+/uTLMpuqk+Hvlq8/9XhvW5Y21Ot7L3dypS3v6PMWrJlEiVF7XgiADV25/sMk8KJf8vFaLYKhS7K3cOefNm0c1NTVNNr/pe4TUi5dfhErt+OqSmHTVXk/FmW4Ar9RQ8SQRFKHyi3To5qhchCqPhko1kPLhBD/tVUNlspnSb9Olvg9P7TNed2ZBD03kyVBlWQ916dj0idwUp8FSUSZ7ZPS50GRudGl8ZN1Q6Rr5rUb4zd9sOtjg+M1TUTalq/NNmAhVOUMVFKlXI1QwVDZmDa1MvYOqm3rZkATtoVL3Kr377rti35RuqHRDJC/MI0eObLJ+7Lc3JoqhUi/Ecl9OuT1UKh7TPVR5NVTl9lCp0T1Vn4aGBoGQ+45cquU9d7t27SptEFf3UPHyneSn/j1oD1XRIlQyOiyfyPXar6dyl5O0bT1cX+ZTx3tYQ5XF8ZEnQ3Xx4kWxF5aX7bxunlU9y+2hUuepoCW/sBFMaXL86uK1h0rtk2rd9P3B0sAhQuWAkdInEnUvh/5eDXWvkfoUlrq3afHixXTw4EERLtUNFZfl96SC+ne/90r57aGST3jo5emRL1l/zp//ueuuu3w3patc/J5Y84vg6XdFcknT5af8dAOpGxU/7cM+zSdD8HI5UC7t+f29XJ8xjTyZprM1HMNewPXlUbVfuapHuX2K5R4osKFJEfTIuqFS5wueyydNmkTbt28Xm7H5oRp1/lLHBN9Enz9/vvQQlT5e5FiS+csbGDWi6rVFhdPJfbdq+X4RMn6amdO3adOGhg8fLt5DFfRKINOn/LwiVJy/jOTLjfw2xlaUMjO3KT1KY3EuCIAACIAACLhMIGiVw+W6F71uMFRF7wFoPwiAAAiAgFUCenRUfRDGasVQeCgCMFShcCExCIAACIAACIAACNxIAIYKvQIEQAAEQAAEQAAEIhL4D1cdEWQnzIrwAAAAAElFTkSuQmCC"},67248:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/stream-event-driven-consumer-a629cc38b5a439f4423c277c92bdecf5.png"},89905:(e,t,l)=>{l.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXMAAABwCAYAAADsWZCIAAAGbnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjEtMDctMjVUMTUlM0E0MyUzQTA0LjI4NlolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChXaW5kb3dzJTIwTlQlMjAxMC4wJTNCJTIwV2luNjQlM0IlMjB4NjQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwQ2hyb21lJTJGOTEuMC40NDcyLjE2NCUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMGV0YWclM0QlMjJwLTkzWWctTTI2TTR1M2hqWWxZSyUyMiUyMHZlcnNpb24lM0QlMjIxNC45LjAlMjIlMjB0eXBlJTNEJTIyZGV2aWNlJTIyJTNFJTNDZGlhZ3JhbSUyMGlkJTNEJTIyLXRBSFh4Y2RhV0RrOEN5Q1ZMYWslMjIlMjBuYW1lJTNEJTIyUGFnZS0xJTIyJTNFM1ZoTGM5b3dFUDQxSE1QZ0I4UTVFaURwSVpreXphR1BDeU5zWWF1VnRSNVpnTW12cjJSTGZnSWhLVFJ0RHBsNFA3MjgzN2U3V3ROekpuRjJ6MUVTUFVLQWFjOGVCRm5QbWZaczI3SUdudnlua0YyQnVNTkJBWVNjQkhwU0JUeVJaNnhCTTIxTkFwdzJKZ29BS2tqU0JIMWdEUHVpZ1NIT1lkdWN0Z0xhUERWQkllNEFUejZpWGZRckNVUlVvSjd4UXVHZk1Ba2pVVHFzUjJKa0ptc2dqVkFBMnhya3pIck9oQU9JNGluT0pwZ3E4Z3d2eGJxN0E2UGxpM0hNeENrTFZ1UGQlMkZIbjV3M3NNRnclMkYlMkIzTjNZWHo1UHI0YkZMaHRFMTlwaCUyRmJKaVp4akFnU1JFbThCRkJDRXdSR2NWZXN0aHpRS3NqaGxJcTVyekFKQkkwSkxnVHl6RVRxdUwxZ0lrRkltWTZ0SGlUSFhRUWQ4MGxNS2ElMkIlMkZpSVElMkZyOUJlSWhGa2ZtdWFVQ01uUXh4Rmp3blZ6SE1VV0NiSnJ2Z1hRTWhlVzhpbWI1b0psJTJCQmV0MmglMkZVNUJ4JTJCbktmQU8lMkZSdk1CWkh4JTJCSUNXbU00aEpZSUFrME5MRUFKaVNaNlpNS1lrVkFOQ2tWNW5Wd1plb2phTHMxRGxhSDlGWWV0SGlJcyUyQnNDc1Z3QXVPVjFoU3JZalZXcWhOY1haY2pTNTdab0dyUTE3bnZIV3Q3VzJWUVFhS2FzbGpzTFB6N2U3ak8xajclMkJFUFE3ZGolMkZHTjJqbDR0S0tqajhLaXVxZlNxRGlERVFTRW15VUd1UTFvRGlsZlRwbHJZMDQ0V3Z0d2tRSmpDZmJTU2hhYVBrJTJGQm52N3JESnV6ZnM4Rzd2NGQyOUZPJTJGZUNjV2NCV04xSzByTHB5aE5pZCUyQmtYcnJPZDk5MEpjJTJCTjc4cm9ENDA1emVxRDA1MjJUcSUyRmdMMVptYTdDZjlScXJ3ejJzR3V6a0NxNVBtS3ZncUlrNmFvbDYwMUtydUlIMHF2cDEyOXFvYkhRT2JWUVEwZGtvVjc1MCUyQiUyQjNCWUJxb28xbG9FazFlUFhrZlZBJTJCRmJVUUVma3BRZnQxdVpTSTJoMkV0S0dGNFV2WmRnJTJGTmtsZXUxZVBPNjFjelpvNzk5cWF5eXJJOUJaTmxTdnh1UnpobnFVMFpFV1o3a2M2MDZTYXNxVHNwNGZXMTZzYnUwRGxEJTJCZDJxVE8yZ3BPbnBqYlhLdVd4dTFOYjkwYmVvMlpQOUZTcFdFbTlvMGV1JTJCVU91SDd6UkJKNGc2TmIyeDI4NTNHYVZKeHElMkZlV1o0VFNENThTeWFtTW5MdDdqUGpDc3IxTSUyRnZVVEZwNUJBNnV0d2MxcEdqZ1gwNkRiN3VhZFprY0k2Yk5vTmJwNUZ6d0JLciUyRjduQ2tEcHZSWkVVcGJrT2x6ZmF6NjJEMjZ4Q1FJOGslMkZ4ZlluUiUyRkR3JTJGZ3dST3F3NVp3NjRFN25uU1FKclZMeVJGJTJCYWwlMkJaM0ptdndFJTNEJTNDJTJGZGlhZ3JhbSUzRSUzQyUyRm14ZmlsZSUzReLzi6YAAB6PSURBVHhe7V1pkFRVlv5yqb2gqEVKFgvpZZBmDcARKUCjB6FHlJiObgeU5oehtvsGOK3Y2Io22NEitiJqq+MPFEWijekWGBkZtVEUN1pFGgmdVlGoKskqas31LRPnFq9IkqrK9zLvWzLr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"}}]);