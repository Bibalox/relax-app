<template>
  <BreathingRing />
</template>

<script>
import BreathingRing from './components/BreathingRing.vue'

export default {
  name: 'App',
  components: {
    BreathingRing
  },
  methods: {
    // playAudio () {
    //   const audio = new Audio(require('./assets/goutte.mp3'))
    //   audio.play()
    //   console.log('Button pressed')
    // }
  },
  mounted () {
    window.addEventListener("scroll", (e) => {
      e.preventDefault()
      window.scrollTo(0, 0)
    })
  }
}
</script>

<style lang="scss">
  body {
    background-color: #80C3F4;
    height: 100dvh;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 100vw;
  }

  #app {
    align-items: center;
    background: linear-gradient(180deg, #80C3F4 0%, #70B9EE 100%);
    color: white;
    display: flex;
    flex-direction: column;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    height: 100%;
    justify-content: center;
  }

  .no-zoom {
    touch-action: none;
    background-color: rgba(255,0,0,.3);
  }
</style>
