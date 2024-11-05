import { defineStore } from 'pinia'

import type { Settings } from 'src/types'

export const Store = defineStore('store', () => {
  const settings: Settings = {
    duration: 'short',
    toggles: {
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
  }
  
  const breathing = false

  return { settings, breathing }
})