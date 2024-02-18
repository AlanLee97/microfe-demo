import Vue from 'vue'
import App from './App.vue'

import { registerMicroApps, start } from 'qiankun';
window.msg = '我是主应用'

registerMicroApps([
  {
    name: 'sub-app-1', // app name registered
    entry: '//localhost:8081',
    container: '#sub-app-1-container',
    activeRule: '#/app-1',
  },
  {
    name: 'sub-app-2',
    // entry: { scripts: ['//localhost:8081/main.js'] },
    entry: '//localhost:8082',
    container: '#sub-app-2-container',
    activeRule: '#/app-2',
  },
]);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#main-app')

start();
