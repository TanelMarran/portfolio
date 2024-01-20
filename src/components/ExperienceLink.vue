<template>
  <a @mouseenter="() => computedmodelValue = true" @mouseleave="() => computedmodelValue = false" :href="props.href" target="_blank"><slot/></a>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: ''
  }
})

const computedmodelValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

const emit = defineEmits(['update:modelValue'])
</script>