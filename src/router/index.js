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
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
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
