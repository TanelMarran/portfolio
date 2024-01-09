<template>
  <div v-if="props.isLeft" class="title-content h-height-vh">
    <Heading>
      Hi there!
    </Heading>
    <h1>My name is <br><mark>Tanel Marran</mark></h1>
  </div>
  <div v-else class="title-content h-height-vh">
    <h2 class="pt-4">I'm a web developer, game developer and artist</h2>
  </div>
</template>

<script setup lang="ts">
import Heading from '../components/Heading.vue'
import {defineProps} from 'vue'
const props = defineProps({
  isLeft: {
    type: Boolean,
    default: false,
  },
  heading: {
    type: String,
    default: 'h1'
  }
})
</script>

<style lang="scss">
.title-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
