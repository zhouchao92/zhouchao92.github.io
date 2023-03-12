const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: httpVueLoader('/src/pages/index.vue')
    },
    {
      path: '/note',
      component: httpVueLoader('/src/pages/note.vue')
    },
    {
      path: '/resume',
      component: httpVueLoader('/src/pages/resume.vue')
    }
  ],
  mode: 'hash'
});

export default router;