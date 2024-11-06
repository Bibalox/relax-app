<script setup lang="ts">
const props = defineProps<{
  breathing: boolean
}>()

defineEmits(['click'])
</script>

<template>
  <svg
    viewBox="0 0 320 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="breathing-ring"
    :class="{ 'breathing-ring--breathing' : props.breathing }"
    @click="$emit('click')"
  >
    <circle
      class="breathing-ring__outer-ring"
      cx="160" cy="160"
      r="160"
      shape-rendering="geometricPrecision"
      fill="url(#outer-ring-gradient)"
    />
    <circle
      class="breathing-ring__center-ring"
      cx="160" cy="160"
      r="107"
      shape-rendering="geometricPrecision"
      fill="url(#center-ring-gradient)"
    />
    <circle
      class="breathing-ring__inner-ring"
      cx="160" cy="160"
      r="50"
      shape-rendering="geometricPrecision"
      fill="url(#inner-ring-gradient)"
    />
    <defs>
      <radialGradient
        id="outer-ring-gradient"
        cx="0" cy="0"
        r="1"
        gradientUnits="userSpaceOnUse" gradientTransform="translate(160 160) scale(160)"
      >
        <stop
          offset="0.7" stop-color="white"
          stop-opacity="0"
        />
        <stop
          offset="1" stop-color="white"
          stop-opacity="0.19"
        />
      </radialGradient>
      <radialGradient
        id="center-ring-gradient"
        cx="0" cy="0"
        r="1"
        gradientUnits="userSpaceOnUse" gradientTransform="translate(160 160) scale(107)"
      >
        <stop
          offset="0.6" stop-color="white"
          stop-opacity="0"
        />
        <stop
          offset="1" stop-color="white"
          stop-opacity="0.19"
        />
      </radialGradient>
      <radialGradient
        id="inner-ring-gradient"
        cx="0" cy="0"
        r="1"
        gradientUnits="userSpaceOnUse" gradientTransform="translate(160 160) rotate(90) scale(50 50)"
      >
        <stop offset="0.5" stop-color="white" />
        <stop offset="1" stop-color="#F9F9F9" />
      </radialGradient>
    </defs>
  </svg>
</template>

<style lang="scss">
.breathing-ring {
  cursor: pointer;
  height: 320px;
  width: 320px;

  &__inner-ring {
    cursor: pointer;
  }

  &--breathing &__inner-ring {
    animation: innerRingBreathing 5s .2s alternate infinite ease-in-out;
    transform-origin: 160px 160px;
    
    @keyframes innerRingBreathing {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(3);
      }
    }
  }
  
  &--breathing &__center-ring {
    animation: centerRingBreathing 5s alternate infinite ease-in-out;
    transform-origin: 160px 160px;

    @keyframes centerRingBreathing {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(1.5);
      }
    }
  }
}
</style>