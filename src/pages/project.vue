<template>
<div class="project-box">
  <div class="project-index">
    <el-tabs v-model="activteMarkdownIndex" @tab-click="handleClick">
      <el-tab-pane :index='filename' v-for="(filename,index) in filenames" :key="index" :label="filename" :name="filename"></el-tab-pane>
    </el-tabs>
  </div>

  <markdownhtml class="project-content" :markdown-path="markdownPath">
  </markdownhtml>
</div>
</template>

<script>
const markdownPathPrefix = '/static/project/';
const markdownPathSuffix = '.md';
module.exports = {
  metaInfo: {
    title: '周超 | 项目'
  },
  components: {
    markdownhtml: httpVueLoader('/src/components/markdownHtml.vue'),
  },
  data() {
    return {
      filenames: ['云积分会员通系统', '康博嘉云诊所SAAS系统'],
      markdownPath: '',
      activteMarkdownIndex: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      this.changeMarkdownIndex(tab.$attrs.index);
    },
    changeMarkdownIndex(index) {
      this.activteMarkdownIndex = index;
      this.markdownPath = markdownPathPrefix + this.activteMarkdownIndex + markdownPathSuffix;
    }
  },
  mounted() {
    this.changeMarkdownIndex(this.filenames[0]);
  },

}
</script>

<style>

</style>
