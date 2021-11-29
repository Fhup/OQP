<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

//js-cookie
import Cookies from 'js-cookie'

export default {
    name: 'App',
    created(){
      Cookies.set('key', 'value');
    },
}
</script>

<style scoped>
  @import url('assets/css/base.css');
  #app{
    width: 100%;
    height: 100%;
  }
</style>
<style>
html{
  width: 100%;
  height: 100%;
}
body{
  background-image: url('assets/img/bg.png');
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>