import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    redirect: '/Closed',
    component: () => import('../views/About.vue')
    
  },
  {
    path: '/log',
    name: 'log',
    component: () => import('../views/Log.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    redirect: '/Closed',
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    redirect: '/Closed',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    redirect: '/Closed',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/help',
    name: 'help',
    redirect: '/Closed',
  },
  //请求失败的默认页面
  {
    path: '/Closed',
    name: 'Closed',
    component: () => import('../views/Closed.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  base: process.env.BASE_URL,
  routes
})

export default router
