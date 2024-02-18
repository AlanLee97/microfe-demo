
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const app = new Vue({
  render: h => h(App),
  router: new VueRouter({
    mode: 'hash',
    routes: [
      { path: '/app-1/foo', component: Foo },
      { path: '/app-1/bar', component: Bar }
    ]
  })
})

// app.$mount('#app-1')

// /**
//  * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
//  * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
//  */
let domEl
export async function bootstrap() {
  
  console.log('sub-app-1 app bootstraped');
  return Promise
  .resolve()
  .then(() => {
      domEl = document.createElement('div');
      domEl.id = 'app-1';
      document.body.appendChild(domEl);
  });
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('alan->mount', props)
  app.$mount('#app-1')
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log('alan->unmount', props)
}
