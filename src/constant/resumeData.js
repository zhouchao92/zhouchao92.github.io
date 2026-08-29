const workTime = Math.round((new Date() - new Date("2020-12-01")) / 1000 / 60 / 60 / 24 / 365);
const realWorkTime = Math.round((new Date() - new Date("2021-07-01")) / 1000 / 60 / 60 / 24 / 365);
const personInfo = {
	name: "周超",
	phoneNumber: "13409890272",
	email: "1178605721@qq.com",
	birthday: "1998-08-17",
	city: "湖北省黄冈市",
	expect: "Java开发工程师",
	workTime: workTime + "年工作经验",
	educations: [
		{
			timestamp: "2017/09/01 - 2021/06/30",
			university: "湖北经济学院",
			specialty: "电子信息工程专业",
			level: "本科",
			certificates: ["大学英语四级"]
		}
	]
};

const ccssoftResume = {
	timestamp: "2023/04/24 - 至今",
	company: "中通服软件科技有限公司（武汉）/ 胜通和",
	position: "Java开发工程师",
	business: "基于云网实时告警及性能数据，结合资源、业务与客户信息，提供面向全云网及业务的告警处理、跨域关联、故障定位及影响分析、故障预处理、故障预测、业务端到端告警监控和故障自动派单能力",
	jobContent: [
		"负责告警资源采集 Kettle 程序开发，实现网元设备、端口、板卡信息等资源文件的解析与入库，优化数据采集流程",
		"完成告警业务流程编排场景设计，基于 Nacos 动态配置实现 Kafka/RocketMQ 告警数据实时转发，提升告警处理时效性",
		"部署电信集团运保基线系统，搭建武汉电信固网宽带 PPPOE 仿真拨测环境，实现拨测预警功能",
		"负责系统安全漏洞修复、生产环境 BUG 排查，完成项目版本迭代与功能验证，管理 Git 省内分支源代码"
	],
	achievement: [
		"主导完成 Oracle 网元库迁移至 PostgreSQL 数据库（70% 工作量），保障数据迁移零丢失，系统平稳上线",
		"研发告警自监控系统（延时入库监控、心跳异常监控、基线监控），降低 30% 人工日常巡检工作量",
		"完成集团两级协同告警与事件上报、网元数据统计等任务，达到电信集团考核标准优秀等级",
		"独立完成 Zeebe 流程编排引擎本地化部署与业务需求开发，实现告警处理流程自动化",
		"指导初级开发工程师完成需求开发，主导省内代码 Review，保障系统日常稳定运行"
	]
};

const ccssoftProjects = [
	{
		timestamp: ccssoftResume.timestamp,
		projectName: "运保告警子中心系统",
		projectDesc: "系统基于采集器程序从华为、中兴、烽火、天元等网管处获取网元设备或动环设备的告警信息，将采集的告警统一格式后存储到 MQ，先经过 Flink 程序对告警数据进行标准化、割接等规则匹配，对其进行打标，再对数据进行预处理，符合派单条件的调用第三方综调系统生成工单，送至运营岗位处理",
		projectDuty: [
			"实现 Kettle 资源文件解析程序，支持设备、端口、板卡、电路信息等多类型数据的解析与入库",
			"基于 MQ + Nacos 动态配置实现告警数据实时转发，优化消息队列通讯方式，提升告警采集实时性",
			"开发告警数据入库监控、动环网管心跳监控、告警基线监控等自监控任务，实现系统健康度自动巡检",
			"基于 Prometheus + RocketMQ 客户端 API 实现端到端微服务性能指标监控，保障系统稳定性"
		],
		technology: [
			"Spring Cloud Alibaba", "Spring Boot", "MyBatisPlus", "PostgreSQL", "Oracle", "Redis", "Kafka", "RocketMQ", "XXL-JOB", "Zeebe", "Flink"
		],
	},
	{
		timestamp: "2025/09/01 - 2026/05/30",
		projectName: "云网变更操作管理系统",
		projectDesc: "基于若依开源框架的芋道前后端系统为基座，用于电信云网变更操作方案的发起、提级、审批、上报集团等全流程管控",
		projectDuty: [
			"完成变更管理系统数字员工EOP接口开发，告警屏蔽校验、执行与终止功能开发，重保场景接收与校验业务开发",
			"迁移变更规则池、重点关注池、光缆割接等业务模块，实现基于 Flowable 框架的光缆割接冲突判定流程",
			"系统 jvm 参数调优，排查容器探活自动重启异常，支撑系统版本迭代，协助解决线上生产问题"
		],
		technology: [
			"Spring Boot", "MyBatisPlus", "PostgreSQL", "Redis", "Kafka", "XXL-JOB", "Flowable"
		],
	}
];

const enbrandsResume = {
	timestamp: "2022/03/17 - 2022/09/05",
	company: "深圳市云积分科技有限公司（武汉） ",
	position: "Java开发工程师",
	business: "各大电商平台（天猫、京东、唯品会、抖音）与品牌 CRM 会员通对接，实现双方系统的会员积分、等级、订单数据以及商品数据打通，维护商家后台管理系统和小程序的会员相关接口，为商家提供定制化的互动玩法",
	jobContent: [
		"设计天猫、唯品会、抖音、京东会员通对接方案，完成标准化 SPI 接口开发与全链路联调",
		"实现积分等级调整业务的重试机制与最终一致性保障，解决分布式事务数据同步问题",
		"完成 Gateway 网关服务接口路由配置，实现阿里全域、京东、抖音会员通新老服务流量分发",
		"协助测试完成接口自动化环境搭建与脚本开发，参与测试用例评审"
	],
	achievement: [
		"独立完成唯品会会员通接入珀莱雅品牌、抖音会员通接入悦诗风吟品牌，支撑项目按期上线",
		"协助完成欧莱雅旗下品牌（3CE、LRP）会员通接入，解决联合利华、美素佳儿等多个品牌线上数据问题",
		"排查并修复新老会员通系统线上异常，优化业务代码，提升系统稳定性"
	]
};

const enbrandsProjects = [
	{
		timestamp: enbrandsResume.timestamp,
		projectName: "云积分电商会员通系统",
		projectDesc: "分布式微服务项目，实现了品牌CRM系统与电商平台线上线下会员绑定、解绑，积分、等级变更同步，会员订单数据推送，商品同步等业务，提供内部商家后台管理系统和电商平台内嵌小程序的接口",
		projectDuty: [
			"开发天猫、唯品会、抖音、京东会员通标准化 SPI 接口，实现积分等级调整业务的重试与最终一致性保障",
			"完成唯品会、抖音平台品牌数据中心对接，打通平台-云积分-品牌全链路数据同步",
			"配置 Gateway 网关服务接口路由，实现阿里全域、京东、抖音会员通新老服务流量平滑分发",
			"排查并修复会员绑定、积分变更、订单同步等线上异常，优化业务代码提升系统稳定性"
		],
		technology: [
			"Spring Cloud Alibaba", "Spring Boot", "MyBatis", "MySQL", "Redis", "Kafka", "XXL-JOB"
		],
	}
];

const ktccResume = {
	timestamp: "2020/12/01 - 2021/12/28",
	company: "康博嘉云（北京）信息科技有限公司武汉分公司",
	position: "Java开发工程师",
	business: "面向国内全科诊所和中医诊所的民营医疗 SaaS 系统，为诊所提供预约、看诊（病历、医嘱）、收费、发药、医嘱执行和库房进销存的全流程服务",
	jobContent: [
		"负责看诊（病历、医嘱）模块的系统功能设计与表结构设计，完成核心业务代码开发",
		"参与外治处方、视力筛查、验光单等功能评审，完成代码开发与前后端联调",
		"完成开放平台看诊模块接口开发与维护，编写接口文档"
	],
	achievement: [
		"设计并完成 PC 端病历附件扫码上传功能，提升医生录入效率",
		"完成九种外治处方、视力筛查和验光单等新功能开发，扩展系统业务覆盖范围",
		"协助前端完成微信公众号医生端界面优化与产品重构，提升用户体验"
	]
};


const ktccProjects = [
	{
		timestamp: ktccResume.timestamp,
		projectName: "康博嘉云诊所医疗 SaaS 系统",
		projectDesc: "单体架构的医疗 SaaS 系统，面向国内的民营诊所，包含病人线下看病的全部流程（预约、预诊、病历书写、医嘱开立、收费、发药、执行等）",
		projectDuty: [
			"负责病历文书、医嘱开立、医嘱执行等核心模块的新功能开发与代码维护",
			"参与外治处方、视力筛查、验光单等功能评审，完成代码开发与前后端联调",
			"编写医嘱统计分析与处方单据报表 SQL，解决诊所线上医嘱相关问题"
		],
		technology: [
			"Spring Boot", "Spring MVC", "MyBatis", "PostgreSQL", "Redis", "Kafka", "FastDFS", "jQuery", "Vue"
		],
	}
];


const specialTalent = [
	{
		percentage: 100, status: 'success', text: '熟练掌握 Java 集合、反射、并发、IO、多线程等技术',
	},
	{
		percentage: 100, status: 'success', text: '熟练掌握 Spring、Spring MVC、Spring Boot、MyBatis Plus、Spring Cloud Alibaba 等主流技术框架',
	},
	{
		percentage: 100, status: 'success', text: '熟练掌握 MySQL、Postgres 数据库以及锁、索引和事务相关原理，具备慢 SQL 调优经验',
	},
	{
		percentage: 75, status: '', text: '熟练使用 Redis 缓存数据库，掌握 Redis 的数据结构、分布式锁的原理以及 Redis 的应用场景',
	},
	{
		percentage: 75, status: '', text: '熟练使用 Kafka、RocketMQ 消息队列、XXL-JOB 分布式任务调度框架、Easy Excel 等中间件技术',
	},
	{
		percentage: 75, status: '', text: '熟悉 JVM 内存模型、类加载机制、垃圾回收算法等基本原理，具备 JVM 参数调优与线上 OOM 问题排查经验',
	},
	{
		percentage: 50, status: 'warning', text: '熟悉 Flink 流式处理、状态管理、容错机制等基本原理，具备项目实践经验',
	},
	{
		percentage: 50, status: 'warning', text: '熟悉常用的设计模式，如单例、工厂、策略、代理、适配器等设计模式，具有实际的项目应用经验',
	},
	{
		percentage: 50, status: 'warning', text: '了解 RAG、MCP、AI Agent 智能体等主流 AI 技术，熟练应用 AI 辅助编程',
	},
];

const summary = realWorkTime + " 年 Java 开发经验，专注于分布式系统设计与高并发场景优化。主导完成电信运保告警系统从 Oracle 到 PostgreSQL 的迁移，具备微服务架构设计、消息中间件集成及生产问题排查能力。熟悉医疗 SaaS、电商会员通和运营保障等业务领域，具备端到端项目交付与团队协作能力";

const resumes = [ccssoftResume, enbrandsResume, ktccResume];

// 合并成一个 列表
const projects = [].concat(ccssoftProjects, enbrandsProjects, ktccProjects);

export { resumes, projects, specialTalent, personInfo, summary };
