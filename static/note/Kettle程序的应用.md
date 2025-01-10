# Kettle 程序的应用

## 源码下载与编译
见 github 官网，可通过 cmake 等相关命令编译源码。

## 程序开发
Kettle 程序一般是在 Windows 系统界面进行开发功能。

## 程序部署
程序一般运行在 Linux 主机结合 crontab 实现定时调度，将开发好的作业或转换传输到 Linux 主机，通过 shell 脚本指定启动参数，注意需要指定加载环境变量，crontab 中没有默认的环境变量。

## 日志维护




