(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[130],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4541:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),c=["components"],i={},s="\u5982\u4f55\u8fd0\u884c eventmesh-sdk-java \u6f14\u793a",l={unversionedId:"instructions/eventmesh-sdk-java-quickstart",id:"instructions/eventmesh-sdk-java-quickstart",isDocsHomePage:!1,title:"\u5982\u4f55\u8fd0\u884c eventmesh-sdk-java \u6f14\u793a",description:"Eventmesh-sdk-java\u4f5c\u4e3a\u5ba2\u6237\u7aef\uff0c\u4e0eeventmesh-runtime\u901a\u4fe1\uff0c\u7528\u4e8e\u5b8c\u6210\u6d88\u606f\u7684\u53d1\u9001\u548c\u63a5\u6536\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/instructions/eventmesh-sdk-java-quickstart.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-sdk-java-quickstart",permalink:"/zh/docs/instructions/eventmesh-sdk-java-quickstart",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-sdk-java-quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e",permalink:"/zh/docs/instructions/eventmesh-runtime-quickstart"},next:{title:"Eventmesh-store \u5feb\u901f\u5165\u95e8\u8bf4\u660e",permalink:"/zh/docs/instructions/eventmesh-store-quickstart"}},p=[{value:"1. TCP DEMO",id:"1-tcp-demo",children:[]},{value:"2. HTTP\u6f14\u793a",id:"2-http\u6f14\u793a",children:[]}],u={toc:p};function m(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5982\u4f55\u8fd0\u884c-eventmesh-sdk-java-\u6f14\u793a"},"\u5982\u4f55\u8fd0\u884c eventmesh-sdk-java \u6f14\u793a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Eventmesh-sdk-java\u4f5c\u4e3a\u5ba2\u6237\u7aef\uff0c\u4e0eeventmesh-runtime\u901a\u4fe1\uff0c\u7528\u4e8e\u5b8c\u6210\u6d88\u606f\u7684\u53d1\u9001\u548c\u63a5\u6536\u3002"),(0,o.kt)("p",{parentName:"blockquote"},"Eventmesh-sdk-java\u652f\u6301\u5f02\u6b65\u6d88\u606f\u548c\u5e7f\u64ad\u6d88\u606f\u3002\u5f02\u6b65\u6d88\u606f\u8868\u793a\u751f\u4ea7\u8005\u53ea\u53d1\u9001\u6d88\u606f\uff0c\u4e0d\u5173\u5fc3\u56de\u590d\u6d88\u606f\u3002\u5e7f\u64ad\u6d88\u606f\u8868\u793a\u751f\u4ea7\u8005\u53d1\u9001\u4e00\u6b21\u6d88\u606f\uff0c\u6240\u6709\u8ba2\u9605\u5e7f\u64ad\u4e3b\u9898\u7684\u6d88\u8d39\u8005\u90fd\u5c06\u6536\u5230\u6d88\u606f"),(0,o.kt)("p",{parentName:"blockquote"},"Eventmesh-sdk-java\u652f\u6301HTTP\u548cTCP\u534f\u8bae\u3002")),(0,o.kt)("p",null,"TCP \u548c Http \u793a\u4f8b\u90fd\u5728",(0,o.kt)("strong",{parentName:"p"},"eventmesh-test"),"\u6a21\u5757\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),":\u4e0b\u8f7d\u4e86\u6e90\u4ee3\u7801\u540e\uff0c\u9700\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"/conf/application.properties")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"/conf/log4j2.xml")," \u590d\u5236\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," \u76ee\u5f55\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-test-structure",src:n(2213).Z})),(0,o.kt)("h3",{id:"1-tcp-demo"},"1. TCP DEMO"),(0,o.kt)("h4",null,"\u5f02\u6b65\u6d88\u606f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898TEST-TOPIC-TCP-ASYNC,\u53ef\u4ee5\u901a\u8fc7rocketmq-console\u6216\u8005rocketmq tools \u547d\u4ee4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u8005\uff0c\u8ba2\u9605\u4e0a\u4e00\u6b65\u9aa4\u5df2\u7ecf\u521b\u5efa\u7684Topic"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8fd0\u884corg.apache.eventmesh.tcp.demo.AsyncSubscribe\u7684\u4e3b\u8981\u65b9\u6cd5\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u6d88\u606f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8fd0\u884corg.apache.eventmesh.tcp.demo.AsyncPublish\u7684\u4e3b\u8981\u65b9\u6cd5\n")),(0,o.kt)("h4",null,"\u5e7f\u64ad\u6d88\u606f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898TEST-TOPIC-TCP-BROADCAST,\u53ef\u4ee5\u901a\u8fc7rocketmq-console\u6216\u8005rocketmq tools \u547d\u4ee4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u7aef\uff0c\u8ba2\u9605\u4e0a\u4e00\u6b65\u9aa4\u5df2\u7ecf\u521b\u5efa\u7684Topic"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8fd0\u884corg.apache.eventmesh.tcp.demo.AsyncSubscribeBroadcast\u7684\u4e3b\u8981\u65b9\u6cd5\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u5e7f\u64ad\u6d88\u606f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8fd0\u884corg.apache.eventmesh.tcp.demo.AsyncPublishBroadcast\u7684\u4e3b\u8981\u65b9\u6cd5\n")),(0,o.kt)("h3",{id:"2-http\u6f14\u793a"},"2. HTTP\u6f14\u793a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8ehttp\uff0ceventmesh-sdk-java\u5bf9\u5bf9\u4e8e\u5f02\u6b65\u4e8b\u4ef6\u5b9e\u73b0\u4e86\u53d1\u9001\u4e0e\u8ba2\u9605"),(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u6f14\u793a\u4e2d\uff0cJava\u7c7b",(0,o.kt)("inlineCode",{parentName:"p"},"LiteMessage"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"content"),"\u5b57\u6bb5\u8868\u793a\u4e00\u4e2a\u7279\u6b8a\u7684\u534f\u8bae\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u8981\u4f7f\u7528eventmesh-sdk-java\u7684http-client\uff0c\u5219\u53ea\u9700\u8bbe\u8ba1\u534f\u8bae\u7684\u5185\u5bb9\u5e76\u5728\u540c\u4e00\u65f6\u95f4\u63d0\u4f9b\u6d88\u8d39\u8005\u7684\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,o.kt)("h4",null,"\u5f02\u6b65\u4e8b\u4ef6"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u751f\u4ea7\u8005\u5c06\u4e8b\u4ef6\u53d1\u9001\u7ed9\u4e0b\u6e38\u5373\u53ef\uff0c\u65e0\u9700\u7b49\u5f85\u54cd\u5e94")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898TEST-TOPIC-HTTP-ASYNC,\u53ef\u4ee5\u901a\u8fc7rocketmq-console\u6216\u8005rocketmq tools \u547d\u4ee4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u7aef\uff0c\u8ba2\u9605Topic"),(0,o.kt)("p",{parentName:"li"},"\u5f02\u6b65\u4e8b\u4ef6\u6d88\u8d39\u7aef\u4e3aspring boot demo\uff0c\u8fd0\u884cdemo\u5373\u53ef\u542f\u52a8\u670d\u52a1\u5e76\u5b8c\u6210Topic\u8ba2\u9605"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8fd0\u884corg.apache.eventmesh.http.demo.sub.SpringBootDemoApplication\u7684\u4e3b\u8981\u65b9\u6cd5\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u6d88\u606f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8fd0\u884corg.apache.eventmesh.http.demo.AsyncPublishInstance\u7684\u4e3b\u8981\u65b9\u6cd5\n")))}m.isMDXComponent=!0},2213:function(e,t,n){"use strict";t.Z=n.p+"assets/images/eventmesh-test-structure-9e57b0badbeea4f65becd60968910add.png"}}]);