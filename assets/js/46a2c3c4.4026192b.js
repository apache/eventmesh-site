"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},o="EventMesh Runtime",i={unversionedId:"instruction/runtime",id:"instruction/runtime",title:"EventMesh Runtime",description:"The EventMesh Runtime is a stateful mesh node in an EventMesh cluster that is responsible for event transfer between the Source Connector and the Sink Connector, and can use Event Store as a storage queue for events.",source:"@site/docs/instruction/03-runtime.md",sourceDirName:"instruction",slug:"/instruction/runtime",permalink:"/docs/next/instruction/runtime",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/instruction/03-runtime.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Store with Docker",permalink:"/docs/next/instruction/store-with-docker"},next:{title:"EventMesh Runtime with Docker",permalink:"/docs/next/instruction/runtime-with-docker"}},s={},u=[{value:"1 Run on your local machine",id:"1-run-on-your-local-machine",level:2},{value:"1.1 Run from source code",id:"11-run-from-source-code",level:3},{value:"1.1.1 Dependencies",id:"111-dependencies",level:4},{value:"1.1.2 Download source code",id:"112-download-source-code",level:4},{value:"1.1.3 Run form local",id:"113-run-form-local",level:4},{value:"1.2 Run form local binary",id:"12-run-form-local-binary",level:3},{value:"1.1.1 Dependencies",id:"111-dependencies-1",level:4},{value:"1.1.2 Download Source Code",id:"112-download-source-code-1",level:3},{value:"1.1.3 Build and Load Plugins",id:"113-build-and-load-plugins",level:3},{value:"1.1.4 \u542f\u52a8Runtime",id:"114-\u542f\u52a8runtime",level:3},{value:"2 Remote deployment",id:"2-remote-deployment",level:2},{value:"2.1 Dependencies",id:"21-dependencies",level:3},{value:"2.2 Download",id:"22-download",level:3},{value:"2.3 Deploy",id:"23-deploy",level:3}],c={toc:u};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh-runtime"},"EventMesh Runtime"),(0,r.kt)("p",null,"The EventMesh Runtime is a stateful mesh node in an EventMesh cluster that is responsible for event transfer between the Source Connector and the Sink Connector, and can use Event Store as a storage queue for events."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EventMesh Runtime",src:n(30438).Z,width:"1688",height:"838"})),(0,r.kt)("h2",{id:"1-run-on-your-local-machine"},"1 Run on your local machine"),(0,r.kt)("h3",{id:"11-run-from-source-code"},"1.1 Run from source code"),(0,r.kt)("h4",{id:"111-dependencies"},"1.1.1 Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n")),(0,r.kt)("h4",{id:"112-download-source-code"},"1.1.2 Download source code"),(0,r.kt)("p",null,"Download and extract the source code of the latest release from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),". For example, with the current latest version, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-source.tar.gz"),"."),(0,r.kt)("h4",{id:"113-run-form-local"},"1.1.3 Run form local"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.1.3.1 Description of the project structure:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"eventmesh-common : eventmesh public classes and methods module"),(0,r.kt)("li",{parentName:"ul"},"eventmesh-connector-api : eventmesh connector plugin interface definition module"),(0,r.kt)("li",{parentName:"ul"},"eventmesh-connector-plugin : eventmesh connector plugin module"),(0,r.kt)("li",{parentName:"ul"},"eventmesh-runtime : EventMesh Runtime module"),(0,r.kt)("li",{parentName:"ul"},"eventmesh-sdk-java : eventmesh java client sdk"),(0,r.kt)("li",{parentName:"ul"},"eventmesh-starter : eventmesh local startup and runtime project portal"),(0,r.kt)("li",{parentName:"ul"},"eventmesh-spi : eventmesh SPI loader module")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Plugin modules follow the SPI specification defined by eventmesh, custom SPI interfaces need to be marked with the annotation @EventMeshSPI.\nPlugin instances need to be configured in the corresponding module under /main/resources/META-INF/eventmesh with a mapping file of the relevant interfaces to their implementation classes, with the name of the file being the full class name of the SPI interface.\nThe content of the file is the mapping from the plugin instance name to the plugin instance, see eventmesh-connector-rocketmq plugin module for details.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.1.3.2 Plugin Description")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"1.1.3.2.1 Installing the plugin"))),(0,r.kt)("p",null,"There are two ways to install the plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"classpath loading: Local developers can install the plugin by declaring it in the eventmesh-starter module build.gradle, e.g., declare that it uses the rocketmq plugin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"File loading: By installing the plugin to the plugin directory, EventMesh will automatically load the plugins in the plugin directory according to the conditions at runtime, you can install the plugin by executing the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},". /gradlew clean jar dist && . /gradlew installPlugin\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"1.1.3.2.2 Using Plugins "))),(0,r.kt)("p",null,"EventMesh will load plugins in the dist/plugin directory by default, you can change the plugin directory with ",(0,r.kt)("inlineCode",{parentName:"p"},"-DeventMeshPluginDir=your_plugin_directory"),". Examples of plugins to be used at runtime can be found in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"confPath")," directory under ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),". For example declare the use of the rocketmq plugin at runtime with the following settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"#connector plugin\neventMesh.connector.plugin.type=rocketmq\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.1.3.3 Configuring the VM startup parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml\n-Deventmesh.log.home=eventmesh-runtime/logs\n-Deventmesh.home=eventmesh-runtime\n-DconfPath=eventmesh-runtime/conf\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If your operating system is Windows, you may need to replace the file separator with '\\'.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.1.3.4 Getting up and running")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run org.apache.eventmesh.starter.\n")),(0,r.kt)("h3",{id:"12-run-form-local-binary"},"1.2 Run form local binary"),(0,r.kt)("h4",{id:"111-dependencies-1"},"1.1.1 Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n")),(0,r.kt)("p",null,"Gradle is the build automation tool used by Apache EventMesh. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/installation.html"},"offical guide")," to install the latest release of Gradle."),(0,r.kt)("h3",{id:"112-download-source-code-1"},"1.1.2 Download Source Code"),(0,r.kt)("p",null,"Download and extract the source code of the latest release from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),". For example, with the current latest version, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-source.tar.gz"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tar -xvzf apache-eventmesh-1.9.0-source.tar.gz\ncd apache-eventmesh-1.9.0-src/\n")),(0,r.kt)("p",null,"Build the source code with Gradle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"gradle clean dist\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_2",src:n(27410).Z,width:"1668",height:"142"})),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd dist\nvim conf/eventmesh.properties\n")),(0,r.kt)("h3",{id:"113-build-and-load-plugins"},"1.1.3 Build and Load Plugins"),(0,r.kt)("p",null,"Apache EventMesh  introduces the SPI (Service Provider Interface) mechanism, which enables EventMesh to discover and load the plugins at runtime. The plugins could be installed with these methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gradle Dependencies: Declare the plugins as the build dependencies in ",(0,r.kt)("inlineCode",{parentName:"li"},"eventmesh-starter/build.gradle"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n\n   // Example: Load the RocketMQ plugin\n   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plugin directory: EventMesh loads the plugins in the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory based on ",(0,r.kt)("inlineCode",{parentName:"li"},"eventmesh.properties"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"installPlugin")," task of Gradle builds and moves the plugins into the ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"gradle installPlugin\n")),(0,r.kt)("h3",{id:"114-\u542f\u52a8runtime"},"1.1.4 \u542f\u52a8Runtime"),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_4",src:n(65107).Z,width:"1678",height:"254"})),(0,r.kt)("p",null,"View the output log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tail -f logs/eventmesh.out\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_3",src:n(44860).Z,width:"1672",height:"1272"})),(0,r.kt)("h2",{id:"2-remote-deployment"},"2 Remote deployment"),(0,r.kt)("h3",{id:"21-dependencies"},"2.1 Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n4g+ available disk to deploy eventmesh-store;\n")),(0,r.kt)("h3",{id:"22-download"},"2.2 Download"),(0,r.kt)("p",null,"Download and extract the executable binaries of the latest release from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),".For example, with the current latest version, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0.tar.gz"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"tar -xvzf apache-eventmesh-1.9.0-bin.tar.gz\ncd apache-eventmesh-1.9.0\n")),(0,r.kt)("h3",{id:"23-deploy"},"2.3 Deploy"),(0,r.kt)("p",null,"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime. The executable binaries contain all plugins in the bundle, thus there's no need to build them from source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"vim conf/eventmesh.properties\n")),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,r.kt)("p",null,'If you see "EventMeshTCPServer',"[port=10000]",' started...." , then the setup was successful.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_6",src:n(81826).Z,width:"1672",height:"264"})),(0,r.kt)("p",null,"View the output log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd /root/apache-eventmesh-1.9.0/logs\ntail -f eventmesh.out\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_7",src:n(36919).Z,width:"1676",height:"1636"})),(0,r.kt)("p",null,"You can stop the run with the following command\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/stop.sh\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"runtime_8",src:n(32467).Z,width:"1678",height:"1088"}),"\n",(0,r.kt)("img",{alt:"runtime_9",src:n(60524).Z,width:"1674",height:"442"})))}p.isMDXComponent=!0},30438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime-a7096bf933834ceba5f954ae4786776d.png"},27410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_2-2d37ab2cda6023401aa4b7382c6f3b89.png"},44860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_3-8a5827b2d7157aa20afb8372458a5b05.png"},65107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_4-e7e9591c27a876f295847f06523932e1.png"},81826:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_6-431e6ee0b583cd03c501dfe2073a053d.png"},36919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_7-3979069231d85d0d7defb5e1a15b414c.png"},32467:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_8-ab3a9083e89fd07f89181f1491f23433.png"},60524:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime_9-470954c61a58ce71a966e70e095142d1.png"}}]);