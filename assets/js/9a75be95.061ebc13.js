"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[8953],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(g,l(l({ref:t},o),{},{components:a})):n.createElement(g,l({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={},l="EventMesh Schema Registry (OpenSchema)",s={unversionedId:"design-document/schema-registry",id:"version-v1.4.0/design-document/schema-registry",title:"EventMesh Schema Registry (OpenSchema)",description:"Overview of Schema and Schema Registry",source:"@site/versioned_docs/version-v1.4.0/design-document/03-schema-registry.md",sourceDirName:"design-document",slug:"/design-document/schema-registry",permalink:"/docs/v1.4.0/design-document/schema-registry",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.4.0/design-document/03-schema-registry.md",tags:[],version:"v1.4.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Collect Trace with Zipkin",permalink:"/docs/v1.4.0/design-document/observability/zipkin"},next:{title:"Service Provider Interface",permalink:"/docs/v1.4.0/design-document/spi"}},p={},m=[{value:"Overview of Schema and Schema Registry",id:"overview-of-schema-and-schema-registry",level:2},{value:"Schema",id:"schema",level:3},{value:"Schema Registry",id:"schema-registry",level:3},{value:"Comparison of Schema Registry in Different Projects",id:"comparison-of-schema-registry-in-different-projects",level:3},{value:"Overview of OpenSchema",id:"overview-of-openschema",level:2},{value:"Requirements(Goals)",id:"requirementsgoals",level:2},{value:"Design Details",id:"design-details",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Process of Transferring Messages under Schema Registry",id:"process-of-transferring-messages-under-schema-registry",level:3},{value:"Current Progress",id:"current-progress",level:2},{value:"Status",id:"status",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Status Code and Exception Code",id:"status-code-and-exception-code",level:4},{value:"API Development Status",id:"api-development-status",level:4},{value:"Overall Project Structure",id:"overall-project-structure",level:4},{value:"References",id:"references",level:2}],o={toc:m};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh-schema-registry-openschema"},"EventMesh Schema Registry (OpenSchema)"),(0,r.kt)("h2",{id:"overview-of-schema-and-schema-registry"},"Overview of Schema and Schema Registry"),(0,r.kt)("h3",{id:"schema"},"Schema"),(0,r.kt)("p",null,"A Schema stands for the description of serialization instances(string/stream/file/...) and has two properties. First, it is also in the format of serialization type. Second, it defines what requirements such serialized instances should satisfy."),(0,r.kt)("p",null,"Besides describing a serialization instance, a Schema may also be used for validating whether an instance is legitimate. The reason is that it defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"(and other properties) of a serialized instance and inside keys. Taking JSON Schema for example, it could not only be referred when describing a JSON string, but also be used for validating whether a string satisfies properties defined in the schema",(0,r.kt)("a",{parentName:"p",href:"#References"},"[1]"),"."),(0,r.kt)("p",null,"Commonly, there are JSON Schema, Protobuf Schema, and Avro Schema."),(0,r.kt)("h3",{id:"schema-registry"},"Schema Registry"),(0,r.kt)("p",null,"Schema Registry is a server provides RESTful interfaces. It could receive and store Schemas from clients, as well as provide intrefaces for other clients to retrieve Schemas from it."),(0,r.kt)("p",null,"It could be applied to validation process and (de-)serialization process."),(0,r.kt)("h3",{id:"comparison-of-schema-registry-in-different-projects"},"Comparison of Schema Registry in Different Projects"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Project"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Application"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"EMQ",(0,r.kt)("a",{parentName:"td",href:"#References"},"[2]")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Mainly in (de-)serialization process. Use "Schema Registry" and "Rule Matching" to transfer a message from one serialization format to another.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Pulsar",(0,r.kt)("a",{parentName:"td",href:"#References"},"[3]")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Mainly in validation process. Use "Schema Registry" to validate a message.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Confluentinc",(0,r.kt)("a",{parentName:"td",href:"#References"},"[4]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"In both validation and (de-)serialization process.")))),(0,r.kt)("h2",{id:"overview-of-openschema"},"Overview of OpenSchema"),(0,r.kt)("p",null,"OpenSchema",(0,r.kt)("a",{parentName:"p",href:"#References"},"[5]")," proposes a specification for data schema when exchanging the message and event in more and more modern cloud-native applications. It designs a RESTful interface for storing and retrieving such as Avro, JSON Schema, and Protobuf3 schemas from three aspects(subject/schema/compatibility)."),(0,r.kt)("h2",{id:"requirementsgoals"},"Requirements(Goals)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Requirement ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,r.kt)("td",{parentName:"tr",align:null},"In transmission, no message needs to contain schema information which bring efficiency."),(0,r.kt)("td",{parentName:"tr",align:null},"Functionality")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,r.kt)("td",{parentName:"tr",align:null},"The message content from producer could be validated whether serialized correctly according to schema."),(0,r.kt)("td",{parentName:"tr",align:null},"Functionality")))),(0,r.kt)("h2",{id:"design-details"},"Design Details"),(0,r.kt)("h3",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OpenSchema",src:a(61616).Z,width:"1280",height:"720"})),(0,r.kt)("h3",{id:"process-of-transferring-messages-under-schema-registry"},"Process of Transferring Messages under Schema Registry"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Process",src:a(76048).Z,width:"5681",height:"2956"})),(0,r.kt)("p",null,"The highlevel process of messages transmission contains 10 steps as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'1: Consumer subscribes "TOPIC" messages from EventMesh.'),(0,r.kt)("li",{parentName:"ul"},"2: Producer registers a schema to EventMesh."),(0,r.kt)("li",{parentName:"ul"},"3: EventMesh registers a schema to Schema Registry."),(0,r.kt)("li",{parentName:"ul"},"4: Schema Registry returns the id of newly created schema; EventMesh caches such id and schema."),(0,r.kt)("li",{parentName:"ul"},"5: EventMesh returns the id of schema to Producer."),(0,r.kt)("li",{parentName:"ul"},"6: Producer patches the id in front of messages and send messages to EventMesh."),(0,r.kt)("li",{parentName:"ul"},"7: EventMesh validates the messages in the entry port and send it to EventStore; EventMesh retrieves messages from EventStore."),(0,r.kt)("li",{parentName:"ul"},"8: EventMesh unpatches the id and send it to Schema Registry(if such ",(0,r.kt)("inlineCode",{parentName:"li"},"<id, schema>")," does not exists in local cache)."),(0,r.kt)("li",{parentName:"ul"},"9: Schema Registry returns schema and EventMesh caches it."),(0,r.kt)("li",{parentName:"ul"},"10: EventMesh patches schema in front of messages and push it to consumer.")),(0,r.kt)("h2",{id:"current-progress"},"Current Progress"),(0,r.kt)("h3",{id:"status"},"Status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Current state"),": Developing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Discussion thread"),": ISSUE #339"),(0,r.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,r.kt)("p",null,"The proposal has two aspects."),(0,r.kt)("p",null,"First is a separated Open Schema Registry, which includes storage and compatibility check for schema.\nThis proposal is under developing."),(0,r.kt)("p",null,"Second is the integration of Open Schema in Eventmesh, which includes validation for schema. This proposal is to be developed."),(0,r.kt)("p",null,"As for the first proposal, some developing statuses are as follows."),(0,r.kt)("h4",{id:"status-code-and-exception-code"},"Status Code and Exception Code"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No."),(0,r.kt)("th",{parentName:"tr",align:"center"},"Status Code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Exception Code"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"401"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Unauthorized Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"404"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40401"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Schema Non- Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40402"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Subject Non-exist Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40403"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Version Non-exist Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"409"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40901"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Compatibility Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"422"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42201"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Schema Format Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42202"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Subject Format Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42203"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Version Format Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42204"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Compatibility Format Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"500"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50001"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Storage Service Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50002"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Timeout Exception"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")))),(0,r.kt)("h4",{id:"api-development-status"},"API Development Status"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No."),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"response"),(0,r.kt)("th",{parentName:"tr",align:null},"exception"),(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"test"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/schemas/ids/{string: id}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Schema.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40401\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/schemas/ids/{string: id}/subjects"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SubjectAndVersion.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40401\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List\\<String>")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/{string: subject}/versions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List\\<Integer>")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List\\<Integer>")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Subject.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions/(version: version)/schema"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SubjectWithSchema.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SchemaIdResponse.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40901\\42201\\50001\\50002"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Subject.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40901\\42202\\50001\\50002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions/(version: version)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\40901\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/compatibility/subjects/(string: subject)/versions/(version: version)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CompatibilityResultResponse.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\42201\\42203\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/compatibility/(string: subject)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Compatibility.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"/compatibility/(string: subject)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Compatibility.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40901\\42204\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h4",{id:"overall-project-structure"},"Overall Project Structure"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SchemaController.java"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaService.java")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.1.1~7.1.2 (API 1~2)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SubjectController.java"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"SubjectService.java")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.2.1~7.2.8 (API 3~10)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CompatibilityController.java"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"CompatibilityService.java")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.3.1~7.3.3 (API 11~13)")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"Check for Compatibility")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project Structure",src:a(28140).Z,width:"1006",height:"922"})),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"[1][schema validator (github.com)]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/search?q=schema+validator"},"https://github.com/search?q=schema+validator"),")"),(0,r.kt)("p",null,"[2][EMQ: Schema Registry]","(",(0,r.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/33e0655c642b"},"https://www.jianshu.com/p/33e0655c642b"),")"),(0,r.kt)("p",null,"[3][Pulsar: Schema Registry]","(",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw"},"https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw"),")"),(0,r.kt)("p",null,"[4][confluentinc/schema-registry]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/schema-registry"},"https://github.com/confluentinc/schema-registry"),")"),(0,r.kt)("p",null,"[5][openmessaging/openschema]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/openschema"},"https://github.com/openmessaging/openschema"),")"))}d.isMDXComponent=!0},61616:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema-registry-architecture-e376404fc6051685e1e14f6ea15e9bd8.png"},76048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema-registry-process-204fb6690bbd4f93f6b3571df13b114b.jpg"},28140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema-registry-project-structure-468c4e4f7a31528a51d8d289fb4afb50.png"}}]);