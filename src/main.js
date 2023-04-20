import router from '/src/router/index.js';
import * as markdownUtil from '/src/util/markdownUtil.js';

Vue.use(httpVueLoader);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueRouter);


Vue.prototype.markdownUtil = markdownUtil;

new Vue({
  el: '#app',
  router,
  components: {
    'dashboard': httpVueLoader('/src/pages/dashboard.vue')
  }
});
