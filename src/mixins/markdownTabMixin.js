// src/mixins/markdownTabMixin.js
const markdownTabMixin = {
  props: {
    fileExtension: {
      type: String,
      default: ".md"
    },
    indexFileName: {
      type: String,
      default: "0.索引"
    }
  },

  data: function () {
    return {
      markdownPath: "",
      activteMarkdownIndex: "",
      isWindows: true,
    };
  },

  computed: {
    markdownPathPrefix: function () {
      return this.basePath;
    },
    markdownPathSuffix: function () {
      return this.fileExtension;
    },
    markdownIndexName: function () {
      return this.indexFileName;
    },
    isIndexPage: function () {
      return this.markdownPath && this.markdownPath.includes(this.indexFileName + this.fileExtension);
    }
  },

  methods: {
    switchTab: function (name) {
      this.changeMarkdownIndex(name);
      this.$nextTick(() => {
        this.activteMarkdownIndex = name;
      });
    },

    handleMarkdownClick: function (event) {
      const headingElement = event.target.closest("h2");
      if (headingElement) {
        const titleText = headingElement.textContent.trim();
        if (this.isValidMarkdownFile && this.isValidMarkdownFile(titleText)) {
          event.preventDefault();
          event.stopPropagation();
          this.switchTab(titleText);
        }
      }
    },

    bindMarkdownClickEvents: function () {
      this.$nextTick(() => {
        setTimeout(() => {
          const markdownContainer = document.querySelector(this.getMarkdownContainerSelector()) ||
            document.querySelector(".markdown-content") ||
            document.querySelector(".content");
          if (markdownContainer) {
            if (this.isIndexPage) {
              markdownContainer.classList.add('index-content');
            } else {
              markdownContainer.classList.remove('index-content');
            }

            markdownContainer.removeEventListener(
              "click",
              this.handleMarkdownClick
            );
            markdownContainer.addEventListener(
              "click",
              this.handleMarkdownClick
            );
          }
        }, 300);
      });
    },

    initDeviceDetection: function () {
      if (
        /Mobi|Android|iPhone/i.test(navigator.userAgent) ||
        window.screen.width < 900
      ) {
        this.isWindows = false;
      } else {
        this.isWindows = true;
      }
    },

    loadIndexPage: function () {
      this.markdownPath =
        this.markdownPathPrefix + this.markdownIndexName + this.markdownPathSuffix;
    }
  },

  mounted: function () {
    this.initDeviceDetection();

    if (this.hasMarkdownFiles && this.hasMarkdownFiles()) {
      this.loadIndexPage();
      this.bindMarkdownClickEvents();
    }
  },

  watch: {
    markdownPath: {
      handler: function () {
        this.bindMarkdownClickEvents();
      },
      immediate: false,
    },
  },

  beforeDestroy: function () {
    const markdownContainer = document.querySelector(this.getMarkdownContainerSelector()) ||
      document.querySelector(".markdown-content") ||
      document.querySelector(".content");
    if (markdownContainer) {
      markdownContainer.removeEventListener("click", this.handleMarkdownClick);
      markdownContainer.classList.remove('index-content');
    }
  },
};

export default markdownTabMixin;