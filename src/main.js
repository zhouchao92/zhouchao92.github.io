import router from '/src/router/index.js';

Vue.use(httpVueLoader);
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router
})
