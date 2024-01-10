<template>
  <main>
    <Walker>
      <Hero/>
      <AboutMe/>
      <Experience/>
    </Walker>
    <Projects/>
    <Contact/>
  </main>
</template>

<script setup lang="ts">
import Walker from '../components/Walker.vue'
import Hero from '../components/Hero.vue'
import AboutMe from '../components/AboutMe.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
</script>

