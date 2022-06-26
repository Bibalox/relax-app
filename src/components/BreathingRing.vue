<template>
  <div
    :class="[
      'breathing-ring',
      { 'breathing-ring--breathing' : breathing }
    ]">
    <div class="breathing-ring__ring breathing-ring__ring--inner"/>
    <div class="breathing-ring__ring breathing-ring__ring--center"/>
    <div class="breathing-ring__ring breathing-ring__ring--outer"/>
  </div>
</template>

<script>
export default {
  props: {
    breathing: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .breathing-ring {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    &--breathing {
      .breathing-ring__ring--inner {
        animation: innerRingBreathing 5s .2s alternate infinite ease-in-out;
        
        @keyframes innerRingBreathing {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(3);
          }
        }
      }
      
      .breathing-ring__ring--center {
        animation: centerRingBreathing 5s alternate infinite ease-in-out;

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

    &__ring {
      border-radius: 50%;
      position: absolute;

      &--inner {
        background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 46.87%, #F9F9F9 100%);
        height: 100px;
        width: 100px;
      }

      &--center {
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 58.85%, rgba(255, 255, 255, 0.19) 100%);;
        height: 200px;
        width: 200px;
      }

      &--outer {
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 72.4%, rgba(255, 255, 255, 0.19) 100%);
        height: 320px;
        width: 320px;
      }
    }
  }
</style>
