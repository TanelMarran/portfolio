<template>
  <div class="about-me h-walker-container">
    <div>
      <SingleImage
          :src="aboutMeImage"
          alt="Tanel Marran"
      />
    </div>
    <div>
      <Heading>
        About me
      </Heading>
      <div class="text mt-4">
        <p class="text-large">
          I am a web developer, game programmer and pixel artist currently based in Tartu, Estonia.
        </p>
        <p>
          I've been programming since 2014, using Game Maker Studio to recreate video games I watched lets plays of on Youtube. My favourites were Paper Mario: The Thousand Year Door as well New Super Mario Bros. Wii
        </p>
        <p>
          I decided to pursue my passion for programming at the University of Tartu, where I graduate with a Bachelor's degree in Computer Science in 2021.
        </p>
        <p>
          I have been working as full-stack web developer ever since!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SingleImage from '@/components/SingleImage.vue'
import aboutMeImage from '@/assets/images/placeholder.jpg'
import Heading from '../components/Heading.vue'

const props = defineProps({
  isLeft: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.about-me {
  align-items: center;
  margin: 128px 0;
}
</style>