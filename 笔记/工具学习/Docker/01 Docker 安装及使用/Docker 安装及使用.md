---
tags:
  - 工具
  - 软件
  - 容器
title: Docker 安装及使用
---

# Docker 安装及使用
## Docker 安装
### Linux
|属性|描述|
|--|--|
|系统版本|CentOS Stream 9|
|架构|	x86_64|

安装命令：
``` bash
sudo dnf install -y docker-ce docker-ce-cli containerd.io
```

### Windows
|属性          |描述|
|--------------|----------------------------------------------|
|系统版本      |Windows 11 家庭中文版                          |
|版本号        |	24H2                                      |
|架构          |	x86_64                                    |
|操作系统版本  |26100.2314                                     |
|体验	      |Windows Feature Experience Pack 1000.26100.32.0|

安装[Docker Desktop](https://www.docker.com/products/docker-desktop/)


## Docker 使用
### Docker 版本号

命令：
``` bash
Docker version
```
> 示例输出

``` bash
Client:
 Version:           27.3.1
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.7.21
  GitCommit:        472731909fa34bd7bc9c087e4c27943f9835f111
 runc:
  Version:          1.1.13
  GitCommit:        v1.1.13-0-g58aa920
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
``` 

### Docker 镜像
#### 查看镜像
``` bash
docker images
```
示例输出
```bash
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mysql               5.7                 123abc456def        3 weeks ago         300MB
mysql               latest              123abc456def        3 weeks ago         300MB
```
>属性说明

1. **REPOSITORY**:
- 该字段表示镜像的名称（即仓库名称）。一个镜像通常由一个或多个标签（Tag）来标识和区分。例如 `mysql` 或 `ubuntu`。
- 一个仓库可能会有多个版本的镜像，每个版本由不同的标签（Tag）来区分。
 2. **TAG**:
- 该字段表示镜像的标签（即版本）。标签是用于标识镜像的版本号或特定标识符。例如 `latest`（通常指代最新版本）或 `5.7`（特定版本号）。
- 如果没有指定标签，Docker 默认使用 `latest` 标签。例如，`mysql` 和 `mysql:latest` 实际上是指向同一个镜像（即 `mysql` 仓库中的最新版本镜像）。
3. **IMAGE ID**:
- 该字段表示镜像的唯一标识符（ID）。它是镜像的哈希值（如 `sha256`），基于镜像内容（包括镜像的所有层）计算得出的，确保镜像唯一性。
- 每个镜像都有一个唯一的 `IMAGE ID`，即使标签相同，指向的镜像内容也可以通过 `IMAGE ID` 来唯一标识。
4. **CREATED**:
- 该字段表示镜像创建的时间。它显示镜像构建或下载到本地的时间。通常是一个相对的时间描述，例如 "3 weeks ago" 或 "2 hours ago"。
- 这个信息有助于你了解镜像的更新时间，尤其当镜像有多个版本时，查看时间可以帮助判断当前镜像的时效性。
5. **SIZE**:
- 该字段表示镜像的大小（以字节为单位），即镜像所占用的存储空间。
- 这包括镜像的所有层和文件。如果一个镜像包含很多层或包含大量的文件，它的大小会相对较大。
- 你可以通过镜像的大小来判断它的复杂程度或是否包含很多不必要的文件。

#### 移除镜像
> 移除命令
```bash
docker rmi
```
>移除方式：

##### 根据镜像名称删除：
``` bash
docker rmi mysql:5.7
```
这将删除名为 `mysql` 且标签为 `5.7` 的镜像。

##### 根据镜像 ID 删除：
``` bash
docker rmi 123abc456def
```
这将删除镜像 ID 为 `123abc456def` 的镜像。

##### 删除多个镜像：
使用镜像名称:版本号
```bash 
docker rmi mysql:5.7 ubuntu:latest
```
使用镜像ID
```bash
docker rmi 123abc456def abc123xyz456
```

##### 强制删除镜像：
如果镜像正在被某些容器使用，默认情况下 Docker 会阻止删除该镜像。如果要强制删除这些镜像，可以使用 `-f` 或 `--force` 参数：
```bash
docker rmi -f mysql:5.7
```

##### 删除未被任何容器使用的镜像：
>删除所有没有被任何容器使用的镜像：
```bash
docker image prune
```
这将删除所有 **dangling**（悬空的）镜像，即那些不再被任何容器引用的镜像。

>删除所有未使用的镜像：

```bash
docker image prune -a
```
这会删除所有未被使用的镜像，包括未被容器使用的镜像。

