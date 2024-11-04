<script setup lang="ts">
const props = defineProps<{ duration: Durations }>()

import type { Durations } from 'src/types'

defineEmits(['click'])
</script>

<template>
  <div class="segmented-control">
    <div class="segmented-control__content">
      <div
        :class="[
          'segmented-control__active-option-indicator',
          `segmented-control__active-option-indicator--${props.duration}`
        ]"
      />
      <button
        :class="[
          'segmented-control__option',
          { 'segmented-control__option--active' : props.duration === 'short' }
        ]"
        @click="$emit('click', 'short')"
      >
        3 minutes
      </button>
      <button
        :class="[
          'segmented-control__option',
          { 'segmented-control__option--active' : props.duration === 'long' }
        ]"
        @click="$emit('click', 'long')"
      >
        10 minutes
      </button>
    </div>
  </div>
</template>

<style lang="scss">
  .segmented-control {
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