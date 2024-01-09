<template>
  <div class="heading">
    <div class="heading__inner">
      <div class="heading__background" ref="containerRef">
        <canvas class="heading__canvas" ref="backgroundCanvas"/>
      </div>
      <h1 class="heading__text">
        <slot/>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import {onMounted, Ref, ref} from 'vue'

const renderer: Ref<THREE.WebGLRenderer> = ref(null)

const backgroundCanvas: Ref<HTMLElement> = ref(null)
const containerRef: Ref<HTMLElement> = ref(null)

const variantPoint = () => 1 - Math.random() * 0.2

const timer = ref(0)

const createPlane = (): THREE.Mesh => {
  const shape = new THREE.Shape()

  shape.moveTo(variantPoint(), variantPoint())
  shape.lineTo(-variantPoint(), variantPoint())
  shape.lineTo(-variantPoint(), -variantPoint())
  shape.lineTo(variantPoint(), -variantPoint())

  const shapeGeometry = new THREE.ShapeGeometry(shape)
  const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xcc456a), side: THREE.DoubleSide })

  return new THREE.Mesh(shapeGeometry, material)
}

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera()

  const plane = createPlane()
  const plane2 = createPlane()
  const plane3 = createPlane()

  scene.add(plane)
  scene.add(plane2)
  scene.add(plane3)

  plane.position.z = 10
  plane2.position.z = 10
  plane3.position.z = 10
  camera.lookAt(plane.position)

  renderer.value = new THREE.WebGLRenderer({ canvas: backgroundCanvas.value, alpha: true })
  renderer.value.setPixelRatio(.25)

  const render = () => {
    requestAnimationFrame(render)

    if (renderer.value) {
      renderer.value.render(scene, camera)
      renderer.value.setSize(containerRef.value.offsetWidth, containerRef.value.offsetHeight)
      timer.value += .1
      const flooredTimer = Math.floor(timer.value)
      plane.visible = flooredTimer % 3 == 0
      plane2.visible = flooredTimer % 3 == 1
      plane3.visible = flooredTimer % 3 == 2
    }
  }
  render()
})
</script>

<style lang="scss">
.heading {
  color: $color-background;
}

.heading__inner {
  position: relative;
  display: inline-block;
  margin: 16px;
}

.heading__background {
  content: '';
  position: absolute;
  left: -32px;
  top: -16px;
  bottom: -16px;
  right: -32px;
  z-index: -1;
}

.heading__canvas {
  image-rendering: pixelated;
}
</style>