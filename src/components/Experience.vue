<template>
  <div class="experience h-walker-container">
    <div>
      <Icons :highlights="highlights"/>
    </div>
    <div>
      <Heading>
        Experience
      </Heading>
      <div class="text mt-8">
        <p class="text-large">
          My 3 years of experience as a full-stack developer has developed both my technical and interpersonal skills.
        </p>
        <p>
          I've worked with Nuxt.js to update and modernize the design of an <a @mouseenter="() => highlights.vue = true" @mouseleave="() => highlights.vue = false" href="https://www.on24.ee/" target="_blank">all-in-one webstore</a>.
          I've also developed numerous Wordpress sites, my favourite of which was a <a @mouseenter="() => highlights.wordpress = true" @mouseleave="() => highlights.wordpress = false" href="https://www.viidumetsa.ee/" target="_blank">real-estate development</a> with a system to configure details of the selected plot to the client's liking.
          Currently I'm working on a website redesign using Next.js and Strapi.
        </p>
        <p>
          In the waters of game development, I've tried my hand at multiple different engines.
          I'm a big fan of 2D pixel art games and as such my favourite engine to work with in my free time is Godot.
        </p>
        <p>
          I've made a 2D platforming horror game
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icons from '@/components/Icons.vue'
import Heading from '@/components/Heading.vue'
import {computed, ref} from 'vue'

const highlights = ref({
  vue: false,
  react: false,
  godot: false,
  unity: false,
  unreal: false,
  wordpress: false
})
</script>

<style lang="scss">
.experience {
  align-items: center;
  margin: 128px 0;
}
</style>