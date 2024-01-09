<template>
  <div class="heading">
    <div class="heading__inner">
      <WiggleBackground class="heading__background"/>
      <h1 class="heading__text">
        <slot/>
      </h1>
    </div>
  </div>
</template>

<script setup>
import WiggleBackground from '../components/WiggleBackground.vue'

</script>

<style lang="scss">
.heading {
  color: $color-background;
}

.heading__inner {
  position: relative;
  display: inline-block;
  margin: 16px;
}

.heading__background {
  left: -32px;
  top: -16px;
  bottom: -16px;
  right: -32px;
}
</style>