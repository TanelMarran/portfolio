<template>
  <div class="video">
    <Heading>
      Showreel
    </Heading>
    <div class="video__container">
      <div class="video__container-aspect">
        <WiggleBackground class="video__background"/>
        <iframe class="video__iframe" src="https://www.youtube.com/embed/QPWx3CmGcu8?si=adGbkxFRGKPi-Wyd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import WiggleBackground from '@/components/WiggleBackground.vue'
</script>

<style lang="scss">
.video {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 128px 0;
}

.video__container {
  position: relative;
  width: 100%;
  @include aspect-ratio(560, 315)
}

.video__iframe {
  margin-top: 32px;
  width: 100%;
  height: 100%;
}

.video__container-aspect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.video__background {
  position: absolute;
  bottom: -64px;
  right: -64px;
  width: 560px * .25;
  height: 315px * .25;
}

</style>