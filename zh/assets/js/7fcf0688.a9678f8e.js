"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[9036],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),s=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,d=p["".concat(a,".").concat(f)]||p[f]||m[f]||i;return t?o.createElement(d,c(c({ref:n},u),{},{components:t})):o.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={},c="File",l={unversionedId:"design-document/connect/file-connector",id:"design-document/connect/file-connector",title:"File",description:"FileSinkConnector\uff1a\u4ece EventMesh \u5199\u5165\u6587\u4ef6 File",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design-document/03-connect/10-file-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/file-connector",permalink:"/zh/docs/next/design-document/connect/file-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/10-file-connector.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slack",permalink:"/zh/docs/next/design-document/connect/slack-connector"},next:{title:"Kafka",permalink:"/zh/docs/next/design-document/connect/kafka-connector"}},a={},s=[{value:"FileSinkConnector\uff1a\u4ece EventMesh \u5199\u5165\u6587\u4ef6 File",id:"filesinkconnector\u4ece-eventmesh-\u5199\u5165\u6587\u4ef6-file",level:2},{value:"FileSourceConnector\uff1a\u4ece File \u6587\u4ef6\u8bfb\u53d6 \u5230 EventMesh",id:"filesourceconnector\u4ece-file-\u6587\u4ef6\u8bfb\u53d6-\u5230-eventmesh",level:2}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file"},"File"),(0,r.kt)("h2",{id:"filesinkconnector\u4ece-eventmesh-\u5199\u5165\u6587\u4ef6-file"},"FileSinkConnector\uff1a\u4ece EventMesh \u5199\u5165\u6587\u4ef6 File"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 EventMesh Runtime\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u7528 sinkConnector \u5e76\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 FileConnectServer\uff0c\u5b83\u5c06\u8ba2\u9605\u5230 EventMesh Runtime \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," \u4e2d\u5b9a\u4e49\u7684\u4e3b\u9898\uff0c\u5e76\u5c06\u6570\u636e\u5199\u5165\u5230 \u8def\u5f84\u4f4d\u4e8e\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"connectorConfig.topic"),"/\u5e74/\u6708/\u65e5  \uff1b\u540d\u4e3a\uff1a \u3010 ",(0,r.kt)("inlineCode",{parentName:"li"},"connectorConfig.topic")," + \u5f53\u524d\u65f6\u95f4\u5c0f\u65f6\u4f4d\uff0824\u5c0f\u65f6\u5236\uff09 + \u65f6\u95f4\u6233 \u3011\u7684\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," \u4e2d\u6307\u5b9a\u7684 Topic\uff0c\u5411 EventMesh \u53d1\u9001\u6d88\u606f\uff0c\u7136\u540e\u4f60\u5c06\u5728 \u6587\u4ef6 \u4e2d\u6301\u4e45\u5316\u8be5\u6d88\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u516c\u5171\u914d\u7f6e\npubSubConfig:\n    meshAddress: 127.0.0.1:10000\n    subject: TopicTest\n    idc: FT\n    env: PRD\n    group: fileSink\n    appId: 5031\n    userName: fileSinkUser\n    passWord: filePassWord\nconnectorConfig:\n    connectorName: fileSink\n    #\u4e3b\u9898 \u4e00\u822c\u548cpubSubConfig.subject\u914d\u7f6e\u6210\u4e00\u6837\u7684\uff0c\u751f\u6210\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u4e2d\u542b\u6709\u6b64\u5c5e\u6027\u914d\u7f6e\u503c\n    topic: TopicTest\n")),(0,r.kt)("h2",{id:"filesourceconnector\u4ece-file-\u6587\u4ef6\u8bfb\u53d6-\u5230-eventmesh"},"FileSourceConnector\uff1a\u4ece File \u6587\u4ef6\u8bfb\u53d6 \u5230 EventMesh"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 EventMesh Runtime\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u7528 sourceConnector \u5e76\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"source-config.yml"),"\u3002 "),(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 FileConnectServer\uff0c\u5b83\u5c06\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"connectorConfig.filePath "),"\u4e2d\u8bfb\u53d6\u7684\u6570\u636e\u53d1\u9001\u5230 EventMesh Runtime \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject"),"\u3002 "),(0,r.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u5185\u5bb9\u7684 \u8ffd\u52a0\u64cd\u4f5c \u4f1a\u88ab\u8bc6\u522b\uff0c\u7136\u540e\u4f60\u5c06\u5728 EventMesh \u4e2d\u63a5\u6536\u5230\u8be5\u6d88\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u516c\u5171\u914d\u7f6e\npubSubConfig:\n    meshAddress: 127.0.0.1:10000\n    subject: TopicTest\n    idc: FT\n    env: PRD\n    group: fileSource\n    appId: 5032\n    userName: fileSourceUser\n    passWord: filePassWord\nconnectorConfig:\n    connectorName: fileSource\n    # \u6e90\u6587\u4ef6\u5730\u5740\n    filePath: userFilePath\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7279\u6b8a\u8bf4\u660e\uff1a\u5982\u679c\u6ca1\u80fd\u83b7\u53d6\u6e90\u6587\u4ef6\u6216\u6c47\u5165\u6587\u4ef6\uff0c\u5219\u4f7f\u7528 System.in \u548c System.out\u3002")))}m.isMDXComponent=!0}}]);