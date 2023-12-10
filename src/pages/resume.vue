<template>
<div class="resume-box">
  <div id="myWechatImage">
    <el-image src="/static/wechat-qrcode.jpg" fit="cover" class="wechat-image" :preview-src-list="wechatImage"></el-image>
  </div>

  <div id="exportResume">
    <el-link class="el-link-download" href="/static/attachment/周超_Java开发工程师.pdf" download="周超_Java开发工程师.pdf" icon="el-icon-download" :underline="false">下载</el-link>
  </div>

  <div id="resumeContent">
    <!-- 基本信息 -->
    <div>
      <el-divider content-position="left">
        <h4>基本信息</h4>
      </el-divider>

      <el-timeline style="text-align:center;font-size: 16px;">
        <el-timeline-item>
          <el-card>
            <h4>周超</h4>
            <i class="el-icon-phone-outline "><a style="text-decoration: none;color: #303133;" :href="'tel:+86'+resumeData.personInfo.phoneNumber">
                <span>&nbsp;{{resumeData.personInfo.phoneNumber}}&nbsp;
                </span></a></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-message"><a style="text-decoration: none;color: #303133;" :href="'mailto:'+resumeData.personInfo.email">
                <span>&nbsp;{{resumeData.personInfo.email}}&nbsp;</span> </a></i>
            <br />
            <i class="el-icon-male"> {{resumeData.personInfo.birthday}} </i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-location-outline"> {{resumeData.personInfo.city}} </i>
            <br />
            <i class="el-icon-time"> {{resumeData.personInfo.workTime}} </i>
            <i class="el-icon-position"> {{resumeData.personInfo.expect}} </i>
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
              <li v-for="(item,index) in resumeData.specialTalent " :key="index">
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
        <el-timeline-item :index='resume' v-for="(resume,index) in resumeData.resumes" :key="index" :name="resume" placement="top" :timestamp="resume.timestamp">
        <el-card>
            <h4>{{resume.company}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{resume.position}}</h4>
            <p>
              <el-tag type="info" size="small">主营业务</el-tag>
            </p>
            <p>{{resume.business}}</p>

            <div>
              <p>
                <el-tag type="primary" size="small">工作内容</el-tag>
              </p>
              <ul class="sub-indent-30">
                <li v-for="content in resume.jobContent" :key="content">{{content}}</li>
              </ul>
            </div>

            <p>
              <el-tag type="success" size="small">工作成果</el-tag>
            </p>
            <p>{{resume.achievement}}</p>
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
        <el-timeline-item :index='resume' v-for="(resume,index) in resumeData.resumes" :key="index" :name="resume" placement="top" :timestamp="resume.timestamp">
          <el-card>
            <h4>{{resume.projectName}}</h4>
            <p>
              <el-tag class="technology-label" v-for="item in resume.technology" :key="item" type="warning" size="small">{{item}}</el-tag>
            </p>
            <p><b>项目描述：</b>{{resume.projectDesc}}</p>
            <div>
              <b>工作职责：</b>
              <ol class="sub-indent-30">
                <li v-for="duty in resume.projectDuty" :key="duty">{{duty}}</li>
              </ol>
            </div>
          </el-card>
        </el-timeline-item>
    </div>

    <!-- 教育经历 -->
    <div>
      <el-divider content-position="left">
        <h4>教育经历</h4>
      </el-divider>
      <el-timeline>
        <el-timeline-item :timestamp="resumeData.personInfo.education.timestamp" placement="top">
          <el-card>
            <h4>{{resumeData.personInfo.education.university}} - {{resumeData.personInfo.education.specialty}} - {{resumeData.personInfo.education.level}}</h4>
            <p>
              <el-tag type="success" size="small" v-for="certificate in resumeData.personInfo.education.certificates" :key="certificate" >{{certificate}}</el-tag>
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
            <p>{{resumeData.summary}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      wechatImage: ["/static/wechat.jpg"],
    };
  },
  methods: {},
  mounted() {
    if (
      /Mobi|Android|iPhone/i.test(navigator.userAgent) ||
      window.screen.width < 900
    ) {
      // 当前设备是移动设备或屏幕宽度小于900px，不显示微信二维码
      $("#myWechatImage").css("display", "none");
    }
  },
};
</script>

<style>
</style>
