<template>
  <div id="sub-app-2">
    <h1>app-2</h1>
    <p class="text-class">啦啦啦</p>
    <p class="subapp-text-class">啦啦啦1122</p>
    <p class="sub-app-1-class">看看class样式隔离效果</p>
    <button @click="toApp1">跳转到sub-app-1</button>
    <a href="http://localhost:8081">a标签跳转到sub-app-1</a>
    <router-view></router-view>
  </div>
</template>

<script>
console.log('alan->', 'i am sub-app-2')

console.log('alan->window.msg', window.msg)
console.log('alan->window', window)
export default {
  name: 'App',
  methods: {
    toApp1() {
      window.open('http://localhost:8081')
    }
  }
}
</script>

<style>
#sub-app-2 {
  color: blueviolet;
  border: 1px solid red;
  border-radius: 6px;
}

.subapp-text-class {
  color: aqua;
}

.sub-app-2-class {
  color: orange;
}
</style>
