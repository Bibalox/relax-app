<template>
  <router-view />
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
    --primary--default: #5DADE8;
    --primary--darker: #4899D4;
    --primary--gradient: linear-gradient(180deg, #5DADE8 0%, #2E81BD 100%);

    --secondary--default: white;
    --secondary--transparent: rgba(255, 255, 255, 0.2);
    --secondary--disabled: rgba(255, 255, 255, 0.3);
  }

  button, a {
    touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    background-color: var(--primary--default);
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
    background: var(--primary--gradient);
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    justify-content: center;
  }
</style>
