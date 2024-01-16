# EventMesh 与 K8S 集成

## 1. 本地部署

### 1.1 依赖

```
docker
golang (version 1.19)
kubernetes (kubectl)
kubernetes 和 docker 之间有一定的兼容性，请检查它们之间的版本兼容性，并下载相应的版本，以确保它们能一起正常工作。
```

### 1.2 启动

进入 `eventmesh-operator` 目录。

```shell
$ cd eventmesh-operator
```

将 CRD 安装到 k8s 集群。

```shell
$ make install

# Uninstall CRDs from the K8s cluster
$ make uninstall
```

如果出现错误 `eventmesh-operator/bin/controller-gen: No such file or directory`，运行以下命令：

```shell
# 如有必要，在本地下载 controller-gen.
$ make controller-gen
# 如有必要，在本地下载 kustomize.
$ make kustomize
```

查看 `crds` 信息：

``` shell
# 运行以下命令查看 crds 信息：
$ kubectl get crd | grep eventmesh-operator.eventmesh
NAME                                      CREATED AT
connectors.eventmesh-operator.eventmesh   2023-11-28T01:35:21Z
runtimes.eventmesh-operator.eventmesh     2023-11-28T01:35:21Z
```

启动 EventMesh-Operator。

```shell
# run controller
$ make run
```

### 1.3 创建和删除 CRs: 

自定义资源对象位于：`/config/samples`，进行部署，删除 CR，只需将 `create` 替换为 `delete` 即可。

也可使用命令 `kubectl create -f` 进行分步部署。

```shell
# 为 eventmesh-runtime、eventmesh-connector-rocketmq 创建 CR, 创建 clusterIP 可让 eventmesh-runtime 与其他组件通信。
$ make create

#success:
configmap/runtime-config created
runtime.eventmesh-operator.eventmesh/eventmesh-runtime created
service/runtime-cluster-service created
configmap/connector-rocketmq-config created
connectors.eventmesh-operator.eventmesh/connector-rocketmq created

# 查看创建的 service.
$ kubectl get service
NAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
runtime-cluster-service   ClusterIP   10.109.209.72   <none>        10000/TCP   17s

# 运行以下命令查看 pods。
$ kubectl get pods
NAME                      READY   STATUS    RESTARTS   AGE
connector-rocketmq-0      1/1     Running   0          12m
eventmesh-runtime-0-a-0   1/1     Running   0          12m

# Delete CR
$ make delete
```

## 2. 在 Kubernetes 中部署 EventMesh Runtime

### 2.1 部署 EventMesh-Operator

使用以下命令部署 EventMesh-Operator（删除部署，只需将 `deploy` 替换为 `undeploy`）：

```shell
$ cd eventmesh-operator && make deploy
```

也可使用以下命令部署 EventMesh-Operator：

```shell
# install CRDs
$ make install

# ServiceAccount
kubectl create -f config/rbac/service_account.yaml
# ClusterRole
kubectl create -f config/rbac/role.yaml
# ClusterRoleBinding
kubectl create -f config/rbac/role_binding.yaml
# eventmesh_operator Deployment
kubectl create -f config/samples/eventmesh_operator.yaml
```

使用命令 `kubectl get pods`、`kubectl get crd | grep eventmesh-operator.eventmesh` 查看 EventMesh-Operator 部署状态和 CRD 信息

```shell
$ kubectl get pods
NAME                                  READY   STATUS    RESTARTS   AGE
eventmesh-operator-59c59f4f7b-nmmlm   1/1     Running   0          20s

$ kubectl get crd | grep eventmesh-operator.eventmesh
connectors.eventmesh-operator.eventmesh   2024-01-10T02:40:27Z
runtimes.eventmesh-operator.eventmesh     2024-01-10T02:40:27Z
```

### 2.2 部署 EventMesh Runtime

使用以下命令部署 `runtime`、`connector-rocketmq`：

```shell
$ make create
```

自定义资源对象位于：`/config/samples`，也可使用 `kubectl create -f` 命令分别部署：

```shell
# runtime
kubectl create -f config/samples/eventmesh_v1_runtime.yaml
# runtime service
kubectl create -f config/samples/eventmesh_v1_runtime_cluster.yaml
# connector-rocketmq
kubectl create -f config/samples/eventmesh_v1_connectors_rocketmq.yaml
```

使用命令 `kubectl get pods` 查看是否部署成功

```shell
NAME                                  READY   STATUS    RESTARTS   AGE
connector-rocketmq-0                  1/1     Running   0          9s
eventmesh-operator-59c59f4f7b-nmmlm   1/1     Running   0          3m12s
eventmesh-runtime-0-a-0               1/1     Running   0          15s
```