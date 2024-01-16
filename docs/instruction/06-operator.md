# Integrate EventMesh with K8S

## 1. Local Deployment

### 1.1 Dependencies

```
docker
golang (version 1.19)
kubernetes (kubectl)
There is some compatibility between kubernetes an docker, please check the version compatibility between them and download the corresponding version to ensure that they work properly together.
```

### 1.2 Start Operator

Go to the `eventmesh-operator` directory.

```shell
$ cd eventmesh-operator
```

Install CRD into the specified k8s cluster.

```shell
$ make install

# Uninstall CRDs from the K8s cluster
$ make uninstall
```

If you get error `eventmesh-operator/bin/controller-gen: No such file or directory`, Run the following command:

```shell
# download controller-gen locally if necessary.
$ make controller-gen
# download kustomize locally if necessary.
$ make kustomize
```

View `crds` information:

```shell
# run the following command to view crds information:
$ kubectl get crd | grep eventmesh-operator.eventmesh
NAME                                      CREATED AT
connectors.eventmesh-operator.eventmesh   2023-11-28T01:35:21Z
runtimes.eventmesh-operator.eventmesh     2023-11-28T01:35:21Z
```

Run EventMesh-Operator.

```shell
# run controller
$ make run
```

### 1.3 Create and delete CRs:

Custom resource objects are located at: `/config/samples`, When deleting CR, simply replace `create` with `delete`.

You can also use the command `kubectl create -f` for a step-by-step deployment.

```shell
# Create CR for eventmesh-runtime、eventmesh-connector-rocketmq,Creating a clusterIP lets eventmesh-runtime communicate with other components.
$ make create

#success:
configmap/runtime-config created
runtime.eventmesh-operator.eventmesh/eventmesh-runtime created
service/runtime-cluster-service created
configmap/connector-rocketmq-config created
connectors.eventmesh-operator.eventmesh/connector-rocketmq created

# View the created Service.
$ kubectl get service
NAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
runtime-cluster-service   ClusterIP   10.109.209.72   <none>        10000/TCP   17s

# After the pods are successfully started, run the following command to view pods.
$ kubectl get pods 
NAME                      READY   STATUS    RESTARTS   AGE
connector-rocketmq-0      1/1     Running   0          12m
eventmesh-runtime-0-a-0   1/1     Running   0          12m

# Delete CR
$ make delete
```

## 2. Deploy EventMesh Runtime in Kubernetes

### 2.1 Deploy EventMesh-Operator

Deploy EventMesh-Operator using the following command (to delete a deployment, simply replace `deploy` with `undeploy`):

```shell
$ cd eventmesh-operator && make deploy
```

You can also deploy EventMesh-Operator using the following command:

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

Use the commands `kubectl get pods`, `kubectl get crd | grep eventmesh-operator.eventmesh` to view EventMesh-Operator deployment status and CRD information.

```shell
$ kubectl get pods
NAME                                  READY   STATUS    RESTARTS   AGE
eventmesh-operator-59c59f4f7b-nmmlm   1/1     Running   0          20s

$ kubectl get crd | grep eventmesh-operator.eventmesh
connectors.eventmesh-operator.eventmesh   2024-01-10T02:40:27Z
runtimes.eventmesh-operator.eventmesh     2024-01-10T02:40:27Z
```

### 2.2 Deploy EventMesh Runtime

Deploy `runtime`, `connector-rocketmq` with the following command:

```shell
$ make create
```

Custom resource objects are located in: `/config/samples` or can be deployed separately using the `kubectl create -f` command:

```shell
# runtime
kubectl create -f config/samples/eventmesh_v1_runtime.yaml
# runtime service
kubectl create -f config/samples/eventmesh_v1_runtime_cluster.yaml
# connector-rocketmq
kubectl create -f config/samples/eventmesh_v1_connectors_rocketmq.yaml
```

Use the command `kubectl get pods` to see if the deployment is successful.

```shell
NAME                                  READY   STATUS    RESTARTS   AGE
connector-rocketmq-0                  1/1     Running   0          9s
eventmesh-operator-59c59f4f7b-nmmlm   1/1     Running   0          3m12s
eventmesh-runtime-0-a-0               1/1     Running   0          15s
```