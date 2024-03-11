"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5543],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=c,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(k,a(a({ref:n},u),{},{components:t})):r.createElement(k,a({ref:n},u))}));function k(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:c,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),c=(t(67294),t(3905));const o={},a="Slack",i={unversionedId:"design-document/connect/slack-connector",id:"design-document/connect/slack-connector",title:"Slack",description:"SlackSinkConnector\uff1a\u4ece EventMesh \u5230 Slack",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design-document/03-connect/09-slack-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/slack-connector",permalink:"/zh/docs/next/design-document/connect/slack-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/09-slack-connector.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f01\u4e1a\u5fae\u4fe1",permalink:"/zh/docs/next/design-document/connect/wecom-connector"},next:{title:"File",permalink:"/zh/docs/next/design-document/connect/file-connector"}},s={},l=[{value:"SlackSinkConnector\uff1a\u4ece EventMesh \u5230 Slack",id:"slacksinkconnector\u4ece-eventmesh-\u5230-slack",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,c.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"slack"},"Slack"),(0,c.kt)("h2",{id:"slacksinkconnector\u4ece-eventmesh-\u5230-slack"},"SlackSinkConnector\uff1a\u4ece EventMesh \u5230 Slack"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 EventMesh Runtime\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u542f\u7528 sinkConnector \u5e76\u68c0\u67e5 ",(0,c.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5728 ",(0,c.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," \u4e2d\u6307\u5b9a\u7684 Topic\uff0c\u5411 EventMesh \u53d1\u9001\u6d88\u606f\u3002")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"pubSubConfig:\n  # \u9ed8\u8ba4\u7aef\u53e3 10000\n  meshAddress: your.eventmesh.server:10000\n  subject: TEST-TOPIC-SLACK\n  idc: FT\n  env: PRD\n  group: slackSink\n  appId: 5034\n  userName: slackSinkUser\n  passWord: slackPassWord\nsinkConnectorConfig:\n  connectorName: slackSink\n  # \u4ee5\u4e0b\u914d\u7f6e\u8bf7\u53c2\u8003\u6587\u6863\uff1ahttps://api.slack.com/messaging/sending\n  appToken: slackAppToken\n  channelId: slackChannelId\n")))}d.isMDXComponent=!0}}]);