import router from '/src/router/index.js';
import * as markdownUtil from '/src/util/markdownUtil.js';
import * as markdownFilenmaes from '/src/constant/filenames.js'
import * as resumeData from '/src/constant/resumeData.js'

Vue.use(httpVueLoader);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueRouter);


Vue.prototype.markdownUtil = markdownUtil;
Vue.prototype.markdownFilenmaes = markdownFilenmaes;
Vue.prototype.resumeData = resumeData;

new Vue({
  el: '#app',
  router,
  components: {
    'app': httpVueLoader('/src/App.vue'),
  }
});
