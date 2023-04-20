<template>
<div>
  <el-menu :default-active="activeIndex" mode="horizontal" active-text-color="#ffd04b" router>
    <el-menu-item index="/resume">简历</el-menu-item>
    <!-- <el-menu-item index="/note">笔记</el-menu-item> -->
    <el-menu-item index="/recruitment">面试</el-menu-item>
  </el-menu>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      activeIndex: this.$route.path == '/' ? '/resume' : this.$route.path
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
