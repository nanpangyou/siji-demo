import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Calendar } from 'ant-design-vue';

Vue.config.productionTip = false
Vue.component(Calendar.name,Calendar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
