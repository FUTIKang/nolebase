---
title: SELECT【查询】
tags:
  - 数据库
  - SQL
  - SELECT
---
# SELECT【查询】
## 基本语法
### 查询表中的所有列
``` SQL
SELECT
	*
FROM
	table_name;
```
### 查询表中的指定列
```SQL
SELECT
	column_1,
	column_2,
	...
FROM
	table_name;
```
>==注意事项：==
>`SELECT` 查询中需要指定查询的表以及表中需要返回数据的列；
>如果需要返回多个列，则需要使用 ` , ` 将列进行分隔。 
>==注：==
>本节只介绍最基础的 SELECT 语法，高级查询请前往以下章节
>[[02 Distinct【去重】]]
>[[03 ORDER BY【排序】]]
>[[04 GROUP BY【分组】]]
>[[05 JOIN【子查询】]]
>[[06 WHERE【条件查询】]]
>[[07 Fetch 子句【分页查询】]]
>[[08 HAVING]]