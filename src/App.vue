<template>
  <router-view />
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
  
  :root {
    font-size: 10px;

    --primary--default: #5DADE8;
    --primary--darker: #4899D4;
    --primary--gradient: linear-gradient(180deg, #5DADE8 0%, #2E81BD 100%);

    --secondary--default: white;
    --secondary--transparent: rgba(255, 255, 255, 0.2);
    --secondary--disabled: rgba(255, 255, 255, 0.4);

    --shadow--hard: 0px 3px 12px 3px rgba(25, 74, 147, 0.15), 0px 2px 2px rgba(25, 74, 147, 0.25);
    --shadow--soft: 0px 5px 12px 3px rgba(25, 74, 147, 0.05), 0px 5px 2px rgba(25, 74, 147, 0.05);
  }

  button, a {
    touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  span, title {
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
</style>
