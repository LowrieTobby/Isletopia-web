<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <foo></foo>
  </div>
</template>

<style>
/* 导入全局样式 style.css */
@import "./assets/css/style.css";
</style>

<script>
import foo from '@/components/Footer';
import navbar from '@/components/Navbar';

export default {
  name: 'app',
  components: {
    navbar,
    foo,
  },
};

</script>