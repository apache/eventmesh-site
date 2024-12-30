"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[3186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=i(n),k=a,d=u["".concat(o,".").concat(k)]||u[k]||c[k]||l;return n?r.createElement(d,p(p({ref:t},m),{},{components:n})):r.createElement(d,p({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var i=2;i<l;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},52864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={},p="EventMesh Runtime Docker \u5feb\u901f\u5f00\u59cb",s={unversionedId:"instruction/runtime-with-docker",id:"version-v1.10.0/instruction/runtime-with-docker",title:"EventMesh Runtime Docker \u5feb\u901f\u5f00\u59cb",description:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Docker \u90e8\u7f72 EventMesh Runtime\u3002\u672c\u6587\u5c06\u4ee5 RocketMQ \u4e8b\u4ef6\u5b58\u50a8\u4e3a\u4f8b\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u5176\u5b83 EventMesh \u652f\u6301\u7684\u4e8b\u4ef6\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/instruction/04-runtime-with-docker.md",sourceDirName:"instruction",slug:"/instruction/runtime-with-docker",permalink:"/zh/docs/v1.10.0/instruction/runtime-with-docker",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/instruction/04-runtime-with-docker.md",tags:[],version:"v1.10.0",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Runtime \u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/v1.10.0/instruction/runtime"},next:{title:"\u8fd0\u884c Java SDK Demo",permalink:"/zh/docs/v1.10.0/instruction/demo"}},o={},i=[{value:"1. \u524d\u63d0",id:"1-\u524d\u63d0",level:2},{value:"2. \u83b7\u53d6 EventMesh Runtime \u955c\u50cf",id:"2-\u83b7\u53d6-eventmesh-runtime-\u955c\u50cf",level:2},{value:"3. \u6302\u8f7d\u914d\u7f6e\u6587\u4ef6",id:"3-\u6302\u8f7d\u914d\u7f6e\u6587\u4ef6",level:2},{value:"3.1 EventMesh Runtime \u914d\u7f6e",id:"31-eventmesh-runtime-\u914d\u7f6e",level:3},{value:"3.2 \u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e",id:"32-\u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e",level:3},{value:"4. \u8fd0\u884c EventMesh Runtime \u5bb9\u5668",id:"4-\u8fd0\u884c-eventmesh-runtime-\u5bb9\u5668",level:2},{value:"5. \u67e5\u770b EventMesh \u65e5\u5fd7",id:"5-\u67e5\u770b-eventmesh-\u65e5\u5fd7",level:2},{value:"6. \u6784\u5efa EventMesh Runtime \u955c\u50cf\uff08\u53ef\u9009\uff09",id:"6-\u6784\u5efa-eventmesh-runtime-\u955c\u50cf\u53ef\u9009",level:2}],m={toc:i},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-runtime-docker-\u5feb\u901f\u5f00\u59cb"},"EventMesh Runtime Docker \u5feb\u901f\u5f00\u59cb"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 Docker \u90e8\u7f72 EventMesh Runtime\u3002\u672c\u6587\u5c06\u4ee5 RocketMQ \u4e8b\u4ef6\u5b58\u50a8\u4e3a\u4f8b\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u5176\u5b83 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v1.10.0/roadmap#%E4%BA%8B%E4%BB%B6%E5%AD%98%E5%82%A8%E5%AE%9E%E7%8E%B0%E7%8A%B6%E6%80%81"},"EventMesh \u652f\u6301\u7684\u4e8b\u4ef6\u5b58\u50a8"),"\u3002"),(0,a.kt)("h2",{id:"1-\u524d\u63d0"},"1. \u524d\u63d0"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5efa\u8bae\u4f7f\u7528 64 \u4f4d\u7684 Linux / Unix \u7cfb\u7edf\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bf7\u9884\u5148\u5b89\u88c5 Docker Engine\u3002Docker \u7684\u5b89\u88c5\u8fc7\u7a0b\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5efa\u8bae\u638c\u63e1\u57fa\u7840\u7684 Docker \u6982\u5ff5\u548c\u547d\u4ee4\u884c\uff0c\u4f8b\u5982\u6ce8\u518c\u4e2d\u5fc3\u3001\u6302\u8f7d\u7b49\u7b49\u3002\u4e0d\u8fc7\u8fd9\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u56e0\u4e3a\u672c\u6b21\u64cd\u4f5c\u6240\u9700\u7684\u547d\u4ee4\u90fd\u5df2\u4e3a\u60a8\u5217\u51fa\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u82e5\u60a8\u9009\u62e9\u975e standalone \u6a21\u5f0f\uff0c\u8bf7\u786e\u4fdd ",(0,a.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ \u5df2\u6210\u529f\u542f\u52a8")," \u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 IP \u5730\u5740\u8bbf\u95ee\u5230\uff1b\u82e5\u60a8\u4fdd\u6301\u9ed8\u8ba4\u7684 standalone \u6a21\u5f0f\uff0c\u5219\u65e0\u9700\u542f\u52a8 RocketMQ\u3002")),(0,a.kt)("h2",{id:"2-\u83b7\u53d6-eventmesh-runtime-\u955c\u50cf"},"2. \u83b7\u53d6 EventMesh Runtime \u955c\u50cf"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u53ef\u4ee5\u6253\u5f00\u4e00\u4e2a\u547d\u4ee4\u884c\uff0c\u5e76\u4e14\u4f7f\u7528\u4e0b\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pull")," \u547d\u4ee4\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/eventmesh/tags"},"Docker Hub")," \u4e2d\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes/"},"\u6700\u65b0\u7248\u672c\u7684 EventMesh")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker pull apache/eventmesh:latest\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u5e76\u67e5\u770b\u672c\u5730\u5df2\u6709\u7684\u955c\u50cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker images\n")),(0,a.kt)("p",null,"\u5982\u679c\u7ec8\u7aef\u663e\u793a\u5982\u4e0b\u6240\u793a\u7684\u955c\u50cf\u4fe1\u606f\uff0c\u5219\u8bf4\u660e EventMesh \u955c\u50cf\u5df2\u7ecf\u6210\u529f\u4e0b\u8f7d\u5230\u672c\u5730\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo docker images\nREPOSITORY         TAG       IMAGE ID       CREATED      SIZE\napache/eventmesh   latest    f32f9e5e4694   2 days ago   917MB\n")),(0,a.kt)("h2",{id:"3-\u6302\u8f7d\u914d\u7f6e\u6587\u4ef6"},"3. \u6302\u8f7d\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 standalone \u6a21\u5f0f\u542f\u52a8 EventMesh Runtime\uff0c\u5e76\u4e14\u6ca1\u6709\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u53ef\u4ee5\u8df3\u8f6c\u81f3\u4e0b\u4e00\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5728\u5bbf\u4e3b\u673a\u4e0a\u521b\u5efa EventMesh \u7684\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\u3002\u6b64\u76ee\u5f55\u53ef\u4ee5\u81ea\u7531\u6307\u5b9a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p /data/eventmesh/conf\ncd /data/eventmesh/conf\n")),(0,a.kt)("h3",{id:"31-eventmesh-runtime-\u914d\u7f6e"},"3.1 EventMesh Runtime \u914d\u7f6e"),(0,a.kt)("p",null,"\u6b64\u914d\u7f6e\u6587\u4ef6\u4e2d\u5305\u542b EventMesh Runtime \u73af\u5883\u548c\u96c6\u6210\u7684\u63d2\u4ef6\u7684\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u914d\u7f6e\u6587\u4ef6\uff08\u66ff\u6362\u4e0b\u8f7d\u94fe\u63a5\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"1.10.0"),"\u4e3a\u60a8\u6b63\u5728\u4f7f\u7528\u7684\u7248\u672c\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo wget https://raw.githubusercontent.com/apache/eventmesh/1.10.0-prepare/eventmesh-runtime/conf/eventmesh.properties\n")),(0,a.kt)("p",null,"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim eventmesh.properties\n")),(0,a.kt)("p",null,"\u6307\u5b9a\u4e8b\u4ef6\u5b58\u50a8\u4e3a RocketMQ\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# storage plugin\neventMesh.storage.plugin.type=rocketmq\n")),(0,a.kt)("p",null,"\u8bf7\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u91cc\u7684\u9ed8\u8ba4\u7aef\u53e3\u662f\u5426\u5df2\u88ab\u5360\u7528\uff0c\u5982\u679c\u88ab\u5360\u7528\uff0c\u8bf7\u4fee\u6539\u4e3a\u672a\u88ab\u5360\u7528\u7684\u7aef\u53e3\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.tcp.port"),(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP \u76d1\u542c\u63a5\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.http.port"),(0,a.kt)("td",{parentName:"tr",align:null},"10105"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP \u76d1\u542c\u63a5\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.grpc.port"),(0,a.kt)("td",{parentName:"tr",align:null},"10205"),(0,a.kt)("td",{parentName:"tr",align:null},"gRPC \u76d1\u542c\u63a5\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.admin.http.port"),(0,a.kt)("td",{parentName:"tr",align:null},"10106"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP \u7ba1\u7406\u63a5\u53e3")))),(0,a.kt)("h3",{id:"32-\u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e"},"3.2 \u4e8b\u4ef6\u5b58\u50a8\u914d\u7f6e"),(0,a.kt)("p",null,"\u4ee5 RocketMQ \u4e3a\u4f8b\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2d\u5305\u542b\u8fde\u63a5 RocketMQ namesrv \u6240\u9700\u7684\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u914d\u7f6e\u6587\u4ef6\uff08\u66ff\u6362\u4e0b\u8f7d\u94fe\u63a5\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"1.10.0"),"\u4e3a\u60a8\u6b63\u5728\u4f7f\u7528\u7684\u7248\u672c\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo wget https://raw.githubusercontent.com/apache/eventmesh/1.10.0-prepare/eventmesh-storage-plugin/eventmesh-storage-rocketmq/src/main/resources/rocketmq-client.properties\n")),(0,a.kt)("p",null,"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim rocketmq-client.properties\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u8fd0\u884c\u7684 namesrv \u5730\u5740\u4e0d\u662f\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u9ed8\u8ba4\u503c\uff0c\u8bf7\u5c06\u5176\u4fee\u6539\u4e3a\u5b9e\u9645\u6b63\u5728\u8fd0\u884c\u7684 namesrv \u5730\u5740\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventMesh.server.rocketmq.namesrvAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9876;127.0.0.1:9876"),(0,a.kt)("td",{parentName:"tr",align:null},"RocketMQ namesrv address")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u65e0\u6cd5\u4f7f\u7528\u7ed9\u51fa\u7684\u94fe\u63a5\u4e0b\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5728 EventMesh \u4e8c\u8fdb\u5236\u53d1\u884c\u7248\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"conf"),"\u8def\u5f84\u4e0b\u627e\u5230\u6240\u6709\u7684\u914d\u7f6e\u6587\u4ef6\u3002")),(0,a.kt)("h2",{id:"4-\u8fd0\u884c-eventmesh-runtime-\u5bb9\u5668"},"4. \u8fd0\u884c EventMesh Runtime \u5bb9\u5668"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 EventMesh \u5bb9\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --name eventmesh -p 10000:10000 -p 10105:10105 -p 10205:10205 -p 10106:10106 -v /data/eventmesh/conf/eventmesh.properties:/data/app/eventmesh/conf/eventmesh.properties -v /data/eventmesh/conf/rocketmq-client.properties:/data/app/eventmesh/conf/rocketmq-client.properties -t apache/eventmesh:latest\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run"),"\u547d\u4ee4\u53c2\u6570\u4ecb\u7ecd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-p <\u5bbf\u4e3b\u673a\u7aef\u53e3>:<\u5bb9\u5668\u7aef\u53e3>"),"\uff1a\u7ed1\u5b9a\u5bb9\u5668\u7aef\u53e3\u548c\u5bbf\u4e3b\u673a\u7aef\u53e3\u3002\u5982\u679c\u60a8\u4fee\u6539\u8fc7 EventMesh Runtime \u914d\u7f6e\u4e2d\u7684\u9ed8\u8ba4\u7aef\u53e3\uff0c\u6216\u8005\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3\u5df2\u88ab\u5360\u7528\uff0c\u8bf7\u76f8\u5e94\u5730\u4fee\u6539\u4e3a\u60a8\u6307\u5b9a\u7684\u7aef\u53e3\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-v <\u5bbf\u4e3b\u673a\u8def\u5f84>:<\u5bb9\u5668\u8def\u5f84>"),"\uff1a\u5c06\u5bbf\u4e3b\u673a\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u3002\u5982\u679c\u60a8\u5b58\u653e EventMesh \u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"/data/eventmesh/conf"),"\uff0c\u8bf7\u4fee\u6539\u5bbf\u4e3b\u673a\u8def\u5f84\u4e3a\u60a8\u6307\u5b9a\u7684\u8def\u5f84\u3002\u5982\u679c\u60a8\u6ca1\u6709\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\uff0c\u8bf7\u5220\u9664\u6b64\u53c2\u6570\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--name eventmesh"),"\uff1a\u81ea\u5b9a\u4e49\u7684\u5bb9\u5668\u540d\u79f0\u3002\u6b64\u540d\u79f0\u662f\u552f\u4e00\u7684\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-t apache/eventmesh:latest"),"\uff1a\u5bb9\u5668\u4f7f\u7528\u7684\u955c\u50cf\u3002"))),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"docker run"),"\u547d\u4ee4\u540e\uff0c\u5c06\u4f1a\u8fd4\u56de\u5bb9\u5668\u7684 ID\u3002\u4f7f\u7528\u6b64\u547d\u4ee4\u67e5\u770b\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker ps\n")),(0,a.kt)("p",null,"\u5c06\u4f1a\u6253\u5370\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'CONTAINER ID   IMAGE                      COMMAND               CREATED          STATUS         PORTS                                                                                                                                                                 NAMES\nb7a1546ee96a   apache/eventmesh:latest   "bash bin/start.sh"   10 seconds ago   Up 8 seconds   0.0.0.0:10000->10000/tcp, :::10000->10000/tcp, 0.0.0.0:10105-10106->10105-10106/tcp, :::10105-10106->10105-10106/tcp, 0.0.0.0:10205->10205/tcp, :::10205->10205/tcp   eventmesh\n')),(0,a.kt)("p",null,"\u5982\u679c EventMesh Runtime \u5bb9\u5668\u4e0d\u5728\u6b64\u547d\u4ee4\u6253\u5370\u7684\u5217\u8868\u4e2d\uff0c\u5219\u4ee3\u8868\u5bb9\u5668\u672a\u80fd\u6210\u529f\u542f\u52a8\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u542f\u52a8\u65f6\u7684\u65e5\u5fd7\uff08\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh"),"\u66ff\u6362\u4e3a\u60a8\u6307\u5b9a\u7684\u5bb9\u5668\u540d\u79f0\u6216 ID\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker logs eventmesh\n")),(0,a.kt)("h2",{id:"5-\u67e5\u770b-eventmesh-\u65e5\u5fd7"},"5. \u67e5\u770b EventMesh \u65e5\u5fd7"),(0,a.kt)("p",null,"\u6210\u529f\u542f\u52a8 EventMesh \u5bb9\u5668\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u67e5\u770b EventMesh Runtime \u8f93\u51fa\u7684\u65e5\u5fd7\uff0c\u68c0\u67e5 EventMesh \u7684\u8fd0\u884c\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u8fdb\u5165\u5bb9\u5668\uff08\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh"),"\u66ff\u6362\u4e3a\u60a8\u6307\u5b9a\u7684\u5bb9\u5668\u540d\u79f0\u6216 ID\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker exec -it eventmesh /bin/bash\n")),(0,a.kt)("p",null,"\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd logs\ntail -n 50 -f eventmesh.out\n")),(0,a.kt)("p",null,"\u5f53\u65e5\u5fd7\u8f93\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"server state:RUNNING"),"\uff0c\u5219\u4ee3\u8868 EventMesh Runtime \u542f\u52a8\u6210\u529f\u4e86\u3002"),(0,a.kt)("h2",{id:"6-\u6784\u5efa-eventmesh-runtime-\u955c\u50cf\u53ef\u9009"},"6. \u6784\u5efa EventMesh Runtime \u955c\u50cf\uff08\u53ef\u9009\uff09"),(0,a.kt)("p",null,"EventMesh \u57fa\u4e8e JDK8 \u5f00\u53d1\uff0c\u4e8c\u8fdb\u5236\u53d1\u884c\u7248\u548c\u5bb9\u5668\u955c\u50cf\u57fa\u4e8e JDK8 \u6784\u5efa\u3002"),(0,a.kt)("p",null,"\u8981\u5728 JDK8 \u73af\u5883\u4e0b\u8fd0\u884c\u5bb9\u5668\uff0c\u8bf7\u5728 EventMesh \u6e90\u4ee3\u7801\u7684\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker build -t yourname/eventmesh:yourtag -f docker/Dockerfile_jdk8 .\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u4ee5 JDK11 \u4f5c\u4e3a\u5bb9\u5668\u7684\u8fd0\u884c\u73af\u5883\uff0c\u5219\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker build -t yourname/eventmesh:yourtag -f docker/Dockerfile_jdk11 .\n")))}c.isMDXComponent=!0}}]);