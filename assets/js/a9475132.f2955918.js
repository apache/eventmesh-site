"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[2073],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(k,a(a({ref:n},d),{},{components:t})):o.createElement(k,a({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={},a="DingTalk",c={unversionedId:"design-document/connect/dingtalk-connector",id:"version-v1.11.0/design-document/connect/dingtalk-connector",title:"DingTalk",description:"DingtalkSinkConnector: From EventMesh to DingTalk",source:"@site/versioned_docs/version-v1.11.0/design-document/03-connect/07-dingtalk-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/dingtalk-connector",permalink:"/docs/design-document/connect/dingtalk-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.11.0/design-document/03-connect/07-dingtalk-connector.md",tags:[],version:"v1.11.0",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Feishu/Lark",permalink:"/docs/design-document/connect/lark-connector"},next:{title:"WeCom",permalink:"/docs/design-document/connect/wecom-connector"}},l={},s=[{value:"DingtalkSinkConnector: From EventMesh to DingTalk",id:"dingtalksinkconnector-from-eventmesh-to-dingtalk",level:2},{value:"CloudEvent Attributes",id:"cloudevent-attributes",level:3}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dingtalk"},"DingTalk"),(0,r.kt)("h2",{id:"dingtalksinkconnector-from-eventmesh-to-dingtalk"},"DingtalkSinkConnector: From EventMesh to DingTalk"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"launch your EventMesh Runtime."),(0,r.kt)("li",{parentName:"ol"},"enable sinkConnector and check ",(0,r.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"."),(0,r.kt)("li",{parentName:"ol"},"send a message to EventMesh with the topic defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pubSubConfig:\n  # default port 10000\n  meshAddress: your.eventmesh.server:10000\n  subject: TEST-TOPIC-DINGTALK\n  idc: FT\n  env: PRD\n  group: dingTalkSink\n  appId: 5034\n  userName: dingTalkSinkUser\n  passWord: dingTalkPassWord\nsinkConnectorConfig:\n  connectorName: dingTalkSink\n  # Please refer to: https://open.dingtalk.com/document/orgapp/the-robot-sends-a-group-message\n  appKey: dingTalkAppKey\n  appSecret: dingTalkAppSecret\n  openConversationId: dingTalkOpenConversationId\n  robotCode: dingTalkRobotCode\n")),(0,r.kt)("h3",{id:"cloudevent-attributes"},"CloudEvent Attributes"),(0,r.kt)("p",null,"When using the eventmesh-connector-dingtalk sinking event, you need to add the corresponding extension filed in CloudEvent:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When key=",(0,r.kt)("inlineCode",{parentName:"li"},"dingtalktemplatetype"),", value=",(0,r.kt)("inlineCode",{parentName:"li"},"text"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"markdown"),", indicating the text type of the event."),(0,r.kt)("li",{parentName:"ul"},"When text type is markdown, you can add extension: key=",(0,r.kt)("inlineCode",{parentName:"li"},"dingtalkmarkdownmessagetitle"),", value indicates the title of the event.")))}u.isMDXComponent=!0}}]);