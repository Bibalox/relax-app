import { defineStore } from 'pinia'

import type { Settings } from 'src/types'

export const Store = defineStore('store', () => {
  const settings: Settings = {
    duration: {
      options: [
        {
          id: 'short',
          label: '3 minutes',
          value: 3 * 60 * 1000
        },
        {
          id: 'long',
          label: '10 minutes',
          value: 10 * 60 * 1000
        }
      ],
      active: 'short'
    },
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