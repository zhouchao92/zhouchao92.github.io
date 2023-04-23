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
    },
    {
      path: '/recruitment',
      component: httpVueLoader('/src/pages/recruitment.vue')
    },
    {
      path: '/project',
      component: httpVueLoader('/src/pages/project.vue')
    }
  ],
  mode: 'hash'
});

export default router;