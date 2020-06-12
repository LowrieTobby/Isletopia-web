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
          <li class="nav-item">
            <router-link class="nav-link" to="/" >首页</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://skin.molean.com">皮肤站</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/log">更新日志</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/guide">入服指南</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/FAQ">常见问题</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">加入我们</router-link>
          </li>
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
          'isActive': false,
      }
  },
  methods: {
      onActive: function () {
        this.isActive = true;
      },
  },
};
</script>

<style scoped>
.navbar-brand{
    display: flex;
}
</style>