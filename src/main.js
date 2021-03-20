import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Calendar, Row, Col, Radio, Select, Button } from 'ant-design-vue';
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false
// Vue.component(Calendar.name,Calendar)
// Vue.component(Col.name,Col)
// Vue.component(Row.name,Row)
// Vue.component(Radio.name,Radio)
// Vue.component(Select.name,Select)
// Vue.component(Button.name,Button)
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
