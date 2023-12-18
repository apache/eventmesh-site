# EventMesh与K8S集成  

### 1. 依赖

```
docker
golang (version 1.19)
kubernetes (kubectl)
kubernetes和docker之间有一定的兼容性，请检查它们之间的版本兼容性，并下载相应的版本，以确保它们能一起正常工作。
```

### 2. 启动

进入eventmesh-operator目录。  
```
cd eventmesh-operator
```

将CRD安装到k8s集群。
```
make install

# Uninstall CRDs from the K8s cluster
make uninstall
```

如果出现错误 eventmesh-operator/bin/controller-gen: No such file or directory   
运行以下命令:  
```
# 如有必要，在本地下载controller-gen.
make controller-gen
# 如有必要，在本地下载kustomize.
make kustomize
```

查看crds信息:  
``` 
# 运行以下命令查看 crds 信息:
kubectl get crds
NAME                                      CREATED AT
connectors.eventmesh-operator.eventmesh   2023-11-28T01:35:21Z
runtimes.eventmesh-operator.eventmesh     2023-11-28T01:35:21Z
```

创建和删除CRs:   
自定义资源对象位于: /config/samples   
删除CR，只需将`create`替换为`delete`即可。
```
# 为eventmesh-runtime、eventmesh-connector-rocketmq创建CR,创建clusterIP可让eventmesh-runtime与其他组件通信。
make create

#success:
configmap/runtime-config created
runtime.eventmesh-operator.eventmesh/eventmesh-runtime created
service/runtime-cluster-service created
configmap/connector-rocketmq-config created
connectors.eventmesh-operator.eventmesh/connector-rocketmq created

# 查看创建的service.
kubectl get service
NAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
runtime-cluster-service   ClusterIP   10.109.209.72   <none>        10000/TCP   17s

# Delete CR
make delete
```

运行eventmesh-operator创建pods  
```

# run controller
make run
# log
go fmt ./...
go vet ./...
go run ./main.go
INFO    controller-runtime.metrics      Metrics server is starting to listen    {"addr": ":9020"}
INFO    setup   starting manager
INFO    Starting server {"kind": "health probe", "addr": "[::]:8081"}
INFO    Starting server {"path": "/metrics", "kind": "metrics", "addr": "[::]:9020"}
INFO    runtime         Creating a new eventMeshRuntime StatefulSet.    {"StatefulSet.Namespace": "default", "StatefulSet.Name": "eventmesh-runtime-0-a"}
INFO    connector       Creating a new Connector StatefulSet.   {"StatefulSet.Namespace": "default", "StatefulSet.Name": "connector-rocketmq"}
INFO    runtime         Successful reconciliation!
INFO    connector       Successful reconciliation!

# 成功启动pod后，运行以下命令查看pod。
kubectl get pods
NAME                      READY   STATUS    RESTARTS   AGE
connector-rocketmq-0      1/1     Running   0          12m
eventmesh-runtime-0-a-0   1/1     Running   0          12m
```