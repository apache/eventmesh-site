"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e",s={unversionedId:"instruction/runtime",id:"version-v1.7.0/instruction/runtime",title:"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e",description:"EventMesh Runtime \u662f Apache EventMesh\uff08\u5b75\u5316\uff09\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002\u5b83\u662f\u5728\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u4e4b\u95f4\u4f20\u8f93\u4e8b\u4ef6\u7684\u4e2d\u95f4\u4ef6\u3002\u8be5\u6587\u6863\u4ecb\u7ecd\u4e86\u5728\u672c\u5730\u6216\u6d4b\u8bd5\u73af\u5883\u4e2d\u5b89\u88c5\u548c\u542f\u52a8\u6700\u65b0\u7248 EventMesh Runtime \u7684\u6b65\u9aa4\u3002EventMesh Runtime \u9700\u8981\u4e00\u4e2a\u57fa\u4e8e Linux \u7684\u7cfb\u7edf\uff0c\u5e76\u914d\u5907 JDK\uff08Java \u5f00\u53d1\u5305\uff098+\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7.0/instruction/03-runtime.md",sourceDirName:"instruction",slug:"/instruction/runtime",permalink:"/zh/docs/v1.7.0/instruction/runtime",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.7.0/instruction/03-runtime.md",tags:[],version:"v1.7.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8\uff08\u4f7f\u7528 Docker\uff09",permalink:"/zh/docs/v1.7.0/instruction/store-with-docker"},next:{title:"\u4f7f\u7528 Docker \u5feb\u901f\u5165\u95e8 EventMesh\uff08\u6682\u65f6\u53ea\u652f\u6301\u52301.4.0\u7248\u672c\uff09",permalink:"/zh/docs/v1.7.0/instruction/runtime-with-docker"}},o={},p=[{value:"1 \u6e90\u7801\u90e8\u7f72",id:"1-\u6e90\u7801\u90e8\u7f72",level:2},{value:"1.1 \u4f9d\u8d56",id:"11-\u4f9d\u8d56",level:3},{value:"1.2 \u4e0b\u8f7d\u6e90\u7801",id:"12-\u4e0b\u8f7d\u6e90\u7801",level:3},{value:"1.3 \u6784\u5efa\u5e76\u52a0\u8f7d\u63d2\u4ef6",id:"13-\u6784\u5efa\u5e76\u52a0\u8f7d\u63d2\u4ef6",level:3},{value:"1.4 \u542f\u52a8Runtime",id:"14-\u542f\u52a8runtime",level:3},{value:"2 \u4e8c\u8fdb\u5236\u90e8\u7f72",id:"2-\u4e8c\u8fdb\u5236\u90e8\u7f72",level:2},{value:"2.1 \u4f9d\u8d56",id:"21-\u4f9d\u8d56",level:3},{value:"2.2 \u4e0b\u8f7d",id:"22-\u4e0b\u8f7d",level:3},{value:"2.3 \u90e8\u7f72",id:"23-\u90e8\u7f72",level:3}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-runtime-\u5feb\u901f\u5165\u95e8\u8bf4\u660e"},"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e"),(0,a.kt)("p",null,"EventMesh Runtime \u662f Apache EventMesh\uff08\u5b75\u5316\uff09\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002\u5b83\u662f\u5728\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u4e4b\u95f4\u4f20\u8f93\u4e8b\u4ef6\u7684\u4e2d\u95f4\u4ef6\u3002\u8be5\u6587\u6863\u4ecb\u7ecd\u4e86\u5728\u672c\u5730\u6216\u6d4b\u8bd5\u73af\u5883\u4e2d\u5b89\u88c5\u548c\u542f\u52a8\u6700\u65b0\u7248 EventMesh Runtime \u7684\u6b65\u9aa4\u3002EventMesh Runtime \u9700\u8981\u4e00\u4e2a\u57fa\u4e8e Linux \u7684\u7cfb\u7edf\uff0c\u5e76\u914d\u5907 JDK\uff08Java \u5f00\u53d1\u5305\uff098+\u3002"),(0,a.kt)("p",null,"\u5728\u6b64\uff0c\u6211\u4eec\u4ee5 JDK 8 \u4e3a\u4f8b\u3002\u53ef\u4ee5\u4f7f\u7528\u7cfb\u7edf\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/openjdk"},"openjdk:8-jdk")," Docker \u6620\u50cf\u5b89\u88c5 JDK 8\u3002"),(0,a.kt)("h2",{id:"1-\u6e90\u7801\u90e8\u7f72"},"1 \u6e90\u7801\u90e8\u7f72"),(0,a.kt)("h3",{id:"11-\u4f9d\u8d56"},"1.1 \u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5efa\u8bae\u4f7f\u7528Linux / Unix\uff1b\n64\u4f4dJDK 1.8.*\uff1b(\u6700\u597d\u4f7f\u75281.8\uff0c\u5176\u4ed6\u7248\u672c\u53ef\u80fd\u4f1a\u6709jvm\u53c2\u6570\u627e\u4e0d\u5230\u7684\u95ee\u9898)\uff1b\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u8350 7.0.*\uff1b\n4GB \u4ee5\u4e0a\u53ef\u7528\u78c1\u76d8\uff0c\u4ee5\u90e8\u7f72 eventmesh-store\uff1b\n")),(0,a.kt)("p",null,"Gradle \u662f Apache EventMesh\uff08\u5b75\u5316\uff09\u4f7f\u7528\u7684\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\u3002\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/installation.html"},"\u5b98\u65b9\u6307\u5357")," \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Gradle\u3002"),(0,a.kt)("h3",{id:"12-\u4e0b\u8f7d\u6e90\u7801"},"1.2 \u4e0b\u8f7d\u6e90\u7801"),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download")," \u4e0b\u8f7d\u5e76\u63d0\u53d6\u6700\u65b0\u7248\u672c\u7684\u6e90\u4ee3\u7801\u3002\u6bd4\u5982\u76ee\u524d\u6700\u65b0\u7248\uff0c\u60a8\u5c06\u83b7\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-source.tar.gz"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tar -xvzf apache-eventmesh-1.9.0-source.tar.gz\ncd apache-eventmesh-1.9.0-src/\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime_1",src:n(98285).Z,width:"1672",height:"716"})),(0,a.kt)("p",null,"\u4f7f\u7528 Gradle \u6784\u5efa\u6e90\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"gradle clean dist\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime_2",src:n(27410).Z,width:"1668",height:"142"})),(0,a.kt)("p",null,"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," \u4ee5\u66f4\u6539 EventMesh Runtime \u7684\u914d\u7f6e\uff08\u5982 TCP \u7aef\u53e3\u3001\u5ba2\u6237\u7aef\u9ed1\u540d\u5355\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cd dist\nvim conf/eventmesh.properties\n")),(0,a.kt)("h3",{id:"13-\u6784\u5efa\u5e76\u52a0\u8f7d\u63d2\u4ef6"},"1.3 \u6784\u5efa\u5e76\u52a0\u8f7d\u63d2\u4ef6"),(0,a.kt)("p",null,"Apache EventMesh\u5f15\u5165\u4e86 SPI \u673a\u5236\uff0c\u4f7f EventMesh \u80fd\u591f\u5728\u8fd0\u884c\u65f6\u53d1\u73b0\u5e76\u52a0\u8f7d\u63d2\u4ef6\u3002\u6709\u4e24\u79cd\u65b9\u5f0f\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Gradle \u4f9d\u8d56\u9879\uff1a \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"eventmesh-starter/build.gradle")," \u4e2d\u5c06\u63d2\u4ef6\u58f0\u660e\u4e3a\u6784\u5efa\u4f9d\u8d56\u9879\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n\n    // \u793a\u4f8b\uff1a \u52a0\u8f7d RocketMQ \u63d2\u4ef6\n   implementation project(":eventmesh-connector-plugin:eventmesh-connector-rocketmq")\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u63d2\u4ef6\u76ee\u5f55\uff1a EventMesh \u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"li"},"eventmesh.properties")," \u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/plugin")," \u76ee\u5f55\u4e2d\u7684\u63d2\u4ef6\u3002Gradle \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"installPlugin")," \u4efb\u52a1\u4f1a\u6784\u5efa\u63d2\u4ef6\u5e76\u5c06\u5176\u79fb\u52a8\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/plugin")," \u76ee\u5f55\u4e2d\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"gradle installPlugin\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime_5",src:n(33731).Z,width:"1674",height:"1620"})),(0,a.kt)("h3",{id:"14-\u542f\u52a8runtime"},"1.4 \u542f\u52a8Runtime"),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"start.sh")," \u811a\u672c\u542f\u52a8 EventMesh Runtime \u670d\u52a1\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime_4",src:n(65107).Z,width:"1678",height:"254"})),(0,a.kt)("p",null,"\u67e5\u770b\u8f93\u51fa\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tail -f logs/eventmesh.out\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime_3",src:n(44860).Z,width:"1672",height:"1272"})),(0,a.kt)("h2",{id:"2-\u4e8c\u8fdb\u5236\u90e8\u7f72"},"2 \u4e8c\u8fdb\u5236\u90e8\u7f72"),(0,a.kt)("h3",{id:"21-\u4f9d\u8d56"},"2.1 \u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5efa\u8bae\u4f7f\u7528Linux / Unix\uff1b\n64\u4f4dJDK 1.8+\uff1b\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u8350 7.0.*\uff1b\n4GB \u4ee5\u4e0a\u53ef\u7528\u78c1\u76d8\uff0c\u4ee5\u90e8\u7f72 eventmesh-store\uff1b\n")),(0,a.kt)("h3",{id:"22-\u4e0b\u8f7d"},"2.2 \u4e0b\u8f7d"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download")," \u9875\u9762\u9009\u62e91.5.0\u7248\u672c\u7684 Binary Distribution \u8fdb\u884c\u4e0b\u8f7d, \u60a8\u5c06\u83b7\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-bin.tar.gz"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# \u89e3\u538b\ntar -xvzf apache-eventmesh-1.9.0-bin.tar.gz\ncd apache-eventmesh-1.9.0\n")),(0,a.kt)("h3",{id:"23-\u90e8\u7f72"},"2.3 \u90e8\u7f72"),(0,a.kt)("p",null,"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," \u4ee5\u66f4\u6539 EventMesh Runtime \u7684\u914d\u7f6e\uff08\u5982 TCP \u7aef\u53e3\u3001\u5ba2\u6237\u7aef\u9ed1\u540d\u5355\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"vim conf/eventmesh.properties\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"start.sh")," \u811a\u672c\u542f\u52a8 EventMesh Runtime \u670d\u52a1\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime_6",src:n(81826).Z,width:"1672",height:"264"})),(0,a.kt)("p",null,"\u67e5\u770b\u8f93\u51fa\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cd /root/apache-eventmesh-1.9.0/logs\ntail -f eventmesh.out\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime_7",src:n(36919).Z,width:"1676",height:"1636"})),(0,a.kt)("p",null,"\u505c\u6b62\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/stop.sh\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime_8",src:n(32467).Z,width:"1678",height:"1088"}),"\n",(0,a.kt)("img",{alt:"runtime_9",src:n(60524).Z,width:"1674",height:"442"})))}u.isMDXComponent=!0},98285:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_1-b5a4e58c9215f3126cc0a2a4aabe56c5.png"},27410:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_2-2d37ab2cda6023401aa4b7382c6f3b89.png"},44860:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_3-8a5827b2d7157aa20afb8372458a5b05.png"},65107:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_4-e7e9591c27a876f295847f06523932e1.png"},33731:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_5-64be4f9b7f5a3c5c42d5c829edb814fc.png"},81826:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_6-431e6ee0b583cd03c501dfe2073a053d.png"},36919:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_7-3979069231d85d0d7defb5e1a15b414c.png"},32467:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_8-ab3a9083e89fd07f89181f1491f23433.png"},60524:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime_9-470954c61a58ce71a966e70e095142d1.png"}}]);