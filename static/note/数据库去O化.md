# 数据库去O化
Oracle数据库可迁移至MySQL、Postgresql 数据库

## 表结构迁移

## sql语法

## 数据全量同步

## 存储过程迁移
一般存储过程会通过Oracle的定时任务来触发，改造时通过Java程序来实现。结合存储过程执行的耗时与内存占比情况，采用了两种任务调度的方式来实施。
- 对于耗时严重或者内存占用高的任务，采用Spring Boot 的定时调度任务实现，部署在虚拟主机，可采用条件注解和动态的cron表达式配置任务
- 耗时不高或者内存占用低的任务，采用XXL-JOB的方式实现，最大限度地将服务部署上云


