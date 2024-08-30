<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from 'unhead'

const getImageUrl = (name: any) =>  {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

useHead({
  title: 'Tanel Marran',
  meta: [
    {
      name: 'description',
      content: 'Game developer, programmer, artist. Based in Malmö, Sweden.',
    },
    {
      name: 'og:image',
      content: getImageUrl('thumbnail.png'),
    },
  ],
})
</script>

<template>
  <div class="h-container">
    <RouterView />
  </div>
</template>
