<template>
<div class="recruitment-box">
  <div class="recruitment-index">
  <el-tabs v-model="activteMarkdownIndex" @tab-click="handleClick">
    <el-tab-pane :index='filename' v-for="(filename,index) in filenames" :key="index" :label="filename" :name="filename"></el-tab-pane>
  </el-tabs>
    <!-- <el-menu :default-active="activteMarkdownIndex" mode="horizontal"  @select="handMarkdownIndexChange">
      <el-menu-item :index='filename' v-for="(filename,index) in filenames" :key="index">{{filename}}</el-menu-item>
    </el-menu> -->
  </div>

  <markdownhtml class="recruitment-content" :markdown-path="markdownPath">
  </markdownhtml>
</div>
</template>

<script>
const markdownPathPrefix = '/static/recruitment/';
const markdownPathSuffix = '.md';
module.exports = {
  metaInfo: {
    title: '周超 | 面试'
  },
  components: {
    markdownhtml: httpVueLoader('/src/components/markdownHtml.vue'),
  },
  data() {
    return {
      filenames: ['中国移动', '中国联通'],
      markdownPath: '',
      activteMarkdownIndex: ''
    }
  },
  methods: {
    handleClick(tab, event){
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
