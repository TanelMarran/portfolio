<template>
  <div class="hero h-walker-container">
    <div class="title-content h-height-vh">
      <Heading>
        Hi there!
      </Heading>
      <h1>My name is <br><mark>Tanel Marran</mark></h1>
    </div>
    <div class="title-content h-height-vh">
      <h2 class="pt-4">I'm a web developer, game developer and artist</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '../components/Heading.vue'
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
