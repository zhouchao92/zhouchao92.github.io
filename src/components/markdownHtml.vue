<template>
  <div v-html="markdownHtml" class="markdown-body"></div>
</template>

<script>
module.exports = {
  props: {
    markdownPath: {
      type: String,
      required: true,
      // validator: function (value) {
      //   return value.endsWith('.md')
      // }
    },
  },
  data() {
    return {
      markdownHtml: "",
    };
  },
  methods: {},
  watch: {
    markdownPath: function (value) {
      this.markdownHtml = this.markdownUtil.showMarkdown(value);
    },
  },
  mounted() {
    this.markdownHtml = this.markdownUtil.showMarkdown(this.markdownPath);
  },
};
</script>

<style>
.markdown-body {
  /* margin: 0 auto; */
  /* padding: 0.8rem 1rem; */
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  /* border-radius: 4px; */
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  color: #333;
  margin-top: 0.5em;
  margin-bottom: 0.75em;
}

.markdown-body h1 {
  font-size: 2.5em;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.3em;
}

.markdown-body h2 {
  font-size: 2em;
}

.markdown-body h3 {
  font-size: 1.75em;
}

.markdown-body h4 {
  font-size: 1.5em;
}

.markdown-body h5 {
  font-size: 1.25em;
}

.markdown-body h6 {
  font-size: 1em;
  color: #666;
}

.markdown-body p {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

.markdown-body pre {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 4px;
}

.markdown-body a {
  text-decoration: none;
}

/* .markdown-body code {
  background-color: #f7f7f7;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.9em;
  color: #c7254e;
} */

/* 基础表格样式 */
.markdown-body table {
  border-collapse: collapse; /* 合并边框，避免双线 */
  width: 100%;
  margin: 16px 0;
  font-size: 14px;
}

.markdown-body table,
th,
td {
  border: 1px solid #d0d0d0; /* 关键：给 table、th、td 都加边框 */
}

.markdown-body th,
td {
  padding: 8px 12px;
  text-align: left;
  background-color: #fafafa;
}

.markdown-body th {
  background-color: #f0f0f0;
  font-weight: bold;
}
</style>
