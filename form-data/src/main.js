/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-22 15:14:23
 * @LastEditTime : 2020-01-14 17:25:15
 * @LastEditors  : 靳肖健
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Clipboard from 'v-clipboard'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Clipboard)


new Vue({
  render: h => h(App),
}).$mount('#app')
