import { createStore } from 'vuex'

export default createStore({
  state: {
    soundEnabled: false,
    vibrationEnabled: false,
    musicEnabled: false,
    durationType: 'short'
  },
  getters: {
    duration: state => {
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
    TOGGLE_STATE (state, boolean) {
      state[boolean] = !state[boolean]
    }
  },
  actions: {
  },
  modules: {
  }
})
