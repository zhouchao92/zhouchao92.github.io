<template>
  <div class="note-box">
    <div class="note-index">
      <el-tabs
        :class="isWindows ? 'tab-index-vertical' : 'tab-index-horizontal'"
        v-model="activteMarkdownIndex"
        @tab-click="handleClick"
        :tab-position="isWindows ? 'left' : 'top'"
      >
        <el-tab-pane
          :index="filename"
          v-for="(filename, index) in markdownFilenames.notes"
          :key="index"
          :label="filename"
          :name="filename"
        ></el-tab-pane>
      </el-tabs>
    </div>

    <markdownhtml class="note-content" :markdown-path="markdownPath">
    </markdownhtml>
  </div>
</template>

<script>
const markdownPathPrefix = "/static/note/";
const markdownPathSuffix = ".md";

module.exports = {
  metaInfo: {
    title: "周超 | 笔记",
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
      return this.markdownFilenames.notes && this.markdownFilenames.notes.includes(filename);
    },
    hasMarkdownFiles() {
      return this.markdownFilenames.notes && this.markdownFilenames.notes.length > 0;
    },
    getMarkdownContainerSelector() {
      return ".note-content";
    },
  },
};
</script>

<style></style>
