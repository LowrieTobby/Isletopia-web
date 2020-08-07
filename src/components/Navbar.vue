<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light box-shadow fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="@/assets/img/logo_text_gray.svg" width="auto" height="24px" class alt="梦幻之屿-logo" />
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
          <!-- <li class="nav-item" v-for="(item,index) in navLinks" :key="index">
            <router-link class="nav-link" :to="{path: item.path}">{{ item.linkTitle }}</router-link>
          </li>
          <li class="nav-item"><a class="nav-link" href="https://afdian.net/@molean">捐助</a></li> -->
          <!-- <router-link tag="li" :to="{path: item.path}" class="nav-item" v-for="(item,index) in navLinks" :key="index" active-class="active" exact-active-class=""> -->
          <router-link tag="li" :to="{path: item.path}" class="nav-item" v-for="(item,index) in navLinks" :key="index">
            <a class="nav-link" @click="collapseToggle()">{{ item.linkTitle }}</a>
          </router-link>
          <li class="nav-item"><a class="nav-link" href="https://skin.molean.com">皮肤站 <font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs" /></a></li>
          <li class="nav-item"><a class="nav-link" href="https://afdian.net/@molean">捐助 <font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs" /></a></li>
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
            {'linkTitle':'首页','path':'/home'},
            {'linkTitle':'更新日志','path':'/log'},
            {'linkTitle':'常见问题','path':'/FAQ'},
          ],
      }
  },
  methods: {
    collapseToggle() {
      $('#navbarNav').collapse('hide');
    }
  },
};
</script>

<style scoped>
.navbar-brand{
    display: flex;
}
</style>