import { createStore } from 'vuex'

export default createStore({
  state: {
    durationType: 'short',
    soundEnabled: false,
    musicEnabled: false,
    vibrationEnabled: false
  },
  getters: {
    duration (state) {
      const shortDuration = .5 * 10000
      const longDuration = 1 * 10000

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
