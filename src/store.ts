import { defineStore } from 'pinia'

import type { Durations, Settings } from 'src/types'

export const Store = defineStore('state', () => {
  const duration: Durations = 'short'
  const settings: Settings = {
    soundEffectsEnabled: true,
    musicEnabled: false,
    vibrationsEnabled: false
  }
  const breathing = false

  return { duration, settings, breathing }
})