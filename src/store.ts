import { defineStore } from 'pinia'

import type { Duration, Toggles } from 'src/types'

export const useSettings = defineStore('settings', () => {
  const duration: Duration = {
    options: {
      short: {
        label: '3 minutes',
        value: 3 * 60 * 1000
      },
      long: {
        label: '10 minutes',
        value: 10 * 60 * 1000
      }
    },
    active: 'short'
  }

  const toggles: Toggles = {
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

  return { duration, toggles }
})

export const useData = defineStore('data', () => {
  const soundEffects = {
    running: new Audio('/audio/sound-effect-running.mp3'),
    ending: new Audio('/audio/sound-effect-ending.mp3')
  }
    
  const musics = {
    short: new Audio('/audio/music-short.mp3'),
    long: new Audio('/audio/music-long.mp3')
  }

  return { soundEffects, musics }
})

export const useState = defineStore('state', () => {
  const breathing = false

  return { breathing }
})



