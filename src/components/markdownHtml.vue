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
      validator: function (value) {
        return value.endsWith('.md')
      }
    },
  },
  data() {
    return {
      markdownHtml: ''
    }
  },
  methods: {
    showMarkdown(filepath) {
      var xmlhttp, html;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHttp');
      }

      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          // marked.setOptions({
          //   renderer: new marked.Renderer(),
          //   gfm: true,
          //   tables: true,
          //   breaks: false,
          //   pedantic: false,
          //   sanitize: false,
          //   smartLists: true,
          //   smartypants: false,
          //   highlight: function (code) {
          //     return hljs.highlightAuto(code).value;
          //   }
          // });

          // that.markdownContent = marked.parse(xmlhttp.responseText);

          // document.querySelectorAll('table').forEach(function (el) {
          //   el.setAttribute('border', '1')
          // })
          // document.querySelectorAll('code').forEach(function (el) {
          //   //缺少这个类代码块没有背景
          //   el.classList.add('hljs');
          // })

          html = marked.marked(xmlhttp.responseText);
        }
      }

      // 向服务器发送请求
      xmlhttp.open('GET', filepath, false);
      xmlhttp.send();

      return html;
    },
  },
  watch: {
    markdownPath: function (value) {
      this.markdownHtml = this.showMarkdown(value);
    }
  },
  mounted() {
    this.markdownHtml = this.showMarkdown(this.markdownPath);
  }
}
</script>
