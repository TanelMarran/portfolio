<template>
  <a @mouseenter="() => computedProperty = true" @mouseleave="() => computedProperty = false" href="https://www.on24.ee/" target="_blank"><slot/></a>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  property: {
    type: Boolean,
    default: false
  }
})

const computedProperty = computed({
  get() {
    return props.property
  },
  set(newValue) {
    emit('update:property', newValue)
  }
})

const emit = defineEmits(['update:property'])
</script>