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
const markdownPathPrefix = '/src/recruitment/';
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
    loadFilenames() {
      var filenames = [];
      var xmlhttp;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHttp');
      }

      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          $(xmlhttp.responseText).find("a:contains(.md)").each(function () {
            let tmp = $(this).attr("href");
            let idx = tmp.lastIndexOf('/');
            tmp = tmp.slice(idx + 1, tmp.length - 3);
            filenames.push(decodeURIComponent(tmp));
          });

          filenames.sort((x, y) => {
            return parseInt(x) - parseInt(y);
          });
        }
      }

      // 向服务器发送请求
      xmlhttp.open('GET', '/src/recruitment', false);
      xmlhttp.send();

      return filenames;
    },
    changeMarkdownIndex(index) {
      this.activteMarkdownIndex = index;
      this.markdownPath = markdownPathPrefix + this.activteMarkdownIndex + markdownPathSuffix;
    }
  },
  mounted() {
    // this.filenames = this.loadFilenames();
    // if (this.filenames.length > 0) {
    // this.changeMarkdownIndex(this.filenames[0]);
    // }
    this.changeMarkdownIndex(this.filenames[0]);
  },
}
</script>

<style>

</style>
