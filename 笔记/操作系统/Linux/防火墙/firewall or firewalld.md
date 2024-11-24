---
tags:
  - 防火墙
  - Linux
  - 操作系统
  - 工具
title: firewall & firewalld
---
# 防火墙(firewalld.service)
## 基本功能
### 启动/开启防火墙
```bash
systemctl start firewalld
```
### 停止/关闭防火墙
```bash
systemctl stop firewalld
```
### 重启防火墙
```bash
systemctl restart firewalld
```
### 开机自启
- 开启
```bash
systemctl enable firewalld
```
- 关闭
```bash
systemctl disable firewalld
```
### 查看防火墙状态信息 
```bash
systemctl status firewalld
```
### 查看防火墙已开启端口
```
firewall-cmd --zone=public --list-ports
```

## 开放/关闭端口操作步骤
### 01 查询指定端口是否开放
```bash
netstat -apn | grep 端口号
```
### 02 添加指定需要开放的端口<sup style="color:red">*</sup>
```bash
firewall-cmd --add-port=123/tcp --permanent
```
### 03 移除指定端口<sup style="color:red">*</sup>
```bash
firewall-cmd --remove-port=123/tcp --permanent
```
### 04 重载入添加的端口
```bash
firewall-cmd --reload
```
### 05 查询指定端口是否开启成功
```bash
firewall-cmd --query-port=123/tcp
```
