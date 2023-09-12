"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},l="Import EventMesh into eclipse",a={unversionedId:"instruction/eclipse",id:"version-v1.6.0/instruction/eclipse",title:"Import EventMesh into eclipse",description:"We recommend using Intellij IDEA for development, if you wish to use Eclipse, you can refer to the following steps to import the project.",source:"@site/versioned_docs/version-v1.6.0/instruction/00-eclipse.md",sourceDirName:"instruction",slug:"/instruction/eclipse",permalink:"/docs/v1.6.0/instruction/eclipse",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.6.0/instruction/00-eclipse.md",tags:[],version:"v1.6.0",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Stream",permalink:"/docs/v1.6.0/design-document/stream"},next:{title:"EventMesh Store",permalink:"/docs/v1.6.0/instruction/store"}},c={},p=[{value:"1. Dependencies",id:"1-dependencies",level:3},{value:"2. Download source code",id:"2-download-source-code",level:3},{value:"3. Project compile eclipse environment",id:"3-project-compile-eclipse-environment",level:3},{value:"4. Configuration changes",id:"4-configuration-changes",level:3},{value:"5. Modify  <code>eclipse.init</code> configuration file, configure lombok to 1.18.8 version for example",id:"5-modify--eclipseinit-configuration-file-configure-lombok-to-1188-version-for-example",level:3},{value:"6. 202106 version, <code>eclipse.init</code> add configuration parameters",id:"6-202106-version-eclipseinit-add-configuration-parameters",level:3},{value:"7. Import projetc",id:"7-import-projetc",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-eventmesh-into-eclipse"},"Import EventMesh into eclipse"),(0,o.kt)("p",null,"We recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"Intellij IDEA")," for development, if you wish to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Eclipse"),", you can refer to the following steps to import the project."),(0,o.kt)("h3",{id:"1-dependencies"},"1. Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"64-bit JDK 1.8+.\nGradle is at least 7.0, 7.0.* recommended;\neclipse installed gradle plugin or eclipse comes with gradle plugin;\n")),(0,o.kt)("h3",{id:"2-download-source-code"},"2. Download source code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git@github.com:apache/eventmesh.git\n")),(0,o.kt)("h3",{id:"3-project-compile-eclipse-environment"},"3. Project compile eclipse environment"),(0,o.kt)("p",null,"Open a command line terminal and run ",(0,o.kt)("inlineCode",{parentName:"p"},"gradlew cleanEclipse eclipse")),(0,o.kt)("h3",{id:"4-configuration-changes"},"4. Configuration changes"),(0,o.kt)("p",null,"Modify the project name to match the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.gradle")," configuration file parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"rootProject.name"),"."),(0,o.kt)("h3",{id:"5-modify--eclipseinit-configuration-file-configure-lombok-to-1188-version-for-example"},"5. Modify  ",(0,o.kt)("inlineCode",{parentName:"h3"},"eclipse.init")," configuration file, configure lombok to 1.18.8 version for example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-javaagent:lombok-1.18.8.jar\n-XBootclasspath/a:lombok-1.18.8.jar\n")),(0,o.kt)("h3",{id:"6-202106-version-eclipseinit-add-configuration-parameters"},"6. 202106 version, ",(0,o.kt)("inlineCode",{parentName:"h3"},"eclipse.init")," add configuration parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--illegal-access=permit\n")),(0,o.kt)("h3",{id:"7-import-projetc"},"7. Import projetc"),(0,o.kt)("p",null,"Open eclipse, import gradle project to IDE."))}d.isMDXComponent=!0}}]);