<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <audio
    controls
    src="./assets/goutte.mp3"
    type="audio/mpeg"
  />
  <button @click="playAudio">Test</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    playAudio () {
      const audio = new Audio('./assets/goutte.mp3')
      audio.play()
      console.log('Audio played')
    }
  }
}
</script>

<style lang="scss">
  body {
    background: linear-gradient(180deg, #80C3F4 0%, #70B9EE 100%);
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
    height: 100vh;
    overflow: hidden;
    position: fixed;
  }
</style>
