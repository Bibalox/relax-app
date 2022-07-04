<template>
  <div class="home-page">
    <header class="home-page__header">
      <h1 class="home-page__title">It's time<br/>to relax</h1>
    </header>
    <main class="home-page__main">
      <SegmentedControl />
      <div class="home-page__toggle-switches">
        <ToggleSwitch
          v-for="toggleSwitch in toggleSwitches"
          :key="toggleSwitch.name"
          :label="toggleSwitch.label"
          :name="toggleSwitch.name"
          :disabled="toggleSwitch.disabled"
        />
      </div>
      <PrimaryButton
        label="Continue"
        route="/breathe"
      />
    </main>
  </div>
</template>

<script>
import SegmentedControl from '@/components/SegmentedControl'
import ToggleSwitch from '@/components/ToggleSwitch'
import PrimaryButton from '@/components/PrimaryButton'

export default {
  components: { SegmentedControl, ToggleSwitch, PrimaryButton },
  data: () => ({
    toggleSwitches: [
      {
        label: 'Sound effects',
        name: 'soundEffectsEnabled',
        disabled: false
      },
      {
        label: 'Ambiant music',
        name: 'musicEnabled',
        disabled: false
      },
      {
        label: 'Vibrations',
        name: 'vibrationEnabled',
        disabled: true
      }
    ]
  })
}
</script>

<style lang="scss">
  .home-page {
    display: flex;
    flex-direction: column;
    gap: 64px;
    height: 80vh;
    max-height: 624px;

    @media (max-height: 800px) {
      gap: 32px;
    }
  
    &__header {
      align-items: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      color: var(--secondary--default);
      cursor: default;
      font-family: 'Poppins', sans-serif;
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 5.4rem;
      margin: 0;
      padding: 0;
      text-align: center;
      user-select: none;
    }

    &__main {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 80px;
      width: 300px;
    }

    &__toggle-switches {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 4px;
      width: 100%;
    }
  }
</style>
