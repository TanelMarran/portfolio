<template>
  <div class="project">
    <div class="project__head">
      <div class="project__head-left">
        <img class="project__img" v-if="props.image" :src="getImageUrl(props.image)" alt="alt">
      </div>
      <div class="project__head-right">
        <div class="project__title-wrapper">
          <WiggleBackground class="project__title-background"/>
          <h2 class="project__title">
            {{ props.title }}
          </h2>
        </div>
        <div class="project__text text-large">
          {{ props.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WiggleBackground from '../components/WiggleBackground.vue'

export interface ProjectProps {
  title: string,
  text: string,
  image?: string,
}

const getImageUrl = (name) =>  {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

const props = withDefaults(defineProps<ProjectProps>(), {
  title: ''
})
</script>

<style lang="scss">
.project {
  display: flex;
  border: 8px;

}

.project__head {
  display: flex;
  width: 100%;
}

.project__head-left {
  flex-basis: 50%;
}

.project__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.project__head-right {
  flex-basis: 50%;
  padding: 24px;
}

.project__title-wrapper {
  position: relative;
  display: inline-block;
}

.project__title-background {
  left: -64px;
  right: -32px;
  top: -16px;
  bottom: -16px;
}

.project__title {
  display: inline-block;
  color: $color-background;
}

.project__text {
  margin-top: 32px;
}

</style>