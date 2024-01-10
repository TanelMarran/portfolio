<template>
  <div class="projects">
    <template v-if="props.isLeft">

    </template>
    <template v-else>

    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isLeft: {
    type: Boolean,
    default: false
  }
})
</script>