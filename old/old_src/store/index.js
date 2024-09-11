import { createStore } from 'vuex'

export default createStore({
  state: {
    settings: {
      activityType: 'short',
      soundEffectsEnabled: true,
      musicEnabled: false,
      vibrationsEnabled: false
    },
    audio: {
      soundEffects: {
        running: new Audio(require('@/assets/sound-effect-running.mp3')),
        ending: new Audio(require('@/assets/sound-effect-ending.mp3'))
      },
      musics: {
        short: new Audio(require('@/assets/music-short.mp3')),
        long: new Audio(require('@/assets/music-long.mp3'))
      }
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
