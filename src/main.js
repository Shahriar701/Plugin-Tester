import Vue from 'vue'
import App from './App.vue'
import DynamicTreePlugin from 'dynamic-tree-plugin'
import '../node_modules/bulma/css/bulma.css'
import '../node_modules/bulma-extensions/dist/css/bulma-extensions.min.css'
import '../node_modules/bulma-extensions/dist/js/bulma-extensions.min.js'
import '../node_modules/dynamic-tree-plugin/src/core-style.scss'
import store from '../store/store'

Vue.config.productionTip = false

Vue.use(DynamicTreePlugin)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
