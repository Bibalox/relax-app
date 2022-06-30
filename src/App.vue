<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
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
  
  :root {
    font-size: 10px;

    --primary--default: #5DADE8;
    --primary--darker: #4899D4;
    --primary--gradient: linear-gradient(180deg, #5DADE8 0%, #2E81BD 100%);

    --secondary--default: white;
    --secondary--transparent: rgba(255, 255, 255, 0.2);
    --secondary--disabled: rgba(255, 255, 255, 0.3);

    --shadow: 0px 3px 12px 3px rgba(25, 74, 147, 0.15), 0px 2px 2px rgba(25, 74, 147, 0.25);
  }

  button, a {
    touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  span, title {
    cursor: default;
    user-select: none;
  }

  body {
    background-color: var(--primary--default);
    height: 100%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: fixed;
    width: 100%;
  }

  #app {
    align-items: center;
    background: var(--primary--gradient);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }

  .slide-fade-enter-active {
    animation: slide-fade .5s ease-out;
  }
  .slide-fade-leave-active {
    animation: slide-fade .5s ease-out reverse;
  }
  @keyframes slide-fade {
    0% {
      transform: translateY(-5px);
      opacity: .1;
    }
    80% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>
