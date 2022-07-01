<template>
  <div class="duration-switch">
    <div class="duration-switch__content">
      <div
        :class="[
          'duration-switch__active-marker',
          `duration-switch__active-marker--${durationType}`
        ]"
      />
      <button
        :class="[
          'duration-switch__button',
          { 'duration-switch__button--active' : durationType === 'short' }
        ]"
        @click="switchDuration"
      >
        3 minutes
      </button>
      <button
        :class="[
          'duration-switch__button',
          { 'duration-switch__button--active' : durationType === 'long' }
        ]"
        @click="switchDuration"
      >
        5 minutes
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    breathing: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    switchDuration () {
      if (this.durationType === 'long') {
        this.$store.commit('UPDATE_DURATION_TYPE', 'short')
      } else {
        this.$store.commit('UPDATE_DURATION_TYPE', 'long')
      }
    }
  },
  computed: {
    ...mapState(['durationType'])
  }
}
</script>

<style lang="scss">
  .duration-switch {
    background-color: var(--secondary--transparent);
    border-radius: 99px;
    box-sizing: border-box;
    padding: 4px;
    height: 50px;
    width: 100%;

    &__content {
      align-items: center;
      display: flex;
      position: relative;
      height: 100%;
      width: 100%;
    }

    &__button {
      background-color: transparent;
      border: none;
      color: var(--secondary--default);
      cursor: pointer;
      outline: none;
      position: relative;
      flex: 1;
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      height: 100%;
      padding: 0;
      transition: color .2s .1s ease-out;
      user-select: none;

      &--active {
        color: var(--primary--darker);
      }
    }

    &__active-marker {
      background-color: var(--secondary--default);
      border-radius: 99px;
      box-shadow: var(--shadow);
      width: 50%;
      height: 100%;
      position: absolute;
      transition: transform .4s cubic-bezier(0.65, 0, 0.35, 1);
      
      &--short {
        transform: translateX(0);
      }

      &--long {
        transform: translateX(100%);
      }
    }
  }
</style>
