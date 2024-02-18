<template>
  <div id="sub-app-2">
    <h1>App-2</h1>
    <router-view></router-view>
  </div>
</template>

<script>
console.log('alan->', 'i am sub-app-2')

console.log('alan->window.msg', window.msg)
console.log('alan->window', window)
export default {
  name: 'App',
}
</script>

<style>
#sub-app-2 {
  color: gold;
  border: 1px solid greenyellow;
  border-radius: 6px;
}

.subapp-text-class {
  color: aqua;
}
</style>
