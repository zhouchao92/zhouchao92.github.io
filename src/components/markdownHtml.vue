<template>
<div v-html="markdownHtml">
</div>
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
      markdownHtml: ''
    }
  },
  methods: {},
  watch: {
    markdownPath: function (value) {
      this.markdownHtml = this.markdownUtil.showMarkdown(value);
    }
  },
  mounted() {
    this.markdownHtml = this.markdownUtil.showMarkdown(this.markdownPath);
  }
}
</script>
