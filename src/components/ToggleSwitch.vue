<script setup lang="ts">
const props = defineProps<{ 
  label: string,
  active: boolean,
  disabled: boolean
}>()

defineEmits(['click'])
</script>

<template>
  <button
    :class="[
      'toggle-switch',
      { 'toggle-switch--disabled' : props.disabled }
    ]"
    :disabled="props.disabled"
    @click="$emit('click')"
  >
    <span
      class="toggle-switch__label"
      v-text="props.label"
    />
    <div class="toggle-switch__switch">
      <div
        :class="[
          'toggle-switch__knob',
          `toggle-switch__knob--${props.active ? 'right' : 'left'}`
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
      cursor: not-allowed;

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
      cursor: inherit;
      flex: 1;
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      text-align: left;
      -webkit-user-select: none;
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
      transition: transform .3s ease-in-out;
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