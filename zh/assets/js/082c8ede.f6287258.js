"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,v=u["".concat(a,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={},o="\u5bfc\u5165 Eclipse \u5feb\u901f\u5165\u95e8\u8bf4\u660e",c={unversionedId:"instruction/eclipse",id:"version-v1.0.0/instruction/eclipse",title:"\u5bfc\u5165 Eclipse \u5feb\u901f\u5165\u95e8\u8bf4\u660e",description:"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Intellij IDEA \u8fdb\u884c\u5f00\u53d1\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u4f7f\u7528 Eclipse\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u6b65\u9aa4\u5bfc\u5165\u9879\u76ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0.0/instruction/00-eclipse.md",sourceDirName:"instruction",slug:"/instruction/eclipse",permalink:"/zh/docs/v1.0.0/instruction/eclipse",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.0.0/instruction/00-eclipse.md",tags:[],version:"v1.0.0",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TCP \u534f\u8bae\u6587\u6863",permalink:"/zh/docs/v1.0.0/design-document/runtime-protocol"},next:{title:"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8",permalink:"/zh/docs/v1.0.0/instruction/store"}},a={},s=[{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:3},{value:"\u4e0b\u8f7d\u6e90\u7801",id:"\u4e0b\u8f7d\u6e90\u7801",level:3},{value:"\u9879\u76ee\u7f16\u8bd1eclipse\u73af\u5883",id:"\u9879\u76ee\u7f16\u8bd1eclipse\u73af\u5883",level:3},{value:"\u914d\u7f6e\u4fee\u6539",id:"\u914d\u7f6e\u4fee\u6539",level:3},{value:"\u4fee\u6539eclipse.init\u914d\u7f6e\u6587\u4ef6,\u914d\u7f6elombok\u4ee51.18.8\u7248\u672c\u4e3a\u4f8b",id:"\u4fee\u6539eclipseinit\u914d\u7f6e\u6587\u4ef6\u914d\u7f6elombok\u4ee51188\u7248\u672c\u4e3a\u4f8b",level:3},{value:"202106\u7248\u672ceclipse,eclipse.init\u589e\u52a0\u914d\u7f6e\u53c2\u6570",id:"202106\u7248\u672ceclipseeclipseinit\u589e\u52a0\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u5bfc\u5165gradle",id:"\u5bfc\u5165gradle",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5bfc\u5165-eclipse-\u5feb\u901f\u5165\u95e8\u8bf4\u660e"},"\u5bfc\u5165 Eclipse \u5feb\u901f\u5165\u95e8\u8bf4\u660e"),(0,i.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Intellij IDEA")," \u8fdb\u884c\u5f00\u53d1\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Eclipse"),"\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u6b65\u9aa4\u5bfc\u5165\u9879\u76ee\u3002"),(0,i.kt)("h3",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"64\u4f4dJDK 1.8+;\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u8350 7.0.*\neclipse \u5df2\u5b89\u88c5gradle\u63d2\u4ef6\u6216\u8005eclipse\u81ea\u5e26gradle\u63d2\u4ef6\n")),(0,i.kt)("h3",{id:"\u4e0b\u8f7d\u6e90\u7801"},"\u4e0b\u8f7d\u6e90\u7801"),(0,i.kt)("p",null,"git init"),(0,i.kt)("p",null,"git clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh.git"},"https://github.com/apache/eventmesh.git")),(0,i.kt)("h3",{id:"\u9879\u76ee\u7f16\u8bd1eclipse\u73af\u5883"},"\u9879\u76ee\u7f16\u8bd1eclipse\u73af\u5883"),(0,i.kt)("p",null,"\u6253\u5f00\u547d\u4ee4\u884c\u7ec8\u7aef\uff0c\u8fd0\u884cgradlew cleanEclipse eclipse"),(0,i.kt)("h3",{id:"\u914d\u7f6e\u4fee\u6539"},"\u914d\u7f6e\u4fee\u6539"),(0,i.kt)("p",null,"\u4fee\u6539\u5de5\u7a0b\u540d\u79f0\u548csettings.gradle \u914d\u7f6e\u6587\u4ef6\u53c2\u6570rootProject.name \u53c2\u6570\u4e00\u81f4"),(0,i.kt)("h3",{id:"\u4fee\u6539eclipseinit\u914d\u7f6e\u6587\u4ef6\u914d\u7f6elombok\u4ee51188\u7248\u672c\u4e3a\u4f8b"},"\u4fee\u6539eclipse.init\u914d\u7f6e\u6587\u4ef6,\u914d\u7f6elombok\u4ee51.18.8\u7248\u672c\u4e3a\u4f8b"),(0,i.kt)("p",null,"-javaagent:lombok-1.18.8.jar\n-XBootclasspath/a:lombok-1.18.8.jar"),(0,i.kt)("h3",{id:"202106\u7248\u672ceclipseeclipseinit\u589e\u52a0\u914d\u7f6e\u53c2\u6570"},"202106\u7248\u672ceclipse,eclipse.init\u589e\u52a0\u914d\u7f6e\u53c2\u6570"),(0,i.kt)("p",null,"--illegal-access=permit"),(0,i.kt)("h3",{id:"\u5bfc\u5165gradle"},"\u5bfc\u5165gradle"),(0,i.kt)("p",null,"\u6253\u5f00eclipse,\u5bfc\u5165gradle\u9879\u76ee\u5230IDE\u91cc"))}u.isMDXComponent=!0}}]);