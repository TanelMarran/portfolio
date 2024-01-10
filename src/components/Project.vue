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
        <div class="project__right-inner pl-4">
          <div class="project__text text-large">
            {{ props.text }}
          </div>
          <div class="project__meta">
            <div class="project__meta-item" v-for="(meta, index) in props.meta" :key="index">
              <div class="project__meta-label">{{ meta.label }}</div>
              <div class="project__meta-value">{{ meta.value }}</div>
            </div>
          </div>
          <Button class="project__button" v-if="props.button" :href="props.button.link">
            {{ props.button.text }}
            <ArrowRightSvg class="ml-2"/>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WiggleBackground from '../components/WiggleBackground.vue'
import ArrowRightSvg from '@/assets/images/arrow-right.svg'
import Button from '../components/Button.vue'

export interface ProjectMetaProps {
  label: string,
  value: string
}

export interface ButtonProps {
  text: string,
  link: string
}

export interface ProjectProps {
  title: string,
  text: string,
  button?: ButtonProps,
  image?: string,
  renderTrigger?: boolean,
  meta?: ProjectMetaProps[]
}

const getImageUrl = (name) =>  {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

const props = withDefaults(defineProps<ProjectProps>(), {
  title: '',
  text: '',
  meta: []
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
  overflow: hidden;
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
  z-index: 0;
}

.project__text {
  margin-top: 32px;
}

.project__meta {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.project__meta-item {
  position: relative;
  padding: 8px;
  z-index: 1;
  border-left: 4px solid $color-brand-01;
}

.project__meta-label {
  font-weight: bold;
}

.project__button {
  margin-top: 32px;
  margin-right: auto;
}

.project__right-inner {
  display: flex;
  flex-direction: column;
}

</style>