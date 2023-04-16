<template>
<div class="recruitment-box">
  <div class="recruitment-index">

    <el-menu :default-active="activteMarkdownIndex" mode="vertical" active-text-color="#ffd04b" @select="handMarkdownIndexChange">
      <el-menu-item :index='filename' v-for="(filename,index) in filenames" :key="index">{{filename}}</el-menu-item>
    </el-menu>

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
      filenames: [],
      markdownPath: '',
      activteMarkdownIndex: ''
    }
  },
  methods: {
    loadFilenames() {
      var filenames = [];
      $.ajax({
        async: false,
        url: "/src/recruitment",
        success: function (data) {
          $(data).find("a:contains(.md)").each(function () {
            let tmp = $(this).attr("href");
            let idx = tmp.lastIndexOf('/');
            tmp = tmp.slice(idx + 1, tmp.length - 3);
            filenames.push(decodeURIComponent(tmp));
          });

          filenames.sort((x, y) => {
            return parseInt(x) - parseInt(y);
          });
        }
      });
      return filenames;
    },
    handMarkdownIndexChange(key, keyPath) {
      this.changeMarkdownIndex(key);
    },
    changeMarkdownIndex(index) {
      this.activteMarkdownIndex = index;
      this.markdownPath = markdownPathPrefix + this.activteMarkdownIndex + markdownPathSuffix;
    }
  },
  mounted() {
    this.filenames = this.loadFilenames();
    this.changeMarkdownIndex(this.filenames[0]);
  },
}
</script>

<style>

</style>
