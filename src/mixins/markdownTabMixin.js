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

    getMarkdownContainer: function () {
      return document.querySelector(this.getMarkdownContainerSelector()) ||
        document.querySelector(".markdown-content") ||
        document.querySelector(".content");
    },

    applyMarkdownIndexStyle: function (markdownContainer) {
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
    },

    stopMarkdownContainerWatcher: function () {
      if (this._markdownContainerObserver) {
        this._markdownContainerObserver.disconnect();
        this._markdownContainerObserver = null;
      }
    },

    watchMarkdownContainer: function () {
      if (this._markdownContainerObserver) {
        return;
      }

      this._markdownContainerObserver = new MutationObserver(() => {
        const markdownContainer = this.getMarkdownContainer();
        if (markdownContainer) {
          this.applyMarkdownIndexStyle(markdownContainer);
          this.stopMarkdownContainerWatcher();
        }
      });

      this._markdownContainerObserver.observe(document.body, {
        childList: true,
        subtree: true
      });

      setTimeout(() => {
        this.stopMarkdownContainerWatcher();
      }, 5000);
    },

    bindMarkdownClickEvents: function () {
      this.$nextTick(() => {
        setTimeout(() => {
          const markdownContainer = this.getMarkdownContainer();
          if (markdownContainer) {
            this.applyMarkdownIndexStyle(markdownContainer);
          } else {
            this.watchMarkdownContainer();
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

    try {
      if (this.hasMarkdownFiles && typeof this.hasMarkdownFiles === 'function' && this.hasMarkdownFiles()) {
        this.loadIndexPage();
        this.bindMarkdownClickEvents();
      }
    } catch (error) {
      console.error('Error during markdown tab initialization:', error);
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
    this.stopMarkdownContainerWatcher();
    const markdownContainer = this.getMarkdownContainer();
    if (markdownContainer) {
      markdownContainer.removeEventListener("click", this.handleMarkdownClick);
      markdownContainer.classList.remove('index-content');
    }
  },
};

export default markdownTabMixin;