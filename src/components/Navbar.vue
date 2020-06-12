<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light box-shadow fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="@/assets/img/logo.png" width="90.8" height="auto" class alt="梦幻之屿" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item,index) in navLinks" :key="index"  :class="{active:index == currentIndex}" @click="onActive(index)">
            <router-link class="nav-link" :to="{path: item.path}">{{ item.linkTitle }}</router-link>
          </li>
          <li class="nav-item"><a class="nav-link" href="https://afdian.net/@molean">捐助</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
export default {
  name: "navbar",
  data() {
      return {
          'navLinks':[
            {'linkTitle':'首页','path':'/'},
            {'linkTitle':'更新日志','path':'/log'},
            {'linkTitle':'入服指南','path':'/guide'},
            {'linkTitle':'常见问题','path':'/FAQ'},
            {'linkTitle':'加入我们','path':'/contact'},
          ],
          'currentIndex': 0,
      }
  },
  methods: {
    onActive(index) {
      this.currentIndex = index;
    }
  },
};
</script>

<style scoped>
.navbar-brand{
    display: flex;
}
</style>