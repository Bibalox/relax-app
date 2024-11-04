<script setup lang="ts">
import { reactive } from 'vue'

import SegmentedControl from '@components/SegmentedControl.vue'
import PrimaryButton from '@components/PrimaryButton.vue'

import type { GlobalState } from 'src/types'

const state: GlobalState = reactive({
  duration: 'short'
})
</script>

<template>
  <div class="home-view">
    <header class="home-view__header">
      <h1 class="home-view__title">
        It's time<br />to relax
      </h1>
    </header>
    <main class="home-view__main">
      <segmented-control
        :duration="state.duration"
        @click="duration => state.duration = duration"
      />
      <div class="home-view__toggle-switches">
        <!-- <ToggleSwitch
          v-for="toggleSwitch in toggleSwitches"
          :key="toggleSwitch.name"
          :label="toggleSwitch.label"
          :name="toggleSwitch.name"
          :disabled="toggleSwitch.disabled"
        /> -->
      </div>
      <primary-button
        label="Continue"
        route="/breathe"
      />
    </main>
  </div>
</template>

<style lang="scss">
.home-view {
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