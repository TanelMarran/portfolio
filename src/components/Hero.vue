<template>
  <div class="hero h-walker-container">
    <div class="title-content h-height-vh">
      <Heading>
        Hello there!
      </Heading>
    </div>
    <div class="title-content h-height-vh">
      <h1>My name is <br><mark>Tanel Marran</mark></h1>
      <p class="text-large mt-2">
        I am a web developer, game programmer and pixel artist currently based in Tartu, Estonia.
      </p>
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
