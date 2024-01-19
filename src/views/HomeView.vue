<template>
  <Header/>
  <main>
    <Walker>
      <Hero v-appear/>
      <AboutMe v-appear/>
      <Experience v-appear/>
    </Walker>
    <Projects v-appear/>
    <Video v-appear/>
    <Walker>
      <Contact v-appear/>
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
import Video from '../components/Video.vue'
import Header from '../components/Header.vue'
</script>