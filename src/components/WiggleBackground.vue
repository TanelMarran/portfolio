<template>
  <div class="wiggle-background" ref="containerRef">
    <canvas class="wiggle-background__canvas" ref="backgroundCanvas"/>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import * as PIXI from 'pixi.js'
import {onMounted, ref} from 'vue'
import {type Ref} from 'vue'

const renderer: Ref<THREE.WebGLRenderer | undefined> = ref()

const backgroundCanvas: Ref<HTMLElement | undefined> = ref()
const containerRef: Ref<HTMLElement | undefined> = ref()

const varianceAmount = 3
const scale = .25

const variantPoint = (x) => x * (1 - Math.random() * 0.2)

const createRelativeShape = () => Array.from({ length: 8 }, () => Math.random() * varianceAmount)

const drawRelativeShape = (graphic: PIXI.Graphics, width: number, height: number, shape: number[]) => {
  const widthCenter = width * .5
  const heightCenter = height * .5

  graphic.clear()
  graphic.beginFill(0xcc456a, 1);
  graphic.lineStyle(1, 0xcc456a, 1);
  graphic.drawPolygon(
      [
        new PIXI.Point(widthCenter - (widthCenter - shape[0]), heightCenter - (heightCenter - shape[1])),
        new PIXI.Point(widthCenter - (widthCenter - shape[2]), heightCenter + (heightCenter - shape[3])),
        new PIXI.Point(widthCenter + (widthCenter - shape[4]), heightCenter + (heightCenter - shape[5])),
        new PIXI.Point(widthCenter + (widthCenter - shape[6]), heightCenter - (heightCenter - shape[7])),
      ]
  );
  graphic.scale.x = 1 / scale
  graphic.scale.y = 1 / scale
  graphic.endFill();
}

const frame = ref(0)

onMounted(() => {
  const app = new PIXI.Application({
    view: backgroundCanvas.value as PIXI.ICanvas,
    resizeTo: containerRef.value as HTMLElement,
    backgroundAlpha: 0,
    resolution: scale,
  });

  const graphic = new PIXI.Graphics();
  const shapes = Array.from({ length: 3 }, () => createRelativeShape())

  drawRelativeShape(graphic, app.view.width, app.view.height, shapes[0])

  app.stage.addChild(graphic);

  const render = () => {
    frame.value++;

    drawRelativeShape(graphic, app.view.width, app.view.height, shapes[frame.value % 3])
  }

  const renderLoop = () => {
    render()
    setTimeout(renderLoop, 200)
  }

  renderLoop()
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