import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  /* name: 微应用的名称，微应用之间必须确保唯一
  entry: 表示微应用的访问地址
  container: 微应用挂在到哪个容器下
  activeRule: 微应用的激活规则 */
  {
    name: 'vueApp',
    entry: '//localhost:8091',
    container: '#subContainer', // 子应用挂在id为subContainer的div下
    activeRule: '/app-vue'
  }
])
// 启动 qiankun
start()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
