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
/* ===========================================================
   公共 markdown 文章样式（note / project / quickQuery 共用）
   页面级容器与目录 tab 样式仍由各页面对应的 css 控制
   =========================================================== */
.markdown-body {
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

/* 标题层次 */
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  color: #2c3e50;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 1.4em;
  margin-bottom: 0.6em;
}

.markdown-body h1 {
  font-size: 2em;
  border-bottom: 2px solid #eaecef;
  padding-bottom: 0.3em;
}

.markdown-body h2 {
  font-size: 1.6em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

.markdown-body h3 {
  font-size: 1.35em;
}

.markdown-body h4 {
  font-size: 1.15em;
}

.markdown-body h5 {
  font-size: 1em;
}

.markdown-body h6 {
  font-size: 0.9em;
  color: #777;
}

/* 段落与行内文本 */
.markdown-body p {
  font-size: 15px;
  line-height: 1.8;
  color: #3a3a3a;
  margin: 0.8em 0;
}

.markdown-body a {
  color: #409eff;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.markdown-body a:hover {
  border-bottom-color: #409eff;
}

/* 行内代码 */
.markdown-body code {
  background-color: #f4f4f5;
  color: #c7254e;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.88em;
  font-family: Consolas, Monaco, "Courier New", monospace;
}

/* 代码块（语法高亮由 github 主题接管） */
.markdown-body pre {
  background-color: transparent;
  border: 1px solid #eaecef;
  border-radius: 6px;
  padding: 0;
  margin: 16px 0;
  overflow: auto;
  line-height: 1.6;
}

.markdown-body pre code {
  font-size: 0.85em;
}

/* 引用块 */
.markdown-body blockquote {
  margin: 16px 0;
  padding: 8px 16px;
  background-color: #f8f9fb;
  border-left: 4px solid #409eff;
  color: #5a5a5a;
  border-radius: 0 4px 4px 0;
}

.markdown-body blockquote p {
  margin: 0.4em 0;
}

/* 列表 */
.markdown-body ul,
.markdown-body ol {
  padding-left: 1.6em;
  color: #3a3a3a;
  line-height: 1.8;
}

.markdown-body li {
  margin: 4px 0;
}

/* 表格 */
.markdown-body table {
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
  font-size: 14px;
}

.markdown-body table,
.markdown-body th,
.markdown-body td {
  border: 1px solid #d0d0d0;
}

.markdown-body th,
.markdown-body td {
  padding: 8px 12px;
  text-align: left;
  background-color: #fafafa;
}

.markdown-body th {
  background-color: #f0f0f0;
  font-weight: bold;
  color: #2c3e50;
}

.markdown-body tbody tr:hover {
  background-color: #f5f7fa;
}

/* 图片 */
.markdown-body img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 16px auto;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

/* 分割线 */
.markdown-body hr {
  border: none;
  border-top: 1px solid #eaecef;
  margin: 24px 0;
}

/* 加粗 */
.markdown-body strong {
  color: #2c3e50;
}
</style>
