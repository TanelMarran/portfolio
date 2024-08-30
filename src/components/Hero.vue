<template>
  <div class="hero h-walker-container">
    <div class="title-content h-height-vh">
      <Heading>
        Hello there!
      </Heading>
    </div>
    <div class="title-content h-height-vh">
      <h1>My name is <br><mark>Tanel Marran</mark></h1>
      <p class="title-content__text text-large mt-2">
        I am a web developer, game programmer and pixel artist currently based in Malmö, Sweden.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '../components/Heading.vue'
</script>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 128px 0;

  @include bp(small) {
    padding: 0;
    flex-direction: row;
  }
}

.title-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @include bp(small) {
    padding: 128px 0;
  }
}

.title-content__text {
  max-width: 320px;

  @include bp(small) {
    max-width: none;
  }
}

</style>
