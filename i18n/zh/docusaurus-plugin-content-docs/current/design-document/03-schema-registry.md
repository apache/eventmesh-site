# EventMesh 模式注册中心 (OpenSchema)

## Schema 和 Schema 注册概述

### Schema

模式代表对序列化实例（字符串/流/s 文件/……）的描述，具有两个属性。首先，它也是序列化类型的格式。其次，它定义了这些序列化实例应满足的要求。

除了描述序列化实例，模式还可用于验证实例是否合法。因为它定义了序列化实例的 ```type```（和其他属性）以及内部的键。以 JSON 模式为例，它不仅可用于描述 JSON 字符串，还可用于验证字符串是否满足模式[[1]](#References).中定义的属性。

常见的模式有 JSON 模式、Protobuf 模式和 Avro 模式。

### Schema 注册中心

模式注册中心是一个提供 RESTful 接口的服务器。它可以接收和存储来自客户端的模式，并为其他客户端从中检索模式提供接口。

它可用于验证过程和（去）序列化过程

### 不同项目中 Schema 注册表的比较

项目 | 应用程序
:---: | :---
EMQ[[2]](#References) | 主要用于（去）序列化过程。使用 "模式注册表 "和 "规则匹配 "将信息从一种序列化格式传输到另一种序列化格式。serialization format to another.
Pulsar[[3]](#References) | 主要用于验证过程。使用 "模式注册表 "验证报文。
Confluentinc[[4]](#References) | 在验证和（去）序列化过程中。

## OpenSchema 概览

OpenSchema[[5]](#References) 提出了在越来越多的现代云原生应用程序中交换消息和事件时的数据模式规范。它从三个方面（主题/模式/兼容性）设计了用于存储和检索 Avro、JSON Schema 和 Protobuf3 模式的 RESTful 接口。


## 需求（目标）

| 需求 ID | 需求描述                                 | 评价      |
| :------------- | ------------------------------------------------------------ | ------------- |
| F-1            | 在传输过程中，信息无需包含模式信息，从而提高效率。| 功能性 |
| F-2            | 可根据模式验证来自生产者的信息内容是否正确序列化。 | 功能性 |

## 详细设计

### 架构设计

![OpenSchema](/images/design-document/schema-registry-architecture.png)

### Schema Registry 下的信息传输过程

![Process](/images/design-document/schema-registry-process.jpg)

信息传输的高级流程包括以下 10 个步骤：

- 1: 消费者从 EventMesh 订阅 "主题 "信息。
- 2: 生产者向 EventMesh 注册模式。
- 3: EventMesh 向模式注册中心注册模式。
- 4: 模式注册中心返回新创建模式的 ID；EventMesh 缓存该 ID 和模式。
- 5: EventMesh 将模式的 ID 返回给生产者。
- 6: Producer 在信息前面修补 ID，并将信息发送到 EventMesh。
- 7: EventMesh 验证入口端口中的报文并将其发送到 EventStore；EventMesh 从 EventStore 中检索报文。
- 8: EventMesh 解封 id 并将其发送至模式注册表（如果本地缓存中不存在此类`<id, schema>`）。
- 9: Schema Registry 返回模式，EventMesh 对其进行缓存。
- 10: EventMesh 在消息前修补模式，并将其推送给消费者。

## 当前进度

### 状态

**当前状态**: 开发中

**讨论 issue**: ISSUE #339

### 修改建议

该提案有两个方面。

首先是一个独立的开放模式注册表，其中包括模式的存储和兼容性检查。
该提案正在制定中。

其次是 EventMesh 中 Open Schema 的集成，其中包括架构验证。该提案有待制定。

对于第一个提案，一些进展情况如下。

#### 状态代码和异常代码

No. | 状态码 | 异常码 | 描述 | 状态
--- | :---: | :---: | :---: | :---:
1 | 401 | 40101 | 未授权异常 | ✔
2 | 404 | 40401 | Schema 不存在异常 | ✔
3 | ^ | 40402 | Subject 不存在异常 | ✔
4 | ^ | 40403 | 版本不存在异常 | ✔
5 | 409 | 40901 | 兼容性异常 | ✔
6 | 422 | 42201 | Schema 格式异常 | ✔
7 | ^ | 42202 | Subject 格式异常 | ✔
8 | ^ | 42203 | 版本格式异常 | ✔
9 | ^ | 42204 | 兼容性格式异常 | ✔
10 | 500 | 50001 | 存储服务异常 | ✔
11 | ^ | 50002 | 超时异常 | ✔

#### API 开发状态

No. | 类型 | URL | 响应 | 异常 | 代码是否完成 | 测试是否完成
--- | --- | --- | --- | --- | --- | ---
1 | GET | /schemas/ids/{string: id} | `Schema.class` | 40101\40401\50001 | ✔ | ❌
2 | GET | /schemas/ids/{string: id}/subjects | `SubjectAndVersion.class` | 40101\40401\50001 | ✔ | ❌
3 | GET | /subjects | `List\<String>` | 40101\50001 | ✔ | ❌
4 | GET | /subjects/{string: subject}/versions | `List\<Integer>` | 40101\40402\50001 | ✔ | ❌
5 | DELETE | /subjects/(string: subject) | `List\<Integer>` | 40101\40402\50001 | ✔ | ❌
6 | GET | /subjects/(string: subject) | `Subject.class` | 40101\40402\50001 | ✔ | ❌
7 | GET | /subjects/(string: subject)/versions/(version: version)/schema | `SubjectWithSchema.class` | 40101\40402\40403\50001 | ✔ | ❌
8 | POST | /subjects/(string: subject)/versions | `SchemaIdResponse.class` | 40101\40901\42201\50001\50002 | - | ❌
9 | POST | /subjects/(string: subject)/ | `Subject.class` | 40101\40901\42202\50001\50002 | ✔ | ❌
10 | DELETE | /subjects/(string: subject)/versions/(version: version) | `int` | 40101\40402\40403\40901\50001| - | ❌
11 | POST | /compatibility/subjects/(string: subject)/versions/(version: version) | `CompatibilityResultResponse.class` | 40101\40402\40403\42201\42203\50001| - | ❌
12 | GET | /compatibility/(string: subject) | `Compatibility.class` | 40101\40402\50001 | ✔ | ❌
13 | PUT | /compatibility/(string: subject) | `Compatibility.class` |  40101\40402\40901\42204\50001 | - | ❌

#### 项目总体结构

```SchemaController.java```+```SchemaService.java``` : ```OpenSchema 7.1.1~7.1.2 (API 1~2)```

```SubjectController.java```+```SubjectService.java``` : ```OpenSchema 7.2.1~7.2.8 (API 3~10)```

```CompatibilityController.java```+```CompatibilityService.java``` : ```OpenSchema 7.3.1~7.3.3 (API 11~13)``` + ```Check for Compatibility```

![项目结构](/images/design-document/schema-registry-project-structure.png)

## 参考文献

[1] [Schema 验证器 (github.com)](https://github.com/search?q=schema+validator)

[2] [EMQ: Schema Registry](https://www.jianshu.com/p/33e0655c642b)

[3] [Pulsar: Schema Registry](https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw)

[4] [confluentinc/schema-registry](https://github.com/confluentinc/schema-registry)

[5] [openmessaging/openschema](https://github.com/openmessaging/openschema)
