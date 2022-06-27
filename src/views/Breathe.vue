<template>
  <div class="breathe-page">
    <router-link
      class="breathe-page__back-button"
      to="/"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.7071 2.70711C11.0976 2.31658 11.0976 1.68342 10.7071 1.29289C10.3166 0.902369 9.68342 0.902369 9.29289 1.29289L10.7071 2.70711ZM4 8L3.29289 7.29289C2.90237 7.68342 2.90237 8.31658 3.29289 8.70711L4 8ZM9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071C11.0976 14.3166 11.0976 13.6834 10.7071 13.2929L9.29289 14.7071ZM9.29289 1.29289L3.29289 7.29289L4.70711 8.70711L10.7071 2.70711L9.29289 1.29289ZM3.29289 8.70711L9.29289 14.7071L10.7071 13.2929L4.70711 7.29289L3.29289 8.70711Z"
          fill="var(--secondary--default)"
        />
      </svg>
      Back
    </router-link>

    <main class="breathe-page__main">
      <BreathingRing :breathing="breathing" />

      <footer class="breathe-page__footer">
        <transition name="fade" mode="out-in">
          <div
            v-if="breathing"
            class="breathe-page__instructions"
          >
            <span class="breathe-page__label">
              Breathe in
            </span>
            <span class="breathe-page__label breathe-page__label--animation-delayed">
              Breathe out
            </span>
          </div>
          <PrimaryButton
            v-else
            label="Start"
            @clickButton="startBreathing"
          />
        </transition>
      </footer>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import BreathingRing from '@/components/BreathingRing'
import PrimaryButton from '@/components/PrimaryButton'

export default {
  components: { BreathingRing, PrimaryButton },
  data: () => ({
    breathing: false,
    interval: null
  }),
  methods: {
    startBreathing () {
      this.breathing = true

      setTimeout(() => {
        clearInterval(this.interval)
        this.breathing = false
      }, this.duration)

      if (this.soundEnabled) {
        this.interfaceSound.load()
        this.interfaceSound.play()
        this.interval = setInterval(() => {
          this.interfaceSound.play()
        }, 10000)
      }
    }
  },
  computed: {
    ...mapState(['soundEnabled', 'interfaceSound']),
    ...mapGetters(['duration'])
  },
  beforeUnmount () {
    this.interfaceSound.pause()
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss">
  .breathe-page {
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
      user-select: none;

      &:hover {
        background-color: var(--secondary--disabled);
      }
    }

    &__main {
      align-items: center;
      display: flex;
      height: 624px;
      justify-content: center;
      position: relative;
      width: 300px;
    }

    &__footer {
      bottom: 0;
      height: 40px;
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
      animation: fadeInOut 10s ease-in-out infinite both;
      color: var(--secondary--default);
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      opacity: 0;
      position: absolute;
      user-select: none;

      &--animation-delayed {
        animation-delay: 5s;
      }

      @keyframes fadeInOut {
        5%, 45% {
          opacity: 0;
        }

        25%, 35% {
          opacity: 1;
        }
      }
    }
  }

  .fade-enter-active {
    animation: fade .5s;
  }
  .fade-leave-active {
    animation: fade .5s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
