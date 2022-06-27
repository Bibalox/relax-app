<template>
  <router-link
    v-if="route"
    :to="route"
    v-text="label"
    class="primary-button"
  />
  <button
    v-else
    class="primary-button"
    v-text="label"
    @click="clickButton"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
      required: true
    },
    route: {
      type: String,
      default: ""
    }
  },
  methods: {
    clickButton () {
      this.$emit('clickButton')
    }
  }
}
</script>

<style lang="scss">
  .primary-button {
    align-items: center;
    background-color: var(--secondary--default);
    border: none;
    border-radius: 20px;
    box-shadow: var(--shadow);
    box-sizing: border-box;
    color: var(--primary--darker);
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    height: 40px;
    justify-content: center;
    outline: none;
    padding: 0 16px;
    transition: all .3s ease-in-out;
    text-decoration: none;
    width: 100%;

    &:hover {
      box-shadow: 0px 8px 12px 3px rgba(25, 74, 147, 0.25), 0px 3px 4px rgba(25, 74, 147, 0.25);
      cursor: pointer;
      transform: translateY(-1px);
    }
  }
</style>
