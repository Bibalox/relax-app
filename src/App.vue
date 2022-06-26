<template>
  <img 
    class="no-zoom"
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <audio
    controls
    class="no-zoom"
    src="./assets/goutte.mp3"
    type="audio/mpeg"
  />
  <button
    class="no-zoom"
    @click="playAudio()"
  >
    Test
  </button>
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
    align-items: center;
    background: linear-gradient(180deg, #80C3F4 0%, #70B9EE 100%);
    background-color: transparent;
    display: flex;
    height: 100dvh;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 100vw;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
  }

  .no-zoom {
    touch-action: none;
    background-color: rgba(255,0,0,.3);
  }
</style>
