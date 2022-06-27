<template>
  <div class="home-page">
    <header class="home-page__header">
      <h1 class="home-page__title">It's time<br/>to relax</h1>
    </header>
    <main class="home-page__main">
      <DurationSwitch />
      <div class="home-page__fine-settings">
        <SettingToggle
          v-for="setting in fineSettings"
          :key="setting.value"
          :label="setting.label"
          :disabled="setting.disabled"
          :value="setting.value"
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
import DurationSwitch from '@/components/DurationSwitch'
import PrimaryButton from '@/components/PrimaryButton'
import SettingToggle from '@/components/SettingToggle'

export default {
  components: { DurationSwitch, PrimaryButton, SettingToggle },
  data: () => ({
    fineSettings: [
      {
        label: 'Interface sounds',
        value: 'soundEnabled',
        disabled: false
      },
      {
        label: 'Ambiant music',
        value: 'musicEnabled',
        disabled: true
      },
      {
        label: 'Vibrations',
        value: 'vibrationEnabled',
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
    height: 624px;
    gap: 64px;
  
    &__header {
      align-items: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
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
      user-select: none;
    }

    &__main {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 80px;
      width: 300px;
    }

    &__fine-settings {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 0 4px;
      width: 100%;
    }
  }
</style>
