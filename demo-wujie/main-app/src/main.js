/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import WujieVue from "wujie-vue2";

// import { bus, setupApp, preloadApp, startApp, destroyApp } from "wujie";

const { bus, setupApp, preloadApp, destroyApp } = WujieVue;

Vue.use(WujieVue);

// setupApp({ name: "app-1", url: "http://localhost:8081", exec: true, el: "#app-1", sync: true })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#main-app')

// startApp({ name: "app-1" });
