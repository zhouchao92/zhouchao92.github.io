<template>
  <div>
    <dashboard class="dashboard-box"></dashboard>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  components: {
    dashboard: httpVueLoader("/src/pages/dashboard.vue"),
  },
};
</script>

<style>
</style>