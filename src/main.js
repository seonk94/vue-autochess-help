import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuex from 'vuex'
import { store } from './store/index'
import Fragment from 'vue-fragment'
import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Fragment)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
