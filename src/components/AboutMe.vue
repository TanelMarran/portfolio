<template>
  <div>
    <div id="about-me"/>
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
        <div class="text mt-8">
          <p class="h2">
            I am a programmer with a deep love for art and design.
          </p>
          <p>
            I started programming in 2010, looking up tutorials on how to make 2D platforming games using Game Maker Studio.
            My love for creating video games bloomed and blossomed into a general love for computer science, math and systems design.
          </p>
          <p>
            Game development sits at the intersection of programming and art. I have nurtured these two aspects through both my personal life and professional career,
            leading me to love branches of Computer Science which exist at that meeting place: AI programming, game development, VR and web development.
          </p>
          <p>
            When I'm not writing for-loops or recursive functions, I'm sewing clothing, painting with gouache, rock-climbing or playing DnD with my friends!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SingleImage from '@/components/SingleImage.vue'
import aboutMeImage from '@/assets/images/profile.jpg'
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