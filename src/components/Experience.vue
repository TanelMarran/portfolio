<template>
  <div>
    <div id="experience"/>
    <div class="experience h-walker-container">
      <div>
        <Heading>
          Experience
        </Heading>
        <div class="text mt-8">
          <p class="text-large">
            My 3 years of experience as a full-stack developer has developed both my technical and interpersonal skills.
          </p>
        </div>
      </div>
      <div>
        <Icons class="experience__icons" :highlights="highlights"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icons from '@/components/Icons.vue'
import Heading from '@/components/Heading.vue'
import {ref} from 'vue'
import ExperienceLink from '@/components/ExperienceLink.vue'

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

  @include bp(small) {
    margin-top: 0;
    padding: 0 16px;
  }
}
</style>