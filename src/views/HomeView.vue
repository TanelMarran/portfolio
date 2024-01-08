<script setup lang="ts">
import Walker from '../components/Walker.vue'
import TitleContent from '../components/TitleContent.vue'
</script>

<template>
  <main>
    <Walker>
      <template #left>
        <TitleContent/>
      </template>
      <template #right>
        <div class="h-height-vh">

        </div>
        <item v-for="i in Array(200)" :key="i">
          Tex text text texte texcet etefaewg asdgf klnag <br> reghjwaorlg ewrgn olanrgo erg ekg erbg wnergo
        </item>
      </template>
    </Walker>
  </main>
</template>
