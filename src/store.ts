import { defineStore } from 'pinia'

import type { Durations, Settings } from 'src/types'

export const Store = defineStore('state', () => {
  const duration: Durations = 'short'
  const settings: Settings = {
    soundEffects: {
      label: 'Sound effects',
      active: true,
      disabled: false
    },
    music: {
      label: 'Ambiant music',
      active: false,
      disabled: false
    },
    vibrations: {
      label: 'Vibrations',
      active: false,
      disabled: navigator.userAgent.toLowerCase().includes('android') ? false : true
    }
  }
  const breathing = false

  return { duration, settings, breathing }
})