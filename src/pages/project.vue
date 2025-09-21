<template>
  <div class="project-box">
    <div class="project-index">
      <el-tabs
        :class="isWindows ? 'tab-index-vertical' : 'tab-index-horizontal'"
        v-model="activteMarkdownIndex"
        @tab-click="handleClick"
        :tab-position="isWindows ? 'left' : 'top'"
      >
        <el-tab-pane
          :index="filename"
          v-for="(filename, index) in markdownFilenames.projects"
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
  mixins: [Vue.prototype.$markdownTabMixin],
  data() {
    return {
      basePath: markdownPathPrefix,
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
    isValidMarkdownFile(filename) {
      return this.markdownFilenames.projects.includes(filename);
    },
    hasMarkdownFiles() {
      return this.markdownFilenames.projects.length > 0;
    },
    getMarkdownContainerSelector() {
      return ".project-content";
    },
  },
};
</script>

<style>
</style>
