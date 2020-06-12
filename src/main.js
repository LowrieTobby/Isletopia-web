import Vue from 'vue'
import App from './App.vue'
import router from './router'

//FontAwesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
//FontAwesome End

//Boostrap
import 'bootstrap/dist/css/bootstrap.css'
//Boostrap

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




