---
title: SpringCloud配置文件
authors:
  - GU_Nanfa
tags:
  - 微服务
  - SpringCloud
  - 项目配置
---
# Spring Cloud 配置文件
## Spring Cloud 配置文件分类及区别

### bootstrap.yml（bootstrap.properties）：
- 这是系统级别的配置文件，具有比application.yml更高的优先级。
- 在Spring Cloud中，会创建一个“Bootstrap Context”，作为Spring应用的ApplicationContext的父上下文。
- 它负责从外部源（如配置中心）加载配置属性并解析配置，这些配置在应用程序的早期启动阶段就需要用到。
- bootstrap.yml不会被本地配置文件覆盖，确保了关键配置的安全性和准确性。

### application.yml（application.properties）：
- 这是用户级别的资源配置项，用于配置应用程序特有的配置信息，如数据库连接、Web服务器端口、日志级别等。
- 它在bootstrap.yml之后加载，因此其优先级低于bootstrap.yml。

### application-{profile}.yml：
- 这些是特定环境的配置文件，如application-dev.yml、application-prod.yml等，它们用于不同环境下的配置管理。
- 当在特定环境启动应用程序时，Spring Cloud Config将会加载bootstrap.yml和对应环境的application-{profile}.yml的配置。

### config-{application}-{profile}.yml：
- 这是配置中心中的配置文件命名方式，用于区分不同应用和环境的配置。
例如，config-single-client-dev.yml和config-single-client-prod.yml是同一个项目的不同环境版本。

## 对比表格

|配置文件类型|作用|优先级|备注|
|---|---|---|---|
|bootstrap.yml|系统级别的配置文件，加载早期配置，如配置中心地址等。|最高|不会被本地application.yml覆盖，用于服务发现和配置中心的配置。|
|application.yml|应用程序级别的配置文件，用于应用程序的通用配置。|次高|可以被本地application-{profile}.yml覆盖。|
|application-{profile}.yml|特定环境的配置文件，如application-dev.yml。|次高|根据激活的Profile加载，可以覆盖application.yml中的配置。|
|config-{application}-{profile}.yml|配置中心中的配置文件，用于区分不同应用和环境的配置。|次高|根据服务ID和激活的Profile加载，可以覆盖application.yml中的配|

## 优先级(加载顺序)
### 优先级排序
```
bootstrap.yml > application.yml = application-{profile}.yml = config-{application}-{profile}.yml
```
### 说明
- `bootstrap.yml`：具有最高的优先级，因为它在Spring Cloud应用的启动阶段最先加载，用于配置基础设施相关的设置，如连接到配置中心。
- `application.yml`、`application-{profile}.yml`、`config-{application}-{profile}.yml`：这三个文件的优先级相同，都是次高的。其中`application.yml`是应用的默认配置文件，`application-{profile}.yml`是特定Profile的配置文件，而`config-{application}-{profile}.yml`是配置中心中对应应用和Profile的配置文件。它们都可以被激活的Profile所影响，并且可以相互覆盖配置项。
