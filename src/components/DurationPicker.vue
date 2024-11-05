<script setup lang="ts">
import { useSettings } from '@/store'
const settings = useSettings()
</script>

<template>
  <div class="duration-picker">
    <div class="duration-picker__content">
      <div
        :class="[
          'duration-picker__active-option-indicator',
          `duration-picker__active-option-indicator--${settings.duration.active}`
        ]"
      />
      <button
        v-for="(duration, key) in settings.duration.options"
        :key="key"
        :class="[
          'duration-picker__option',
          { 'duration-picker__option--active' : settings.duration.active === key }
        ]"
        @click="() => settings.duration.active = key"
        v-text="duration.label"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .duration-picker {
    background-color: var(--secondary--transparent);
    border-radius: 99px;
    box-sizing: border-box;
    padding: 4px;
    height: 50px;
    width: 100%;

    &__content {
      align-items: center;
      display: flex;
      position: relative;
      height: 100%;
      width: 100%;
    }

    &__option {
      background-color: transparent;
      border: none;
      color: var(--secondary--default);
      cursor: pointer;
      outline: none;
      position: relative;
      flex: 1;
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      height: 100%;
      padding: 0;
      transition: color .2s .1s ease-out;
      -webkit-user-select: none;
      user-select: none;

      &--active {
        color: var(--primary--darker);
      }
    }

    &__active-option-indicator {
      background-color: var(--secondary--default);
      border-radius: 99px;
      box-shadow: var(--shadow--hard);
      width: 50%;
      height: 100%;
      position: absolute;
      transition: transform .4s cubic-bezier(0.65, 0, 0.35, 1);
      
      &--short {
        transform: translateX(0);
      }

      &--long {
        transform: translateX(100%);
      }
    }
  }
</style>