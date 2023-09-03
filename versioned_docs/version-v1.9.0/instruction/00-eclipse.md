# Import EventMesh into eclipse

We recommend using `Intellij IDEA` for development, if you wish to use `Eclipse`, you can refer to the following steps to import the project.

### 1. Dependencies

```
64-bit JDK 1.8+.
Gradle is at least 7.0, 7.0.* recommended;
eclipse installed gradle plugin or eclipse comes with gradle plugin;
```

### 2. Download source code

```shell
git@github.com:apache/eventmesh.git
```

### 3. Project compile eclipse environment

Open a command line terminal and run `gradlew cleanEclipse eclipse`

###  4. Configuration changes

Modify the project name to match the `settings.gradle` configuration file parameter `rootProject.name`.

### 5. Modify  `eclipse.init` configuration file, configure lombok to 1.18.8 version for example

```
-javaagent:lombok-1.18.8.jar
-XBootclasspath/a:lombok-1.18.8.jar
```

### 6. 202106 version, `eclipse.init` add configuration parameters

```
--illegal-access=permit
```

### 7. Import projetc

Open eclipse, import gradle project to IDE.