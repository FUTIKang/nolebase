---
tags:
  - 工具
  - 容器
  - Docker
title: Docker安装容器组件
---
# 安装 MySQL
官方镜像地址：
[mysql - Official Image | Docker Hub](https://hub.docker.com/_/mysql)
使用命令：
``` bash
docker run --name mysql -p 监听端口:容器端口 -e MYSQL_ROOT_PASSWORD=密码 -d mysql:版本号[5.7|8.0] --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

# 安装 Redis
官方镜像地址：
[redis - Official Image | Docker Hub](https://hub.docker.com/_/redis)
使用命令：
``` bash
docker run --name mysql -p 监听端口:容器端口 -e MYSQL_ROOT_PASSWORD=密码 -d mysql:版本号[5.7|8.0] --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```
默认端口：
- 6379
设置密码：
>docker ps -> docker exec -it redis bash -> cd /usr/local/bin/ -> ./redis-server
>CONFIG SET requirepass 密码

查看密码命令：
> CONFIG GET requirepass
# 安装 RabbitMQ
官方镜像地址：
[rabbitmq - Official Image | Docker Hub](https://hub.docker.com/_/rabbitmq)
使用命令：
``` bash
docker run --name rabbitmq -p 5672:5672 -p 15672:15672 -d rabbitmq:management
```
端口介绍；
- 5672 RabbitMq 编程语言客户端连接端口
- 15672 RabbitMq管理界面端口
- 25672 RabbitMq集群端口

浏览器访问Web管理界面
http://localhost:15672