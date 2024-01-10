<template>
  <div class="wiggle-background" ref="containerRef">
    <canvas class="wiggle-background__canvas" ref="backgroundCanvas"/>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import {defineExpose, onMounted, Ref, ref} from 'vue'

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

const render = () => {
  if (renderer.value && containerRef.value) {
    renderer.value.render(scene, camera)
    renderer.value.setSize(containerRef.value.offsetWidth, containerRef.value.offsetHeight)
    timer.value += 1
    const flooredTimer = Math.floor(timer.value)
    plane.visible = flooredTimer % 3 == 0
    plane2.visible = flooredTimer % 3 == 1
    plane3.visible = flooredTimer % 3 == 2
  }
}

defineExpose({render})

onMounted(() => {
  renderer.value = new THREE.WebGLRenderer({ canvas: backgroundCanvas.value, alpha: true })
  renderer.value.setPixelRatio(.25)

  const renderLoop = () => {
    setTimeout(renderLoop, 200)
    render()
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
}
</style>