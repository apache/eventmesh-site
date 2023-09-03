"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[7682],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=s,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(v,a(a({ref:n},p),{},{components:t})):r.createElement(v,a({ref:n},p))}));function v(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const o={},a="EventMesh SPI",i={unversionedId:"design-document/spi",id:"version-v1.3.0/design-document/spi",title:"EventMesh SPI",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3.0/design-document/01-spi.md",sourceDirName:"design-document",slug:"/design-document/spi",permalink:"/zh/docs/v1.3.0/design-document/spi",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.3.0/design-document/01-spi.md",tags:[],version:"v1.3.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CloudEvents \u96c6\u6210",permalink:"/zh/docs/v1.3.0/design-document/event-handling-and-integration/cloudevents"},next:{title:"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus\uff09",permalink:"/zh/docs/v1.3.0/design-document/observability/metrics-export"}},l={},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"eventmesh-spi\u6a21\u5757",id:"eventmesh-spi\u6a21\u5757",level:2},{value:"EventMeshSPI",id:"eventmeshspi",level:3},{value:"EventMeshExtensionFactory",id:"eventmeshextensionfactory",level:3},{value:"ExtensionClassLoader",id:"extensionclassloader",level:3},{value:"SPI\u4f7f\u7528\u793a\u4f8b",id:"spi\u4f7f\u7528\u793a\u4f8b",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"eventmesh-spi"},"EventMesh SPI"),(0,s.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,s.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u6269\u5c55\u6027\uff0cEventMesh\u901a\u8fc7\u5f15\u5165SPI\uff08Service Provider Interface\uff09\u673a\u5236\uff0c\u80fd\u591f\u5728\u8fd0\u884c\u65f6\u81ea\u52a8\u5bfb\u627e\u6269\u5c55\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0\u7c7b\uff0c\u52a8\u6001\u52a0\u8f7d\u3002\n\u5728EventMesh\u4e2d\uff0c\u4e00\u5207\u6269\u5c55\u70b9\u90fd\u5229\u7528SPI\u91c7\u7528\u63d2\u4ef6\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u6269\u5c55\u63a5\u53e3\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49\u7684\u63d2\u4ef6\uff0c\u5728\u8fd0\u884c\u65f6\u901a\u8fc7\u7b80\u5355\u7684\u914d\u7f6e\uff0c\u58f0\u660e\u5f0f\u7684\u9009\u62e9\u6240\u9700\u8981\u8fd0\u884c\u7684\u63d2\u4ef6\u3002"),(0,s.kt)("h2",{id:"eventmesh-spi\u6a21\u5757"},"eventmesh-spi\u6a21\u5757"),(0,s.kt)("p",null,"SPI\u76f8\u5173\u7684\u4ee3\u7801\u4f4d\u4e8eeventmesh-spi\u6a21\u5757\u4e0b\uff0c\u5176\u4e2d\u4e3b\u8981\u5305\u62ecEventMeshExtensionFactory, EventMeshSPI, ExtensionClassLoader\u8fd9\u4e09\u4e2a\u7c7b\u3002"),(0,s.kt)("h3",{id:"eventmeshspi"},"EventMeshSPI"),(0,s.kt)("p",null,"EventMeshSPI\u662fSPI\u6ce8\u89e3\uff0c\u6240\u6709\u9700\u8981\u91c7\u7528SPI\u5b9e\u73b0\u6269\u5c55\u7684\u63a5\u53e3\u90fd\u9700\u8981\u4f7f\u7528@EventMeshSPI\u6ce8\u89e3\u6807\u8bb0\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.TYPE})\npublic @interface EventMeshSPI {\n\n    /**\n     * If true, the spi instance is singleton\n     */\n    boolean isSingleton() default false;\n\n}\n")),(0,s.kt)("p",null,"\u8fd9\u4e48\u505a\u7684\u539f\u56e0\u662f\u53ef\u4ee5\u901a\u8fc7\u6ce8\u89e3\u7684\u65b9\u5f0f\u58f0\u660e\u63a5\u53e3\u4e3aSPI\u6269\u5c55\u63a5\u53e3\uff0c\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u3002\u540c\u65f6\uff0c@EventMeshSPI\u6ce8\u89e3\u4e2d\u5305\u542b\u4e00\u4e2aisSingleton\u5c5e\u6027\uff0c\n\u7528\u6765\u58f0\u660e\u8be5\u6269\u5c55\u63a5\u53e3\u662f\u5426\u91c7\u7528\u5355\u4f8b\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5982\u679c\u4e3atrue\uff0c\u90a3\u4e48\u8be5\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u5c06\u4f1a\u4f7f\u7528\u5355\u4f8b\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5728\u4e00\u4e2aJVM\u8fdb\u7a0b\u4e2d\u5168\u5c40\u552f\u4e00\u3002"),(0,s.kt)("h3",{id:"eventmeshextensionfactory"},"EventMeshExtensionFactory"),(0,s.kt)("p",null,"EventMeshExtensionFactory\u662fSPI\u5b9e\u73b0\u7c7b\u7684\u83b7\u53d6\u5de5\u5382\uff0c\u5305\u542b\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5",(0,s.kt)("inlineCode",{parentName:"p"},"getExtension(Class<T> extensionType, String extensionName)"),"\uff0c\n\u63a5\u6536\u6269\u5c55\u63a5\u53e3\u5b57\u8282\u7801\u5bf9\u8c61\u548c\u6269\u5c55\u5b9e\u4f8b\u540d\u79f0\uff0c\u7528\u4e8e\u83b7\u53d6\u6269\u5c55\u63a5\u53e3\u7684\u5177\u4f53\u5b9e\u73b0\u7c7b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public enum EventMeshExtensionFactory {\n  ;\n    /**\n     * @param extensionType extension plugin class type\n     * @param extensionName extension instance name\n     * @param <T>           the type of the plugin\n     * @return plugin instance\n     */\n    public static <T> T getExtension(Class<T> extensionType, String extensionName) {\n    }\n}\n")),(0,s.kt)("p",null,"\u6240\u6709\u9700\u8981\u83b7\u53d6\u6269\u5c55\u5b9e\u73b0\u7684\u5730\u65b9\u90fd\u5e94\u8be5\u901a\u8fc7EventMeshExtensionFactory\u83b7\u53d6\u3002"),(0,s.kt)("h3",{id:"extensionclassloader"},"ExtensionClassLoader"),(0,s.kt)("p",null,"ExtensionClassLoader\u662f\u6269\u5c55\u63a5\u53e3\u5b9e\u73b0\u7c7b\u7684\u52a0\u8f7d\u63a5\u53e3\uff0c\u5305\u542b\u4e24\u4e2a\u5b9e\u73b0\u5b50\u7c7bMetaInfExtensionClassLoader\u548cJarExtensionClassLoader\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Load extension class\n * <ul>\n *     <li>{@link MetaInfExtensionClassLoader}</li>\n *     <li>{@link JarExtensionClassLoader}</li>\n * </ul>\n */\npublic interface ExtensionClassLoader {\n\n    /**\n     * load\n     *\n     * @param extensionType extension type class\n     * @param <T>           extension type\n     * @return extension instance name to extension instance class\n     */\n    <T> Map<String, Class<?>> loadExtensionClass(Class<T> extensionType);\n}\n")),(0,s.kt)("p",null,"MetaInfExtensionClassLoader\u7528\u4e8e\u4ececlassPath\u76f4\u63a5\u52a0\u8f7d\u5b9e\u73b0\u7c7b\uff0cJarExtensionClassLoader\u7528\u4e8e\u4ece\u914d\u7f6e\u76ee\u5f55\u4e0b\u901a\u8fc7\u52a0\u8f7dJar\u5305\u7684\u65b9\u5f0f\u52a0\u8f7d\u5b9e\u73b0\u7c7b\uff0c\u672a\u6765\u53ef\u80fd\u8fd8\u4f1a\u63d0\u4f9b\u901a\u8fc7\u4eceMaven\u4ed3\u5e93\u4e0b\u52a0\u8f7d\u5b9e\u73b0\u7c7b\u3002"),(0,s.kt)("h2",{id:"spi\u4f7f\u7528\u793a\u4f8b"},"SPI\u4f7f\u7528\u793a\u4f8b"),(0,s.kt)("p",null,"\u4e0b\u9762\u4ee5eventmesh-connector-plugin\u4e3a\u4f8b\uff0c\u4ecb\u7ecdSPI\u5177\u4f53\u7684\u4f7f\u7528\u8fc7\u7a0b\u3002"),(0,s.kt)("p",null,"\u9996\u5148\u5b9a\u4e49\u4e00\u4e2aeventmesh-connector-api\u6a21\u5757\uff0c\u5e76\u4e14\u5b9a\u4e49\u6269\u5c55\u63a5\u53e3MeshMQProducer\u3002\u5728MeshMQProducer\u63a5\u53e3\u4e0a\u4f7f\u7528@EventMeshSPI\u6ce8\u89e3\u8fdb\u884c\u58f0\u660e\uff0c\u8868\u660e\u8be5\u63a5\u53e3\u662f\u4e00\u4e2aSPI\u6269\u5c55\u63a5\u53e3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"@EventMeshSPI(isSingleton = false)\npublic interface MeshMQProducer extends Producer {\n...\n}\n")),(0,s.kt)("p",null,"eventmesh-connector-rocketmq\u6a21\u5757\u4e2d\u5305\u542b\u91c7\u7528rocketmq\u7684\u5177\u4f53\u5b9e\u73b0\u65b9\u5f0fRocketMQProducerImpl\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class RocketMQProducerImpl implements MeshMQProducer {\n...\n}\n")),(0,s.kt)("p",null,"\u540c\u65f6\uff0c\u8fd8\u9700\u8981\u5728eventmesh-connector-rocketmq\u6a21\u5757\u4e2dresource/META-INF/eventmesh\u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6\u540d\u4e3aSPI\u63a5\u53e3\u5168\u9650\u5b9a\u540d\u7684\u6587\u4ef6\norg.apache.eventmesh.api.producer.Producer"),(0,s.kt)("p",null,"\u6587\u4ef6\u5185\u5bb9\u4e3a\u6269\u5c55\u5b9e\u4f8b\u540d\u548c\u5bf9\u5e94\u7684\u5b9e\u4f8b\u5168\u7c7b\u540d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"rocketmq=org.apache.eventmesh.connector.rocketmq.producer.RocketMQProducerImpl\n")),(0,s.kt)("p",null,"\u81f3\u6b64\uff0c\u4e00\u4e2aSPI\u6269\u5c55\u6a21\u5757\u5c31\u5b8c\u6210\u4e86\u3002\u5728\u4f7f\u7528\u7684\u65f6\u5019\u53ea\u9700\u8981\u901a\u8fc7EventMeshExtensionFactory.getExtension(MeshMQProducer.class, \u201crocketmq\u201d)\u5c31\u53ef\u4ee5\u83b7\u53d6RocketMQProducerImpl\u5b9e\u73b0\u7c7b\u3002"))}u.isMDXComponent=!0}}]);