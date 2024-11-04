<script setup lang="ts">

</script>

<template>
  <button
    :class="[
      'toggle-switch',
      { 'toggle-switch--disabled' : disabled }
    ]"
    :disabled="disabled"
    @click="toggleSetting"
  >
    <span
      class="toggle-switch__label"
      v-text="label"
    />
    <div class="toggle-switch__switch">
      <div
        :class="[
          'toggle-switch__knob',
          `toggle-switch__knob--${settingEnabled ? 'right' : 'left'}`
        ]"
      />
    </div>
  </button>
</template>

<style lang="scss">
  .toggle-switch {
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

      .toggle-switch__label {
        color: var(--secondary--disabled);
      }

      .toggle-switch__knob {
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

    &__switch {
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