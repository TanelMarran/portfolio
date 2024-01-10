<template>
  <main>
    <Walker>
      <template #left>
        <Hero is-left/>
        <AboutMe is-left/>
        <Experience is-left :highlights="iconHighlights"/>
        <Projects is-left/>
        <Contact is-left/>
      </template>
      <template #right>
        <Hero/>
        <AboutMe/>
        <Experience v-model:highlights="iconHighlights"/>
        <Projects/>
        <Contact/>
      </template>
    </Walker>
  </main>
</template>

<script setup lang="ts">
import Walker from '../components/Walker.vue'
import Hero from '../components/Hero.vue'
import AboutMe from '../components/AboutMe.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

import {ref} from 'vue'

const iconHighlights = ref({
  vue: false,
  react: false,
  godot: false,
  unity: false,
  unreal: false,
  wordpress: false
})
</script>

