import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuex from 'vuex'
import { store } from './store/index'
import Fragment from 'vue-fragment'
import 'es6-promise/auto'
import VueDragDrop from 'vue-drag-drop';

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Fragment)
Vue.use(VueDragDrop)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
