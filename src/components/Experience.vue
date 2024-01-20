<template>
  <div>
    <div id="experience"/>
    <div class="experience h-walker-container">
      <div>
        <Heading>
          Experience
        </Heading>
        <div class="text mt-8">
          <p class="h2">
            My 3 years of experience as a full-stack developer has improved both my technical and interpersonal skills.
          </p>
          <p>
            I've used the flexibility afforded to me at work to experiment and learn about different web development stacks.
            I am knowledgeable in creating custom Wordpress themes using OOP principles,
            implementing interactive and responsive design using Vue and Nuxt.js
            and creating playful canvas renders using THREE.js.
            I even made a <a href="https://github.com/TanelMarran/dnd-card-creator">DnD card creator</a> to help print out spell cards to use when hosting games for my friends!
          </p>
          <p>
            Working at the Tartu based development house and design studio <a href="https://playandnope.com/">Play & NOPE Alliance</a> has developed my ability to work in a multi-disiplinary environment.
            Communicating with designer, volleying ideas back and forth, finding efficient solutions for design requirements - all these things have become second nature to me.
          </p>
        </div>
      </div>
      <div>
        <Icons class="experience__icons" :highlights="highlights"/>
        <div class="mt-16 text">
          <p class="h2">
            Second only to thinking about games, I love making them as well!
          </p>
          <p>
            I've been making games since my adolescence, creating crude recreations of games I loved, such as <a href="https://en.wikipedia.org/wiki/The_Binding_of_Isaac_(video_game)">The Binding of Isaac</a> and the
            <a href="https://en.wikipedia.org/wiki/Paper_Mario">Paper Mario series</a>.
            The interest developed and so far I have released 10+ games, 9 of which are playable on my <a href="https://forestherd.itch.io/">itch.io page</a>.
          </p>
          <p>
            Engines I use to make games vary depending on the project: I have experience in using Godot 4, Unity and Unreal Engine 5.
            Most often I make 2D platformers, with a focus on deep player movement.
            Other times I create short narrative experiences, often with an element of horror to them.
            I've also released one puzzle game that introduced me to the command behavioural design pattern.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icons from '@/components/Icons.vue'
import Heading from '@/components/Heading.vue'
import {ref} from 'vue'

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
  display: flex;
  align-items: center;
  margin: 128px 0;
  flex-direction: column;
  gap: 32px;

  @include bp(small) {
    flex-direction: row;
    gap: 96px * 2;
  }

  a {
    padding: 0;
  }
}

.experience__icons {
  margin-top: 32px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;

  @include bp(small) {
    margin-top: 0;
    padding: 0 16px;
  }
}
</style>