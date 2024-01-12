<template>
  <div class="single-image">
    <img class="single-image__img h-image-full" :src="props.src" :alt="props.alt">
    <WiggleBackground class="single-image__background"/>
  </div>
</template>

<script setup lang="ts">
import WiggleBackground from '../components/WiggleBackground.vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.single-image {
  position: relative;
}

.single-image__img {
  border-radius: 4px;
}

.single-image__background {
  left: -48px;
  bottom: -64px;
  width: 169px;
  height: 128px;

}
</style>