/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'
import { vueBridge } from '@garfish/bridge-vue-v2';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/app-2/foo', component: Foo },
  { path: '/app-2/bar', component: Bar }
]

function newRouter(basename) {
  return new VueRouter({
    mode: 'hash',
    base: basename,
    routes: [
      { path: '/app-2/foo', component: Foo },
      { path: '/app-2/bar', component: Bar }
    ]
  })
}
export const provider = vueBridge({
  // 根组件
  rootComponent: App,
  // 可选，注册 vue-router或状态管理对象
  appOptions: ({ basename, dom, appName, props, appInfo }) => {
  // pass the options to Vue Constructor. check https://vuejs.bootcss.com/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE
    return {
      el: '#app-2',
      router: newRouter(basename)
    };
  },
});

// 这能够让子应用独立运行起来，以保证后续子应用能脱离主应用独立运行，方便调试、开发
if (!window.__GARFISH__) {
  const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: routes,
  });
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app-2');
}
