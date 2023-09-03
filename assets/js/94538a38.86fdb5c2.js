"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[7546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},l="EventMesh Runtime",o={unversionedId:"instruction/runtime",id:"version-v1.9.0/instruction/runtime",title:"EventMesh Runtime",description:"EventMesh Runtime is the core component of Apache EventMesh . It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+.",source:"@site/versioned_docs/version-v1.9.0/instruction/03-runtime.md",sourceDirName:"instruction",slug:"/instruction/runtime",permalink:"/docs/instruction/runtime",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.9.0/instruction/03-runtime.md",tags:[],version:"v1.9.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Store with Docker",permalink:"/docs/instruction/store-with-docker"},next:{title:"EventMesh Runtime with Docker",permalink:"/docs/instruction/runtime-with-docker"}},s={},c=[{value:"1 Run on your local machine",id:"1-run-on-your-local-machine",level:2},{value:"1.1 Dependencies",id:"11-dependencies",level:3},{value:"1.2 Download Source Code",id:"12-download-source-code",level:3},{value:"1.3 Build and Load Plugins",id:"13-build-and-load-plugins",level:3},{value:"1.4 \u542f\u52a8Runtime",id:"14-\u542f\u52a8runtime",level:3},{value:"2 Remote deployment",id:"2-remote-deployment",level:2},{value:"2.1 Dependencies",id:"21-dependencies",level:3},{value:"2.2 Download",id:"22-download",level:3},{value:"2.3 Deploy",id:"23-deploy",level:3}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh-runtime"},"EventMesh Runtime"),(0,r.kt)("p",null,"EventMesh Runtime is the core component of Apache EventMesh . It is the middleware that transmits events between producers and consumers. The documentation introduces the step to install and start the latest release of EventMesh Runtime in the local or test environment. The EventMesh Runtime requires a Linux-based system with JDK (Java Development Kit) 8+."),(0,r.kt)("p",null,"Here, we take JDK 8 as an example. JDK 8 could be installed with the system package manager or the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/openjdk"},"openjdk:8-jdk")," Docker image."),(0,r.kt)("h2",{id:"1-run-on-your-local-machine"},"1 Run on your local machine"),(0,r.kt)("h3",{id:"11-dependencies"},"1.1 Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n4g+ available disk to deploy eventmesh-store;\n")),(0,r.kt)("p",null,"Gradle is the build automation tool used by Apache EventMesh . Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/installation.html"},"offical guide")," to install the latest release of Gradle."),(0,r.kt)("h3",{id:"12-download-source-code"},"1.2 Download Source Code"),(0,r.kt)("p",null,"Download and extract the source code of the latest release from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),". For example, with the current latest version, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-source.tar.gz"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tar -xvzf apache-eventmesh-1.9.0-source.tar.gz\ncd apache-eventmesh-1.9.0-src/\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_1",src:n(98285).Z,width:"1672",height:"716"})),(0,r.kt)("p",null,"Build the source code with Gradle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"gradle clean dist\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_2",src:n(27410).Z,width:"1668",height:"142"})),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd dist\nvim conf/eventmesh.properties\n")),(0,r.kt)("h3",{id:"13-build-and-load-plugins"},"1.3 Build and Load Plugins"),(0,r.kt)("p",null,"Apache EventMesh  introduces the SPI (Service Provider Interface) mechanism, which enables EventMesh to discover and load the plugins at runtime. The plugins could be installed with these methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gradle Dependencies: Declare the plugins as the build dependencies in ",(0,r.kt)("inlineCode",{parentName:"li"},"eventmesh-starter/build.gradle"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n\n   // Example: Load the RocketMQ plugin\n   implementation project(":eventmesh-connector-plugin:eventmesh-connector-rocketmq")\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plugin directory: EventMesh loads the plugins in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory based on ",(0,r.kt)("inlineCode",{parentName:"li"},"eventmesh.properties"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"installPlugin")," task of Gradle builds and moves the plugins into the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"gradle installPlugin\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_5",src:n(33731).Z,width:"1674",height:"1620"})),(0,r.kt)("h3",{id:"14-\u542f\u52a8runtime"},"1.4 \u542f\u52a8Runtime"),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_4",src:n(65107).Z,width:"1678",height:"254"})),(0,r.kt)("p",null,"View the output log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tail -f logs/eventmesh.out\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_3",src:n(44860).Z,width:"1672",height:"1272"})),(0,r.kt)("h2",{id:"2-remote-deployment"},"2 Remote deployment"),(0,r.kt)("h3",{id:"21-dependencies"},"2.1 Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n4g+ available disk to deploy eventmesh-store;\n")),(0,r.kt)("h3",{id:"22-download"},"2.2 Download"),(0,r.kt)("p",null,"Download and extract the executable binaries of the latest release from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),".For example, with the current latest version, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0.tar.gz"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tar -xvzf apache-eventmesh-1.9.0-bin.tar.gz\ncd apache-eventmesh-1.9.0\n")),(0,r.kt)("h3",{id:"23-deploy"},"2.3 Deploy"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime. The executable binaries contain all plugins in the bundle, thus there's no need to build them from source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"vim conf/eventmesh.properties\n")),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_6",src:n(81826).Z,width:"1672",height:"264"})),(0,r.kt)("p",null,"View the output log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd /root/apache-eventmesh-1.9.0/logs\ntail -f eventmesh.out\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_7",src:n(36919).Z,width:"1676",height:"1636"})),(0,r.kt)("p",null,"You can stop the run with the following command\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/stop.sh\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_8",src:n(32467).Z,width:"1678",height:"1088"}),"\n",(0,r.kt)("img",{alt:"runtime_9",src:n(60524).Z,width:"1674",height:"442"})))}u.isMDXComponent=!0},98285:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_1-b5a4e58c9215f3126cc0a2a4aabe56c5.png"},27410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_2-2d37ab2cda6023401aa4b7382c6f3b89.png"},44860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_3-8a5827b2d7157aa20afb8372458a5b05.png"},65107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_4-e7e9591c27a876f295847f06523932e1.png"},33731:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_5-64be4f9b7f5a3c5c42d5c829edb814fc.png"},81826:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_6-431e6ee0b583cd03c501dfe2073a053d.png"},36919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_7-3979069231d85d0d7defb5e1a15b414c.png"},32467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_8-ab3a9083e89fd07f89181f1491f23433.png"},60524:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_9-470954c61a58ce71a966e70e095142d1.png"}}]);