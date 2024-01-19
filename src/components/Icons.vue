<template>
  <div class="icons">
    <WiggleBackground/>
    <div class="icons__item" :class="!props.highlights.unreal && transparencyClass">
      <div class="icons__item-inner">
        <UnrealSvg/>
      </div>
      <div class="icons__item-label">
        Unreal Engine 5
      </div>
    </div>
    <div class="icons__item" :class="!props.highlights.godot && transparencyClass">
      <div class="icons__item-inner" :style="{ animationDelay: '200ms' }">
        <GodotSvg viewBox="0 0 1024 1024"/>
      </div>
      <div class="icons__item-label">
        Godot 4
      </div>
    </div>
    <div class="icons__item" :class="!props.highlights.unity && transparencyClass">
      <div class="icons__item-inner" :style="{ animationDelay: '400ms' }">
        <UnitySvg/>
      </div>
      <div class="icons__item-label">
        Unity
      </div>
    </div>
    <div class="icons__item" :class="!props.highlights.wordpress && transparencyClass">
      <div class="icons__item-inner" :style="{ animationDelay: '200ms' }">
        <WordpressSvg/>
      </div>
      <div class="icons__item-label">
        Wordpress
      </div>
    </div>
    <div class="icons__item" :class="!props.highlights.vue && transparencyClass">
      <div class="icons__item-inner">
        <VueSvg/>
      </div>
      <div class="icons__item-label">
        Vue.js
      </div>
    </div>
    <div class="icons__item" :class="!props.highlights.react && transparencyClass">
      <div class="icons__item-inner" :style="{ animationDelay: '400ms' }">
        <ReactSvg/>
      </div>
      <div class="icons__item-label">
        React
      </div>
    </div>
  </div>
</template>

<script setup>
import UnrealSvg from '@/assets/images/unreal.svg'
import UnitySvg from '@/assets/images/unity.svg'
import WordpressSvg from '@/assets/images/wordpress.svg'
import VueSvg from '@/assets/images/vue.svg'
import ReactSvg from '@/assets/images/react.svg'
import GodotSvg from '@/assets/images/godot.svg'
import WiggleBackground from '@/components/WiggleBackground.vue'
import {computed} from 'vue'

const props = defineProps({
  highlights: {
    type: Object,
    default: () => {}
  }
})

const transparencyClass = computed(() => Object.keys(props.highlights).reduce((previous, key) => previous || props.highlights[key], false) ? 'is-transparent' : '')

</script>

<style lang="scss">
.icons {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 32px;

  & > * {
    flex: 1 1 calc(50% - 32px);

    @include bp(tiny) {
      flex: 1 1 calc(33% - 32px);
    }
  }

  .wiggle-background {
    position: absolute;
    left: 0;
    right: 0;
    top: -32px;
    bottom: -32px;
  }
}

.icons__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 150ms ease-in-out;
  color: $color-background;

  svg {
    width: 1em;
    height: 1em;
  }

  &.is-transparent {
    opacity: .5;
  }
}

.icons__item-inner {
  position: relative;
  margin: 16px 16px 4px 16px;
  font-size: 64px;

  .icons__item:not(.is-transparent) & {
    @include wiggle();
  }
}

.icons__wiggle {
  top: 100%;
  margin-top: 32px;
  height: 64px;
  width: 256px;
  right: 0;
}

.icons__item-label {
  text-align: center;
}

</style>