<template>
  <div id="app">
    <navbar></navbar>
    <div class="content-wrapper">
      <router-view/>
    </div>
    <foo></foo>
  </div>
</template>

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

<style>
/* 导入全局样式 style.css */
@import "./assets/css/style.css";

@media (max-width: 768px) {
    .content-wrapper{
        padding: 0px 15px !important;
    }
}
</style>