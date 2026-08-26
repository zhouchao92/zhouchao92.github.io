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
  methods: {
    decorateNav() {
      const root = this.$el.querySelector(".qucik-query-content");
      if (!root) return;

      root.querySelectorAll("a").forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (href.startsWith("#")) return;
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      });

      root.querySelectorAll("li").forEach((li) => {
        const subList = li.querySelector(":scope > ul");
        if (!subList) return;
        li.classList.add("has-sublist");
        const label = document.createElement("span");
        label.className = "nav-group-label";
        while (subList.previousSibling) {
          const node = subList.previousSibling;
          if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) {
            node.remove();
            continue;
          }
          label.insertBefore(node, label.firstChild);
        }
        li.insertBefore(label, subList);
      });
    },
    observeNav() {
      const box = this.$el;
      if (!box) return;

      const tryDecorate = () => {
        const root = box.querySelector(".qucik-query-content");
        if (root && root.querySelector("a")) {
          this.decorateNav();
          if (this._navObserver) {
            this._navObserver.disconnect();
            this._navObserver = null;
          }
        }
      };

      tryDecorate();
      if (!this._navObserver) {
        this._navObserver = new MutationObserver(tryDecorate);
        this._navObserver.observe(box, { childList: true, subtree: true });
      }
    },
  },
  mounted() {
    this.observeNav();
  },
  beforeDestroy() {
    if (this._navObserver) {
      this._navObserver.disconnect();
      this._navObserver = null;
    }
  },
};
</script>

<style>
.quick-query-box {
  margin-top: 10px;
  margin-bottom: 10px;
}

.quick-query-box .qucik-query-content {
  --nav-accent: #6b7a8c;
  border-radius: 6px;
  border: 1px solid #ebeef5;
  padding: 22px 26px;
  min-height: 600px;
}

/* 页面标题 */
.quick-query-box .qucik-query-content > h1 {
  font-size: 1.6rem; /* 25.6px，高于分类 h2(19.2px)，形成 1.33 级差 */
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  border-left: 4px solid var(--nav-accent);
  padding-left: 12px; /* 比 h2 多 2px，凸显为顶层标题 */
  color: #303133;
  border-bottom: none;
  margin: 0 0 1.2em; /* 约 30.7px，与下方目录胶囊留出间距 */
}

/* 分类标题 */
.quick-query-box .qucik-query-content h2 {
  font-size: 1.2rem;
  color: #303133;
  border-left: 4px solid var(--nav-accent);
  padding-left: 10px;
  margin: 1.9em 0 1em;
}

/* 链接列表：顶层分类列表横向自动换行的胶囊 */
.quick-query-box .qucik-query-content > ul {
  list-style: none;
  padding-left: 0;
  margin: 0 0 0.6em;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 14px;
}

.quick-query-box .qucik-query-content li {
  list-style: none;
}

.quick-query-box .qucik-query-content li > a {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #e4e7ed;
  border-radius: 16px;
  background: #f5f7fa;
  color: var(--nav-accent);
  font-size: 14px;
  line-height: 1.5;
  transition: all 0.2s ease;
}

.quick-query-box .qucik-query-content li > a:hover {
  background: var(--nav-accent);
  color: #fff;
  border-color: var(--nav-accent);
  box-shadow: 0 2px 8px rgba(107, 122, 140, 0.25);
  transform: translateY(-1px);
}

/* 子分组（如 RAG、Java 等）整体占一行 */
.quick-query-box .qucik-query-content li.has-sublist {
  flex: 0 0 100%;
  margin-top: 4px;
}

.quick-query-box .qucik-query-content li.has-sublist > .nav-group-label {
  display: block;
  width: 100%;
  white-space: nowrap;
  font-weight: 600;
  color: #909399;
  font-size: 13px;
  margin: 12px 0 10px;
  padding-left: 2px;
}

.quick-query-box .qucik-query-content li.has-sublist > ul {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px;
  padding-left: 16px;
}
</style>
