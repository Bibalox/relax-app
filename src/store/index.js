import { createStore } from 'vuex'

export default createStore({
  state: {
    durationType: 'short',
    soundEnabled: true,
    musicEnabled: false,
    vibrationEnabled: false,
    interfaceSound: new Audio(require('@/assets/interface-sound.mp3'))
  },
  getters: {
    duration (state) {
      const shortDuration = 3 * 60 / 10 * 10000 // First value is total duration in minutes, returned value is in milliseconds
      const longDuration =  10 * 60 / 10 * 10000 // First value is total duration in minutes, returned value is in milliseconds

      switch (state.durationType) {
        case 'short':
          return shortDuration
        case 'long':
          return longDuration
        default:
          return shortDuration
      }
    }
  },
  mutations: {
    UPDATE_DURATION_TYPE (state, durationType) {
      state.durationType = durationType
    },
    TOGGLE_STATE (state, key) {
      state[key] = !state[key]
    }
  },
  actions: {
  },
  modules: {
  }
})
