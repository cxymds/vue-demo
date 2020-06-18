import Vue from 'vue'  //vue
import vueAxiosPlugin from 'vue-axios-plugin';

import App from './App.vue'  //本地的
import router from './router'

Vue.config.productionTip = false
Vue.use(vueAxiosPlugin);

new Vue({
  router,  //注入
  render: h => h(App)  //渲染 页面 数据的解读 -- 展示页面
}).$mount('#app')