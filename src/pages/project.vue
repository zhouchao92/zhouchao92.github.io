<template>
  <div class="project-box">
    <div class="project-index">
      <el-tabs v-model="activteMarkdownIndex" @tab-click="handleClick">
        <el-tab-pane
          :index="filename"
          v-for="(filename, index) in markdownFilenmaes.projects"
          :key="index"
          :label="filename"
          :name="filename"
        ></el-tab-pane>
      </el-tabs>
    </div>

    <markdownhtml class="project-content" :markdown-path="markdownPath">
    </markdownhtml>
  </div>
</template>

<script>
const markdownPathPrefix = "/static/project/";
const markdownPathSuffix = ".md";
module.exports = {
  metaInfo: {
    title: "周超 | 项目",
  },
  components: {
    markdownhtml: httpVueLoader("/src/components/markdownHtml.vue"),
  },
  data() {
    return {
      markdownPath: "",
      activteMarkdownIndex: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      this.changeMarkdownIndex(tab.$attrs.index);
    },
    changeMarkdownIndex(index) {
      this.activteMarkdownIndex = index;
      this.markdownPath =
        markdownPathPrefix + this.activteMarkdownIndex + markdownPathSuffix;
    },
  },
  mounted() {
    if (this.markdownFilenmaes.projects.length > 0) {
      this.changeMarkdownIndex(this.markdownFilenmaes.projects[0]);
    }
  },
};
</script>

<style>
</style>
