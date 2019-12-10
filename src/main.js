import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import routes from './config/routes'
import StoreData from './config/store'


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

const store = new Vuex.Store(StoreData)


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')