<template>
  <div class="centered-wrapper">
    <BreathingRing :breathing="true" />
    <span class="exercise-helper">
      Breathe in
    </span>
    <span class="exercise-helper exercise-helper--animation-delayed">
      Breathe out
    </span>
  </div>
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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

  body {
    background-color: #5DADE8;
    height: 100vh;
    height: 100dvh; // Fix for Safari iOS
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 100vw;
  }

  #app {
    align-items: center;
    background: linear-gradient(180deg, #5DADE8 0%, #2E81BD 100%);
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    justify-content: center;
  }

  .centered-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 636px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  .exercise-helper {
    align-items: center;
    animation: fadeInOut 10s ease-in-out infinite both;
    bottom: 0;
    color: white;
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    opacity: 0;
    position: absolute;
    height: 40px;
    justify-content: center;
    width: 100%;

    &--animation-delayed {
      animation-delay: 5s;
    }

    @keyframes fadeInOut {
      0%, 50% {
        opacity: 0;
      }

      20%, 40% {
        opacity: 1;
      }
    }
  }

  .no-zoom {
    touch-action: none;
    background-color: rgba(255,0,0,.3);
  }
</style>
