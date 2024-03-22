"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[9637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=l,h=u["".concat(o,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(h,p(p({ref:t},m),{},{components:n})):a.createElement(h,p({ref:t},m))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},93511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={},p="EventMesh Runtime \u5feb\u901f\u5f00\u59cb",i={unversionedId:"instruction/runtime",id:"version-v1.10.0/instruction/runtime",title:"EventMesh Runtime \u5feb\u901f\u5f00\u59cb",description:"EventMesh Runtime \u662f EventMesh \u96c6\u7fa4\u4e2d\u6709\u72b6\u6001\u7684 Mesh \u8282\u70b9\uff0c\u8d1f\u8d23 Source Connector \u4e0e Sink Connector \u4e4b\u95f4\u7684\u4e8b\u4ef6\u4f20\u8f93\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528 Event Store \u4f5c\u4e3a\u4e8b\u4ef6\u7684\u5b58\u50a8\u961f\u5217\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/instruction/03-runtime.md",sourceDirName:"instruction",slug:"/instruction/runtime",permalink:"/zh/docs/instruction/runtime",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/instruction/03-runtime.md",tags:[],version:"v1.10.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event Store Docker \u90e8\u7f72",permalink:"/zh/docs/instruction/store-with-docker"},next:{title:"EventMesh Runtime Docker \u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/instruction/runtime-with-docker"}},o={},s=[{value:"1. \u90e8\u7f72\u4e8c\u8fdb\u5236\u53d1\u884c\u7248",id:"1-\u90e8\u7f72\u4e8c\u8fdb\u5236\u53d1\u884c\u7248",level:2},{value:"1.1 \u73af\u5883",id:"11-\u73af\u5883",level:3},{value:"1.2 \u4e0b\u8f7d",id:"12-\u4e0b\u8f7d",level:3},{value:"1.3 \u914d\u7f6e",id:"13-\u914d\u7f6e",level:3},{value:"1.3.1 EventMesh Runtime \u914d\u7f6e",id:"131-eventmesh-runtime-\u914d\u7f6e",level:4},{value:"1.3.2 \u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e",id:"132-\u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e",level:4},{value:"1.4 \u542f\u52a8",id:"14-\u542f\u52a8",level:3},{value:"2. \u6784\u5efa\u4e8c\u8fdb\u5236\u5206\u53d1\u5305",id:"2-\u6784\u5efa\u4e8c\u8fdb\u5236\u5206\u53d1\u5305",level:2},{value:"2.1 \u73af\u5883",id:"21-\u73af\u5883",level:3},{value:"2.2 \u4e0b\u8f7d",id:"22-\u4e0b\u8f7d",level:3},{value:"2.3 \u6784\u5efa",id:"23-\u6784\u5efa",level:3},{value:"\u5728 JDK8 \u73af\u5883\u8fd0\u884c",id:"\u5728-jdk8-\u73af\u5883\u8fd0\u884c",level:4},{value:"\u5728 JDK11 \u73af\u5883\u8fd0\u884c",id:"\u5728-jdk11-\u73af\u5883\u8fd0\u884c",level:4},{value:"2.4 \u6253\u5305\u63d2\u4ef6",id:"24-\u6253\u5305\u63d2\u4ef6",level:3},{value:"3. \u4ece\u6e90\u4ee3\u7801\u542f\u52a8",id:"3-\u4ece\u6e90\u4ee3\u7801\u542f\u52a8",level:2},{value:"3.1 \u4f9d\u8d56",id:"31-\u4f9d\u8d56",level:3},{value:"3.2 \u4e0b\u8f7d",id:"32-\u4e0b\u8f7d",level:3},{value:"3.3 \u9879\u76ee\u7ed3\u6784\u8bf4\u660e",id:"33-\u9879\u76ee\u7ed3\u6784\u8bf4\u660e",level:3},{value:"3.4 \u63d2\u4ef6\u8bf4\u660e",id:"34-\u63d2\u4ef6\u8bf4\u660e",level:3},{value:"3.4.1 \u5b89\u88c5\u63d2\u4ef6",id:"341-\u5b89\u88c5\u63d2\u4ef6",level:4},{value:"3.4.2 \u4f7f\u7528\u63d2\u4ef6",id:"342-\u4f7f\u7528\u63d2\u4ef6",level:4},{value:"3.5 \u914d\u7f6e VM \u53c2\u6570",id:"35-\u914d\u7f6e-vm-\u53c2\u6570",level:3},{value:"3.6 \u542f\u52a8",id:"36-\u542f\u52a8",level:3},{value:"3.7 \u505c\u6b62",id:"37-\u505c\u6b62",level:3}],m={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"eventmesh-runtime-\u5feb\u901f\u5f00\u59cb"},"EventMesh Runtime \u5feb\u901f\u5f00\u59cb"),(0,l.kt)("p",null,"EventMesh Runtime \u662f EventMesh \u96c6\u7fa4\u4e2d\u6709\u72b6\u6001\u7684 Mesh \u8282\u70b9\uff0c\u8d1f\u8d23 Source Connector \u4e0e Sink Connector \u4e4b\u95f4\u7684\u4e8b\u4ef6\u4f20\u8f93\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528 Event Store \u4f5c\u4e3a\u4e8b\u4ef6\u7684\u5b58\u50a8\u961f\u5217\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"EventMesh Runtime",src:n(30438).Z,width:"1688",height:"838"})),(0,l.kt)("h2",{id:"1-\u90e8\u7f72\u4e8c\u8fdb\u5236\u53d1\u884c\u7248"},"1. \u90e8\u7f72\u4e8c\u8fdb\u5236\u53d1\u884c\u7248"),(0,l.kt)("h3",{id:"11-\u73af\u5883"},"1.1 \u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 64 \u4f4d\u7684 Linux / Unix \u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"64 \u4f4d JDK 8 \u6216 JDK 11")),(0,l.kt)("h3",{id:"12-\u4e0b\u8f7d"},"1.2 \u4e0b\u8f7d"),(0,l.kt)("p",null,"\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh Download")," \u9875\u9762\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 Binary Distribution \u53d1\u884c\u7248\u5e76\u89e3\u538b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-bin.tar.gz\ntar -xvzf apache-eventmesh-1.10.0-bin.tar.gz\ncd apache-eventmesh-1.10.0\n")),(0,l.kt)("h3",{id:"13-\u914d\u7f6e"},"1.3 \u914d\u7f6e"),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u4ee5 RocketMQ \u4e8b\u4ef6\u5b58\u50a8\u4e3a\u4f8b\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u5176\u5b83 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/roadmap#%E4%BA%8B%E4%BB%B6%E5%AD%98%E5%82%A8%E5%AE%9E%E7%8E%B0%E7%8A%B6%E6%80%81"},"EventMesh \u652f\u6301\u7684\u4e8b\u4ef6\u5b58\u50a8"),"\u3002\u82e5\u60a8\u9009\u62e9\u975e standalone \u6a21\u5f0f\uff0c\u8bf7\u786e\u4fdd ",(0,l.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ \u5df2\u6210\u529f\u542f\u52a8")," \u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 IP \u5730\u5740\u8bbf\u95ee\u5230\uff1b\u82e5\u60a8\u4fdd\u6301\u9ed8\u8ba4\u7684 standalone \u6a21\u5f0f\uff0c\u5219\u65e0\u9700\u542f\u52a8 RocketMQ\u3002"),(0,l.kt)("h4",{id:"131-eventmesh-runtime-\u914d\u7f6e"},"1.3.1 EventMesh Runtime \u914d\u7f6e"),(0,l.kt)("p",null,"\u6b64\u914d\u7f6e\u6587\u4ef6\u4e2d\u5305\u542b EventMesh Runtime \u73af\u5883\u548c\u96c6\u6210\u7684\u63d2\u4ef6\u7684\u914d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vim conf/eventmesh.properties\n")),(0,l.kt)("p",null,"\u6307\u5b9a\u4e8b\u4ef6\u5b58\u50a8\u4e3a RocketMQ\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# storage plugin\neventMesh.storage.plugin.type=rocketmq\n")),(0,l.kt)("p",null,"\u8bf7\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u91cc\u7684\u9ed8\u8ba4\u7aef\u53e3\u662f\u5426\u5df2\u88ab\u5360\u7528\uff0c\u5982\u679c\u88ab\u5360\u7528\uff0c\u8bf7\u4fee\u6539\u4e3a\u672a\u88ab\u5360\u7528\u7684\u7aef\u53e3\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventMesh.server.tcp.port"),(0,l.kt)("td",{parentName:"tr",align:null},"10000"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP \u76d1\u542c\u63a5\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventMesh.server.http.port"),(0,l.kt)("td",{parentName:"tr",align:null},"10105"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u76d1\u542c\u63a5\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventMesh.server.grpc.port"),(0,l.kt)("td",{parentName:"tr",align:null},"10205"),(0,l.kt)("td",{parentName:"tr",align:null},"gRPC \u76d1\u542c\u63a5\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventMesh.server.admin.http.port"),(0,l.kt)("td",{parentName:"tr",align:null},"10106"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u7ba1\u7406\u63a5\u53e3")))),(0,l.kt)("h4",{id:"132-\u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e"},"1.3.2 \u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e"),(0,l.kt)("p",null,"\u4ee5 RocketMQ \u4e3a\u4f8b\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2d\u5305\u542b\u8fde\u63a5 RocketMQ namesrv \u6240\u9700\u7684\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vim conf/rocketmq-client.properties\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u8fd0\u884c\u7684 namesrv \u5730\u5740\u4e0d\u662f\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u9ed8\u8ba4\u503c\uff0c\u8bf7\u5c06\u5176\u4fee\u6539\u4e3a\u5b9e\u9645\u6b63\u5728\u8fd0\u884c\u7684 namesrv \u5730\u5740\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventMesh.server.rocketmq.namesrvAddr"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9876;127.0.0.1:9876"),(0,l.kt)("td",{parentName:"tr",align:null},"RocketMQ namesrv address")))),(0,l.kt)("h3",{id:"14-\u542f\u52a8"},"1.4 \u542f\u52a8"),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"start.sh")," \u811a\u672c\u542f\u52a8 EventMesh Runtime\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/start.sh\n")),(0,l.kt)("p",null,"\u82e5\u811a\u672c\u4ec5\u6253\u5370\u4ee5\u4e0b\u4e09\u884c\uff0c\u672a\u8f93\u51fa\u5176\u5b83\u9519\u8bef\u4fe1\u606f\uff0c\u5219\u4ee3\u8868\u811a\u672c\u6267\u884c\u6210\u529f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"EventMesh using Java version: 8, path: /usr/local/openjdk-8/bin/java\nEVENTMESH_HOME : /data/app/eventmesh\nEVENTMESH_LOG_HOME : /data/app/eventmesh/logs\n")),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u67e5\u770b EventMesh Runtime \u8f93\u51fa\u7684\u65e5\u5fd7\uff0c\u68c0\u67e5 EventMesh \u7684\u8fd0\u884c\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"tail -n 50 -f logs/eventmesh.out\n")),(0,l.kt)("p",null,"\u5f53\u65e5\u5fd7\u8f93\u51fa",(0,l.kt)("inlineCode",{parentName:"p"},"server state:RUNNING"),"\uff0c\u5219\u4ee3\u8868 EventMesh Runtime \u542f\u52a8\u6210\u529f\u4e86\u3002"),(0,l.kt)("p",null,"\u505c\u6b62 EventMesh Runtime\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/stop.sh\n")),(0,l.kt)("p",null,"\u811a\u672c\u6253\u5370",(0,l.kt)("inlineCode",{parentName:"p"},"shutdown server ok!"),"\u65f6\uff0c\u4ee3\u8868 EventMesh Runtime \u5df2\u505c\u6b62\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u6b64\u7248\u672c\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"dos2unix"),"\u5c06\u811a\u672c\u7684 CRLF \u6362\u884c\u8f6c\u6362\u5230 LF \u6362\u884c\u3002")),(0,l.kt)("h2",{id:"2-\u6784\u5efa\u4e8c\u8fdb\u5236\u5206\u53d1\u5305"},"2. \u6784\u5efa\u4e8c\u8fdb\u5236\u5206\u53d1\u5305"),(0,l.kt)("h3",{id:"21-\u73af\u5883"},"2.1 \u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 64 \u4f4d\u7684 Linux / Unix \u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"64 \u4f4d JDK 8 \u6216 JDK 11"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/userguide/installation.html"},"Gradle")," 7.0+\uff08\u53ef\u9009\uff09\uff0c\u672c\u6587\u6863\u4e2d\u7ed9\u51fa\u7684\u6784\u5efa\u547d\u4ee4\u4f7f\u7528 Gradle Wrapper\uff0c\u65e0\u9700\u7528\u6237\u81ea\u884c\u914d\u7f6e Gradle \u73af\u5883\u3002\u60a8\u4e5f\u53ef\u4ee5\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"gradle/wrapper/gradle-wrapper.properties")," \u6587\u4ef6\u4e2d\u67e5\u770b\u60a8\u4f7f\u7528\u7684 EventMesh \u7248\u672c\u6240\u63a8\u8350\u7684 Gradle \u7248\u672c\uff0c\u4f7f\u7528\u60a8\u672c\u673a\u7684 Gradle \u7f16\u8bd1\u3002")),(0,l.kt)("h3",{id:"22-\u4e0b\u8f7d"},"2.2 \u4e0b\u8f7d"),(0,l.kt)("p",null,"\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh Download")," \u4e0b\u8f7d Source Code \u6e90\u4ee3\u7801\u5e76\u89e3\u538b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-source.tar.gz\ntar -xvzf apache-eventmesh-1.10.0-source.tar.gz\ncd apache-eventmesh-1.10.0-src/\n")),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u4ece GitHub \u62c9\u53d6\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/eventmesh.git\ncd eventmesh/\n")),(0,l.kt)("h3",{id:"23-\u6784\u5efa"},"2.3 \u6784\u5efa"),(0,l.kt)("p",null,"EventMesh \u57fa\u4e8e JDK8 \u5f00\u53d1\uff0c\u4e8c\u8fdb\u5236\u53d1\u884c\u7248\u4e5f\u57fa\u4e8e JDK8 \u6784\u5efa\u3002\u63a8\u8350\u5728 JDK8 \u73af\u5883\u4e0b\u8fd0\u884c EventMesh Runtime\u3002"),(0,l.kt)("h4",{id:"\u5728-jdk8-\u73af\u5883\u8fd0\u884c"},"\u5728 JDK8 \u73af\u5883\u8fd0\u884c"),(0,l.kt)("p",null,"\u90e8\u5206\u6e90\u4ee3\u7801\u9700\u8981\u5728 JDK11 \u4e0b\u751f\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean generateGrammarSource --parallel --daemon\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"generateGrammarSource"),"\u4efb\u52a1\u4f1a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh.connector.jdbc.antlr4.autogeneration"),"\u5305\u4e0b\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"ANTLR"),"\u6240\u9700\u7684\u6e90\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u5728 JDK8 \u4e0b\u6784\u5efa EventMesh Runtime\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean dist -x spotlessJava -x generateGrammarSource --parallel --daemon\n")),(0,l.kt)("p",null,"\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u8bf7\u524d\u5f80 ",(0,l.kt)("a",{parentName:"p",href:"#24-%E6%89%93%E5%8C%85%E6%8F%92%E4%BB%B6"},"2.4 \u6253\u5305\u63d2\u4ef6"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"update-alternatives"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"JAVA_HOME"),"\u7b49\u65b9\u5f0f\u5207\u6362 JDK \u7248\u672c\uff0c\u5e76\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"java -version"),"\u67e5\u770b\u5f53\u524d JDK \u7248\u672c\u3002")),(0,l.kt)("h4",{id:"\u5728-jdk11-\u73af\u5883\u8fd0\u884c"},"\u5728 JDK11 \u73af\u5883\u8fd0\u884c"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u4ee5 JDK11 \u4f5c\u4e3a EventMesh Runtime \u7684\u8fd0\u884c\u73af\u5883\uff0c\u5219\u6267\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean dist --parallel --daemon\n")),(0,l.kt)("p",null,"\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u8bf7\u524d\u5f80 ",(0,l.kt)("a",{parentName:"p",href:"#24-%E6%89%93%E5%8C%85%E6%8F%92%E4%BB%B6"},"2.4 \u6253\u5305\u63d2\u4ef6"),"\u3002"),(0,l.kt)("h3",{id:"24-\u6253\u5305\u63d2\u4ef6"},"2.4 \u6253\u5305\u63d2\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"installPlugin")," \u4efb\u52a1\u4f1a\u5c06\u6784\u5efa\u5b8c\u6bd5\u7684\u63d2\u4ef6\u590d\u5236\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew installPlugin\n")),(0,l.kt)("p",null,"EventMesh \u4f1a\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," \u4e2d\u7684\u914d\u7f6e\uff0c\u52a0\u8f7d ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin")," \u76ee\u5f55\u4e0b\u7684\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u6784\u5efa\u6210\u529f\u540e\uff0c\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u5373\u4e3a EventMesh \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u76ee\u5f55\u3002\u914d\u7f6e\u4e0e\u542f\u52a8\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"#1-%E9%83%A8%E7%BD%B2%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%8F%91%E8%A1%8C%E7%89%88"},"\u90e8\u7f72\u4e8c\u8fdb\u5236\u53d1\u884c\u7248"),"\u3002"),(0,l.kt)("h2",{id:"3-\u4ece\u6e90\u4ee3\u7801\u542f\u52a8"},"3. \u4ece\u6e90\u4ee3\u7801\u542f\u52a8"),(0,l.kt)("h3",{id:"31-\u4f9d\u8d56"},"3.1 \u4f9d\u8d56"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 64 \u4f4d\u7684 Linux / Unix \u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ul"},"64 \u4f4d JDK 8 \u6216 JDK 11"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/userguide/installation.html"},"Gradle")," 7.0+\uff08\u53ef\u9009\uff09\uff0c\u672c\u6587\u6863\u4e2d\u7ed9\u51fa\u7684\u6784\u5efa\u547d\u4ee4\u4f7f\u7528 Gradle Wrapper\uff0c\u65e0\u9700\u7528\u6237\u81ea\u884c\u914d\u7f6e Gradle \u73af\u5883\u3002\u60a8\u4e5f\u53ef\u4ee5\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"gradle/wrapper/gradle-wrapper.properties")," \u6587\u4ef6\u4e2d\u67e5\u770b\u60a8\u4f7f\u7528\u7684 EventMesh \u7248\u672c\u6240\u63a8\u8350\u7684 Gradle \u7248\u672c\uff0c\u4f7f\u7528\u60a8\u672c\u673a\u7684 Gradle \u7f16\u8bd1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528 IDE\uff08\u96c6\u6210\u5f00\u53d1\u73af\u5883\uff09\u5bfc\u5165 EventMesh\u3002\u63a8\u8350\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"Intellij IDEA"),"\u4f5c\u4e3a IDE\u3002")),(0,l.kt)("h3",{id:"32-\u4e0b\u8f7d"},"3.2 \u4e0b\u8f7d"),(0,l.kt)("p",null,"\u4ece GitHub \u62c9\u53d6\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/eventmesh.git\ncd eventmesh/\n")),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh Download")," \u4e0b\u8f7d Source Code \u6e90\u4ee3\u7801\u53d1\u884c\u7248\u5e76\u89e3\u538b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-source.tar.gz\ntar -xvzf apache-eventmesh-1.10.0-source.tar.gz\ncd apache-eventmesh-1.10.0-src/\n")),(0,l.kt)("h3",{id:"33-\u9879\u76ee\u7ed3\u6784\u8bf4\u660e"},"3.3 \u9879\u76ee\u7ed3\u6784\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u4e3b\u8981\u6a21\u5757"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventmesh-starter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u8fd0\u884c EventMesh \u9879\u76ee\u7684\u5165\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventmesh-runtime"),(0,l.kt)("td",{parentName:"tr",align:null},"EventMesh Runtime \u8fd0\u884c\u65f6\u6a21\u5757")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventmesh-connectors"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fde\u63a5\u4e8b\u4ef6\u6e90\u4e0e\u4e8b\u4ef6\u6c47\u7684 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/design-document/connect/connectors"},"Connector"),"\uff0c\u652f\u6301",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/roadmap#%E8%BF%9E%E6%8E%A5%E5%99%A8%E5%AE%9E%E7%8E%B0%E7%8A%B6%E6%80%81"},"\u591a\u79cd\u670d\u52a1\u548c\u5e73\u53f0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventmesh-storage-plugin"),(0,l.kt)("td",{parentName:"tr",align:null},"EventMesh Runtime \u7684",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/roadmap#%E4%BA%8B%E4%BB%B6%E5%AD%98%E5%82%A8%E5%AE%9E%E7%8E%B0%E7%8A%B6%E6%80%81"},"\u4e8b\u4ef6\u5b58\u50a8"),"\u63d2\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventmesh-sdks"),(0,l.kt)("td",{parentName:"tr",align:null},"EventMesh \u7684\u591a\u8bed\u8a00\u5ba2\u6237\u7aef SDK\uff0c\u5305\u62ec Java\u3001Go\u3001C\u3001Rust \u7b49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventmesh-examples"),(0,l.kt)("td",{parentName:"tr",align:null},"SDK \u4f7f\u7528\u793a\u4f8b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventmesh-spi"),(0,l.kt)("td",{parentName:"tr",align:null},"EventMesh SPI \u52a0\u8f7d\u6a21\u5757")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventmesh-common"),(0,l.kt)("td",{parentName:"tr",align:null},"\u516c\u5171\u7c7b\u4e0e\u65b9\u6cd5\u6a21\u5757")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63d2\u4ef6\u6a21\u5757\u9075\u5faa EventMesh \u5b9a\u4e49\u7684 SPI \u89c4\u8303\uff0c\u81ea\u5b9a\u4e49\u7684 SPI \u63a5\u53e3\u9700\u8981\u4f7f\u7528\u6ce8\u89e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"@EventMeshSPI")," \u6807\u8bc6\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u63d2\u4ef6\u5b9e\u4f8b\u9700\u8981\u5728\u5bf9\u5e94\u6a21\u5757\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"/main/resources/META-INF/eventmesh")," \u4e0b\u914d\u7f6e\u76f8\u5173\u63a5\u53e3\u4e0e\u5b9e\u73b0\u7c7b\u7684\u6620\u5c04\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u4e3a SPI \u63a5\u53e3\u7684\u5168\u9650\u5b9a\u7c7b\u540d\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u6587\u4ef6\u5185\u5bb9\u4e3a\u63d2\u4ef6\u5b9e\u4f8b\u540d\u5230\u63d2\u4ef6\u5b9e\u4f8b\u7684\u6620\u5c04\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("inlineCode",{parentName:"p"},"eventmesh-storage-rocketmq")," \u63d2\u4ef6\u6a21\u5757\u3002")),(0,l.kt)("h3",{id:"34-\u63d2\u4ef6\u8bf4\u660e"},"3.4 \u63d2\u4ef6\u8bf4\u660e"),(0,l.kt)("h4",{id:"341-\u5b89\u88c5\u63d2\u4ef6"},"3.4.1 \u5b89\u88c5\u63d2\u4ef6"),(0,l.kt)("p",null,"EventMesh \u5177\u6709 SPI \u673a\u5236\uff0c\u4f7f EventMesh \u80fd\u591f\u53d1\u73b0\u5e76\u52a0\u8f7d\u63d2\u4ef6\u3002\u6709\u4e24\u79cd\u65b9\u5f0f\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Classpath \u52a0\u8f7d\uff1a\u672c\u5730\u5f00\u53d1\u65f6\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"eventmesh-starter")," \u6a21\u5757\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"build.gradle")," \u4e2d\u6dfb\u52a0\u4f9d\u8d56\uff0c\u4f8b\u5982\u6dfb\u52a0 Kafka Storage Plugin\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n   // \u793a\u4f8b\uff1a\u52a0\u8f7d Kafka Storage Plugin\n   implementation project(":eventmesh-storage-plugin:eventmesh-storage-kafka")\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u52a0\u8f7d\uff1a\u901a\u8fc7\u5c06\u63d2\u4ef6\u5b89\u88c5\u5230\u63d2\u4ef6\u76ee\u5f55\uff0cEventMesh \u5728\u8fd0\u884c\u65f6\u4f1a\u6839\u636e\u6761\u4ef6\u81ea\u52a8\u52a0\u8f7d\u63d2\u4ef6\u76ee\u5f55\u4e0b\u7684\u63d2\u4ef6\u3002\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"#23-%E6%9E%84%E5%BB%BA"},"2.3 \u6784\u5efa")," \u548c ",(0,l.kt)("a",{parentName:"li",href:"#24-%E6%89%93%E5%8C%85%E6%8F%92%E4%BB%B6"},"2.4 \u6253\u5305\u63d2\u4ef6"),"\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f53\u60a8\u5bf9\u6e90\u4ee3\u7801\u4f5c\u51fa\u66f4\u6539\u540e\uff0c\u5efa\u8bae\u5728 ",(0,l.kt)("a",{parentName:"p",href:"#23-%E6%9E%84%E5%BB%BA"},"2.3 \u6784\u5efa")," \u7ed9\u51fa\u7684\u547d\u4ee4\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u4efb\u52a1\uff0c\u4ee5\u91cd\u65b0\u7f16\u8bd1\u548c\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u3002\u5982\uff1a"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean build dist -x spotlessJava -x generateGrammarSource --parallel --daemon\n"))),(0,l.kt)("h4",{id:"342-\u4f7f\u7528\u63d2\u4ef6"},"3.4.2 \u4f7f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"EventMesh \u4f1a\u9ed8\u8ba4\u52a0\u8f7d ",(0,l.kt)("inlineCode",{parentName:"p"},"dist/plugin")," \u76ee\u5f55\u4e0b\u7684\u63d2\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"-DeventMeshPluginDir=your_plugin_directory"),"\u6765\u6539\u53d8\u63d2\u4ef6\u76ee\u5f55\u3002\u8fd0\u884c\u65f6\u9700\u8981\u4f7f\u7528\u7684\u63d2\u4ef6\u5b9e\u4f8b\u53ef\u4ee5\u5728\n",(0,l.kt)("inlineCode",{parentName:"p"},"confPath"),"\u76ee\u5f55\u4e0b\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),"\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u4f8b\u5982\u901a\u8fc7\u4ee5\u4e0b\u8bbe\u7f6e\u58f0\u660e\u4f7f\u7528 RocketMQ \u4f5c\u4e3a Event Store\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# storage plugin\neventMesh.storage.plugin.type=rocketmq\n")),(0,l.kt)("h3",{id:"35-\u914d\u7f6e-vm-\u53c2\u6570"},"3.5 \u914d\u7f6e VM \u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml\n-Deventmesh.log.home=eventmesh-runtime/logs\n-Deventmesh.home=eventmesh-runtime\n-DconfPath=eventmesh-runtime/conf\n")),(0,l.kt)("p",null,"\u5982\u679c\u64cd\u4f5c\u7cfb\u7edf\u4e3a Windows\uff0c\u9700\u8981\u5c06\u659c\u6760\u66ff\u6362\u4e3a\u53cd\u659c\u6760",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),"\u3002"),(0,l.kt)("h3",{id:"36-\u542f\u52a8"},"3.6 \u542f\u52a8"),(0,l.kt)("p",null,"\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"eventmesh-starter"),"\u6a21\u5757\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh.starter.StartUp"),"\u7c7b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"main()"),"\u65b9\u6cd5\u5373\u53ef\u542f\u52a8 EventMesh Runtime\u3002"),(0,l.kt)("h3",{id:"37-\u505c\u6b62"},"3.7 \u505c\u6b62"),(0,l.kt)("p",null,"\u63a7\u5236\u53f0\u6253\u5370\u4ee5\u4e0b\u65e5\u5fd7\u65f6\uff0cEventMesh Runtime \u5df2\u505c\u6b62\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},"DEBUG StatusConsoleListener Shutdown hook enabled. Registering a new one.\nWARN StatusConsoleListener Unable to register Log4j shutdown hook because JVM is shutting down. Using SimpleLogger\n")))}d.isMDXComponent=!0},30438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime-a7096bf933834ceba5f954ae4786776d.png"}}]);