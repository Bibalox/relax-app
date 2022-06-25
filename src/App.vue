<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    background: linear-gradient(180deg, #80C3F4 0%, #70B9EE 100%);
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
    height: 100vh;
    overflow: hidden;
  }
</style>
