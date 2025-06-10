# Kettle 程序的应用

## 源码下载与编译

见 github 官网，可通过 cmake 等相关命令编译源码。（[pentaho-kettle](https://github.com/pentaho/pentaho-kettle)）


## 程序开发

Kettle 程序一般是在 Windows 系统界面进行开发功能。


### 特殊分割符案例

在部分流程如csv文件解析中，如果分隔符为 ASCII 码，需要用到 `$[]`，其中[]中的值为ASCII码中的十六进制数。

![ASCII字符表](/static/pic/ASCII字符表.png)


## 程序部署

程序一般运行在 Linux 主机结合 crontab 实现定时调度，将开发好的作业或转换传输到 Linux 主机，通过 shell 脚本指定启动参数，注意需要指定加载环境变量，crontab 中没有默认的环境变量。

1. 查看Java环境（大于1.6） `cat .shell_profile`
2. unzip 命令解压 data-integration.zip `unzip data-integration.zip -d ./`
3. kettle 目录赋.sh文件执行权限 `chmod +X *.sh`
4. `./kitchen.sh` 检查是否可用


### 空字符串优化

解决空字符被替换识别为 null 问题
```bash
# 修改用户名目录下 kettle.properties 文件
vi /home/username/.kettle/kettle.properties
```

```ini
# 需要追加的内容
KETTLE_EMPTY_STRING_DIFFERS_FROM_NULL=Y
```

kettle 任务启动脚本参考
```bash
#!/bin/bash
. /etc/profile
. ~/.bash_profile

# crontab 不一定会加载环境变量（由配置决定），可能会导致找不到

BASE_KETTLE_PATH=/home/username/kettle
BASE_LOG_PATH="$BASE_KETTLE_PATH/logs/taskname"
TASK_LOG_PATH="${BASE_LOG_PATH}/taskname.log"
export KETTLE_HOME=/home/username/kettle/data-integration

if [ ! -z "$BASE_LOG_PATH" ]; then
    mkdir -p "$BASE_LOG_PATH"
fi

$KETTLE_HOME/kitchen.sh -file=$BASE_KETTLE_PATH/jobs/taskname/taskname.kjb >> "${TASK_LOG_PATH}" 2>&1 &
```


## 日志维护

在部署时将日志统一输出为按日期维护的文件夹中，再通过 crontab 按照脚本定时清理日志文件。
```bash
#!/bin/bash
LOG_DIR="/home/username/kettle/logs"
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



