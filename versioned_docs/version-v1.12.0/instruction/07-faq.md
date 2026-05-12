# Frequently Asked Questions

## Importing into Eclipse

We recommend using `Intellij IDEA` for development. If you prefer to use `Eclipse`, you can follow the steps below to import the project.

### Prerequisites

- 64-bit JDK 1.8+
- Gradle 7.0+
- Eclipse with Gradle plugin installed

### Download

```shell
git clone https://github.com/apache/eventmesh.git
```

### Project Compilation for Eclipse Environment

Open the command-line terminal and run `./gradlew cleanEclipse eclipse`.

### Configuration Modifications

Modify the project name to match the parameters in the `settings.gradle` configuration file, specifically the `rootProject.name` parameter.

### Modify the `eclipse.init` Configuration File

Configure Lombok, using version 1.18.8 as an example:

```
-javaagent:lombok-1.18.8.jar
-XBootclasspath/a:lombok-1.18.8.jar
```

### Eclipse Configuration for Version 202106

Add the configuration parameter to `eclipse.init`: `--illegal-access=permit`

### Import

Open Eclipse and import the EventMesh project into the IDE.