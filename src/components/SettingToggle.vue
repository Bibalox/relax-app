<template>
  <button
    :class="[
      'setting-toggle',
      { 'setting-toggle--disabled' : disabled }
    ]"
    :disabled="disabled"
    @click="toggleSetting"
  >
    <span
      class="setting-toggle__label"
      v-text="label"
    />
    <div class="setting-toggle__toggle">
      <div
        :class="[
          'setting-toggle__knob',
          `setting-toggle__knob--${key ? 'right' : 'left'}`
        ]"
      />
    </div>
  </button>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    toggleSetting () {
      this.$store.commit('TOGGLE_STATE', this.value)
    }
  },
  computed: {
    key () {
      return this.$store.state[this.value]
    }
  }
}
</script>

<style lang="scss">
  .setting-toggle {
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 0;
    cursor: pointer;
    display: flex;
    padding: 0;
    width: 100%;

    &--disabled {
      cursor: default;

      .setting-toggle__label {
        color: var(--secondary--disabled);
      }

      .setting-toggle__knob {
        background-color: var(--secondary--disabled);
        box-shadow: var(--shadow--soft);
      }
    }

    &__label {
      color: var(--secondary--default);
      flex: 1;
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      text-align: left;
      user-select: none;
    }

    &__toggle {
      background-color: var(--secondary--transparent);
      border-radius: 99px;
      box-sizing: border-box;
      padding: 3px;
      height: 32px;
      width: 54px;
    }

    &__knob {
      background-color: var(--secondary--default);
      border-radius: 50%;
      box-shadow: var(--shadow--hard);
      height: 26px;
      transition: transform .25s ease-in-out;
      width: 26px;

      &--left {
        transform: translateX(0);
      }

      &--right {
        transform: translateX(22px);
      }
    }
  }
</style>
