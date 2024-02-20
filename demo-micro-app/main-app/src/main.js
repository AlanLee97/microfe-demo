import Vue from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'

window.msg = '我是主应用'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'micro-app',
]

const app = new Vue({
  render: h => h(App),
}).$mount('#main-app')

// 卸载应用
window.unmount = () => {
  app.$destroy()
}

microApp.start()

