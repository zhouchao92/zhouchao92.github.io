<template>
<div>
  <div style="position: relative;" id="myWechatImage">
    <el-image src="/static/wechat-qrcode.jpg" fit="cover" class="wechat-image" :preview-src-list="wechatImage"></el-image>
  </div>

  <!-- 基本信息 -->
  <div>
    <el-divider content-position="left">
      <h4>基本信息</h4>
    </el-divider>

    <el-timeline style="text-align:center;font-size: 16px;">
      <el-timeline-item>
        <el-card>
          <h4>周超</h4>
          <i class="el-icon-phone-outline "><a style="text-decoration: none;color: #303133;" href="tel:+8613409890272">
              <span class="reverse-word">&nbsp;27209890431&nbsp;
              </span></a></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="el-icon-message"><a style="text-decoration: none;color: #303133;" href="mailto:1178605721@qq.com">
              <span class="reverse-word">&nbsp;moc.qq@1275068711&nbsp;</span> </a></i>
          <br />
          <i class="el-icon-male"> 1998年08月 </i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="el-icon-location-outline"> 湖北省黄冈市 </i>
          <br />
          <i class="el-icon-position"> Java开发工程师 </i>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>

  <!-- 专业技能 -->
  <div>
    <el-divider content-position="left">
      <h4>专业技能</h4>
    </el-divider>
    <el-timeline>
      <el-timeline-item>
        <el-card>
          <ul class="talent-item">
            <li v-for="(item,index) in specialTalent " :key="index">
              <el-progress type="circle" :percentage="item.percentage" :status="item.status" :width="20" :show-text="false" v-if="item.status"></el-progress>
              <el-progress type="circle" :percentage="item.percentage" :width="20" :show-text="false" v-else></el-progress>
              <span style="padding-left: 5px;">{{item.text}}</span>
            </li>
          </ul>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>

  <!-- 工作经历 -->
  <div class="work-history">
    <el-divider content-position="left">
      <h4>工作经历</h4>
    </el-divider>
    <el-timeline>
      <el-timeline-item timestamp="2022/03/17 - 2022/09/05" placement="top">
        <el-card>
          <h4>深圳市云积分科技有限公司（武汉） &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Java开发工程师</h4>
          <p>
            <el-tag type="info" size="small">主营业务</el-tag>
          </p>
          <p>各大电商平台（天猫、京东、唯品会、抖音）与品牌 CRM 会员通对接，实现双方系统的会员积分、等级、订单数据以及商品
            数据打通，维护商家后台管理系统和小程序的会员相关接口，为商家提供定制化的互动玩法。 </p>

          <div>
            <p>
              <el-tag type="primary" size="small">工作内容</el-tag>
            </p>
            <ul class="sub-indent-30">
              <li>设计品牌会员通对接方案，完成业务代码开发、接口联调以及项目版本发布工作；</li>
              <li>协助测试完成接口测试自动化的环境搭建和脚本开发，参与测试用例评审；</li>
              <li>协助产品经理完成功能设计和版本迭代，帮助技术支持快速解决品牌方线上问题。</li>
            </ul>
          </div>

          <p>
            <el-tag type="success" size="small">工作成果</el-tag>
          </p>
          <p>
            基本完成云积分与有赞数据中心对接天猫会员通（方案对接、代码开发和联调，未上线），完成唯品会会员通接入珀莱雅品牌和抖音会员通接入悦诗风吟美妆旗舰店品牌，协助完成欧莱雅旗下品牌（3CE、LRP）会员通接入。解决联合利华、欧莱雅、美素佳儿、美赞臣等多个品牌会员通线上数据问题。
          </p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020/12/01 - 2021/12/31" placement="top">
        <el-card>
          <h4>康博嘉云（北京）信息科技有限公司武汉分公司 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java开发工程师</h4>
          <p>
            <el-tag type="info" size="small">主营业务</el-tag>
          </p>

          <p>面向国内全科诊所和中医诊所的民营医疗 SaaS 系统，为诊所提供预约、看诊（病历、医嘱）、收费、发药、医嘱执行和库房进销存的全流程服务。</p>
          <div>
            <p>
              <el-tag type="primary" size="small">工作内容</el-tag>
            </p>
            <ul class="sub-indent-30">
              <li>根据产品需求文档完成看诊（病历、医嘱）模块的系统功能设计和表结构设计；</li>
              <li>负责 SaaS 系统业务代码编写，与前端工程师进行功能联调，配合测试进行问题修复；</li>
              <li>完成开放平台看诊相关模块的接口开发和维护，编写相应的接口文档。</li>
            </ul>
          </div>

          <p>
            <el-tag type="success" size="small">工作成果</el-tag>
          </p>
          <p>设计并完成PC端病历附件扫码上传功能，完成九种外治处方、视力筛查和验光单等新功能开发，协助前端工程师完成微信公众号医生端界面优化和产品重构。</p>

        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>

  <!-- 项目经历 -->
  <div>
    <el-divider content-position="left">
      <h4>项目经历</h4>
    </el-divider>
    <el-timeline>
      <el-timeline-item timestamp="2022/03/17 - 2022/09/05" placement="top">
        <el-card>
          <h4>云积分电商会员通系统</h4>
          <p>
            <el-tag class="technology-label" v-for="item in enbrandsTechnology" :key="item.label" type="warning" size="small">{{item.label}}</el-tag>
          </p>
          <p><b>项目描述：</b>分布式微服务项目，实现了品牌CRM系统与电商平台线上线下会员绑定、解绑，积分、等级变更同步，会员订单数
            据推送，商品同步等业务，提供内部商家后台管理系统和电商平台内嵌小程序的接口。</p>
          <div>
            <b>工作职责：</b>
            <ol class="sub-indent-30">
              <li>天猫、唯品会、抖音、京东会员通平台标准化 spi 接口开发，积分等级调整业务的重试与最终一致性保障代码开发；</li>
              <li>唯品会、抖音平台会员通品牌数据中心对接，平台-云积分-品牌全链路联调，支撑项目上线；</li>
              <li>完成 gateway 网关服务阿里全域会员通、京东会员通和抖音会员通接口路由与新老服务流量分发功能；</li>
              <li>结合日志文件排查新老会员通服务线上问题，优化会员通项目业务代码。</li>
            </ol>
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2020/12/01 - 2021/12/31" placement="top">
        <el-card>
          <h4>康博嘉云诊所医疗 SaaS 系统</h4>
          <p>
            <el-tag class="technology-label" v-for="item in ktccTechnology" :key="item.label" type="warning" size="small">{{item.label}}</el-tag>
          </p>
          <p><b>项目描述：</b>单体架构的医疗 SaaS 系统，面向国内的民营诊所，包含病人线下看病的全部流程（预约、预诊、病历书写、医嘱
            开立、收费、发药、执行等）。</p>
          <div>
            <b>工作职责：</b>
            <ol class="sub-indent-30">
              <li>负责病历文书、医嘱开立、医嘱执行等模块的新功能开发与核心代码维护；</li>
              <li>参与外治处方、视力筛查、验光单等功能的功能评审、代码开发以及前后端联调工作；</li>
              <li>完成医嘱相关的统计分析和处方单据的报表 SQL，解决诊所线上医嘱相关问题。</li>
            </ol>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>

  <!-- 教育经历 -->
  <div>
    <el-divider content-position="left">
      <h4>教育经历</h4>
    </el-divider>
    <el-timeline>
      <el-timeline-item timestamp="2017/09/01 - 2021/06/30" placement="top">
        <el-card>
          <h4>湖北经济学院 - 电子信息工程专业 - 本科</h4>
          <p>
            <el-tag type="success" size="small">大学英语四级</el-tag>
          </p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>

  <!-- 个人总结 -->
  <div>
    <el-divider content-position="left">
      <h4>个人总结</h4>
    </el-divider>

    <el-timeline style="text-align:left;font-size: 16px;">
      <el-timeline-item>
        <el-card>
          <p>熟悉 SaaS 系统和分布式电商会员系统研发，有较强的责任心，具备良好的沟通能力和团队协作精神。</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      wechatImage: ['/static/wechat.jpg'],
      enbrandsTechnology: [{
        label: "Spring Cloud Alibaba"
      },
      {
        label: "Spring Boot"
      },
      {
        label: "MyBatis"
      },
      {
        label: "MySQL"
      },
      {
        label: "Redis"
      },
      {
        label: "Kafka"
      },
      {
        label: "XXL-job"
      },
      ],
      ktccTechnology: [{
        label: "Spring Boot"
      },
      {
        label: "Spring MVC"
      },
      {
        label: "MyBatis"
      },
      {
        label: "PostgreSQL"
      },
      {
        label: "Redis"
      },
      {
        label: "Fast DFS"
      },
      {
        label: "Easy Excel"
      },
      {
        label: "jQuery"
      },
      {
        label: "Vue"
      }
      ],
      specialTalent: [{
        percentage: 100,
        status: 'success',
        text: '熟练掌握 Java 集合、反射、并发、IO、多线程等技术',
      },
      {
        percentage: 100,
        status: 'success',
        text: '熟练掌握 Spring、Spring MVC、Spring Boot、MyBatis、Spring Cloud 等主流技术框架',
      },
      {
        percentage: 100,
        status: 'success',
        text: '熟练掌握 MySQL 数据库以及锁、索引和事务相关原理，熟悉 MySQL 调优',
      },
      {
        percentage: 75,
        status: '',
        text: '熟悉 Redis 数据库的使用，掌握 Redis 的数据结构、分布式锁的原理以及 Redis 的应用场景',
      },
      {
        percentage: 75,
        status: '',
        text: '熟悉 Kafka 消息队列、xxl-job 分布式任务调度框架、Easy Excel 等中间件技术',
      },
      {
        percentage: 75,
        status: '',
        text: '熟悉类加载机制、内存模型、垃圾回收机制、垃圾回收算法等 JVM 基本原理，了解 JVM 调优',
      },
      {
        percentage: 50,
        status: 'warning',
        text: '了解常用的设计模式，有实际的项目应用经验'
      },
      ]
    }
  },
  methods: {},
  mounted() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent) || window.screen.width < 900) {
      // 当前设备是移动设备或屏幕宽度小于900px
      $('#myWechatImage').css('display', 'none');
    };
  }
}
</script>

<style>

</style>
