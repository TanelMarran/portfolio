<template>
  <div class="walker">
    <div class="walker__content">
      <slot/>
    </div>
    <div class="walker__track">
      <div ref="targetRef" class="walker__target"/>
      <div class="walker__item" ref="walkerRef" :style="{ top: `${walkerPosition}px` }"/>
      <div
        class="h-wiggle walker__item walker__item--visual"
        :class="[
          `walker__item--frame-${currentFrameComputed}`,
          isBlink > 0 && 'is-blink'
        ]"
        :style="{ top: `${walkerPosition}px` }"
      >
        <Walker1 class="walker__img"/>
        <Walker2 class="walker__img"/>
        <WalkerEyes class="walker__eyes"/>
        <WalkerBlink class="walker__eyes walker__eyes--closed"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Walker1 from '@/assets/images/care1.svg'
import Walker2 from '@/assets/images/care2.svg'
import WalkerEyes from '@/assets/images/care-eyes.svg'
import WalkerBlink from '@/assets/images/care-blink.svg'
import {type Ref, computed, onMounted, onUnmounted, ref} from 'vue'

const targetRef: Ref<HTMLElement | undefined> = ref()
const walkerRef: Ref<HTMLElement | undefined> = ref()

const walkerPosition = ref(360)

const walkerTargetSpeed = ref(0)
const walkerSpeed = ref (0)

const walkerAcceleration = .8
const maxSpeed = 20

const isBlink = ref(0)
const blinkTimer = ref(100)

const currentFrame = ref(0)

const currentFrameComputed = computed(() => Math.floor(currentFrame.value % 2))

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

    currentFrame.value += walkerSpeed.value != 0 || currentFrameComputed.value != 0 ? .2 : 0

    blinkTimer.value -= 1

    if (blinkTimer.value <= 0) {
      isBlink.value = .9
      blinkTimer.value = 150 + Math.floor(Math.random() * 100)
    }

    if (isBlink.value > 0) {
      isBlink.value = Math.max(0, isBlink.value - .1)
    }
  }

  tickTimeout = requestAnimationFrame(tick)
}

let tickTimeout: number | null = null

onMounted(() => {
  tickTimeout = requestAnimationFrame(tick)
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

.walker__content {
  display: flex;
  flex-direction: column;
}

.walker__track {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 128px;

  @include bp(small) {
    display: block;
  }
}

$targetHeight: 5;
$topOffset: ((100 - $targetHeight) * .5);

.walker__target {
  position: sticky;
  top: $topOffset * 1%;
  height: #{$targetHeight}vh;
  width: 128px;
  background-color: #454545;
  opacity: 0;
}

.walker__eyes {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;

  .walker__item.is-blink & {
    opacity: 0;
  }

  &.walker__eyes--closed {
    opacity: 0;

    .walker__item.is-blink & {
      opacity: 1;
    }
  }
}

.walker__item {
  position: absolute;
  min-height: 128px;
  top: 0;
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
  width: 128px;
  height: 128px;
}

.walker__left,
.walker__right {
  flex: 1 1 50%;
}

.walker__left {
  padding-right: 96px;
}

.walker__right {
  padding-left: 96px;
}

</style>