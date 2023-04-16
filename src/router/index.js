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
      path: '/campusRecruitment',
      component: httpVueLoader('/src/pages/campusRecruitment.vue')
    }
  ],
  mode: 'hash'
});

export default router;