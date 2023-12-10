<template>
  <div class="note-box">
    <div class="note-index">
      <el-tabs v-model="activteMarkdownIndex" @tab-click="handleClick">
        <el-tab-pane
          :index="filename"
          v-for="(filename, index) in markdownFilenmaes.notes"
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
    if (this.markdownFilenmaes.notes.length > 0) {
      this.changeMarkdownIndex(this.markdownFilenmaes.notes[0]);
    }
  },
};
</script>

<style>
</style>
