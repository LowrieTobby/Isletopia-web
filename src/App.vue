<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/contact">contact</router-link>
    </div> -->
    <navbar></navbar>
    <router-view/>
    <foo></foo>
    
  </div>
</template>

<style>
@import "./assets/css/style.css";
</style>

<script>
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default {
  name: 'app',
  components: {
    Navbar: 'navbar',
    Footer: 'foo',
  },
};

</script>