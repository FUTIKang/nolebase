---
tags:
  - 工具
  - SpringBoot
  - 软件开发
  - 软件开发/SpringBoot
title: Spring Boot 报错指南
---
# Spring Boot 报错指南
## APPLICATION FAILED TO START
### Reason: Failed to determine a suitable driver class
``` Shell
Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
2023-11-24T17:03:29.064+08:00 ERROR 18704 --- [           main] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************

Description:

Failed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.

Reason: Failed to determine a suitable driver class


Action:

Consider the following:
	If you want an embedded database (H2, HSQL or Derby), please put it on the classpath.
	If you have database settings to be loaded from a particular profile you may need to activate it (no profiles are currently active).

进程已结束,退出代码1
```
#### 引起
>在项目中未使用到DataSource，但在pon.xml中引入了mybatis-plus 项目依赖
#### 原因
>在springboot 工程启动的时候自动初始化DataSource相关的信息，但是却找不到
#### 解决方案
- 01 : 在启动类的 @SpringBootApplication 加上
```java
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class,
DataSourceTransactionManagerAutoConfiguration.class })
```
- 02 :在application.properties 中配置
```java
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration```