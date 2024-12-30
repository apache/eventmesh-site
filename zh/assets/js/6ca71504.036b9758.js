"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[6117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(n),k=a,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||l;return n?r.createElement(d,p(p({ref:t},m),{},{components:n})):r.createElement(d,p({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},69924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},p="\u4f7f\u7528 Docker \u5feb\u901f\u5165\u95e8 EventMesh\uff08\u6682\u65f6\u53ea\u652f\u6301\u52301.4.0\u7248\u672c\uff09",o={unversionedId:"instruction/runtime-with-docker",id:"version-v1.5.0/instruction/runtime-with-docker",title:"\u4f7f\u7528 Docker \u5feb\u901f\u5165\u95e8 EventMesh\uff08\u6682\u65f6\u53ea\u652f\u6301\u52301.4.0\u7248\u672c\uff09",description:"\u672c\u7bc7\u5feb\u901f\u5165\u95e8\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u4f7f\u7528 docker \u90e8\u7f72 EventMesh\uff0c\u4ee5 RocketMQ \u4f5c\u4e3a\u5bf9\u63a5\u7684\u4e2d\u95f4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.5.0/instruction/04-runtime-with-docker.md",sourceDirName:"instruction",slug:"/instruction/runtime-with-docker",permalink:"/zh/docs/v1.5.0/instruction/runtime-with-docker",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.5.0/instruction/04-runtime-with-docker.md",tags:[],version:"v1.5.0",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e",permalink:"/zh/docs/v1.5.0/instruction/runtime"},next:{title:"\u8fd0\u884c eventmesh-sdk-java demo",permalink:"/zh/docs/v1.5.0/instruction/demo"}},s={},i=[{value:"1. \u524d\u63d0",id:"1-\u524d\u63d0",level:2},{value:"2. \u83b7\u53d6 EventMesh \u955c\u50cf",id:"2-\u83b7\u53d6-eventmesh-\u955c\u50cf",level:2},{value:"3. \u521b\u5efa\u914d\u7f6e\u6587\u4ef6",id:"3-\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",level:2},{value:"4. \u914d\u7f6e eventMesh.properties",id:"4-\u914d\u7f6e-eventmeshproperties",level:3},{value:"5. \u914d\u7f6e rocketmq-client.properties",id:"5-\u914d\u7f6e-rocketmq-clientproperties",level:3},{value:"6. \u8fd0\u884c EventMesh",id:"6-\u8fd0\u884c-eventmesh",level:2},{value:"7. \u7ba1\u7406 EventMesh \u5bb9\u5668",id:"7-\u7ba1\u7406-eventmesh-\u5bb9\u5668",level:2},{value:"8. \u63a2\u7d22\u66f4\u591a",id:"8-\u63a2\u7d22\u66f4\u591a",level:2}],m={toc:i},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f7f\u7528-docker-\u5feb\u901f\u5165\u95e8-eventmesh\u6682\u65f6\u53ea\u652f\u6301\u5230140\u7248\u672c"},"\u4f7f\u7528 Docker \u5feb\u901f\u5165\u95e8 EventMesh\uff08\u6682\u65f6\u53ea\u652f\u6301\u52301.4.0\u7248\u672c\uff09"),(0,a.kt)("p",null,"\u672c\u7bc7\u5feb\u901f\u5165\u95e8\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u4f7f\u7528 docker \u90e8\u7f72 EventMesh\uff0c\u4ee5 RocketMQ \u4f5c\u4e3a\u5bf9\u63a5\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("h2",{id:"1-\u524d\u63d0"},"1. \u524d\u63d0"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u7684 linux \u7cfb\u7edf\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u8bf7\u9884\u5148\u5b89\u88c5 Docker Engine\u3002 Docker \u7684\u5b89\u88c5\u8fc7\u7a0b\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker \u5b98\u65b9\u6587\u6863"),"\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u8bae\u638c\u63e1\u57fa\u7840\u7684 docker \u6982\u5ff5\u548c\u547d\u4ee4\u884c\uff0c\u4f8b\u5982\u6ce8\u518c\u4e2d\u5fc3\u3001\u6302\u8f7d\u7b49\u7b49\u3002\u4e0d\u8fc7\u8fd9\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u56e0\u4e3a\u672c\u6b21\u64cd\u4f5c\u6240\u9700\u7684\u547d\u4ee4\u90fd\u5df2\u4e3a\u60a8\u5217\u51fa\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u82e5\u60a8\u9009\u62e9\u975estandalone\u6a21\u5f0f\uff0c\u8bf7\u786e\u4fdd ",(0,a.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ \u5df2\u6210\u529f\u542f\u52a8")," \u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 ip \u5730\u5740\u8bbf\u95ee\u5230\uff1b\u82e5\u60a8\u9009\u62e9standalone\u6a21\u5f0f\uff0c\u5219\u65e0\u9700\u542f\u52a8 RocketMQ \u3002")),(0,a.kt)("h2",{id:"2-\u83b7\u53d6-eventmesh-\u955c\u50cf"},"2. \u83b7\u53d6 EventMesh \u955c\u50cf"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u53ef\u4ee5\u6253\u5f00\u4e00\u4e2a\u547d\u4ee4\u884c\uff0c\u5e76\u4e14\u4f7f\u7528\u4e0b\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pull")," \u547d\u4ee4\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://registry.hub.docker.com/r/eventmesh/eventmesh/tags"},"Docker Hub")," \u4e2d\u4e0b\u8f7d",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes/v1.3.0/"},"\u6700\u65b0\u53d1\u5e03\u7684 EventMesh")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker pull eventmesh/eventmesh:v1.4.0\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u5e76\u67e5\u770b\u672c\u5730\u5df2\u6709\u7684\u955c\u50cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker images\n")),(0,a.kt)("p",null,"\u5982\u679c\u7ec8\u7aef\u663e\u793a\u5982\u4e0b\u6240\u793a\u7684\u955c\u50cf\u4fe1\u606f\uff0c\u5219\u8bf4\u660e EventMesh \u955c\u50cf\u5df2\u7ecf\u6210\u529f\u4e0b\u8f7d\u5230\u672c\u5730\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo docker images\nREPOSITORY            TAG       IMAGE ID       CREATED         SIZE\neventmesh/eventmesh   v1.4.0    6e2964599c78   16 months ago   937MB\n")),(0,a.kt)("h2",{id:"3-\u521b\u5efa\u914d\u7f6e\u6587\u4ef6"},"3. \u521b\u5efa\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u5728\u6839\u636e EventMesh \u955c\u50cf\u8fd0\u884c\u5bf9\u5e94\u5bb9\u5668\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e24\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u5206\u522b\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"eventMesh.properties")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties"),"\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u521b\u5efa\u8fd9\u4e24\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p /data/eventmesh/rocketmq/conf\ncd /data/eventmesh/rocketmq/conf\nsudo touch eventmesh.properties\nsudo touch rocketmq-client.properties\n")),(0,a.kt)("h3",{id:"4-\u914d\u7f6e-eventmeshproperties"},"4. \u914d\u7f6e eventMesh.properties"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u5305\u542b EventMesh \u8fd0\u884c\u65f6\u73af\u5883\u548c\u96c6\u6210\u8fdb\u6765\u7684\u5176\u4ed6\u63d2\u4ef6\u6240\u9700\u7684\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"vim")," \u547d\u4ee4\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim eventmesh.properties\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06 GitHub \u4ed3\u5e93\u4e2d\u7684\u5bf9\u5e94\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u590d\u5236\u8fc7\u6765\uff0c\u94fe\u63a5\u4e3a\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/1.3.0/eventmesh-runtime/conf/eventmesh.properties"},"https://github.com/apache/eventmesh/blob/1.3.0/eventmesh-runtime/conf/eventmesh.properties")," \u3002"),(0,a.kt)("p",null,"\u8bf7\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u91cc\u7684\u9ed8\u8ba4\u7aef\u53e3\u662f\u5426\u5df2\u88ab\u5360\u7528\uff0c\u5982\u679c\u88ab\u5360\u7528\u8bf7\u4fee\u6539\u6210\u672a\u88ab\u5360\u7528\u7684\u7aef\u53e3\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.http.port"),(0,a.kt)("td",{parentName:"tr",align:null},"10105"),(0,a.kt)("td",{parentName:"tr",align:null},"EventMesh http server port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.tcp.port"),(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"EventMesh tcp server port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.grpc.port"),(0,a.kt)("td",{parentName:"tr",align:null},"10205"),(0,a.kt)("td",{parentName:"tr",align:null},"EventMesh grpc server port")))),(0,a.kt)("h3",{id:"5-\u914d\u7f6e-rocketmq-clientproperties"},"5. \u914d\u7f6e rocketmq-client.properties"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u5305\u542b RocketMQ nameserver \u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"vim")," \u547d\u4ee4\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim rocketmq-client.properties\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06 GitHub \u4ed3\u5e93\u4e2d\u7684\u5bf9\u5e94\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u590d\u5236\u8fc7\u6765\uff0c\u94fe\u63a5\u4e3a\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/1.3.0/eventmesh-runtime/conf/rocketmq-client.properties"},"https://github.com/apache/eventmesh/blob/1.3.0/eventmesh-runtime/conf/rocketmq-client.properties")," \u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u60a8\u6b63\u5728\u8fd0\u884c\u7684 namesetver \u5730\u5740\u4e0d\u662f\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u9ed8\u8ba4\u503c\uff0c\u8bf7\u5c06\u5176\u4fee\u6539\u4e3a\u5b9e\u9645\u6b63\u5728\u8fd0\u884c\u7684nameserver\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u8bf7\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u91cc\u7684\u9ed8\u8ba4namesrvAddr\u662f\u5426\u5df2\u88ab\u5360\u7528\uff0c\u5982\u679c\u88ab\u5360\u7528\u8bf7\u4fee\u6539\u6210\u672a\u88ab\u5360\u7528\u7684\u5730\u5740\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.rocketmq.namesrvAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9876;127.0.0.1:9876"),(0,a.kt)("td",{parentName:"tr",align:null},"RocketMQ namesrv default address")))),(0,a.kt)("h2",{id:"6-\u8fd0\u884c-eventmesh"},"6. \u8fd0\u884c EventMesh"),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u5c31\u53ef\u4ee5\u5f00\u59cb\u6839\u636e\u4e0b\u8f7d\u597d\u7684 EventMesh \u955c\u50cf\u8fd0\u884c\u5bb9\u5668\u4e86\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u5230\u7684\u547d\u4ee4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run"),"\uff0c\u6709\u4ee5\u4e0b\u4e24\u70b9\u5185\u5bb9\u9700\u8981\u683c\u5916\u6ce8\u610f\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7ed1\u5b9a\u5bb9\u5668\u7aef\u53e3\u548c\u5bbf\u4e3b\u673a\u7aef\u53e3\uff1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker run")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"-p")," \u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u5bbf\u4e3b\u673a\u4e2d\u7684\u4e24\u4efd\u914d\u7f6e\u6587\u4ef6\u6302\u5728\u5230\u5bb9\u5668\u4e2d\uff1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker run")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"-v")," \u9009\u9879\u3002")),(0,a.kt)("p",null,"\u7efc\u5408\u4e00\u4e0b\uff0c\u5bf9\u5e94\u7684\u542f\u52a8\u547d\u4ee4\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d \\\n    -p 10000:10000 -p 10105:10105 \\\n    -v /data/eventmesh/rocketmq/conf/eventMesh.properties:/data/app/eventmesh/conf/eventMesh.properties \\\n    -v /data/eventmesh/rocketmq/conf/rocketmq-client.properties:/data/app/eventmesh/conf/rocketmq-client.properties \\\n    eventmesh/eventmesh:v1.4.0\n")),(0,a.kt)("p",null,"\u5982\u679c\u8fd0\u884c\u547d\u4ee4\u4e4b\u540e\u770b\u5230\u65b0\u8f93\u51fa\u4e00\u884c\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u8fd0\u884c EventMesh \u955c\u50cf\u7684\u5bb9\u5668\u5c31\u542f\u52a8\u6210\u529f\u4e86\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u770b\u5bb9\u5668\u7684\u72b6\u6001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker ps\n")),(0,a.kt)("p",null,"\u5982\u679c\u6210\u529f\u7684\u8bdd\uff0c\u4f60\u4f1a\u770b\u5230\u7ec8\u7aef\u6253\u5370\u51fa\u4e86\u5982\u4e0b\u6240\u793a\u5bb9\u5668\u7684\u4fe1\u606f\uff0c\u5176\u4e2d\u5c31\u6709\u8fd0\u884c EventMesh \u955c\u50cf\u7684\u5bb9\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'CONTAINER ID   IMAGE                        COMMAND                  CREATED         STATUS         PORTS                                                                                          NAMES\n5bb6b6092672   eventmesh/eventmesh:v1.4.0   "/bin/sh -c \'sh star\u2026"   5 seconds ago   Up 3 seconds   0.0.0.0:10000->10000/tcp, :::10000->10000/tcp, 0.0.0.0:10105->10105/tcp, :::10105->10105/tcp   eager_driscoll\n')),(0,a.kt)("p",null,"\u4ece\u8fd9\u4e2a\u4fe1\u606f\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"container id")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"5bb6b6092672"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"name")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"eager_driscoll"),"\uff0c\u5b83\u4eec\u90fd\u53ef\u4ee5\u7528\u6765\u552f\u4e00\u6807\u8bc6\u8fd9\u4e2a\u5bb9\u5668\u3002",(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5728\u4f60\u7684\u7535\u8111\u4e2d\uff0c\u5b83\u4eec\u7684\u503c\u53ef\u80fd\u8ddf\u8fd9\u91cc\u7684\u4e0d\u540c\u3002"),(0,a.kt)("h2",{id:"7-\u7ba1\u7406-eventmesh-\u5bb9\u5668"},"7. \u7ba1\u7406 EventMesh \u5bb9\u5668"),(0,a.kt)("p",null,"\u5728\u6210\u529f\u7684\u8fd0\u884c\u4e86 EventMesh \u5bb9\u5668\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fdb\u5165\u5bb9\u5668\u3001\u67e5\u770b\u65e5\u5fd7\u3001\u5220\u9664\u5bb9\u5668\u7b49\u65b9\u5f0f\u7ba1\u7406\u5bb9\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fdb\u5165\u5bb9\u5668")," \u547d\u4ee4\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker exec -it [your container id or name] /bin/bash\n")),(0,a.kt)("p",null,"\u5728\u5bb9\u5668\u4e2d ",(0,a.kt)("strong",{parentName:"p"},"\u67e5\u770b\u65e5\u5fd7")," \u547d\u4ee4\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd ../logs\ntail -f eventmesh.out\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5220\u9664\u5bb9\u5668")," \u547d\u4ee4\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker rm -f [your container id or name]\n")),(0,a.kt)("h2",{id:"8-\u63a2\u7d22\u66f4\u591a"},"8. \u63a2\u7d22\u66f4\u591a"),(0,a.kt)("p",null,"\u73b0\u5728 EventMesh \u5df2\u7ecf\u901a\u8fc7\u5bb9\u5668\u8fd0\u884c\u4e86\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-examples"},(0,a.kt)("inlineCode",{parentName:"a"},"eventmesh-examples")," \u6a21\u5757")," \u7f16\u5199\u5e76\u6d4b\u8bd5\u81ea\u5df1\u7684\u4ee3\u7801\u4e86\u3002"),(0,a.kt)("p",null,"\u5e0c\u671b\u4f60\u4eab\u53d7\u8fd9\u4e2a\u8fc7\u7a0b\u5e76\u83b7\u5f97\u66f4\u591a\u6536\u83b7\uff01"))}u.isMDXComponent=!0}}]);