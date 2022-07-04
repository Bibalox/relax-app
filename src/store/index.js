import { createStore } from 'vuex'

export default createStore({
  state: {
    settings: {
      activityType: 'short',
      soundEffectsEnabled: true,
      musicEnabled: false,
      vibrationEnabled: false
    },
    audio: {
      soundEffects: new Audio(require('@/assets/sound-effects.mp3'))
    }
  },
  getters: {
    duration (state) {
      const durations = {
        short: 3 * 60 * 1000, // Convert minutes into milliseconds
        long: 10 * 60 * 1000
      }

      return durations[state.settings.activityType]
    }
  },
  mutations: {
    UPDATE_ACTIVITY_TYPE (state, type) {
      state.settings.activityType = type
    },
    TOGGLE_SETTING (state, key) {
      state.settings[key] = !state.settings[key]
    }
  },
  actions: {
  },
  modules: {
  }
})
