<template>
  <div class="project-box">
    <div class="project-index">
      <el-tabs
        :class="isWindows ? 'tab-index-vertical' : ''"
        v-model="activteMarkdownIndex"
        @tab-click="handleClick"
        :tab-position="isWindows ? 'left' : 'top'"
      >
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
      isWindows: true,
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

      if (
        /Mobi|Android|iPhone/i.test(navigator.userAgent) ||
        window.screen.width < 900
      ) {
        this.isWindows = false;
      } else {
        this.isWindows = true;
      }
    }
  },
};
</script>

<style>
</style>
