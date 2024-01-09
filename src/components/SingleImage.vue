<template>
  <img class="single-image h-image-full" :src="props.src" :alt="props.alt">
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

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
  border-radius: 4px;
}
</style>