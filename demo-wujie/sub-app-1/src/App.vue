<template>
  <div id="sub-app-1">
    <h1>App-1</h1>
    <p class="text-class">啦啦啦</p>
    <p class="subapp-text-class">啦啦啦1122</p>
    <button @click="toApp2">跳转到sub-app-2</button>
    <a href="http://localhost:8082">a标签跳转到sub-app-2</a>
    <router-view></router-view>
  </div>
</template>

<script>
console.log('alan->', 'i am sub-app-1')

console.log('alan->window.msg', window.msg)
console.log('alan->window', window)
export default {
  name: 'App',
  methods: {
    toApp2() {
      window.open('http://localhost:8082')
    }
  }
}
</script>

<style>
#sub-app-1 {
  color: blueviolet;
  border: 1px solid red;
  border-radius: 6px;
}

.subapp-text-class {
  color: aqua;
}
</style>
