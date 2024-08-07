<template>
  <div class="breathe-page">
    <main class="breathe-page__main">
      <BreathingRing :breathing="breathing" @click="startBreathing" />

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
    activityTimeout: null,
    soundEffectsInterval: null,
    vibrationsInterval: null
  }),
  methods: {
    startBreathing () {
      if (!this.breathing) {
        this.breathing = true
        
        this.activityTimeout = setTimeout(() => {
          if (this.settings.soundEffectsEnabled) {
            this.endingSoundEffect.load()
            this.endingSoundEffect.play()
          }
          this.stopBreathing()
        }, this.duration)

        // Sound effects
        if (this.settings.soundEffectsEnabled) {
          this.runningSoundEffect.load()
          this.runningSoundEffect.play()
          this.soundEffectsInterval = setInterval(() => {
            this.runningSoundEffect.play()
          }, 10000)
        }

        // Ambiant music
        if (this.settings.musicEnabled) {
          this.music.load()
          this.music.play()
        }

        // Vibrations
        if (this.settings.vibrationsEnabled) {
          this.vibrationsInterval = setInterval(() => {
            navigator.vibrate(200)
          }, 5000)
        }
      }
    },
    stopBreathing () {
      this.breathing = false
      clearTimeout(this.activityTimeout)

      // Sound effects
      if (this.settings.soundEffectsEnabled) {
      this.runningSoundEffect.pause()
        clearInterval(this.soundEffectsInterval)
      }

      // Ambiant music
      if (this.settings.musicEnabled) {
        this.music.pause()
      }

      // Vibrations
      if (this.settings.vibrationsEnabled) {
        clearInterval(this.vibrationsInterval)
      }
    }
  },
  computed: {
    ...mapState(['settings', 'audio']),
    ...mapGetters(['duration']),
    runningSoundEffect () {
      return this.audio.soundEffects.running
    },
    endingSoundEffect () {
      return this.audio.soundEffects.ending
    },
    music () {
      return this.audio.musics[this.settings.activityType]
    }
  },
  beforeUnmount () {
    this.stopBreathing()
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
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      opacity: 0;
      position: absolute;
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
