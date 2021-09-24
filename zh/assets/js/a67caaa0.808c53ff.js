(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[644],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var N=a.createContext({}),m=function(t){var e=a.useContext(N),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(N.Provider,{value:e},t.children)},E={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,N=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(n),d=r,S=k["".concat(N,".").concat(d)]||k[d]||E[d]||l;return n?a.createElement(S,i(i({ref:e},u),{},{components:n})):a.createElement(S,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var N in e)hasOwnProperty.call(e,N)&&(p[N]=e[N]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6914:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return N},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],p={},N="TCP\u534f\u8bae\u6587\u6863",m={unversionedId:"instructions/eventmesh-runtime-protocol",id:"instructions/eventmesh-runtime-protocol",isDocsHomePage:!1,title:"TCP\u534f\u8bae\u6587\u6863",description:"1. \u534f\u8bae\u683c\u5f0f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/instructions/eventmesh-runtime-protocol.md",sourceDirName:"instructions",slug:"/instructions/eventmesh-runtime-protocol",permalink:"/zh/docs/instructions/eventmesh-runtime-protocol",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instructions/eventmesh-runtime-protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh SPI",permalink:"/zh/docs/features/spi"},next:{title:"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e",permalink:"/zh/docs/instructions/eventmesh-runtime-quickstart"}},u=[{value:"HTTP\u534f\u8bae\u6587\u6863",id:"http\u534f\u8bae\u6587\u6863",children:[]}],E={toc:u};function k(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},E,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tcp\u534f\u8bae\u6587\u6863"},"TCP\u534f\u8bae\u6587\u6863"),(0,l.kt)("h4",{id:"1-\u534f\u8bae\u683c\u5f0f"},"1. \u534f\u8bae\u683c\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dataFlow",src:n(8866).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u7ec4\u6210\u8be6\u89e3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u9b54\u672f\u5b57\uff1a9\u4f4d\uff0c\u5f53\u524d\u503c\u4e3a\u201cEventMesh\u201d\n\n\u901a\u4fe1\u534f\u8bae\u7248\u672c\u53f7\uff1a4\u4f4d\uff0c\u5f53\u524d\u503c\u4e3a\u201c0000\u201d\n\n\u6d88\u606f\u603b\u957f\u5ea6\u503c(length)\uff1a4\u4f4d\uff0cint\u7c7b\u578b\n\n\u6d88\u606f\u5934\u957f\u5ea6\u503c(headerLength)\uff1a4\u4f4d\uff0cint\u7c7b\u578b\n\n\u6d88\u606f\u5934(header)\uff1a\u957f\u5ea6 = headerLength\n\n\u6d88\u606f\u4f53(body)\uff1a\u957f\u5ea6 = length - headerLength - 4 - 4\n")),(0,l.kt)("h4",{id:"2-\u4e1a\u52a1\u903b\u8f91\u5c42"},"2. \u4e1a\u52a1\u903b\u8f91\u5c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d88\u606f\u7ec4\u6210")),(0,l.kt)("p",null,"\u6d88\u606f\u5934\uff08header\uff09+ \u6d88\u606f\u4f53\uff08body\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Package {\n\n    private Header header;\n    private Object body;\n}\n\n\npublic class Header {\n\n    private Command cmd;\n    private int code;\n    private String msg;\n    private String seq;\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8be6\u89e3")),(0,l.kt)("p",null,"\u6d88\u606f\u5934(header)\uff1a\u7c7b\u578b\u4e3aHeader\uff0cHeader\u4e2d\u6709Command\u5b57\u6bb5\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u6d88\u606f\u7c7b\u578b"),(0,l.kt)("p",null,"\u6d88\u606f\u4f53(body)\uff1a\u5bf9\u4e8e\u4e0d\u540c\u7684\u6d88\u606f\u7c7b\u578b\uff0cbody\u7684\u7c7b\u578b\u4e0d\u540c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6d88\u606f\u547d\u4ee4\u5b57"),(0,l.kt)("th",{parentName:"tr",align:null},"body\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_REQUEST, HEARTBEAT_RESPONSE, HELLO_RESPONSE, CLIENT_GOODBYE_REQUEST, CLIENT_GOODBYE_RESPONSE, SERVER_GOODBYE_REQUEST, SERVER_GOODBYE_RESPONSE, LISTEN_REQUEST, LISTEN_RESPONSE, UNSUBSCRIBE_REQUEST, SUBSCRIBE_RESPONSE, UNSUBSCRIBE_RESPONSE, ASYNC_MESSAGE_TO_SERVER_ACK, BROADCAST_MESSAGE_TO_SERVER_ACK"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HELLO_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"UserAgent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"Subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_SERVER, REQUEST_TO_CLIENT, RESPONSE_TO_SERVER, RESPONSE_TO_CLIENT, ASYNC_MESSAGE_TO_SERVER, ASYNC_MESSAGE_TO_CLIENT, BROADCAST_MESSAGE_TO_SERVER, BROADCAST_MESSAGE_TO_CLIENT, ASYNC_MESSAGE_TO_CLIENT_ACK, BROADCAST_MESSAGE_TO_CLIENT_ACK, RESPONSE_TO_CLIENT_ACK, REQUEST_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null},"OpenMessage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REDIRECT_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"RedirectInfo")))),(0,l.kt)("h4",{id:"3-client-\u4e0e-eventmesh-runtimeserver\u4ea4\u4e92\u573a\u666f\u8be6\u89e3"},"3. Client \u4e0e Eventmesh-Runtime(Server)\u4ea4\u4e92\u573a\u666f\u8be6\u89e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public enum Command {\n\n    //\u5fc3\u8df3\n    HEARTBEAT_REQUEST(0),                              //client\u53d1\u7ed9server\u7684\u5fc3\u8df3\u5305\n    HEARTBEAT_RESPONSE(1),                             //server\u56de\u590dclient\u7684\u5fc3\u8df3\u5305\n\n    //\u63e1\u624b\n    HELLO_REQUEST(2),                                  //client\u53d1\u7ed9server\u7684\u63e1\u624b\u8bf7\u6c42\n    HELLO_RESPONSE(3),                                 //server\u56de\u590dclient\u7684\u63e1\u624b\u8bf7\u6c42\n\n    //\u65ad\u8fde\n    CLIENT_GOODBYE_REQUEST(4),                         //client\u4e3b\u52a8\u65ad\u8fde\u65f6\u901a\u77e5server\n    CLIENT_GOODBYE_RESPONSE(5),                        //server\u56de\u590dclient\u7684\u4e3b\u52a8\u65ad\u8fde\u901a\u77e5\n    SERVER_GOODBYE_REQUEST(6),                         //server\u4e3b\u52a8\u65ad\u8fde\u65f6\u901a\u77e5client\n    SERVER_GOODBYE_RESPONSE(7),                        //client\u56de\u590dserver\u7684\u4e3b\u52a8\u65ad\u8fde\u901a\u77e5\n\n    //\u8ba2\u9605\u7ba1\u7406\n    SUBSCRIBE_REQUEST(8),                              //client\u53d1\u7ed9server\u7684\u8ba2\u9605\u8bf7\u6c42\n    SUBSCRIBE_RESPONSE(9),                             //server\u56de\u590dclient\u7684\u8ba2\u9605\u8bf7\u6c42\n    UNSUBSCRIBE_REQUEST(10),                           //client\u53d1\u7ed9server\u7684\u53d6\u6d88\u8ba2\u9605\u8bf7\u6c42\n    UNSUBSCRIBE_RESPONSE(11),                          //server\u56de\u590dclient\u7684\u53d6\u6d88\u8ba2\u9605\u8bf7\u6c42\n\n    //\u76d1\u542c\n    LISTEN_REQUEST(12),                                //client\u53d1\u7ed9server\u7684\u542f\u52a8\u76d1\u542c\u8bf7\u6c42\n    LISTEN_RESPONSE(13),                               //server\u56de\u590dclient\u7684\u76d1\u542c\u8bf7\u6c42\n\n    //RR\n    REQUEST_TO_SERVER(14),                             //client\u5c06RR\u8bf7\u6c42\u53d1\u9001\u7ed9server\n    REQUEST_TO_CLIENT(15),                             //server\u5c06RR\u8bf7\u6c42\u63a8\u9001\u7ed9client\n    REQUEST_TO_CLIENT_ACK(16),                         //client\u6536\u5230RR\u8bf7\u6c42\u540eACK\u7ed9server\n    RESPONSE_TO_SERVER(17),                            //client\u5c06RR\u56de\u5305\u53d1\u9001\u7ed9server\n    RESPONSE_TO_CLIENT(18),                            //server\u5c06RR\u56de\u5305\u63a8\u9001\u7ed9client\n    RESPONSE_TO_CLIENT_ACK(19),                        //client\u6536\u5230\u56de\u5305\u540eACK\u7ed9server\n\n    //\u5f02\u6b65\u4e8b\u4ef6\n    ASYNC_MESSAGE_TO_SERVER(20),                       //client\u5c06\u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001\u7ed9server\n    ASYNC_MESSAGE_TO_SERVER_ACK(21),                   //server\u6536\u5230\u5f02\u6b65\u4e8b\u4ef6\u540eACK\u7ed9client\n    ASYNC_MESSAGE_TO_CLIENT(22),                       //server\u5c06\u5f02\u6b65\u4e8b\u4ef6\u63a8\u9001\u7ed9client\n    ASYNC_MESSAGE_TO_CLIENT_ACK(23),                   //client\u6536\u5230\u5f02\u6b65\u4e8b\u4ef6\u540eACK\u7ed9server\n\n    //\u5e7f\u64ad\n    BROADCAST_MESSAGE_TO_SERVER(24),                   //client\u5c06\u5e7f\u64ad\u6d88\u606f\u53d1\u9001\u7ed9server\n    BROADCAST_MESSAGE_TO_SERVER_ACK(25),               //server\u6536\u5230\u5e7f\u64ad\u6d88\u606f\u540eACK\u7ed9client\n    BROADCAST_MESSAGE_TO_CLIENT(26),                   //server\u5c06\u5e7f\u64ad\u6d88\u606f\u63a8\u9001\u7ed9client\n    BROADCAST_MESSAGE_TO_CLIENT_ACK(27),               //client\u6536\u5230\u5e7f\u64ad\u6d88\u606f\u540eACK\u7ed9server\n\n    //\u91cd\u5b9a\u5411\u6307\u4ee4\n    REDIRECT_TO_CLIENT(30),                            //server\u5c06\u91cd\u5b9a\u5411\u6307\u4ee4\u63a8\u52a8\u7ed9client\n}\n")),(0,l.kt)("h4",{id:"4-client\u53d1\u8d77\u4ea4\u4e92"},"4. Client\u53d1\u8d77\u4ea4\u4e92"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u573a\u666f"),(0,l.kt)("th",{parentName:"tr",align:null},"Client\u5411Server\u53d1\u9001\u6d88\u606f\u547d\u4ee4\u5b57"),(0,l.kt)("th",{parentName:"tr",align:null},"Server\u56de\u590dClient\u6d88\u606f\u7684\u547d\u4ee4\u5b57"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63e1\u624b"),(0,l.kt)("td",{parentName:"tr",align:null},"HELLO_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"HELLO_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc3\u8df3"),(0,l.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605"),(0,l.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u8ba2\u9605"),(0,l.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u59cb\u76d1\u542c\u6d88\u606f"),(0,l.kt)("td",{parentName:"tr",align:null},"LISTEN_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"LISTEN_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001RR\u8bf7\u6c42"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001RR\u56de\u5305"),(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5f02\u6b65\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_SERVER_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5e7f\u64ad\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_SERVER"),(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_SERVER_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u4e3b\u52a8\u65ad\u8fde"),(0,l.kt)("td",{parentName:"tr",align:null},"CLIENT_GOODBYE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"CLIENT_GOODBYE_RESPONSE"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"5-server\u53d1\u8d77\u4ea4\u4e92"},"5. Server\u53d1\u8d77\u4ea4\u4e92"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u573a\u666f"),(0,l.kt)("th",{parentName:"tr",align:null},"Server\u5411Client\u53d1\u9001\u6d88\u606f\u547d\u4ee4\u5b57"),(0,l.kt)("th",{parentName:"tr",align:null},"Client\u56de\u590dServer\u6d88\u606f\u547d\u4ee4\u5b57"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u63a5\u6536RR\u8bf7\u6c42"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUEST_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u63a5\u6536RR\u56de\u5305"),(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"RESPONSE_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u63a5\u6536\u5f02\u6b65\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"ASYNC_MESSAGE_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u63a5\u6536\u5e7f\u64ad\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST_MESSAGE_TO_CLIENT_ACK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u4e3b\u52a8\u65ad\u8fde"),(0,l.kt)("td",{parentName:"tr",align:null},"SERVER_GOODBYE_REQUEST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\u8fdb\u884c\u91cd\u5b9a\u5411"),(0,l.kt)("td",{parentName:"tr",align:null},"REDIRECT_TO_CLIENT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"6-\u6d88\u606f\u7c7b\u578b"},"6. \u6d88\u606f\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001RR\u6d88\u606f")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rr-msg",src:n(9987).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u5f02\u6b65\u5355\u64ad\u6d88\u606f")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"async-msg",src:n(4379).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u5e7f\u64ad\u6d88\u606f")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"broadcast-msg",src:n(5879).Z})),(0,l.kt)("h2",{id:"http\u534f\u8bae\u6587\u6863"},"HTTP\u534f\u8bae\u6587\u6863"),(0,l.kt)("p",null,"Java\u7c7b",(0,l.kt)("inlineCode",{parentName:"p"},"LiteMessage"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"content"),"\u5b57\u6bb5\u8868\u793a\u4e00\u4e2a\u7279\u6b8a\u7684\u534f\u8bae\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u8981\u4f7f\u7528eventmesh-sdk-java\u7684http-client\uff0c\u5219\u53ea\u9700\u8bbe\u8ba1\u534f\u8bae\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"content"),"\u5373\u53ef\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"LiteMessage"),"\u7ec4\u6210\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class LiteMessage {\n\n    private String bizSeqNo;\n\n    private String uniqueId;\n\n    private String topic;\n\n    private String content;\n\n    private Map<String, String> prop;\n\n    private long createTime = System.currentTimeMillis();\n}\n")),(0,l.kt)("h4",{id:"1-\u6d88\u606f\u53d1\u9001\u65b9\u5f0f\u4e0e\u7ec4\u6210"},"1. \u6d88\u606f\u53d1\u9001\u65b9\u5f0f\u4e0e\u7ec4\u6210"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u53d1\u9001\u65b9\u5f0f"),"\uff1aPOST\u65b9\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d88\u606f\u7ec4\u6210"),"\uff1a\u8bf7\u6c42\u5934(RequestHeader) + \u8bf7\u6c42\u4f53(RequestBody)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5fc3\u8df3\u6d88\u606f")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestHeader")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Env"),(0,l.kt)("td",{parentName:"tr",align:null},"client\u6240\u5c5e\u73af\u5883")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Region"),(0,l.kt)("td",{parentName:"tr",align:null},"client\u6240\u5c5e\u533a\u57df")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Idc"),(0,l.kt)("td",{parentName:"tr",align:null},"client\u6240\u5c5eIDC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dcn"),(0,l.kt)("td",{parentName:"tr",align:null},"client\u6240\u5728DCN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sys"),(0,l.kt)("td",{parentName:"tr",align:null},"client\u6240\u5c5e\u5b50\u7cfb\u7edf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pid"),(0,l.kt)("td",{parentName:"tr",align:null},"client\u8fdb\u7a0b\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ip"),(0,l.kt)("td",{parentName:"tr",align:null},"client Ip")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"client \u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Passwd"),(0,l.kt)("td",{parentName:"tr",align:null},"client \u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Version"),(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\u7248\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Language"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bed\u8a00\u63cf\u8ff0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Code"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7801")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestBody")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"heartbeatEntities"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc3\u8df3\u5b9e\u4f53\uff0c\u5305\u542btopic\u3001url\u7b49\u4fe1\u606f")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u6d88\u606f\uff1a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestHeader")),(0,l.kt)("p",null,"\u4e0e\u5fc3\u8df3\u6d88\u606f\u4e00\u81f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestBody")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8ba2\u9605\u7684topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"topic\u5bf9\u5e94\u7684url")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d6\u6d88\u8ba2\u9605\u6d88\u606f\uff1a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestHeader")),(0,l.kt)("p",null,"\u4e0e\u5fc3\u8df3\u6d88\u606f\u4e00\u81f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestBody")),(0,l.kt)("p",null,"\u4e0e\u8ba2\u9605\u6d88\u606f\u4e00\u81f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53d1\u9001\u5f02\u6b65\u4e8b\u4ef6\uff1a")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestHeader")),(0,l.kt)("p",null,"\u4e0e\u5fc3\u8df3\u6d88\u606f\u4e00\u81f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RequestBody")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u53d1\u9001\u7684topic\u7684\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bizSeqNo"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e1a\u52a1\u6d41\u6c34\u53f7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uniqueId"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u6d88\u606f\u552f\u4e00\u6807\u8bc6")))),(0,l.kt)("h4",{id:"2-client\u53d1\u8d77\u4ea4\u4e92"},"2. Client\u53d1\u8d77\u4ea4\u4e92"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u573a\u666f"),(0,l.kt)("th",{parentName:"tr",align:null},"Client\u5411Server\u53d1\u9001\u6d88\u606f\u8bf7\u6c42\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"Server\u56de\u590dClient\u6d88\u606f\u7684\u54cd\u5e94\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc3\u8df3"),(0,l.kt)("td",{parentName:"tr",align:null},"HEARTBEAT(203)"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS(0)/EVENTMESH_HEARTBEAT_ERROR(19)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605"),(0,l.kt)("td",{parentName:"tr",align:null},"SUBSCRIBE(206)"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS(0)/EVENTMESH_SUBSCRIBE_ERROR(17)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u8ba2\u9605"),(0,l.kt)("td",{parentName:"tr",align:null},"UNSUBSCRIBE(207)"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS(0)/EVENTMESH_UNSUBSCRIBE_ERROR(18)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5f02\u6b65\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"MSG_SEND_ASYNC(104)"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS(0)/EVENTMESH_SEND_ASYNC_MSG_ERR(14)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"3-server\u53d1\u8d77\u4ea4\u4e92"},"3. Server\u53d1\u8d77\u4ea4\u4e92"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u573a\u666f"),(0,l.kt)("th",{parentName:"tr",align:null},"Server\u5411Client\u53d1\u9001\u6d88\u606f\u8bf7\u6c42\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"Client\u56de\u590dServer\u6d88\u606f\u54cd\u5e94\u7801"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u63a5\u6536\u5f02\u6b65\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP_PUSH_CLIENT_ASYNC(105)"),(0,l.kt)("td",{parentName:"tr",align:null},"retCode"),(0,l.kt)("td",{parentName:"tr",align:null},"retCode\u503c\u4e3a0\u65f6\u4ee3\u8868\u6210\u529f")))))}k.isMDXComponent=!0},4379:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-async-msg-628b4635b65593b1f2e6d8fbd7c0a38f.png"},5879:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-broadcast-msg-d3d27b42c2c0c80a39362fb706e184f8.png"},9987:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-rr-msg-6ef285bf8186ea210cdf95f6f6cfa593.png"},8866:function(t,e,n){"use strict";e.Z=n.p+"assets/images/eventmesh-tcp-dataFlow-ef455893d050b3267013f927e6188a14.png"}}]);