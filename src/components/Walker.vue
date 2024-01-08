<template>
  <div class="walker">
    <div class="walker__left">
      <slot name="left"/>
    </div>
    <div class="walker__track">
      <div ref="targetRef" class="walker__target"/>
      <div class="walker__item" ref="walkerRef" :style="{ top: `${walkerPosition}px` }"/>
      <div class="h-wiggle walker__item walker__item--visual" :class="`walker__item--frame-${Math.floor(currentFrame % 2)}`" :style="{ top: `${walkerPosition}px` }">
        <img class="walker__img" src="@/assets/images/care0.png" alt="character">
        <img class="walker__img" src="@/assets/images/care1.png" alt="character">
      </div>
    </div>
    <div class="walker__right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, Ref, ref} from 'vue'

const targetRef: Ref<HTMLElement> = ref(null)
const walkerRef: Ref<HTMLElement> = ref(null)

const walkerPosition = ref(0)

const walkerTargetSpeed = ref(0)
const walkerSpeed = ref (0)

const walkerFriction = .5
const walkerAcceleration = 1
const maxSpeed = 20

const currentFrame = ref(0)

const tick = () => {
  if (targetRef.value && walkerRef.value) {
    const targetTop = targetRef.value.offsetTop
    const targetBottom = targetRef.value.offsetTop + targetRef.value.offsetHeight

    const walkerPos = walkerRef.value.offsetTop + walkerRef.value.offsetHeight * .5

    const diff = walkerPos < targetTop ? targetTop - walkerPos : (walkerPos > targetBottom ? targetBottom - walkerPos : 0)

    walkerTargetSpeed.value = diff

    const targetDiff = walkerTargetSpeed.value - walkerSpeed.value

    walkerSpeed.value += Math.min(Math.abs(targetDiff), walkerAcceleration) * Math.sign(targetDiff)

    walkerSpeed.value = Math.min(Math.max(walkerSpeed.value, -maxSpeed), maxSpeed)

    walkerPosition.value += walkerSpeed.value

    currentFrame.value = walkerSpeed.value == 0 ? 0 : currentFrame.value + .2
  }

  tickTimeout = setTimeout(tick, 1000 / 60)
}

let tickTimeout: number | null = null

onMounted(() => {
  tickTimeout = setTimeout(tick, 1000 / 60)
})

onUnmounted(() => {
  if (tickTimeout) {
    clearTimeout(tickTimeout)
    tickTimeout = null
  }
})
</script>


<style lang="scss">
.walker {
  position: relative;
  display: flex;
}

.walker__track {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 128px;
}

$targetHeight: 10;
$topOffset: ((100 - $targetHeight) * .5);

.walker__target {
  position: sticky;
  top: $topOffset * 1%;
  height: #{$targetHeight}vh;
  width: 128px;
  background-color: #454545;
  opacity: 0;
}

.walker__item {
  position: absolute;
  min-height: 128px;
  top: 0;
}

.walker__item--visual {
  transition: top 150ms;
}

.walker__item--frame-0 {
  .walker__img {
    display: none;
  }

  .walker__img:nth-child(1) {
    display: block;
  }
}

.walker__item--frame-1 {
  .walker__img {
    display: none;
  }

  .walker__img:nth-child(2) {
    display: block;
  }
}

.walker__img {
  image-rendering: pixelated;
}

.walker__left,
.walker__right {
  flex: 1 1 50%;
}

.walker__left {
  padding-right: 64px;
}

.walker__right {
  padding-left: 64px;
}

</style>