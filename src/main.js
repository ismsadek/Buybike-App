import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import NotFound from './components/NotFound'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

const routes = [
  { path: '/', name:"homeLink", component: Home },
  { path: '/first', name:"firstLink", component: First },
  { path: '/second', name:"secondLink", component: Second },
  { path: '/third', name:"thirdLink", component: Third },
  { path: '/fourth', name:"fourthLink", component: Fourth },
  { path: '/fifth', name:"fifthLink", component: Fifth },
  { path: '*', name:"notfoundLink", component: NotFound },
  
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
