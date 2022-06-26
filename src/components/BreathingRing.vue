<template>
  <div class="breathing-ring">
    <div class="breathing-ring__outer-ring breathing-ring__outer-ring--large"/>
    <div class="breathing-ring__outer-ring breathing-ring__outer-ring--small"/>
    <div class="breathing-ring__inner-ring"/>
  </div>
</template>

<script>
export default {
  props: {
  }
}
</script>

<style lang="scss">
  .breathing-ring {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    &__outer-ring {
      background: radial-gradient(50% 50% at 50% 50%, #80C3F4 74.48%, #96CDF6 100%);
      border-radius: 50%;
      position: absolute;

      &--large {
        // animation: breathe 10s 2s alternate infinite ease-in-out;
        height: 320px;
        width: 320px;
      }

      &--small {
        animation: breatho 5s .5s alternate infinite ease-in-out;
        height: 210px;
        width: 210px;

        @keyframes breatho {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.5);
          }
        }
      }
    }

    &__inner-ring {
      animation: breathe 5s alternate infinite ease-in-out;
      background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 46.87%, #ECEDFA 100%);
      border-radius: 50%;
      height: 100px;
      position: absolute;
      width: 100px;
    }

    @keyframes breathe {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(3);
      }
    }
  }
</style>
