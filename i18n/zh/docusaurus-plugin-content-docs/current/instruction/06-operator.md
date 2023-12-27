# EventMesh 与 K8S 集成  

### 1. 依赖

```
docker
golang (version 1.19)
kubernetes (kubectl)
kubernetes 和 docker 之间有一定的兼容性，请检查它们之间的版本兼容性，并下载相应的版本，以确保它们能一起正常工作。
```

### 2. 启动

进入 eventmesh-operator 目录。  
```
cd eventmesh-operator
```

将 CRD 安装到 k8s 集群。
```
make install

# Uninstall CRDs from the K8s cluster
make uninstall
```

如果出现错误 eventmesh-operator/bin/controller-gen: No such file or directory   
运行以下命令：
```
# 如有必要，在本地下载 controller-gen.
make controller-gen
# 如有必要，在本地下载 kustomize.
make kustomize
```

查看 crds 信息：
``` 
# 运行以下命令查看 crds 信息：
kubectl get crds
NAME                                      CREATED AT
connectors.eventmesh-operator.eventmesh   2023-11-28T01:35:21Z
runtimes.eventmesh-operator.eventmesh     2023-11-28T01:35:21Z
```

创建和删除 CRs:   
自定义资源对象位于：/config/samples   
删除 CR，只需将`create`替换为`delete`即可。
```
# 为 eventmesh-runtime、eventmesh-connector-rocketmq 创建 CR, 创建 clusterIP 可让 eventmesh-runtime 与其他组件通信。
make create

#success:
configmap/runtime-config created
runtime.eventmesh-operator.eventmesh/eventmesh-runtime created
service/runtime-cluster-service created
configmap/connector-rocketmq-config created
connectors.eventmesh-operator.eventmesh/connector-rocketmq created

# 查看创建的 service.
kubectl get service
NAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
runtime-cluster-service   ClusterIP   10.109.209.72   <none>        10000/TCP   17s

# Delete CR
make delete
```

运行 eventmesh-operator 创建 pods  
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

# 成功启动 pod 后，运行以下命令查看 pod。
kubectl get pods
NAME                      READY   STATUS    RESTARTS   AGE
connector-rocketmq-0      1/1     Running   0          12m
eventmesh-runtime-0-a-0   1/1     Running   0          12m
```