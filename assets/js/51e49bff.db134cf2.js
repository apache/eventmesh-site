"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5386],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>g});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},d=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=s(o),p=r,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return o?t.createElement(g,c(c({ref:n},d),{},{components:o})):t.createElement(g,c({ref:n},d))}));function g(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,c=new Array(i);c[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=o[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},87438:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var t=o(87462),r=(o(67294),o(3905));const i={},c="MongoDB",a={unversionedId:"design-document/connect/mongodb-connector",id:"version-v1.10.0/design-document/connect/mongodb-connector",title:"MongoDB",description:"MongoDBSinkConnector: From EventMesh to MongoDB",source:"@site/versioned_docs/version-v1.10.0/design-document/03-connect/04-mongodb-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/mongodb-connector",permalink:"/docs/v1.10.0/design-document/connect/mongodb-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/design-document/03-connect/04-mongodb-connector.md",tags:[],version:"v1.10.0",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/docs/v1.10.0/design-document/connect/redis-connector"},next:{title:"Knative",permalink:"/docs/v1.10.0/design-document/connect/knative-connector"}},l={},s=[{value:"MongoDBSinkConnector: From EventMesh to MongoDB",id:"mongodbsinkconnector-from-eventmesh-to-mongodb",level:2},{value:"MongoDBSourceConnector: From MongoDB to EventMesh",id:"mongodbsourceconnector-from-mongodb-to-eventmesh",level:2}],d={toc:s},m="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(m,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb"},"MongoDB"),(0,r.kt)("h2",{id:"mongodbsinkconnector-from-eventmesh-to-mongodb"},"MongoDBSinkConnector: From EventMesh to MongoDB"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"launch your MongoDB server and EventMesh Runtime."),(0,r.kt)("li",{parentName:"ol"},"enable sinkConnector and check ",(0,r.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"."),(0,r.kt)("li",{parentName:"ol"},"start your MongoDBConnectorServer, it will subscribe to the topic defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," of EventMesh Runtime and send data to ",(0,r.kt)("inlineCode",{parentName:"li"},"connectorConfig.collection")," in your MongoDB."),(0,r.kt)("li",{parentName:"ol"},"send a message to EventMesh with the topic defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," and then you will receive the message in MongoDB.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pubSubConfig:\n  # default port 10000\n  meshAddress: your.eventmesh.server:10000\n  subject: TopicTest\n  idc: FT\n  env: PRD\n  group: mongodbSink\n  appId: 5031\n  userName: mongodbSinkUser\n  passWord: mongodbPassWord\nconnectorConfig:\n  connectorName: mongodbSink\n  # REPLICA_SET or STANDALONE is supported\n  connectorType: STANDALONE\n  # mongodb://root:root@127.0.0.1:27018,127.0.0.1:27019\n  url: mongodb://127.0.0.1:27018\n  database: yourDB\n  collection: yourCol\n")),(0,r.kt)("h2",{id:"mongodbsourceconnector-from-mongodb-to-eventmesh"},"MongoDBSourceConnector: From MongoDB to EventMesh"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"launch your MongoDB server and EventMesh Runtime."),(0,r.kt)("li",{parentName:"ol"},"enable sourceConnector and check ",(0,r.kt)("inlineCode",{parentName:"li"},"source-config.yml")," (Basically the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),")"),(0,r.kt)("li",{parentName:"ol"},"start your ",(0,r.kt)("inlineCode",{parentName:"li"},"MongoDBSourceConnector"),", it will subscribe to the collection defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"connectorConfig.collection")," in your MongoDB and send data to ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," of EventMesh Runtime."),(0,r.kt)("li",{parentName:"ol"},"write a CloudEvent message to ",(0,r.kt)("inlineCode",{parentName:"li"},"yourCol")," at ",(0,r.kt)("inlineCode",{parentName:"li"},"yourDB")," in your MongoDB and then you will receive the message in EventMesh.")))}u.isMDXComponent=!0}}]);