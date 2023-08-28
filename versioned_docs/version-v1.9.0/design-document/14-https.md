# HTTPS

1. Configuration in eventmesh-runtime

```
eventMesh.properties (add the following configurations)
eventMesh.server.useTls.enabled=true   // Default value: false

Configuring environment variable
-Dssl.server.protocol=TLSv1.1   // Default value: TLSv1.1
-Dssl.server.cer=sChat2.jks     // Place the file in the conPath directory specified by the startup script start.sh
-Dssl.server.pass=sNetty
```

2. Configuration in eventmesh-sdk-java

```
// Create a producer
LiteClientConfig eventMeshHttpClientConfig = new LiteClientConfig();
...

// Enable TLS
eventMeshHttpClientConfig.setUseTls(true);
LiteProducer producer = new LiteProducer(eventMeshHttpClientConfig);

// Configure environment variables
-Dssl.client.protocol=TLSv1.1   // Default value: TLSv1.1
-Dssl.client.cer=sChat2.jks     // Place the file in the conPath directory specified by the application
-Dssl.client.pass=sNetty
```
