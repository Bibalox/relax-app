<script setup lang="ts">
const props = defineProps<{
  label: string,
  route: string
}>()

defineEmits(['click'])
</script>

<template>
  <router-link
    v-if="props.route"
    :to="props.route"
    class="primary-button"
  >
    <label
      class="primary-button__label" 
      v-text="props.label"
    />
  </router-link>
  <button
    v-else
    class="primary-button"
    @click="$emit('click')"
  >
    <label
      class="primary-button__label" 
      v-text="props.label"
    />
  </button>
</template>

<style lang="scss">
  .primary-button {
    align-items: center;
    background-color: var(--secondary--default);
    border: none;
    border-radius: 99px;
    box-shadow: var(--shadow--hard);
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: 44px;
    justify-content: center;
    outline: none;
    padding: 0 16px;
    text-decoration: none;
    transition: box-shadow .3s, transform .3s;
    width: 100%;

    &:hover {
      box-shadow: 0px 8px 12px 3px rgba(25, 74, 147, 0.25), 0px 3px 4px rgba(25, 74, 147, 0.25);
      transform: translateY(-2px);
    }

    &__label {
      color: var(--primary--darker);
      cursor: inherit;
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      user-select: none;
    }
  }
</style>