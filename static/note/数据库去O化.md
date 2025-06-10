# 数据库去O化

为了信创环境的建设，国内大部分软件系统都逐步要求数据库去O化，即 Oracle 数据库需要迁移至 MySQL、Postgresql、达梦数据库等开源或国产数据库。

## 表结构迁移

借助 AI 对话，将导出的 Oracle 表结构转换为其他数据库的表结构，需要额外注意序列、主键、索引等信息。

## sql语法

针对业务中的 sql 语句，可能采用了 Oracle 函数而其他数据库不存在的，比如 nvl，这种判空的语法，需要人工核对。

```sql
// Oracle 特有语法
SELECT 1 FROM DUAL;

```

## 数据全量同步

一般可以借助 Kettle 的表输入和表输出组件来实现数据的全量迁移，性能参数可以通过 shell 脚本来指定 jvm 的参数，从而提高迁移效率。

## 存储过程迁移

一般存储过程会通过Oracle的定时任务来触发，改造时通过Java程序来实现。结合存储过程执行的耗时与内存占比情况，采用了两种任务调度的方式来实施。
- 对于耗时严重或者内存占用高的任务，采用Spring Boot 的定时调度任务实现，部署在虚拟主机，可采用条件注解和动态的cron表达式配置任务。
- 耗时不高或者内存占用低的任务，采用XXL-JOB的方式实现，最大限度地将服务部署上云。

## 开源工具

Alibaba 的开源工具 [datax](https://github.com/alibaba/DataX)，采用 json 配置数据库类型、性能参数与业务 sql 的形式，可以在短时间内进行业务切换，以及完成数据的迁移。

datax 结合 python 的定时调度框架实现定时调度。启动指定参数 `python python_filepath cron_filepath`，cron_filepath 中按照 6 位 cron 表达式 + 脚本路径配置任务。为了监测服务可用性，可以通过配置任务 `0/1 * * * * echo "[$(date +'%Y-%m-%d %H:%M:%S')] datax heartbeat"` 每1分钟输出一次心跳信息。

```python
# -*- coding: utf-8 -*-
import logging
import subprocess
import argparse
from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.executors.pool import ThreadPoolExecutor

# 创建一个 logger
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# 创建一个文件处理器，用于写入日志文件
file_handler = logging.FileHandler('/usr/local/datax/log/python.log')
file_handler.setLevel(logging.INFO)

# 创建一个流处理器，用于输出到控制台
stream_handler = logging.StreamHandler()
stream_handler.setLevel(logging.INFO)

# 定义日志格式
formatter = logging.Formatter('%(asctime)s %(levelname)s %(module)s: %(message)s')

# 设置处理器的格式
file_handler.setFormatter(formatter)
stream_handler.setFormatter(formatter)

# 将处理器添加到 logger
logger.addHandler(file_handler)
logger.addHandler(stream_handler)


"""解析文件的单行任务，返回 cron 表达式和命令"""
def parse_crontab_line(line):
  """parse single line configuration like crontab"""
  parts = line.split()

  if len(parts) < 6:
    logger.info("Invalid crontab line format, content:{}".format(parts))
    return None, None
  schedule = '0 ' + ' '.join(parts[:5])
  command = ' '.join(parts[5:])
  return schedule, command.strip()


"""python 执行 shell 命令"""
def execute_command(command):
  """execute shell command"""
  try:
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    return_code = process.returncode

    if stderr:
      logger.error(stderr.decode('utf-8'))
    logger.info("Command {} return Code:{}".format(command, return_code))
  except Exception as e:
    logger.error("Error executing command:{}".format(e))


"""加载文件内容"""
def load_tasks(filename):
  """load tasks from the file"""
  tasks = []
  with open(filename) as file:
    for line in file:
      line = line.strip()
      if line and not line.startswith('#'):
        schedule, command = parse_crontab_line(line)
        if schedule and command:
          logger.info("Add task command: {}, schedule: {}".format(command, schedule))
          tasks.append((schedule, command))
  return tasks


"""主进程入口"""
def main():
  parser = argparse.ArgumentParser(description="Load enhanced crontab-like tasks (including seconds) from a file and execute them using APScheduler.")
  parser.add_argument('filename', type=str, help='The path to the configuration file containing crontab-like tasks')

  args = parser.parse_args()

  tasks = load_tasks(args.filename)

  max_instances = len(tasks) + 1
  executors = {
      'default': ThreadPoolExecutor(max_instances)
  }
  scheduler = BlockingScheduler(executors=executors)

  for task in tasks:
    schedule, command = task
    schedule_parts = schedule.split()
    scheduler.add_job(execute_command, 'cron', args=[command],
                      second=schedule_parts[0], minute=schedule_parts[1], hour=schedule_parts[2],
                      day=schedule_parts[3], month=schedule_parts[4], day_of_week=schedule_parts[5], max_instances=max_instances)

  try:
    scheduler.start()
  except (KeyboardInterrupt, SystemExit):
    logger.info('Scheduler exception...')


if __name__ == '__main__':
  main()
```


