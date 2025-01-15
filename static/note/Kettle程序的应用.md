# Kettle 程序的应用

## 源码下载与编译
见 github 官网，可通过 cmake 等相关命令编译源码。（[pentaho-kettle](https://github.com/pentaho/pentaho-kettle)）

## 程序开发
Kettle 程序一般是在 Windows 系统界面进行开发功能。

## 程序部署
程序一般运行在 Linux 主机结合 crontab 实现定时调度，将开发好的作业或转换传输到 Linux 主机，通过 shell 脚本指定启动参数，注意需要指定加载环境变量，crontab 中没有默认的环境变量。

## 日志维护
在部署时将日志统一输出为按日期维护的文件夹中，再通过 crontab 按照脚本定时清理日志文件。
```bash
#!/bin/bash
LOG_DIR="/kettle/logs"
cd "$LOG_DIR" || exit

current_month=$(date +%Y-%m)
last_month=$(date --date='last month' +%Y-%m)

for subdir in "$LOG_DIR"/*/; do
    for dateDir in "$subdir"/*/; do
        subdir_name=$(basename "${dateDir%/}")
        subdir_date=$(date -d "$subdir_name" +%Y-%m)
        if [[ "$subdir_date" == "$last_month" ]]; then
            echo "Deleting directory: $dateDir"
            rm -rf "$dateDir"
        fi
    done
done
```



