import router from '/src/router/index.js';
import * as markdownUtil from '/src/util/markdownUtil.js';
import * as markdownFilenmaes from '/src/constant/filenames.js'

Vue.use(httpVueLoader);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueRouter);


Vue.prototype.markdownUtil = markdownUtil;
Vue.prototype.markdownFilenmaes = markdownFilenmaes;

new Vue({
  el: '#app',
  router,
  components: {
    'dashboard': httpVueLoader('/src/pages/dashboard.vue')
  }
});
