import router from '/src/router/index.js';

Vue.use(httpVueLoader);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  components: {
    'dashboard': httpVueLoader('/src/pages/dashboard.vue')
  }
});
