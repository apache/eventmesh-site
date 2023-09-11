"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[952],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=h(e,["components","mdxType","originalType","parentName"]),l=p(a),c=s,k=l["".concat(o,".").concat(c)]||l[c]||m[c]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=c;var h={};for(var o in t)hasOwnProperty.call(t,o)&&(h[o]=t[o]);h.originalType=e,h[l]="string"==typeof e?e:s,i[1]=h;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>h,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const r={title:"v1.7.0 Release",date:new Date("2022-11-15T16:23:00.000Z"),hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xwm1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619"},i=void 0,h={unversionedId:"release-notes/v1.7.0",id:"release-notes/v1.7.0",title:"v1.7.0 Release",description:"Feature",source:"@site/events/release-notes/v1.7.0.md",sourceDirName:"release-notes",slug:"/release-notes/v1.7.0",permalink:"/zh/events/release-notes/v1.7.0",draft:!1,tags:[],version:"current",frontMatter:{title:"v1.7.0 Release",date:"2022-11-15T16:23:00.000Z",hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xwm1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619"},sidebar:"tutorialSidebar",previous:{title:"v1.8.0 Release",permalink:"/zh/events/release-notes/v1.8.0"},next:{title:"v1.6.0 Release",permalink:"/zh/events/release-notes/v1.6.0"}},o={},p=[{value:"Feature",id:"feature",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bug",id:"bug",level:2},{value:"Document and code style improvement",id:"document-and-code-style-improvement",level:2}],u={toc:p};function l(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"feature"},"Feature"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1553"},"Feature #1553")," Support rabbitmq connector"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1261"},"Feature #1261")," Support Pinpoint tracing plugin feature"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1248"},"Feature #1248")," Adds EventMesh Workflow Protocol"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1247"},"Feature #1247")," Adds EventMesh Catalog Protocol"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1244"},"Feature #1244")," Java SDK adds nacos naming selecotor"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1092"},"Feature #1092")," Java SDK adds EventMesh Catalog Client"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1091"},"Feature #1091")," Java SDK adds EventMesh Workflow Client"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1090"},"Feature #1090")," Support for managing EventMesh events using AsyncAPI"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1040"},"Feature #1040")," Support Pulsar connector plugin and Pulsar as event store"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/973"},"Feature #973")," zookeeper registry"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/815"},"Feature #815")," Support Rust"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/790"},"Feature #790")," Support Knative as Eventing Infra"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/389"},"Feature #389")," Support Redis"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/270"},"Feature #270")," Support another optional storage engine Pravega")),(0,s.kt)("h2",{id:"enhancement"},"Enhancement"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2167"},"Enhancement #2167")," Reliance on default encoding"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2169"},"Enhancement #2169")," Method checks the size of a collection against zero rather than using isEmpty() ","[WebhookTopicConfig]"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2147"},"Enhancement #2147")," add workflow run scripts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2069"},"Enhancement #2069")," Support Go SDK Http EventMesh Message Protocol"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2062"},"Enhancement #2062")," Possible null pointer dereference due to return value of called method ","[SubScribeTask]"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2056"},"Enhancement #2056")," Use try-with-resources to manage resources ","[RejectClientByIpPortHandler]"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2017"},"Enhancement #2017")," Support Go SDK http protocol RR command"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2016"},"Enhancement #2016")," Possible null pointer dereference due to return value of called method ","[http SubController]"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2008"},"Enhancement #2008")," Support GO SDK Http protocol un-subscription"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2004"},"Enhancement #2004")," add workflow create command"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2002"},"Enhancement #2002")," Solve the project compile error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1999"},"Enhancement #1999")," Refine rabbitmq connector unit test"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1993"},"Enhancement #1993")," Reliance on default encoding ","[WebhookFileListener]"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1983"},"Enhancement #1983")," Extract GO SDK protocol constant"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1934"},"Enhancement #1934")," upgrade workflow go.mod"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1933"},"Enhancement #1933")," optimize workflow-dal logic"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1932"},"Enhancement #1932")," optimize workflow-task logic"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1931"},"Enhancement #1931")," optimize workflow-jq logic"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1929"},"Enhancement #1929")," optimize workflow-catalog logic"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1928"},"Enhancement #1928")," upgrade workflow proto"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1927"},"Enhancement #1927")," add workflow examples demo"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1822"},"Enhancement #1822")," Support Go SDK producer message random sequence"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1743"},"Enhancement #1743")," Support Go SDK HTTP Client Load Balance"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1682"},"Enhancement #1682")," Java SDK add http connection pool"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1670"},"Enhancement #1670")," Add workflow mysql schema files"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1648"},"Enhancement #1648")," Modify worfklow scheduler config"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1636"},"Enhancement #1636")," Improve the performance of publish event in connector-pulsar"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1628"},"Enhancement #1628")," SSLContextFactory some config should configure in EventMeshHTTPConfiguration")),(0,s.kt)("h2",{id:"bug"},"Bug"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2163"},"Bug #2163")," This method needlessly uses a String literal as a Charset encoding ","[SendSyncMessageProcessor]"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2148"},"Bug #2148")," The webhook test occurs with an NPE"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1818"},"Bug #1818")," Fix IOException in SSLContextFactory"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1656"},"Bug #1656")," The extension field of CloudEvent does not exist."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1654"},"Bug #1654")," Occur NullPointerException when broadcastEventListener consumes message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1627"},"Bug #1627")," ConsumerGroup subscribes multiple topics, only first topic can invoke url"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1367"},"Bug #1367")," Cannot find the webhook protocol adaptor"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1350"},"Bug #1350")," Fix WebHookProcessorTest test error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1347"},"Bug #1347")," Pravega connector writer doesn't close when unsubscribing"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1279"},"Bug #1279")," gradle.properties incorrect under the eventmesh-connector-pulsar"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1238"},"Bug #1238")," Can't start the pulsar connector"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1208"},"Bug #1208")," Use zipkin hippen NullPointerException"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1021"},"Bug #1021")," Span is null when eventMeshServerTraceEnable is false"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1022"},"Bug #1022")," Two NPE problems with Tcp Protocol Resolver"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1035"},"Bug #1035")," Tcp UpStreamMsgContext retry infinite loop"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1036"},"Bug #1036")," The bug caused by the logical sequence of tcp closeSession"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1038"},"Bug #1038")," The result of validate target url method is opposite in http protocol"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1052"},"Bug #1052")," Only the first instance of the same consumer group receives the message in http protocol"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1056"},"Bug #1056")," Fix StringIndexOutOfBoundsException"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1059"},"Bug #1059")," NullPointException of Http Request"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1064"},"Bug #1064")," NullPointException Of ClientManageControllerTest"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1074"},"Bug #1074")," Fix PrometheusConfigurationTest running test fail")),(0,s.kt)("h2",{id:"document-and-code-style-improvement"},"Document and code style improvement"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2074"},"Document #2074")," Update Pravega connector doc"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/2066"},"Document #2066")," Optimize http-demo zh document"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1520"},"Document #1520")," Update the eventmesh keywords."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1500"},"Document #1500")," Fix the readme file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1496"},"Document #1496")," error words in 03-demo.md"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1368"},"Document #1368")," Knative Connector: Move Documentation to Design Directory"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1271"},"Document #1271")," Translation of documents ","[webhook.md]"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1246"},"Document #1246")," Pravega connector doc"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/1213"},"Document #1213")," Support Knative as Eventing Infra: Documentation (Publish/Subscribe)")))}l.isMDXComponent=!0}}]);