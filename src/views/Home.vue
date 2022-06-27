<template>
  <div class="home-page">
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
  }
</style>
