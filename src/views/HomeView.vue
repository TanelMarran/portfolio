<template>
  <main>
    <Walker>
      <template #left>
        <TitleContent is-left/>
        <div class="h-height-vh">
          <SingleImage
            :src="aboutMeImage"
            alt="Tanel Marran"
          />
        </div>
        <div class="h-height-vh">
          <Icons/>
        </div>
        <Heading>
          Projects
        </Heading>
        <Heading>
          Contact
        </Heading>
      </template>
      <template #right>
        <TitleContent/>
        <div class="h-height-vh">
          <Heading>
            About me
          </Heading>
          <div class="text mt-4 text-large">
            <h2>
              I am a web developer, game programmer and pixel artist currently based in Tartu, Estonia.
            </h2>
            <p>
              I've been programming since 2014, creating games to show to my friends using Gamer Maker Studio.
            </p>
            <p>
              I decided to pursue my passion for programming at the University of Tartu, where I graduate with a Bachelor's degree in Computer Science in 2021.
            </p>
            <p>
              I have been working as full-stack web developer ever since!
            </p>

          </div>
        </div>
        <div class="h-height-vh">
          <Heading>
            Experience
          </Heading>
          <div class="text text-large">
            <p>
              My 3 years of experience as a full-stack developer has exposed me to many of the tools used in the field:
            </p>
          </div>
        </div>
        <p v-for="i in Array(200)" :key="i">
          Tex text text texte texcet etefaewg asdgf klnag <br> reghjwaorlg ewrgn olanrgo erg ekg erbg wnergo
        </p>
      </template>
    </Walker>
  </main>
</template>

<script setup lang="ts">
import Walker from '../components/Walker.vue'
import TitleContent from '../components/TitleContent.vue'
import Heading from '../components/Heading.vue'
import SingleImage from '../components/SingleImage.vue'

import aboutMeImage from '@/assets/images/placeholder.jpg'
import Icons from '@/components/Icons.vue'
</script>

