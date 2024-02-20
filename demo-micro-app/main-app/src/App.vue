<template>
  <div id="app">
    <!-- name：应用名称, url：应用地址 -->
    <micro-app name='app-1' url='http://localhost:8081/'></micro-app>
    <micro-app name='app-2' url='http://localhost:8082/'></micro-app>
  </div>
</template>

<script>

export default {
  name: 'App',
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
