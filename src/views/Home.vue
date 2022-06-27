<template>
  <div class="home-page">
    <header class="home-page__header">
      <h1 class="home-page__title">It's time<br/>to relax</h1>
    </header>
    <main class="home-page__main">
      <DurationSwitch />
      <PrimaryButton
        label="Continue"
        route="/breathe"
      />
    </main>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

import DurationSwitch from '@/components/DurationSwitch'
import PrimaryButton from '@/components/PrimaryButton'

export default {
  components: { DurationSwitch, PrimaryButton },
  // computed: {
  //   ...mapState({ soundEnabled })
  // }
}
</script>

<style lang="scss">
  .home-page {
    display: flex;
    flex-direction: column;
    gap: 64px;
  
    &__header {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 240px;
    }

    &__title {
      color: var(--secondary--default);
      font-family: 'Poppins', sans-serif;
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 5.4rem;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    &__main {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 80px;
      width: 300px;
    } 
  }
</style>
