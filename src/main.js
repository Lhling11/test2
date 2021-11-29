import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import './plugins/element.js'
// import ElementUI from 'element-ui'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false
// Vue.use(ElementUI, {
//   size: 'small'
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
