import router from '/src/router/index.js';
import * as markdownUtil from '/src/util/markdownUtil.js';
import * as markdownFilenames from '/src/constant/filenames.js'
import * as resumeData from '/src/constant/resumeData.js'
import markdownTabMixin from '/src/mixins/markdownTabMixin.js';

Vue.use(httpVueLoader);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueRouter);


Vue.prototype.markdownUtil = markdownUtil;
Vue.prototype.markdownFilenames = markdownFilenames;
Vue.prototype.resumeData = resumeData;
// 将 mixin 挂载到 Vue 原型上
Vue.prototype.$markdownTabMixin = markdownTabMixin;

new Vue({
  el: '#app',
  router,
  components: {
    'app': httpVueLoader('/src/App.vue'),
  }
});
