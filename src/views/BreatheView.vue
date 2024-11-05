<script setup lang="ts">
import BreathingRing from '@components/BreathingRing.vue'
import PrimaryButton from '@components/PrimaryButton.vue'

import { Store } from '@/store'
const store = Store()

const startBreathing = () => {
  store.breathing = !store.breathing
}

store.breathing = false
</script>

<template>
  <div class="breathe-view">
    <main class="breathe-view__main">
      <breathing-ring :breathing="store.breathing" @click="startBreathing" />

      <footer class="breathe-view__footer">
        <transition name="fade" mode="out-in">
          <div
            v-if="store.breathing"
            class="breathe-view__instructions"
          >
            <span class="breathe-view__label">
              Breathe in
            </span>
            <span class="breathe-view__label breathe-view__label--animation-delayed">
              Breathe out
            </span>
          </div>
          <primary-button
            v-else
            label="Start"
            @click="startBreathing"
          />
        </transition>
      </footer>
    </main>

    <router-link
      class="breathe-view__back-button"
      to="/"
    >
      <svg
        width="16" height="16"
        viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7071 2.70711C11.0976 2.31658 11.0976 1.68342 10.7071 1.29289C10.3166 0.902369 9.68342 0.902369 9.29289 1.29289L10.7071 2.70711ZM4 8L3.29289 7.29289C2.90237 7.68342 2.90237 8.31658 3.29289 8.70711L4 8ZM9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071C11.0976 14.3166 11.0976 13.6834 10.7071 13.2929L9.29289 14.7071ZM9.29289 1.29289L3.29289 7.29289L4.70711 8.70711L10.7071 2.70711L9.29289 1.29289ZM3.29289 8.70711L9.29289 14.7071L10.7071 13.2929L4.70711 7.29289L3.29289 8.70711Z"
          fill="var(--secondary--default)"
        />
      </svg>
      Back
    </router-link>
  </div>
</template>

<style lang="scss">
.breathe-view {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;

  &__back-button {
    align-items: center;
    background-color: var(--secondary--transparent);
    border-radius: 16px;
    color: var(--secondary--default);
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    gap: 8px;
    height: 32px;
    outline: none;
    padding: 0 16px 0 12px;
    position: absolute;
    text-decoration: none;
    top: 24px;
    transition: background-color .4s ease-in-out;
    left: 32px;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
      background-color: var(--secondary--disabled);
    }
  }

  &__main {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 300px;
    height: 80vh;
    max-height: 624px;
  }

  &__footer {
    bottom: 0;
    height: 44px;
    position: absolute;
    width: 100%;
  }

  &__instructions {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  &__label {
    animation: fade-in-out 10s ease-in-out infinite both;
    color: var(--secondary--default);
    cursor: default;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    opacity: 0;
    position: absolute;
    -webkit-user-select: none;
    user-select: none;

    &--animation-delayed {
      animation-delay: 5s;
    }

    @keyframes fade-in-out {
      5%, 45% {
        opacity: 0;
      }

      25%, 35% {
        opacity: 1;
      }
    }
  }
}

.fade {
  &-enter, &-leave-to {
    opacity: 0;
  }

  &-leave, &-enter-to {
    opacity: 1;
  }

  &-enter-active, &-leave-active {
    transition: opacity .5s ease-out;
  }
}
</style>