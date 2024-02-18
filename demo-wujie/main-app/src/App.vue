<template>
  <div id="app">
    我是主应用
    <div>
      <WujieVue
        width="100%"
        height="100%"
        :name="apps.app1.name"
        :url="apps.app1.url"
        :sync="true"
        :fetch="apps.app1.fetch"
        :props="apps.app1.props"
        :beforeLoad="apps.app1.beforeLoad"
        :beforeMount="apps.app1.beforeMount"
        :afterMount="apps.app1.afterMount"
        :beforeUnmount="apps.app1.beforeUnmount"
        :afterUnmount="apps.app1.afterUnmount"
      ></WujieVue>
    </div>
    <div>
      <WujieVue
        width="100%"
        height="100%"
        :name="apps.app2.name"
        :url="apps.app2.url"
        :sync="true"
        :fetch="apps.app2.fetch"
        :props="apps.app2.props"
        :beforeLoad="apps.app2.beforeLoad"
        :beforeMount="apps.app2.beforeMount"
        :afterMount="apps.app2.afterMount"
        :beforeUnmount="apps.app2.beforeUnmount"
        :afterUnmount="apps.app2.afterUnmount"
      ></WujieVue>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      apps: {
        app1: {
          name: 'app-1',
          url: 'http://localhost:8081',
          fetch: window.fetch,
          props: {},
          beforeLoad() {
            console.log('alan->app-1 beforeLoad', )
          },
          beforeMount() {
            console.log('alan->app-1 beforeMount', )
          },
          afterMount() {
            console.log('alan->app-1 afterMount', )
          },
          beforeUnmount() {
            console.log('alan->app-1 beforeUnmount', )
          },
          afterUnmount() {
            console.log('alan->app-1 afterUnmount', )
          }
        },
        app2: {
          name: 'app-2',
          url: 'http://localhost:8082',
          fetch: window.fetch,
          props: {},
          beforeLoad() {
            console.log('alan->app-2 beforeLoad', )
          },
          beforeMount() {
            console.log('alan->app-2 beforeMount', )
          },
          afterMount() {
            console.log('alan->app-2 afterMount', )
          },
          beforeUnmount() {
            console.log('alan->app-2 beforeUnmount', )
          },
          afterUnmount() {
            console.log('alan->app-2 afterUnmount', )
          }
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

.text-class {
  color: red;
}
</style>
