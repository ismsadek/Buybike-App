import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import { routes } from './routes.js';



import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueFire);


const router = new VueRouter({
  routes,
  mode: 'history' 
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
