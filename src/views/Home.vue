<template>
  <div class="home-page">
    <header class="home-page__header">
      <h1 class="home-page__title">
        It's time<br/>
        to relax
      </h1>
    </header>
    <PrimaryButton
      label="Continue"
      route="/breathe"
    />
  </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton'

export default {
  components: {
    PrimaryButton
  }
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
  }
</style>
