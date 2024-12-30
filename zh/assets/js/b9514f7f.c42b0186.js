"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,v=u["".concat(p,".").concat(g)]||u[g]||m[g]||s;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},i="SaaS\u7ec4\u5408\u5f0f\u5e94\u7528\u96c6\u6210\u6807\u51c6\u5316",o={unversionedId:"application-scenario/SaaS-integration",id:"application-scenario/SaaS-integration",title:"SaaS\u7ec4\u5408\u5f0f\u5e94\u7528\u96c6\u6210\u6807\u51c6\u5316",description:"\u5e94\u7528\u573a\u666f\u540d\u79f0*",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/application-scenario/02-SaaS-integration.md",sourceDirName:"application-scenario",slug:"/application-scenario/SaaS-integration",permalink:"/zh/docs/next/application-scenario/SaaS-integration",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/application-scenario/02-SaaS-integration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u540c\u6b65",permalink:"/zh/docs/next/application-scenario/data-synchronization"},next:{title:"\u4e91\u670d\u52a1\u7684Serverless\u4e8b\u4ef6\u603b\u7ebf",permalink:"/zh/docs/next/application-scenario/serverless-eventbus"}},p={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"saas\u7ec4\u5408\u5f0f\u5e94\u7528\u96c6\u6210\u6807\u51c6\u5316"},"SaaS\u7ec4\u5408\u5f0f\u5e94\u7528\u96c6\u6210\u6807\u51c6\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5e94\u7528\u573a\u666f\u540d\u79f0"))),(0,a.kt)("p",null,"\u2003","\u2003",(0,a.kt)("strong",{parentName:"p"},"SaaS\u7ec4\u5408\u5f0f\u5e94\u7528\u96c6\u6210\u6807\u51c6\u5316")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5e94\u7528\u573a\u666f\u63cf\u8ff0"))),(0,a.kt)("p",null,"\u2003","\u2003","Saas\u7ec4\u5408\u5f0f\u5e94\u7528\u7531\u591a\u4e2aPBC\uff08Package Business Capability\uff09\u7ec4\u6210\uff0cPBC\u53ef\u4ee5\u88ab\u5b9a\u4e49\u4e3a\u5177\u6709\u660e\u786e\u4e1a\u52a1\u80fd\u529b\u7684SaaS\u5e94\u7528\u7a0b\u5e8f\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u4ee5\u4e1a\u52a1\u4e3a\u9a71\u52a8\uff0c\u80fd\u72ec\u7acb\u5b8c\u6210\u4e1a\u52a1\u9700\u6c42\uff0c\u4e0d\u9700\u8981\u5916\u90e8\u4f9d\u8d56\u3002\u4f01\u4e1a\u89e3\u51b3\u65b9\u6848\u901a\u5e38\u7531\u591a\u4e2aSaaS\u5e94\u7528\u7a0b\u5e8f\u6a21\u5757\u8fdb\u884c\u7ec4\u5408\uff0c\u4ee5\u5448\u73b0\u5b8c\u6574\u7edf\u4e00\u7684\u7528\u6237\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,"\u2003","\u2003","\u4e0b\u56fe\u4e3a\u5355\u4e00PBC\u3001\u7ec4\u5408PBC\u548c\u591a\u4e2a\u7ec4\u5408PBC\u7684\u793a\u610f\u56fe\uff1a"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/application-scenario/s2_img1.png",width:"80%"})),(0,a.kt)("p",null,"\u2003","\u2003","\u7531\u4ee5\u4e0a\u67b6\u6784\u53ef\u89c1\uff0c\u6bcf\u4e2aSaaS\u5e94\u7528\u7a0b\u5e8f\u6a21\u5757\uff08PCB\uff09\u4e4b\u95f4\u7684\u8026\u5408\u7a0b\u5ea6\u8f83\u4f4e\uff0c\u5bf9\u67d0\u4e2a\u4e1a\u52a1\u8fdb\u884c\u4fee\u6539\u8c03\u6574\u65f6\uff0c\u5747\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u73b0\u6709\u4e1a\u52a1\u7684\u8fd0\u884c\uff0c\u8fd9\u6709\u52a9\u4e8e\u654f\u6377\u5f00\u53d1\u4e0e\u9ad8\u6548\u7684\u8fed\u4ee3\u66f4\u65b0\u3002\u4f46SaaS\u7ec4\u5408\u5f0f\u5e94\u7528\u5b58\u5728\u5404\u4e2a\u5e94\u7528\u95f4\u96c6\u6210\u6807\u51c6\u7684\u95ee\u9898\uff0c\u5404\u5e94\u7528\u4e4b\u95f4\u7f3a\u4e4f\u7edf\u4e00\u7684\u901a\u8baf\u534f\u8bae\u6807\u51c6\u5c31\u7ed9\u4e1a\u52a1\u843d\u5730\u8be5\u67b6\u6784\u5e26\u6765\u4e86\u56f0\u96be\u3002"),(0,a.kt)("p",null,"\u2003","\u2003","\u8be5\u95ee\u9898\u53ef\u4ee5\u4f7f\u7528Eventmesh\u89e3\u51b3\uff0cEventMesh\u6574\u5408\u4e86TCP\u548cHTTP\u534f\u8bae\uff0c\u540c\u65f6\u901a\u8fc7gRPC(\u8c37\u6b4c\u5f00\u6e90\u7684\u57fa\u4e8eHTTP/2\u7684\u9ad8\u6027\u80fdRPC\u6846\u67b6)\u652f\u6301Java\u3001Python\u3001C\u3001Go\u7b49\u591a\u8bed\u8a00SDK\uff0c\u4ece\u800c\u652f\u6301Client\u548cServer\u53cc\u5411\u5f02\u6b65\u901a\u8baf\u3002\u7528\u6237\u5728\u4f7f\u7528SDK\u65f6\u65e0\u9700\u8003\u8651\u4e0d\u540c\u573a\u666f\u6240\u4f7f\u7528\u7684\u5177\u4f53\u901a\u8baf\u534f\u8bae\uff0c\u57fa\u4e8eEventMesh\u6240\u6574\u5408\u7684SDK API\u5373\u53ef\u8fdb\u884c\u4e8b\u4ef6\u9a71\u52a8\u7684\u5f02\u6b65\u901a\u8baf\uff0c\u5b9e\u73b0\u4e86\u4e0d\u540cSaaS\u5e94\u7528\u7a0b\u5e8f\u6a21\u5757\u4e4b\u95f4\u7684\u4e8b\u4ef6\u6d41\u8f6c\u3002"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/application-scenario/s2_img2.png",width:"60%"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5e94\u7528\u573a\u666f\u5b9e\u65bd\u65b9\u6848"))),(0,a.kt)("p",null,"\u2003","\u2003","\u5173\u4e8e\u573a\u666f\u7684\u5177\u4f53\u5b9e\u73b0\uff0cEventMesh\u4ecev1.4.0\u7248\u672c\u5f00\u59cb\u6b63\u5f0f\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," \u6846\u67b6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC")," \u901a\u8fc7 Protobuf \u5b9a\u4e49API\u63a5\u53e3\u6570\u636e\u6a21\u578b\uff0c\u7edf\u4e00\u7531CloudEvents\u5b9a\u4e49\u4e8b\u4ef6\u6a21\u578b\u3002\u5728gRPC\u7684Protobuf\u4e8b\u4ef6\u6a21\u578b\u4e2d\uff0c\u6bcf\u4e2a\u4e8b\u4ef6\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleMessage")," \u7684\u6570\u636e\u6a21\u578b\u5448\u73b0\uff0c\u4e8b\u4ef6\u7684\u5b9e\u4f53\u5185\u5bb9\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," \u5b57\u6bb5\u91cc\uff0cCloudEvents\u662f\u4e1a\u754c\u6d41\u884c\u7684\u4e8b\u4ef6\u6a21\u578b\u3002"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/application-scenario/s2_img3.png",width:"60%"})),(0,a.kt)("p",null,"\u2003","\u2003","\u5728EventMesh\u6240\u652f\u6301\u7684gRPC\u4e8b\u4ef6\u4f7f\u7528\u573a\u666f\u5305\u62ec\uff1a\u4e8b\u4ef6\u53d1\u9001\u548c\u6279\u91cf\u4e8b\u4ef6\u53d1\u9001\u3001\u4e8b\u4ef6\u5e7f\u64ad\u3001\u4e8b\u4ef6\u8bf7\u6c42\u548c\u54cd\u5e94\u3001\u4e8b\u4ef6\u8ba2\u9605\u548c\u63a8\u9001\uff08\u8be6\u89c1\u4ee3\u7801\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-protocol-plugin/eventmesh-protocol-grpc/src/main/proto/eventmesh-client.proto"},"eventmesh-client.proto"),"\uff09"),(0,a.kt)("p",null,"\u2003","\u2003","1.\u4e8b\u4ef6\u53d1\u9001\u670d\u52a1\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"service PublisherService {\n\n   rpc publish(SimpleMessage) returns (Response);\n\n   rpc requestReply(SimpleMessage) returns (SimpleMessage);\n\n   rpc batchPublish(BatchMessage) returns (Response);\n}\n")),(0,a.kt)("p",null,"\u2003","\u2003","\u4e8b\u4ef6\u662f\u4ee5SimpleMessage\u7684\u6570\u636e\u6a21\u578b\u5448\u73b0\u3002\u4e8b\u4ef6\u53d1\u9001\u652f\u6301\u540c\u6b65\u53d1\u9001\u3001\u5f02\u6b65\u53d1\u9001\u548c\u6279\u91cf\u53d1\u9001\u4e09\u79cd\u6a21\u5f0f\uff1a"),(0,a.kt)("p",null,"\u2003","\u2003","\u540c\u6b65\u53d1\u9001\u662f\u6307\u4e8b\u4ef6\u751f\u4ea7\u8005\u53d1\u9001\u4e8b\u4ef6\u5230EventMesh\uff0c\u5e76\u7b49\u5f85\u4e8b\u4ef6\u6210\u529f\u63a8\u9001\u5230\u4e8b\u4ef6\u6d88\u8d39\u8005\uff0c\u5e76\u6536\u5230\u4e8b\u4ef6\u6d88\u8d39\u8005\u7684\u8fd4\u56de\uff0c\u624d\u7b97\u5b8c\u6210\u6574\u4e2a\u7aef\u5230\u7aef\u7684\u4e8b\u4ef6\u53d1\u9001\u8fc7\u7a0b\uff1b"),(0,a.kt)("p",null,"\u2003","\u2003","\u5f02\u6b65\u53d1\u9001\u662f\u6307\u4e8b\u4ef6\u751f\u4ea7\u8005\u53d1\u9001\u4e8b\u4ef6\u5230EventMesh\u5373\u53ef\uff0c\u65e0\u9700\u7b49\u5f85\u4e8b\u4ef6\u88ab\u6210\u529f\u63a8\u9001\u5230\u4e8b\u4ef6\u6d88\u8d39\u8005\uff1b"),(0,a.kt)("p",null,"\u2003","\u2003","\u6279\u91cf\u53d1\u9001\u662f\u6307\u5f02\u6b65\u53d1\u9001\u4e00\u6279\u4e8b\u4ef6\u5230EventMesh\u3002"),(0,a.kt)("p",null,"\u2003","\u2003","2.\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1\u63d0\u4f9b\u4ee5\u4e0b\u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"service ConsumerService {\n\n   rpc subscribe(Subscription) returns (Response);\n\n   rpc subscribeStream(stream Subscription) returns (stream SimpleMessage);\n\n   rpc unsubscribe(Subscription) returns (Response);\n}\n")),(0,a.kt)("p",null,"\u2003","\u2003","\u4e8b\u4ef6\u8ba2\u9605\u652f\u6301\u4e24\u79cd\u65b9\u5f0f\uff1a\u96c6\u7fa4(cluster) \u548c\u5e7f\u64ad(broadcast)\u3002\u5728\u96c6\u7fa4\u6a21\u5f0f\u4e2d\uff0c\u4e8b\u4ef6\u6d88\u8d39\u8005\u96c6\u7fa4\u91cc\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\u80fd\u6d88\u8d39\u5230\u4e8b\u4ef6\uff1b\u800c\u5e7f\u64ad\u6a21\u5f0f\u8ba9\u96c6\u7fa4\u91cc\u6bcf\u4e00\u4e2a\u5b9e\u4f8b\u90fd\u6d88\u8d39\u5230\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u2003","\u2003","\u8fd9\u4e9b\u8ba2\u9605\u6a21\u5f0f\u662f\u5728\u8ba2\u9605\u6570\u636e\u6a21\u578b\u91cc\u5b9a\u4e49\u7684\u3002\u53e6\u5916\u8ba2\u9605\u670d\u52a1\u63d0\u4f9b\u4e24\u79cd\u8ba2\u9605\u63a5\u53e3\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe API")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribeStream API"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe API"),"\u662f\u901a\u8fc7url\u65b9\u5f0f\u63a8\u9001\u4e8b\u4ef6\u5230\u6d88\u8d39\u8005\uff0c\u8fd9\u91ccurl\u53c8\u53ebwebhook\uff0c\u8fd9\u79cd\u573a\u666f\u9002\u5408\u4e91\u539f\u751f\u5fae\u670d\u52a1\u548c\u81ea\u5b9a\u4e49\u5e94\u7528\u53ca\u51fd\u6570\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"subscribeStream API"),"\u662f\u901a\u8fc7gRPC \u53cc\u5411\u6d41(Bidirectional Streaming) \u63a8\u9001\u4e8b\u4ef6\u5230\u6d88\u8d39\u8005\uff0c\u540c\u65f6\u53ef\u4ee5\u8ba9\u4e8b\u4ef6\u6d88\u8d39\u8005\u8fd4\u56de\u786e\u8ba4\u4fe1\u606f (Ack) \u7ed9\u4e8b\u4ef6\u751f\u4ea7\u8005\u3002\u8fd9\u5c31\u6ee1\u8db3\u4e86\u751f\u4ea7\u8005RequestReply\u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u7684\u9700\u6c42\u3002"),(0,a.kt)("p",null,"\u2003","\u2003","3.\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1\u63d0\u4f9b\u4ee5\u4e0b\u63a5\u53e3\uff1a"),(0,a.kt)("p",null,"\u2003","\u2003","\u4e3a\u4e86\u63d0\u9ad8\u4e8b\u4ef6\u751f\u4ea7\u548c\u6d88\u8d39\u7684\u6027\u80fd\uff0cEventMesh\u670d\u52a1\u7aef(EventMesh Runtime) \u5728gRPC\u7684\u670d\u52a1\u91cc\u5b9a\u4e49\u4e86\u7ebf\u7a0b\u6c60(ThreadPool)\uff0c\u800c\u4e14\u9488\u5bf9\u4e8b\u4ef6\u751f\u4ea7\u548c\u6d88\u8d39\u7684\u5bf9\u6027\u80fd\u8981\u6c42\u7684\u4e0d\u540c\uff0c\u914d\u7f6e\u72ec\u7acb\u7684\u53c2\u6570\u3002\u8fd9\u4e9b\u53c2\u6570\u90fd\u53ef\u4ee5\u5728EventMesh\u914d\u7f6e\u6587\u4ef6(",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),")\u91cc\u627e\u5230\u3002"),(0,a.kt)("p",null,"\u2003","\u2003","\u4f8b\u5982\u4ee5\u4e0b\u5206\u522b\u662f\u4e8b\u4ef6\u751f\u4ea7\uff0c\u8ba2\u9605\u548c\u63a8\u9001\u7684\u7ebf\u7a0b\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"eventMesh.server.sendmsg.threads.num=50\neventMesh.server.clientmanage.threads.num=30\neventMesh.server.pushmsg.threads.num=50\n")),(0,a.kt)("p",null,"\u2003","\u2003","\u5f53gRPC\u670d\u52a1\u542f\u52a8\u540e\uff0c\u5b83\u4f1a\u76d1\u542c\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\uff0c\u4e00\u65e6\u6709\u65b0\u8bf7\u6c42\u8fdb\u6765\uff0c\u5b83\u4f1a\u5206\u53d1\u5230\u5bf9\u5e94\u670d\u52a1\u7684\u7ebf\u7a0b\u6c60\uff0c\u7136\u540e\u8ba9\u5bf9\u5e94\u7684\u5904\u7406\u5668(Processor)\u5904\u7406\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u963b\u585e\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u7684\u5904\u7406\uff0c\u4ece\u800c\u63d0\u9ad8\u4e86\u5e76\u53d1\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public void publish(SimpleMessage request, StreamObserver<Response> responseObserver){\n    cmdLogger.info("cmd={}|{}|client2eventMesh|from={}|to={}", "AsyncPublish",\n        EventMeshConstants.PROTOCOL_GRPC, request.getHeader().getIp(),\n        eventMeshGrpcServer.getEventMeshGrpcConfiguration().eventMeshIp);\n\n    EventEmitter<Response> emitter = new EventEmitter<>(responseObserver);\n\n    threadPoolExecutor.submit(() -> {\n        SendAsyncMessageProcessor sendAsyncMessageProcessor = new SendAsyncMessageProcessor(eventMeshGrpcServer);\n        try {\n            sendAsyncMessageProcessor.process(request, emitter);\n        } catch (Exception e) {\n            logger.error("Error code {}, error message {}", StatusCode.EVENTMESH_SEND_ASYNC_MSG_ERR.getRetCode(),\n                StatusCode.EVENTMESH_SEND_ASYNC_MSG_ERR.getErrMsg(), e);\n            ServiceUtils.sendRespAndDone(StatusCode.EVENTMESH_SEND_ASYNC_MSG_ERR, e.getMessage(), emitter);\n        }\n    });\n}\n')),(0,a.kt)("p",null,"\u2003","\u2003","\u6bd4\u5982\u4ee5\u4e0a\u4ee3\u7801\u662f\u4e8b\u4ef6\u53d1\u9001\u670d\u52a1(publish service) \u7684\u5b9e\u73b0\u3002\u5b83\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"threadPoolExecutor"),"\u628a\u4e8b\u4ef6\u53d1\u9001\u5230\u7ebf\u7a0b\u6c60\u8ba9\u4e0b\u6e38",(0,a.kt)("inlineCode",{parentName:"p"},"SendAsyncMessageProcessor"),"\u5904\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u53c2\u8003\u8d44\u6599"))),(0,a.kt)("p",null,"\u2003","\u2003",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0v-tjIYkDIw"},"ApacheCon Asia 2022\u4f1a\u8bae\u6f14\u8bb2\u300aEventMesh\u5982\u4f55\u89e3\u51b3SaaS\u7ec4\u5408\u5f0f\u5e94\u7528\u96c6\u6210\u6807\u51c6\u5316\u95ee\u9898\u300b")),(0,a.kt)("p",null,"\u2003","\u2003",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Z3DAw_YtKJWXftdFjAm2rA"},"\u534e\u4e3a\u4e91\u4e2d\u95f4\u4ef6\u56e2\u961f\u7684\u6280\u672f\u535a\u5ba2")),(0,a.kt)("p",null,"\u2003","\u2003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-protocol-plugin/eventmesh-protocol-grpc/src/main/proto"},"EventMesh\u9879\u76ee\u6e90\u4ee3\u7801")))}m.isMDXComponent=!0}}]);