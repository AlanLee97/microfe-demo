<template>
  <div id="sub-app-1">
    <h1>App-1</h1>
    <p class="text-class">啦啦啦</p>
    <p class="subapp-text-class">啦啦啦1122</p>
    <router-view></router-view>
  </div>
</template>

<script>
console.log('alan->', 'i am sub-app-1')

console.log('alan->window.msg', window.msg)
console.log('alan->window', window)
export default {
  name: 'App',
}
</script>

<style>
#sub-app-1 {
  color: blueviolet;
}

.subapp-text-class {
  color: aqua;
}
</style>
