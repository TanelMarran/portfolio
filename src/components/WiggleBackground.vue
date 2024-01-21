<template>
  <div class="wiggle-background" ref="containerRef">
    <canvas class="wiggle-background__canvas" ref="backgroundCanvas"/>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {type Ref} from 'vue'

const backgroundCanvas: Ref<HTMLCanvasElement | undefined> = ref()
const containerRef: Ref<HTMLElement | undefined> = ref()

const varianceAmount = 3
const scale = .25

const createRelativeShape = () => Array.from({ length: 8 }, () => Math.random() * varianceAmount)

const drawRelativeShape = (ctx: CanvasRenderingContext2D, width: number, height: number, shape: number[]) => {
  const widthCenter = width * .5
  const heightCenter = height * .5

  ctx.clearRect(0, 0, width, height)
  ctx.beginPath()
  ctx.fillStyle = '#cc456a'
  ctx.filter = 'url(#crisp)'
  ctx.moveTo(widthCenter - (widthCenter - shape[0]), heightCenter - (heightCenter - shape[1]))
  ctx.lineTo(widthCenter - (widthCenter - shape[2]), heightCenter + (heightCenter - shape[3]))
  ctx.lineTo(widthCenter + (widthCenter - shape[4]), heightCenter + (heightCenter - shape[5]))
  ctx.lineTo(widthCenter + (widthCenter - shape[6]), heightCenter - (heightCenter - shape[7]))
  ctx.fill()
}

const frame = ref(0)

onMounted(() => {
  if (containerRef.value && backgroundCanvas.value) {
    const ctx = backgroundCanvas.value.getContext('2d')
    if (ctx) {
      ctx.imageSmoothingEnabled = false
      backgroundCanvas.value.width = containerRef.value?.offsetWidth * scale
      backgroundCanvas.value.height = containerRef.value?.offsetHeight * scale

      const shapes = Array.from({ length: 3 }, () => createRelativeShape())

      drawRelativeShape(ctx, backgroundCanvas.value.width, backgroundCanvas.value.height, shapes[0])

      const render = (increaseFrame: boolean = true) => {
        if (backgroundCanvas.value) {
          if (increaseFrame) {
            frame.value++;
          }

          drawRelativeShape(ctx, backgroundCanvas.value.width, backgroundCanvas.value.height, shapes[frame.value % 3])
        }
      }

      const renderLoop = () => {
        render()
        setTimeout(renderLoop, 200)
      }

      renderLoop()

      window.addEventListener('resize', () => {
        if (containerRef.value && backgroundCanvas.value) {
          backgroundCanvas.value.width = containerRef.value.offsetWidth * scale
          backgroundCanvas.value.height = containerRef.value.offsetHeight * scale
          render(false)
        }
      })
    }
  }
})
</script>

<style lang="scss">
.wiggle-background {
  position: absolute;
  z-index: -1;
}

.wiggle-background__canvas {
  image-rendering: pixelated;
  width: 100%;
  height: 100%;
}
</style>