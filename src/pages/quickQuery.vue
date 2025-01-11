<template>
  <div class="quick-query-box">
    <markdownhtml class="qucik-query-content" :markdown-path="markdownPath">
    </markdownhtml>
  </div>
</template>

<script>
module.exports = {
  metaInfo: {
    title: "周超 | 快速导航",
  },
  components: {
    markdownhtml: httpVueLoader("/src/components/markdownHtml.vue"),
  },
  data() {
    return {
      markdownPath: "/static/doc/快速导航.md",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.quick-query-box {
  margin-top: 10px;
  margin-bottom: 10px;
}

.quick-query-box .qucik-query-content {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 4px 8px;
  min-height: 600px;
}
</style>
