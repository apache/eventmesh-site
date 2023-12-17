# EventMesh SPI

## 介绍

为了提高扩展性，EventMesh 通过引入 SPI（Service Provider Interface）机制，能够在运行时自动寻找扩展接口的具体实现类，动态加载。
在 EventMesh 中，一切扩展点都利用 SPI 采用插件的实现方式，用户可以通过实现扩展接口，开发自定义的插件，在运行时通过简单的配置，声明式的选择所需要运行的插件。

## eventmesh-spi 模块

SPI 相关的代码位于 eventmesh-spi 模块下，其中主要包括 EventMeshExtensionFactory, EventMeshSPI, ExtensionClassLoader 这三个类。

### EventMeshSPI

EventMeshSPI 是 SPI 注解，所有需要采用 SPI 实现扩展的接口都需要使用@EventMeshSPI 注解标记。

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
public @interface EventMeshSPI {

    /**
     * If true, the spi instance is singleton
     */
    boolean isSingleton() default false;

}
```

这么做的原因是可以通过注解的方式声明接口为 SPI 扩展接口，提高代码的可读性。同时，@EventMeshSPI 注解中包含一个 isSingleton 属性，
用来声明该扩展接口是否采用单例的实现方式，如果为 true，那么该接口的实现类将会使用单例的实现方式，在一个 JVM 进程中全局唯一。

### EventMeshExtensionFactory

EventMeshExtensionFactory 是 SPI 实现类的获取工厂，包含一个静态方法`getExtension(Class<T> extensionType, String extensionName)`，
接收扩展接口字节码对象和扩展实例名称，用于获取扩展接口的具体实现类。

```java
public enum EventMeshExtensionFactory {
  ;
    /**
     * @param extensionType extension plugin class type
     * @param extensionName extension instance name
     * @param <T>           the type of the plugin
     * @return plugin instance
     */
    public static <T> T getExtension(Class<T> extensionType, String extensionName) {
    }
}
```

所有需要获取扩展实现的地方都应该通过 EventMeshExtensionFactory 获取。

### ExtensionClassLoader

ExtensionClassLoader 是扩展接口实现类的加载接口，包含两个实现子类 MetaInfExtensionClassLoader 和 JarExtensionClassLoader。

```java
/**
 * Load extension class
 * <ul>
 *     <li>{@link MetaInfExtensionClassLoader}</li>
 *     <li>{@link JarExtensionClassLoader}</li>
 * </ul>
 */
public interface ExtensionClassLoader {

    /**
     * load
     *
     * @param extensionType extension type class
     * @param <T>           extension type
     * @return extension instance name to extension instance class
     */
    <T> Map<String, Class<?>> loadExtensionClass(Class<T> extensionType);
}
```

MetaInfExtensionClassLoader 用于从 classPath 直接加载实现类，JarExtensionClassLoader 用于从配置目录下通过加载 Jar 包的方式加载实现类，未来可能还会提供通过从 Maven 仓库下加载实现类。

## SPI 使用示例

下面以 eventmesh-connector-plugin 为例，介绍 SPI 具体的使用过程。

首先定义一个 eventmesh-connector-api 模块，并且定义扩展接口 MeshMQProducer。在 MeshMQProducer 接口上使用@EventMeshSPI 注解进行声明，表明该接口是一个 SPI 扩展接口

```java
@EventMeshSPI(isSingleton = false)
public interface MeshMQProducer extends Producer {
...
}
```

eventmesh-connector-rocketmq 模块中包含采用 rocketmq 的具体实现方式 RocketMQProducerImpl。

```java
public class RocketMQProducerImpl implements MeshMQProducer {
...
}
```

同时，还需要在 eventmesh-connector-rocketmq 模块中 resource/META-INF/eventmesh 目录下创建文件名为 SPI 接口全限定名的文件
org.apache.eventmesh.api.producer.Producer

文件内容为扩展实例名和对应的实例全类名

```properties
rocketmq=org.apache.eventmesh.connector.rocketmq.producer.RocketMQProducerImpl
```

至此，一个 SPI 扩展模块就完成了。在使用的时候只需要通过 EventMeshExtensionFactory.getExtension(MeshMQProducer.class, “rocketmq”) 就可以获取 RocketMQProducerImpl 实现类。
