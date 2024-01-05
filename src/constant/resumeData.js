const personInfo = {
	name: "周超",
	phoneNumber: "13409890272",
	email: "1178605721@qq.com",
	birthday: "1998-08-17",
	city: "湖北省黄冈市",
	expect: "Java开发工程师",
	workTime: Math.round((new Date() - new Date("2020-12-01")) / 1000 / 60 / 60 / 24 / 365) + "年工作经验",
	education: {
		timestamp: "2017/09/01 - 2021/06/30",
		university: "湖北经济学院",
		specialty: "电子信息工程专业",
		level: "本科",
		certificates: ["大学英语四级"]
	}
};

const oscResume = {
	timestamp: "2023/04/24 - 至今",
	projectName: "湖北电信告警子中心系统",
	projectDesc: "系统基于采集器程序从华为、中兴、烽火等网管处获取设备异常信息，先经过 Flink 程序对告警数据进行标准化、割接等规则匹配，对其进行打标，再对数据进行预处理，符合派单条件的调用第三方综调系统生成工单，送至运营岗位处理。",
	projectDuty: [
		"实现 Kettle 对网元的设备信息、端口信息、板卡信息、电路信息等资源文件进行解析入库；",
		"通过 MQ + nacos配置文件的形式实现告警数据实时转发功能，优化MQ通讯方式的告警采集程序；",
		"实现告警数据的入库情况监控，监测动环网管连接的心跳情况自动任务，生成各网管告警基线数据；",
		"基于 PromQL 实现从 Promethues 获取容器 POD 的各项核心指标信息完成微服务监控，基于指标阈值生成软告警。"
	],
	technology: [
		"Spring Cloud Alibaba", "Spring Boot", "MyBatisPlus", "PostgreSQL", "Redis", "Kafka", "RocketMQ", "XXL-JOB", "Zeebe"
	],
	company: "中通服软件科技有限公司（武汉）",
	position: "Java开发工程师",
	business: "支撑湖北省内告警子中心业务系统，涵盖告警采集、标准化、预处理、派单等过程。",
	jobContent: [
		"告警数据采集 Kettle 任务开发，功能业务代码开发，对外接口开发与联调工作；",
		"告警相关流程编排场景设计与功能开发，优化告警 Kafka 和 RocketMQ 通信方式采集与解析程序；",
		"解决生产环境的 BUG，优化系统代码，完成项目版本发布和功能验证工作。"
	],
	achievement: "告警设备数据采集入库，动环专业获取告警数据接口开发，告警延时入库监控、动环采集器心跳异常监控，集团两级协同告警上报与网元数据统计上报，每小时告警统计并根据基线值和阈值上下限生成软告警。"
};

const enbrandsResume = {
	timestamp: "2022/03/17 - 2022/09/05",
	projectName: "云积分电商会员通系统",
	projectDesc: "分布式微服务项目，实现了品牌CRM系统与电商平台线上线下会员绑定、解绑，积分、等级变更同步，会员订单数据推送，商品同步等业务，提供内部商家后台管理系统和电商平台内嵌小程序的接口。",
	projectDuty: [
		"天猫、唯品会、抖音、京东会员通平台标准化 spi 接口开发，积分等级调整业务的重试与最终一致性保障代码开发；",
		"唯品会、抖音平台会员通品牌数据中心对接，平台-云积分-品牌全链路联调，支撑项目上线；",
		"完成 gateway 网关服务阿里全域会员通、京东会员通和抖音会员通接口路由与新老服务流量分发功能；",
		"结合日志文件排查新老会员通服务线上问题，优化会员通项目业务代码。"
	],
	technology: [
		"Spring Cloud Alibaba", "Spring Boot", "MyBatis", "MySQL", "Redis", "Kafka", "XXL-JOB"
	],
	company: "深圳市云积分科技有限公司（武汉） ",
	position: "Java开发工程师",
	business: "各大电商平台（天猫、京东、唯品会、抖音）与品牌 CRM 会员通对接，实现双方系统的会员积分、等级、订单数据以及商品数据打通，维护商家后台管理系统和小程序的会员相关接口，为商家提供定制化的互动玩法。",
	jobContent: [
		"设计品牌会员通对接方案，完成业务代码开发、接口联调以及项目版本发布工作；",
		"协助测试完成接口测试自动化的环境搭建和脚本开发，参与测试用例评审；",
		"协助产品经理完成功能设计和版本迭代，帮助技术支持快速解决品牌方线上问题。"
	],
	achievement: "基本完成云积分与有赞数据中心对接天猫会员通（方案对接、代码开发和联调），完成唯品会会员通接入珀莱雅品牌和抖音会员通接入悦诗风吟美妆旗舰店品牌，协助完成欧莱雅旗下品牌（3CE、LRP）会员通接入。解决联合利华、欧莱雅、美素佳儿、美赞臣等多个品牌会员通线上数据问题。"
};

const ktccResume = {
	timestamp: "2020/12/01 - 2021/12/28",
	projectName: "康博嘉云诊所医疗 SaaS 系统",
	projectDesc: "单体架构的医疗 SaaS 系统，面向国内的民营诊所，包含病人线下看病的全部流程（预约、预诊、病历书写、医嘱开立、收费、发药、执行等）。",
	projectDuty: [
		"负责病历文书、医嘱开立、医嘱执行等模块的新功能开发与核心代码维护；",
		"参与外治处方、视力筛查、验光单等功能的功能评审、代码开发以及前后端联调工作；",
		"完成医嘱相关的统计分析和处方单据的报表 SQL，解决诊所线上医嘱相关问题。"
	],
	technology: [
		"Spring Boot", "Spring MVC", "MyBatis", "PostgreSQL", "Redis", "Kafka", "FastDFS", "jQuery", "Vue"
	],
	company: "康博嘉云（北京）信息科技有限公司武汉分公司",
	position: "Java开发工程师",
	business: "面向国内全科诊所和中医诊所的民营医疗 SaaS 系统，为诊所提供预约、看诊（病历、医嘱）、收费、发药、医嘱执行和库房进销存的全流程服务。",
	jobContent: [
		"根据产品需求文档完成看诊（病历、医嘱）模块的系统功能设计和表结构设计；",
		"负责 SaaS 系统业务代码编写，与前端工程师进行功能联调，配合测试进行问题修复；",
		"完成开放平台看诊相关模块的接口开发和维护，编写相应的接口文档。"
	],
	achievement: "设计并完成PC端病历附件扫码上传功能，完成九种外治处方、视力筛查和验光单等新功能开发，协助前端工程师完成微信公众号医生端界面优化和产品重构。"
};


const specialTalent = [
	{
		percentage: 100, status: 'success', text: '熟练掌握 Java 集合、反射、并发、IO、多线程等技术',
	},
	{
		percentage: 100, status: 'success', text: '熟练掌握 Spring、Spring MVC、Spring Boot、MyBatis、Spring Cloud 等主流技术框架',
	},
	{
		percentage: 100, status: 'success', text: '熟练掌握 MySQL 数据库以及锁、索引和事务相关原理，熟悉 MySQL 调优',
	},
	{
		percentage: 75, status: '', text: '熟悉 Redis 缓存数据库的使用，掌握 Redis 的数据结构、分布式锁的原理以及 Redis 的应用场景',
	},
	{
		percentage: 75, status: '', text: '熟悉 Kafka 消息队列、XXL-JOB 分布式任务调度框架、Easy Excel 等中间件技术',
	},
	{
		percentage: 75, status: '', text: '熟悉类加载机制、内存模型、垃圾回收机制、垃圾回收算法等 JVM 基本原理，了解 JVM 调优',
	},
	{
		percentage: 50, status: 'warning', text: '了解常用的设计模式，有实际的项目应用经验'
	},
];

const summary = "熟悉 SaaS 系统、分布式电商会员系统和告警子中心运营系统研发，有较强的责任心，具备良好的沟通能力和团队协作精神。";

const resumes = [oscResume, enbrandsResume, ktccResume];

export { resumes, specialTalent, personInfo, summary };