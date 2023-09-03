"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[3364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},i="EventMesh Runtime Protocol",s={unversionedId:"design-document/event-handling-and-integration/runtime-protocol",id:"version-v1.1.1/design-document/event-handling-and-integration/runtime-protocol",title:"EventMesh Runtime Protocol",description:"TCP Protocol",source:"@site/versioned_docs/version-v1.1.1/design-document/01-event-handling-and-integration/01-runtime-protocol.md",sourceDirName:"design-document/01-event-handling-and-integration",slug:"/design-document/event-handling-and-integration/runtime-protocol",permalink:"/docs/v1.1.1/design-document/event-handling-and-integration/runtime-protocol",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.1.1/design-document/01-event-handling-and-integration/01-runtime-protocol.md",tags:[],version:"v1.1.1",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gRPC Protocol",permalink:"/docs/v1.1.1/sdk-java/grpc"},next:{title:"HTTPS",permalink:"/docs/v1.1.1/design-document/event-handling-and-integration/https"}},o={},d=[{value:"TCP Protocol",id:"tcp-protocol",level:2},{value:"Protocol Format",id:"protocol-format",level:3},{value:"Message Object in the Business Logic Layer",id:"message-object-in-the-business-logic-layer",level:3},{value:"Message Composition",id:"message-composition",level:4},{value:"Specification",id:"specification",level:4},{value:"Example of Client-Server Interaction",id:"example-of-client-server-interaction",level:3},{value:"Client-Initiated Interaction",id:"client-initiated-interaction",level:3},{value:"Server-Initiated Interaction",id:"server-initiated-interaction",level:3},{value:"Type of Message",id:"type-of-message",level:3},{value:"Sync Message",id:"sync-message",level:4},{value:"Async Message",id:"async-message",level:4},{value:"Boardcast Message",id:"boardcast-message",level:4},{value:"HTTP Protocol",id:"http-protocol",level:2},{value:"Protocol Format",id:"protocol-format-1",level:3},{value:"HTTP Post Request",id:"http-post-request",level:3},{value:"Heartbeat Message",id:"heartbeat-message",level:4},{value:"Request Header",id:"request-header",level:5},{value:"Request Body",id:"request-body",level:5},{value:"Subscribe Message",id:"subscribe-message",level:4},{value:"Request Header",id:"request-header-1",level:5},{value:"Request Body",id:"request-body-1",level:5},{value:"Unsubscribe Message",id:"unsubscribe-message",level:4},{value:"Request Header",id:"request-header-2",level:5},{value:"Request Body",id:"request-body-2",level:5},{value:"Send Async Message",id:"send-async-message",level:4},{value:"Request Header",id:"request-header-3",level:5},{value:"Request Body",id:"request-body-3",level:5},{value:"Client-Initiated Interaction",id:"client-initiated-interaction-1",level:3},{value:"Server-Initiated Interaction",id:"server-initiated-interaction-1",level:3},{value:"gRPC Protocol",id:"grpc-protocol",level:2},{value:"Protobuf",id:"protobuf",level:3},{value:"Data Model",id:"data-model",level:3},{value:"Message",id:"message",level:4},{value:"Subscription",id:"subscription",level:4},{value:"Heartbeat",id:"heartbeat",level:4},{value:"Service Definition",id:"service-definition",level:3},{value:"Event Publisher Service",id:"event-publisher-service",level:4},{value:"Event Consumer Service",id:"event-consumer-service",level:4},{value:"Client Hearthbeat Service",id:"client-hearthbeat-service",level:4}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh-runtime-protocol"},"EventMesh Runtime Protocol"),(0,r.kt)("h2",{id:"tcp-protocol"},"TCP Protocol"),(0,r.kt)("h3",{id:"protocol-format"},"Protocol Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Magic Code"),(0,r.kt)("td",{parentName:"tr",align:null},"9 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"EventMesh"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Protocol Version"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"0000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message Size"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The total length of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Header Size"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The length of the message header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message Body"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the message")))),(0,r.kt)("h3",{id:"message-object-in-the-business-logic-layer"},"Message Object in the Business Logic Layer"),(0,r.kt)("h4",{id:"message-composition"},"Message Composition"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Package")," class in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/r/eventmesh-common/src/main/java/org/apache/eventmesh/common/protocol/tcp/Package.java"},(0,r.kt)("inlineCode",{parentName:"a"},"Package.java")," file")," is the TCP message object used in business logic layer. The class contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Package {\n   private Header header;\n   private Object body;\n}\n\npublic class Header {\n   private Command cmd;\n   private int code;\n   private String msg;\n   private String seq;\n}\n")),(0,r.kt)("h4",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Message Header (the ",(0,r.kt)("inlineCode",{parentName:"li"},"header")," field): The ",(0,r.kt)("inlineCode",{parentName:"li"},"cmd")," field in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Header")," class specifies the different types of messages."),(0,r.kt)("li",{parentName:"ul"},"Message Body (the ",(0,r.kt)("inlineCode",{parentName:"li"},"body")," field): The type of the message body should be defined based on ",(0,r.kt)("inlineCode",{parentName:"li"},"cmd")," field in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Header")," class.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Type of Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_REQUEST, HEARTBEAT_RESPONSE, HELLO_RESPONSE, CLIENT_GOODBYE_REQUEST, CLIENT_GOODBYE_RESPONSE, SERVER_GOODBYE_REQUEST, SERVER_GOODBYE_RESPONSE, LISTEN_REQUEST, LISTEN_RESPONSE, UNSUBSCRIBE_REQUEST, SUBSCRIBE_RESPONSE, UNSUBSCRIBE_RESPONSE, ASYNC_MESSAGE_TO_SERVER_ACK, BROADCAST_MESSAGE_TO_SERVER_ACK"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HELLO_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"UserAgent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"Subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_SERVER, REQUEST_TO_CLIENT, RESPONSE_TO_SERVER, RESPONSE_TO_CLIENT, ASYNC_MESSAGE_TO_SERVER, ASYNC_MESSAGE_TO_CLIENT, BROADCAST_MESSAGE_TO_SERVER, BROADCAST_MESSAGE_TO_CLIENT, ASYNC_MESSAGE_TO_CLIENT_ACK, BROADCAST_MESSAGE_TO_CLIENT_ACK, RESPONSE_TO_CLIENT_ACK, REQUEST_TO_CLIENT_ACK"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenMessage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REDIRECT_TO_CLIENT"),(0,r.kt)("td",{parentName:"tr",align:null},"RedirectInfo")))),(0,r.kt)("h3",{id:"example-of-client-server-interaction"},"Example of Client-Server Interaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public enum Command {\n    // Heartbeat\n    HEARTBEAT_REQUEST(0),                              // Client send heartbeat request to server\n    HEARTBEAT_RESPONSE(1),                             // Server reply heartbeat response to client\n\n    // Hello\n    HELLO_REQUEST(2),                                  // Client send connect request to server\n    HELLO_RESPONSE(3),                                 // Server reply connect response to client\n\n    // Disconncet\n    CLIENT_GOODBYE_REQUEST(4),                         // Client send disconnect request to server\n    CLIENT_GOODBYE_RESPONSE(5),                        // Server reply disconnect response to client\n    SERVER_GOODBYE_REQUEST(6),                         // Server send disconncet request to client\n    SERVER_GOODBYE_RESPONSE(7),                        // Client reply disconnect response to server\n\n    // Subscribe and UnSubscribe\n    SUBSCRIBE_REQUEST(8),                              // Slient send subscribe request to server\n    SUBSCRIBE_RESPONSE(9),                             // Server reply subscribe response to client\n    UNSUBSCRIBE_REQUEST(10),                           // Client send unsubscribe request to server\n    UNSUBSCRIBE_RESPONSE(11),                          // Server reply unsubscribe response to client\n\n    // Listen\n    LISTEN_REQUEST(12),                                // Client send listen request to server\n    LISTEN_RESPONSE(13),                               // Server reply listen response to client\n\n    // Send sync message\n    REQUEST_TO_SERVER(14),                             // Client (Producer) send sync message to server\n    REQUEST_TO_CLIENT(15),                             // Server push sync message to client(Consumer)\n    REQUEST_TO_CLIENT_ACK(16),                         // Client (Consumer) send ack of sync message to server\n    RESPONSE_TO_SERVER(17),                            // Client (Consumer) send reply message to server\n    RESPONSE_TO_CLIENT(18),                            // Server push reply message to client(Producer)\n    RESPONSE_TO_CLIENT_ACK(19),                        // Client (Producer) send acknowledgement of reply message to server\n\n    // Send async message\n    ASYNC_MESSAGE_TO_SERVER(20),                       // Client send async msg to server\n    ASYNC_MESSAGE_TO_SERVER_ACK(21),                   // Server reply ack of async msg to client\n    ASYNC_MESSAGE_TO_CLIENT(22),                       // Server push async msg to client\n    ASYNC_MESSAGE_TO_CLIENT_ACK(23),                   // Client reply ack of async msg to server\n\n    // Send broadcast message\n    BROADCAST_MESSAGE_TO_SERVER(24),                   // Client send broadcast msg to server\n    BROADCAST_MESSAGE_TO_SERVER_ACK(25),               // Server reply ack of broadcast msg to client\n    BROADCAST_MESSAGE_TO_CLIENT(26),                   // Server push broadcast msg to client\n    BROADCAST_MESSAGE_TO_CLIENT_ACK(27),               // Client reply ack of broadcast msg to server\n\n    // Redirect\n    REDIRECT_TO_CLIENT(30),                            // Server send redirect instruction to client\n}\n")),(0,r.kt)("h3",{id:"client-initiated-interaction"},"Client-Initiated Interaction"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scene"),(0,r.kt)("th",{parentName:"tr",align:null},"Client Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Server Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hello"),(0,r.kt)("td",{parentName:"tr",align:null},"HELLO_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"HELLO_RESPONSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Heartbeat"),(0,r.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_RESPONSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_RESPONSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unsubscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE_RESPONSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Listen"),(0,r.kt)("td",{parentName:"tr",align:null},"LISTEN_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"LISTEN_RESPONSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Send sync message"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_SERVER"),(0,r.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Send the response of sync message"),(0,r.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_SERVER"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Send async message"),(0,r.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_SERVER"),(0,r.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_SERVER_ACK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Send broadcast message"),(0,r.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_SERVER"),(0,r.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_SERVER_ACK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client start to disconnect"),(0,r.kt)("td",{parentName:"tr",align:null},"CLIENT_GOODBYE_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"CLIENT_GOODBYE_RESPONSE")))),(0,r.kt)("h3",{id:"server-initiated-interaction"},"Server-Initiated Interaction"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scene"),(0,r.kt)("th",{parentName:"tr",align:null},"Server Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Client Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Push sync message to client"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_CLIENT"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_CLIENT_ACK"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Push the response message of sync message to client"),(0,r.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT"),(0,r.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT_ACK"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Push async message to client"),(0,r.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_CLIENT"),(0,r.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_CLIENT_ACK"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Push broadcast message to client"),(0,r.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_CLIENT"),(0,r.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_CLIENT_ACK"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Server start to disconnect"),(0,r.kt)("td",{parentName:"tr",align:null},"SERVER_GOODBYE_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Server send redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"REDIRECT_TO_CLIENT"),(0,r.kt)("td",{parentName:"tr",align:null},"--"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"type-of-message"},"Type of Message"),(0,r.kt)("h4",{id:"sync-message"},"Sync Message"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sync Message",src:n(37227).Z,width:"4644",height:"804"})),(0,r.kt)("h4",{id:"async-message"},"Async Message"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Async Message",src:n(44601).Z,width:"4968",height:"804"})),(0,r.kt)("h4",{id:"boardcast-message"},"Boardcast Message"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boardcast Message",src:n(23172).Z,width:"5080",height:"804"})),(0,r.kt)("h2",{id:"http-protocol"},"HTTP Protocol"),(0,r.kt)("h3",{id:"protocol-format-1"},"Protocol Format"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EventMeshMessage")," class in the  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/r/eventmesh-common/src/main/java/org/apache/eventmesh/common/EventMeshMessage.java"},(0,r.kt)("inlineCode",{parentName:"a"},"EventMeshMessage.java")," file")," is the HTTP message definition of EventMesh Runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class EventMeshMessage {\n    private String bizSeqNo;\n\n    private String uniqueId;\n\n    private String topic;\n\n    private String content;\n\n    private Map<String, String> prop;\n\n    private final long createTime = System.currentTimeMillis();\n}\n")),(0,r.kt)("h3",{id:"http-post-request"},"HTTP Post Request"),(0,r.kt)("h4",{id:"heartbeat-message"},"Heartbeat Message"),(0,r.kt)("h5",{id:"request-header"},"Request Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Env"),(0,r.kt)("td",{parentName:"tr",align:null},"Enviroment of Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"Region of Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Idc"),(0,r.kt)("td",{parentName:"tr",align:null},"IDC of Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dcn"),(0,r.kt)("td",{parentName:"tr",align:null},"DCN of Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sys"),(0,r.kt)("td",{parentName:"tr",align:null},"Subsystem ID of Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pid"),(0,r.kt)("td",{parentName:"tr",align:null},"Client Process ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ip"),(0,r.kt)("td",{parentName:"tr",align:null},"Client Ip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Client username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Passwd"),(0,r.kt)("td",{parentName:"tr",align:null},"Client password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Version"),(0,r.kt)("td",{parentName:"tr",align:null},"Protocol version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Language"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop language")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code"),(0,r.kt)("td",{parentName:"tr",align:null},"Request Code")))),(0,r.kt)("h5",{id:"request-body"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ClientType.PUB")," for Producer, ",(0,r.kt)("inlineCode",{parentName:"td"},"ClientType.SUB")," for Consumer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"heartbeatEntities")),(0,r.kt)("td",{parentName:"tr",align:null},"Topic, URL, etc.")))),(0,r.kt)("h4",{id:"subscribe-message"},"Subscribe Message"),(0,r.kt)("h5",{id:"request-header-1"},"Request Header"),(0,r.kt)("p",null,"The request header of the Subscribe message is identical to the request header of the Heartbeat message."),(0,r.kt)("h5",{id:"request-body-1"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"topic")),(0,r.kt)("td",{parentName:"tr",align:null},"The topic that the client requested to subscribe to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"The callback URL of the client")))),(0,r.kt)("h4",{id:"unsubscribe-message"},"Unsubscribe Message"),(0,r.kt)("h5",{id:"request-header-2"},"Request Header"),(0,r.kt)("p",null,"The request header of the Unsubscribe message is identical to the request header of the Heartbeat message."),(0,r.kt)("h5",{id:"request-body-2"},"Request Body"),(0,r.kt)("p",null,"The request body of the Unsubscribe message is identical to the request body of the Subscribe message."),(0,r.kt)("h4",{id:"send-async-message"},"Send Async Message"),(0,r.kt)("h5",{id:"request-header-3"},"Request Header"),(0,r.kt)("p",null,"The request header of the Send Async message is identical to the request header of the Heartbeat message."),(0,r.kt)("h5",{id:"request-body-3"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"topic")),(0,r.kt)("td",{parentName:"tr",align:null},"Topic of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ttl")),(0,r.kt)("td",{parentName:"tr",align:null},"The time-to-live of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bizSeqNo")),(0,r.kt)("td",{parentName:"tr",align:null},"The biz sequence number of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uniqueId")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique ID of the message")))),(0,r.kt)("h3",{id:"client-initiated-interaction-1"},"Client-Initiated Interaction"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scene"),(0,r.kt)("th",{parentName:"tr",align:null},"Client Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Server Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Heartbeat"),(0,r.kt)("td",{parentName:"tr",align:null},"HEARTBEAT(203)"),(0,r.kt)("td",{parentName:"tr",align:null},"SUCCESS(0) or EVENTMESH_HEARTBEAT_ERROR(19)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE(206)"),(0,r.kt)("td",{parentName:"tr",align:null},"SUCCESS(0) or EVENTMESH_SUBSCRIBE_ERROR(17)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unsubscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE(207)"),(0,r.kt)("td",{parentName:"tr",align:null},"SUCCESS(0) or EVENTMESH_UNSUBSCRIBE_ERROR(18)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Send async message"),(0,r.kt)("td",{parentName:"tr",align:null},"MSG_SEND_ASYNC(104)"),(0,r.kt)("td",{parentName:"tr",align:null},"SUCCESS(0) or EVENTMESH_SEND_ASYNC_MSG_ERR(14)"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"server-initiated-interaction-1"},"Server-Initiated Interaction"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scene"),(0,r.kt)("th",{parentName:"tr",align:null},"Client Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Server Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Push async message to the client"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP_PUSH_CLIENT_ASYNC(105)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retCode")),(0,r.kt)("td",{parentName:"tr",align:null},"The push is successful if the ",(0,r.kt)("inlineCode",{parentName:"td"},"retCode")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"0"))))),(0,r.kt)("h2",{id:"grpc-protocol"},"gRPC Protocol"),(0,r.kt)("h3",{id:"protobuf"},"Protobuf"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh-protocol-gprc")," module contains the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/r/eventmesh-protocol-plugin/eventmesh-protocol-grpc/src/main/proto/eventmesh-client.proto"},"protobuf definition file")," of the Eventmesh client. The ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle build")," command generates the gRPC codes, which are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/build/generated/source/proto/main"),". The generated gRPC codes are used in ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh-sdk-java")," module."),(0,r.kt)("h3",{id:"data-model"},"Data Model"),(0,r.kt)("h4",{id:"message"},"Message"),(0,r.kt)("p",null,"The message data model used by ",(0,r.kt)("inlineCode",{parentName:"p"},"publish()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"requestReply()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast()")," APIs is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message RequestHeader {\n    string env = 1;\n    string region = 2;\n    string idc = 3;\n    string ip = 4;\n    string pid = 5;\n    string sys = 6;\n    string username = 7;\n    string password = 8;\n    string language = 9;\n    string protocolType = 10;\n    string protocolVersion = 11;\n    string protocolDesc = 12;\n}\n\nmessage SimpleMessage {\n   RequestHeader header = 1;\n   string producerGroup = 2;\n   string topic = 3;\n   string content = 4;\n   string ttl = 5;\n   string uniqueId = 6;\n   string seqNum = 7;\n   string tag = 8;\n   map<string, string> properties = 9;\n}\n\nmessage BatchMessage {\n   RequestHeader header = 1;\n   string producerGroup = 2;\n   string topic = 3;\n\n   message MessageItem {\n      string content = 1;\n      string ttl = 2;\n      string uniqueId = 3;\n      string seqNum = 4;\n      string tag = 5;\n      map<string, string> properties = 6;\n   }\n\n   repeated MessageItem messageItem = 4;\n}\n\nmessage Response {\n   string respCode = 1;\n   string respMsg = 2;\n   string respTime = 3;\n}\n")),(0,r.kt)("h4",{id:"subscription"},"Subscription"),(0,r.kt)("p",null,"The subscription data model used by ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe()")," APIs is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message Subscription {\n   RequestHeader header = 1;\n   string consumerGroup = 2;\n\n   message SubscriptionItem {\n      enum SubscriptionMode {\n         CLUSTERING = 0;\n         BROADCASTING = 1;\n      }\n\n      enum SubscriptionType {\n         ASYNC = 0;\n         SYNC = 1;\n      }\n\n      string topic = 1;\n      SubscriptionMode mode = 2;\n      SubscriptionType type = 3;\n   }\n\n   repeated SubscriptionItem subscriptionItems = 3;\n   string url = 4;\n}\n")),(0,r.kt)("h4",{id:"heartbeat"},"Heartbeat"),(0,r.kt)("p",null,"The heartbeat data model used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"heartbeat()")," API is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"message Heartbeat {\n  enum ClientType {\n     PUB = 0;\n     SUB = 1;\n  }\n\n  RequestHeader header = 1;\n  ClientType clientType = 2;\n  string producerGroup = 3;\n  string consumerGroup = 4;\n\n  message HeartbeatItem {\n     string topic = 1;\n     string url = 2;\n  }\n\n  repeated HeartbeatItem heartbeatItems = 5;\n}\n")),(0,r.kt)("h3",{id:"service-definition"},"Service Definition"),(0,r.kt)("h4",{id:"event-publisher-service"},"Event Publisher Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"service PublisherService {\n   // Async event publish\n   rpc publish(SimpleMessage) returns (Response);\n\n   // Sync event publish\n   rpc requestReply(SimpleMessage) returns (Response);\n\n   // Batch event publish\n   rpc batchPublish(BatchMessage) returns (Response);\n}\n")),(0,r.kt)("h4",{id:"event-consumer-service"},"Event Consumer Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"service ConsumerService {\n   // The subscribed event will be delivered by invoking the webhook url in the Subscription\n   rpc subscribe(Subscription) returns (Response);\n\n   // The subscribed event will be delivered through stream of Message\n   rpc subscribeStream(Subscription) returns (stream SimpleMessage);\n\n   rpc unsubscribe(Subscription) returns (Response);\n}\n")),(0,r.kt)("h4",{id:"client-hearthbeat-service"},"Client Hearthbeat Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"service HeartbeatService {\n   rpc heartbeat(Heartbeat) returns (Response);\n}\n")))}m.isMDXComponent=!0},44601:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/async-message-628b4635b65593b1f2e6d8fbd7c0a38f.png"},23172:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/broadcast-message-d3d27b42c2c0c80a39362fb706e184f8.png"},37227:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sync-message-6ef285bf8186ea210cdf95f6f6cfa593.png"}}]);