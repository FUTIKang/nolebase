---
title: 本地安装 Jar 包
---
# Maven 安装本地 Jar 包
## 安装命令
``` bash
mvn install:install-file -Dfile=[文件名.jar] -DgroupId=[groupId] -DartifactId=[artifactId] -Dversion=[版本号] -Dpackaging=jar
```
> 示例

以 `aliyun-java-sdk-core` 为例
打开文件，查看其pom文件，一般位于META-INF文件夹下，这里具体的路径为
>aliyun-java-sdk-core-3.2.8.jar\META-INF\maven\com.aliyun\aliyun-java-sdk-core
![[../../../public/maven/Pasted image 20241120235923.png]]

打开pom文件后，可以在头部区域获得mvn安装所需要的基本信息
![[../../../public/maven/Pasted image 20241121000106.png]]

将这些信息替换上述命令空缺区域即可，如下：
``` bash
mvn install:install-file -Dfile=E:\Project\Project_Company\jar\aliyun-java-sdk-core-3.2.8.jar -DgroupId=com.aliyun -DartifactId=aliyun-java-sdk-core -Dversion=3.2.8 -Dpackaging=jar
```