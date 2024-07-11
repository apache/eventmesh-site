---
title: Apache 发布指南
sidebar_position: 3
---

# Apache 发布指南

## 理解 Apache 发布的内容和流程

Source Release 是 Apache 关注的重点，也是发布的必须内容；而 Binary Release 是可选项，

请参考以下链接，找到更多关于 ASF 的发布指南：

- [Apache Release Guide](http://www.apache.org/dev/release-publishing)
- [Apache Release Policy](http://www.apache.org/dev/release.html)
- [Maven Release Info](http://www.apache.org/dev/publishing-maven-artifacts.html)

## 本地构建环境准备

主要包括签名工具、Maven 仓库认证相关准备

### 1.安装 GPG

在[GnuPG 官网](https://www.gnupg.org/download/index.html)下载安装包。GnuPG 的 1.x 版本和 2.x 版本的命令有细微差别，下列说明以**GnuPG-2.x**版本为例

```sh
$ gpg --version #检查版本，应该为2.x
```

### 2.用 gpg 生成 key

根据提示，生成 key

> 注意：请使用 Apache 邮箱生成 GPG 的 Key

```shell
$ gpg --full-gen-key
gpg (GnuPG) 2.0.12; Copyright (C) 2009 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
  (1) RSA and RSA (default)
  (2) DSA and Elgamal
  (3) DSA (sign only)
  (4) RSA (sign only)
Your selection? 1
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
        0 = key does not expire
     <n>  = key expires in n days
     <n>w = key expires in n weeks
     <n>m = key expires in n months
     <n>y = key expires in n years
Key is valid for? (0)
Key does not expire at all
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: ${输入用户名}
Email address: ${邮箱地址}
Comment: CODE SIGNING KEY
You selected this USER-ID:
   "${输入用户名} (CODE SIGNING KEY) <${邮箱地址}>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
You need a Passphrase to protect your secret key. # 填入密码，以后打包过程中会经常用到
```

### 3.查看 key

```shell
$ gpg --list-keys
pub   rsa4096/579C25F5 2021-04-26 # 579C25F5就是key id
uid           [ultimate] ${输入用户名} <${邮箱地址}>
sub   rsa4096 2021-04-26

# 通过key id发送public key到keyserver
# 目前国内可用: pgp.mit.edu, keyserver.ubuntu.com
$ gpg --keyserver keyserver.ubuntu.com --send-key 579C25F5
# 其中，keyserver.ubuntu.com为对应的keyserver
$ gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys 579C25F5 # 验证是否同步到公网，网络不好可能需多试几次
```

**注：如果有多个 public key，设置默认 key。**修改`~/.gnupg/gpg.conf`

```sh
# If you have more than 1 secret key in your keyring, you may want to
# uncomment the following option and set your preferred keyid.
default-key 28681CB1
```

**如果有多个 public key，也可以删除无用的 key：**

```shell
$ gpg --delete-secret-keys 29BBC3CB # 先删除私钥，指明key id
gpg (GnuPG) 2.2.27; Copyright (C) 2021 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

sec  rsa4096/EE8DAE7D29BBC3CB 2021-04-27 mikexue <mikexue@apache.org>

Delete this key from the keyring? (y/N) y
This is a secret key! - really delete? (y/N) y
```

```shell
$ gpg --delete-keys 29BBC3CB # 删除公钥，指明key id
gpg (GnuPG) 2.2.27; Copyright (C) 2021 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.


pub  rsa4096/EE8DAE7D29BBC3CB 2021-04-27 mikexue <mikexue@apache.org>

Delete this key from the keyring? (y/N) y
```

由于公钥服务器没有检查机制，任何人都可以用你的名义上传公钥，所以没有办法保证服务器上的公钥的可靠性。通常，你可以在网站上公布一个公钥指纹，让其他人核对下载到的公钥是否为真。

```shell
# fingerprint参数生成公钥指纹：
$gpg --fingerprint mikexue
pub   rsa4096 2021-04-26 [SCA]
      F84A 0041 D70B 37AF 9C7B  F0B3 39F4 29D7 579C 25F5
uid           [ultimate] mikexue <mikexue@apache.org>
sub   rsa4096 2021-04-26 [E]
```

登录 [https://id.apache.org](https://id.apache.org/)，将上面的 fingerprint（即 F84A 0041 D70B 37AF 9C7B  F0B3 39F4 29D7 579C 25F5）粘贴到自己的用户信息中 OpenPGP Public Key Primary Fingerprint



## 发布 Apache Maven 仓库

> 注：EventMesh 使用 Gradle 构建，需修改 gradle 相关配置

### 1.导出私钥文件

```shell
$ gpg --export-secret-keys -o secring.gpg #私钥文件妥善保管，后面配置需要
```

### 2.准备分支

从主干分支拉取新分支作为发布分支，如现在要发布$`{release_version}`版本，则从 master 分支拉出新分支`${release_version}-prepare`，此后`${release_version}` Release Candidates 涉及的修改及打标签等都在`${release_version}-prepare`分支进行，最终发布完成后合入主干分支。

### 3.更新版本说明

更新官网项目的如下文件，并提交至 master 分支：

https://github.com/apache/eventmesh-site/tree/master/events/release-notes

### 4.配置根项目下 gradle.properties 文件

```shell
group=org.apache.eventmesh
version=1.2.0-release
#40位公钥的最后8位
signing.keyId=579C25F5
#生成密钥时填的passphrase
signing.password=
#导出的私钥文件secring.gpg的绝对路径,比如/home/root/secring.gpg
signing.secretKeyRingFile=/home/root/secring.gpg
#apache 账号
apacheUserName=
#apache 密码
apachePassWord=
#签名开关
signEnabled=true
```

### 5.检查子模块下 gradle.properties 文件

```shell
group=org.apache.eventmesh
version=${release_version}
```

### 6.检查并配置根项目下 build.gradle 文件

该文件 check 下，大部分情况下不需要变更

```shell
publishing {
    publications {
        mavenJava(MavenPublication) {
            from components.java
            artifact packageSources
            artifact packageJavadoc
            versionMapping {
                usage('java-api') {
                    fromResolutionOf('runtimeClasspath')
                }
                usage('java-runtime') {
                    fromResolutionResult()
                }
            }
            pom {
                name = 'EventMesh'
                description = 'Apache EventMesh'
                url = 'https://github.com/apache/eventmesh'
                licenses {
                    license {
                        name = 'The Apache License, Version 2.0'
                        url = 'http://www.apache.org/licenses/LICENSE-2.0.txt'
                    }
                }
                developers {
                    developer {
                        id = 'Apache EventMesh'
                        name = 'Apache EventMesh of ASF'
                        url = 'https://eventmesh.apache.org/'
                    }
                }
                scm {
                    connection = 'scm:git:git@github.com:apache/eventmesh.git'
                    developerConnection = 'scm:git:git@github.com:apache/eventmesh.git'
                    url = 'https://github.com/apache/eventmesh'
                }
            }
        }
    }
    repositories {
        maven {
            def releasesRepoUrl = 'https://repository.apache.org/service/local/staging/deploy/maven2/'
            def snapshotsRepoUrl = 'https://repository.apache.org/content/repositories/snapshots/'
            url = version.endsWith('SNAPSHOT') ? snapshotsRepoUrl : releasesRepoUrl
            credentials {
                username apacheUserName
                password apachePassWord
            }

        }
    }
}

signing {
    sign publishing.publications.mavenJava
}
```

### 7.上传发布包

执行如下命令，需要对 jar、源码包、doc 和 pom 等文件签名加密

```shell
$ gradle signMavenJavaPublication publish
```

上述命令执行成功后，待发布版本会自动上传到 Apache 的临时筹备仓库(staging repository)。所有被 deploy 到远程[maven 仓库](http://repository.apache.org/)的 Artifacts 都会处于 staging 状态，访问 https://repository.apache.org/#stagingRepositories，使用 Apache 的 LDAP 账户登录后，就会看到上传的版本，`Repository`列的内容即为${STAGING.REPOSITORY}。点击`Close`来告诉 Nexus 这个构建已经完成，只有这样该版本才是可用的。如果电子签名等出现问题，`Close`会失败，可以通过`Activity`查看失败信息。



## 发布 Apache SVN 仓库

### 1.准备 svn 本机环境（Apache 使用 svn 托管项目的发布内容）

### 2.checkout 到本地目录

```shell
$ svn checkout https://dist.apache.org/repos/dist/dev/eventmesh/
# 假定本地目录为 ~/apache/eventmesh
```

### 3.添加 gpg 公钥

添加 public key 到[KEYS](https://dist.apache.org/repos/dist/dev/eventmesh/KEYS)文件并提交到 SVN 仓库（第一次做发布的人需要做这个操作，具体操作参考 KEYS 文件里的说明）。KEYS 主要是让参与投票的人在本地导入，用来校验 sign 的正确性

Windows

```sh
$ gpg --list-sigs <your name> | out-file -append KEYS -encoding utf8
$ gpg --armor --export <your name> | out-file -append KEYS -encoding utf8
```

> Mac OS/Linux

```sh
$ (gpg --list-sigs <your name> && gpg --armor --export <your name>) >> KEYS
```

### 4.添加待发布内容到 SVN 目录

```shell
$ cd ~/apache/eventmesh # eventmesh svn根目录
$ mkdir ${release_version}-${rc_version}
```

#### 4.1 创建 tag

在`${release_version}-prepare`分支上创建 tag，需带有 rc 版本，为预发布版本

```shell
$ git tag -a v{$release_version}-{$rc_version} -m "Tagging the ${release_version} first Release Candidate (Candidates start at zero)"
$ git push origin --tags
```

#### 4.2 打包源码

检查项目源码命名，将源码命名为`apache-eventmesh-${release_version}-src`，将源码打包为 tar.gz 格式

> 注：需要将源码中的可执行文件，空目录，无用文件，无用目录删除，包括.git 目录，.github 目录，.gradle 目录，.gitignore 文件，gradle 目录，build 目录，gradlew 文件，gradlew.bat 文件等

```shell
$ tar -czvf apache-eventmesh-${release_version}-source.tar.gz apache-eventmesh-${release_version}-src
```

#### 4.3 打包二进制

> 在`${release_version}-prepare`分支上打包二进制发行版

> 注：`dist`任务所依赖的`generateDistLicense`和`generateDistNotice`任务将会自动生成`tools/dist-license`目录下的`LICENSE`、`NOTICE`文件和`licenses`目录。`dist`任务本身将会复制`tools/dist-license`目录下的内容到`/dist`目录下。

```shell
$ ./gradlew clean dist && ./gradlew installPlugin
```

检查编译后的文件命名，将`/dist`目录命名为`apache-eventmesh-${release_version}`

```shell
$ tar -czvf apache-eventmesh-${release_version}-bin.tar.gz apache-eventmesh-${release_version}
```

压缩 source 包、bin 包，并将相关的压缩包拷贝到 svn 本地仓库下`/apache/eventmesh/${release_version}-${rc_version}`

### 5.生成签名/sha512 文件

> 针对源码包与二进制包生成签名/sha512 文件

```shell
$ for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i > $i.sha512 ; done #计算sha512
$ for i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i ; done #计算签名
```

### 6.提交到 Apache SVN

```shell
$ cd ~/apache/eventmesh # eventmesh svn根目录
$ svn status
$ svn commit -m 'prepare for ${release_version}-${rc_version}'
```

## 验证 Release Candidates

详细检查列表请参考官方的[check list](https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist)

从以下地址下载要发布的 Release Candidates 到本地环境：

```shell
https://dist.apache.org/repos/dist/dev/eventmesh/${release_version}-${rc_version}/
```

然后开始验证环节，验证包含但不限于以下内容和形式

### 1.检查签名和 hash 等信息

> 由于操作系统不同，检查的命令或有差异，具体可参考[官方检查步骤](https://www.apache.org/info/verification.html)

#### 1.1 检查 sha512 哈希

> Mac OS/Linux

```shell
$ shasum -a 512 apache-eventmesh-${release_version}-source.tar.gz
#并将输出内容与 apache-eventmesh-${release_version}-${rc_version}-source.tar.gz.sha512文件内容作对比
$ shasum -a 512 apache-eventmesh-${release_version}-bin.tar.gz
#并将输出内容与 apache-eventmesh-${release_version}-${rc_version}-bin.tar.gz.sha512文件内容作对比
```

> Windows

```shell
$ certUtil -hashfile apache-eventmesh-${release_version}-source.tar.gz SHA512
#并将输出内容与 apache-eventmesh-${release_version}-${rc_version}-source.tar.gz.sha512文件内容作对比
$ certUtil -hashfile apache-eventmesh-${release_version}-bin.tar.gz SHA512
#并将输出内容与 apache-eventmesh-${release_version}-${rc_version}-bin.tar.gz.sha512文件内容作对比
```

#### 1.2 检查 gpg 签名

首先导入发布人公钥。从 svn 仓库导入 KEYS 到本地环境。（发布版本的人不需要再导入，帮助做验证的人需要导入，用户名填发版人的即可）

```shell
$ curl https://dist.apache.org/repos/dist/dev/eventmesh/KEYS >> KEYS
$ gpg --import KEYS
$ gpg --edit-key "${发布人的gpg用户名}"
  > trust

Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision? 5

  > save
```

然后使用如下命令检查签名

```shell
$ gpg --verify apache-eventmesh-${release_version}-source.tar.gz.asc apache-eventmesh-${release_version}-source.tar.gz
$ gpg --verify apache-eventmesh-${release_version}-bin.tar.gz.asc apache-eventmesh-${release_version}-bin.tar.gz
```

### 2.检查源码包的文件内容

解压缩`apache-eventmesh-${release_version}-source.tar.gz`，进行如下检查：

- 检查源码包是否包含由于包含不必要文件，致使 tar 包过于庞大
- 存在`LICENSE`和`NOTICE`文件
- `NOTICE`文件中的年份正确
- 只存在文本文件，不存在二进制文件
- 所有文件的开头都有 ASF 许可证 (可以使用 skywalking-eyes 工具的`license-eye header check`命令检查)
- 能够正确编译，单元测试可以通过 (`./gradlew build`) (目前支持 JAVA 8/gradle 7.0/idea 2021.1.1 及以上)
- 检查是否有多余文件或文件夹，例如空文件夹等

### 3.检查二进制包的文件内容

- 存在`LICENSE`和`NOTICE`文件
- `NOTICE`文件中的年份正确
- 所有文本文件开头都有 ASF 许可证 (可以使用 skywalking-eyes 工具的`license-eye header check`命令检查)
- 根据[ASF 第三方许可证政策](https://apache.org/legal/resolved.html)，检查第三方依赖的许可证：
  - 第三方依赖的许可证与 Apache-2.0 兼容 (运行`checkDeniedLicense `任务，关注`tools/dist-license`目录下新增的 license 文件的兼容性)
  - 所有第三方依赖的许可证都在`LICENSE`文件中声名
  - 依赖许可证的完整版全部在`licenses`目录 (关注`generateDistLicense`任务的日志警告，补充过时工件的 license 内容)
  - 如果依赖的是 Apache 许可证并且存在`NOTICE`文件，那么这些`NOTICE`文件也需要加入到版本的`NOTICE`文件中

## 发起投票

> EventMesh 已经孵化毕业，只需要进行社区投票

- EventMesh 社区投票，发送邮件至：`dev@eventmesh.apache.org`
- 在社区投票的邮件正文中的${Your EventMesh Release Manager}，填写负责本次发布的人员，一般是邮件发送人


### 1.EventMesh 社区投票阶段

1. EventMesh 社区投票，发起投票邮件到`dev@eventmesh.apache.org`。PMC 需要先按照文档检查版本的正确性，然后再进行投票。经过至少 72 小时并统计到 3 个`+1 PMC member`票后，即可进入下一阶段的投票。
2. 宣布投票结果，发起投票结果邮件到`dev@eventmesh.apache.org`。

### 2.EventMesh 社区投票模板

标题：

```
[VOTE] Release Apache EventMesh ${release_version} ${rc_version}
```

正文：

```
Hello EventMesh Community,

    This is a call for vote to release Apache EventMesh version ${release_version}-${rc_version}.

	Release notes:
	https://github.com/apache/eventmesh/releases/tag/v${release_version}-${rc_version}

    The release candidates:
    	https://dist.apache.org/repos/dist/dev/eventmesh/${release_version}-${rc_version}/

    Maven artifacts are available in a staging repository at:
    https://repository.apache.org/content/repositories/orgapacheeventmesh-{staging-id}

	Git tag for the release:
	https://github.com/apache/eventmesh/tree/v${release_version}-${rc_version}

	Keys to verify the Release Candidate:
	https://downloads.apache.org/eventmesh/KEYS

	Hash for the release tag:
	#hashCode of this release tag

	GPG user ID:
	${YOUR.GPG.USER.ID}

	The vote will be open for at least 72 hours or until necessary number of votes are reached.

	Please vote accordingly:

	[ ] +1 approve

	[ ] +0 no opinion

	[ ] -1 disapprove with the reason

	Checklist for reference:

	[ ] Download links are valid.

	[ ] Checksums and PGP signatures are valid.

	[ ] Source code distributions have correct names matching the current release.

	[ ] LICENSE and NOTICE files are correct for each EventMesh repo.

	[ ] All files have license headers if necessary.

	[ ] No compiled archives bundled in source archive.

	More detail checklist  please refer:
    https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist

Thanks,
${Your EventMesh Release Manager}
```

### 3.宣布投票结果模板

标题：

```
[RESULT][VOTE] Release Apache EventMesh ${release_version} ${rc_version}
```

正文：

```
Hello Apache EventMesh PMC and Community,

    The vote closes now as 72hr have passed. The vote PASSES with

    xx (+1 binding) votes from the PMC members,
    member one
    member two
    member three
    ...
    
    xx (+1 non-binding) votes from the rest of the developer community,
    and no further 0 or -1 votes.

    The vote thread: {vote_mail_address}

    Many thanks for all people helping us with the release procedure. I will be working on publishing the artifacts soon.

Thank you for your support.
Your EventMesh Release Manager
```

## 正式发布

### 1.合并分支

合并`${release_version}-prepare`分支的改动到`master`分支，合并完成后删除`release`分支

```shell
$ git checkout master
$ git merge origin/${release_version}-prepare
$ git pull
$ git push origin master
$ git push --delete origin ${release_version}-prepare
$ git branch -d ${release_version}-prepare
```

### 2.迁移源码与二进制包

将源码和二进制包从 svn 的`dev`目录移动到`release`目录

```shell
$ svn mv https://dist.apache.org/repos/dist/dev/eventmesh/${release_version}-${rc_version} https://dist.apache.org/repos/dist/release/eventmesh/ -m "transfer packages for ${release_version}-${rc_version}" #移动源码包与二进制包
$ svn delete https://dist.apache.org/repos/dist/release/eventmesh/KEYS -m "delete KEYS" #清除原有release目录下的KEYS
$ svn cp https://dist.apache.org/repos/dist/dev/eventmesh/KEYS https://dist.apache.org/repos/dist/release/eventmesh/ -m "transfer KEYS for ${release_version}-${rc_version}" #拷贝dev目录KEYS到release目录
```

### 3.确认 dev 和 release 下的包是否正确

- 确认[dev](https://dist.apache.org/repos/dist/dev/eventmesh/)下的`${release_version}-${rc_version}`已被删除
- 删除[release](https://dist.apache.org/repos/dist/release/eventmesh/)目录下上一个版本的发布包，这些包会被自动保存在[这里](https://archive.apache.org/dist/eventmesh/)

```shell
$ svn delete https://dist.apache.org/repos/dist/release/eventmesh/${last_release_version} -m "Delete ${last_release_version}"
```

### 4.在 Apache Staging 仓库发布版本

- 登录 http://repository.apache.org，使用 Apache 账号登录
- 点击左侧的 Staging repositories，
- 搜索 EventMesh 关键字，选择你最近上传的仓库，投票邮件中指定的仓库
- 点击上方的`Release`按钮，这个过程会进行一系列检查

> 等仓库同步到其他数据源，一般需要 24 小时

### 5.GitHub 版本发布

1.Tag the commit (on which the vote happened) with the release version without `-${RELEASE_CANDIDATE}`. 例如：after a successful vote on `v1.2-rc5`, the hash will be tagged again with `v1.2` only.

2.在 [GitHub Releases](https://github.com/apache/eventmesh/releases) 页面的 `${release_version}` 版本上点击 `Edit`

编辑版本号及版本说明，并点击 `Publish release`

### 6.更新下载页面

等待并确认新的发布版本同步至 Apache 镜像后，更新如下页面：

https://eventmesh.apache.org/download/

https://eventmesh.apache.org/zh/download/

GPG 签名文件和哈希校验文件的下载连接应该使用这个前缀：`https://downloads.apache.org/eventmesh/`

> 注意：项目下载链接应该使用 https://www.apache.org/dyn/closer.lua 而不是 closer.cgi 或者 mirrors.cgi

### 7.邮件通知版本发布完成

> 请确保 Apache Staging 仓库已发布成功，一般是在该步骤的 24 小时后发布邮件

发邮件到 `dev@eventmesh.apache.org` 、 `announce@apache.org`

标题：

```
[ANNOUNCE] Apache EventMesh ${release_version} available
```

正文：

```
Hi all,

Apache EventMesh Team is glad to announce the new release of Apache EventMesh ${release_version}.

Apache EventMesh is a dynamic cloud-native eventing infrastructure used to decouple the application and backend middleware layer, which supports a wide range of use cases that encompass complex multi-cloud, widely distributed topologies using diverse technology stacks.

Download Links: https://eventmesh.apache.org/projects/eventmesh/download/

Release Notes: https://eventmesh.apache.org/events/release-notes/v${release_version}/

Website: https://eventmesh.apache.org/

EventMesh Resources:
- Issue: https://github.com/apache/eventmesh/issues
- Mailing list: dev@eventmesh.apache.org



Apache EventMesh Team
```

