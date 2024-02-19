/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import Garfish from 'garfish';

window.msg = '我是主应用'

Garfish.run({
  basename: '/',
  domGetter: '#sub-app-container',
  sandbox: {
    snapshot: false,
    strictIsolation: true
  },
  apps: [
    {
      name: 'app-1',
      activeWhen: '/',
      entry: 'http://localhost:8081', // html入口
    },
    {
      name: 'app-2',
      activeWhen: '/',
      // entry: 'http://localhost:8080/index.js', // js入口
      entry: 'http://localhost:8082', // html入口
    },
  ],
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#main-app')


