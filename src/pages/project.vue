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
          v-for="(filename, index) in markdownFilenames.projects"
          :key="index"
          :label="filename"
          :name="filename"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <markdownhtml class="project-content" :markdown-path="markdownPath" />
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
      activteMarkdownIndex: "",
      markdownPath: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      this.changeMarkdownIndex(tab.name);
    },
    changeMarkdownIndex(index) {
      this.activteMarkdownIndex = index;
      this.markdownPath = markdownPathPrefix + index + markdownPathSuffix;
    },
    isValidMarkdownFile(filename) {
      return this.markdownFilenames.projects.includes(filename);
    },
    hasMarkdownFiles() {
      return this.markdownFilenames.projects && this.markdownFilenames.projects.length > 0;
    },
    getMarkdownContainerSelector() {
      return ".project-content";
    },
    initTabAndContent() {
      // 初始化 Tab 和 markdown 内容（首次进入）
      if (this.hasMarkdownFiles()) {
        const first = this.markdownFilenames.projects[0];
        if (first) {
          this.changeMarkdownIndex(first);
        }
      }
    },
  },
  mounted() {
    this.initTabAndContent();
  },
  watch: {
    // 若 markdown 文件名是异步赋值，监听 data 的变化
    'markdownFilenames.projects'(newList) {
      if (newList && newList.length && !this.activteMarkdownIndex) {
        this.initTabAndContent();
      }
    }
  }
};
</script>

<style>
</style>
