---
title: nvm(管理node版本)
tags:
  - 工具
  - 前端
  - nodeJS
  - nvm
---
# nvm
## 介绍
在工作中，我们可能同时在进行2个或者多个不同的项目开发，每个项目的需求不同，进而不同项目必须依赖不同版本的NodeJS运行环境，这种情况下，对于维护多个版本的node将会是一件非常麻烦的事情，nvm就是为了解决这个问题而产生的，他可以方便的在同一台设备上进行多个node版本之间切换。
### 什么是nvm
NodeVersionManager（NVM）在处理多项目中不同Node.js版本需求的解决方案。NVM允许轻松切换版本，包括下载远程LTS版本、Windows安装步骤、配置淘宝镜像、基本使用命令及常见操作。对于Node.js开发者来说，NVM简化了版本管理，提高工作效率。
### 为什么使用nvm
NVM 允许用户：

- 使用简单的命令在本地下载任何远程长期支持 （LTS） 版本的 Node.js。
- 直接从命令行在 Node.js 的多个版本之间轻松切换。
- 设置别名以轻松在不同下载版本的 Node.js之间切换。

## 安装


## 使用
### 查看可在线安装`node`版本
``` bash
nvm list available
```
### 查看已安装`node`版本
```bash
nvm list
```
或
```bash
nvm ls
```
### 查看当前正在使用的`node`版本
```bash
nvm current
```
### 安装指定`node`版本
```bash
nvm install [版本号]
```
### 卸载指定`node`版本
```bash
nvm uninstall [版本号]
```
### 使用指定`node`版本
```bash
nvm use [版本]
```
### 为指定的`node` 版本设定别名
```bash
nvm alias [别名] [版本] 
```
### 移除别名
```bash
nvm unalias [别名]
```
## 镜像

> 淘宝镜像(更新日期:2024年11月21日)
``` bash
node_mirror: http://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

> 清华镜像
```bash

```

> 腾讯镜像
```bash

```


> 本文档参照
> - https://blog.csdn.net/muzidigbig/article/details/141108865
> - https://blog.csdn.net/m0_74293254/article/details/142433084