# 导入 Eclipse 快速入门说明

我们推荐使用 `Intellij IDEA` 进行开发，如果您希望使用 `Eclipse`，可以参考下面的步骤导入项目。

### 依赖

```
64位JDK 1.8+;
Gradle至少为7.0, 推荐 7.0.*
eclipse 已安装gradle插件或者eclipse自带gradle插件
```

### 下载源码

git init

git clone <https://github.com/apache/eventmesh.git>

### 项目编译 eclipse 环境

打开命令行终端，运行 gradlew cleanEclipse eclipse

### 配置修改

修改工程名称和 settings.gradle 配置文件参数 rootProject.name 参数一致

### 修改 eclipse.init 配置文件，配置 lombok 以 1.18.8 版本为例

-javaagent:lombok-1.18.8.jar
-XBootclasspath/a:lombok-1.18.8.jar

### 202106 版本 eclipse,eclipse.init 增加配置参数

--illegal-access=permit

### 导入 gradle

打开 eclipse，导入 gradle 项目到 IDE 里