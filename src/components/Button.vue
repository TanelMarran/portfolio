<template>
  <a v-if="props.href" class="button" :href="props.href">
    <slot/>
  </a>
  <button v-else class="button">
    <slot/>
  </button>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
  }
})
</script>

<style lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $color-brand-01;
  padding: 12px 24px;
  color: $color-brand-01;
font-size: 16px;
  line-height: 20px;
  letter-spacing: .06em;
  min-width: 128px;
  background: none;
  cursor: pointer;
  font-weight: bold;
  transition-property: color, background-color;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  text-transform: uppercase;
  border-radius: 4px;

  &.is-active,
  &:hover {
    background-color: $color-brand-01;
    color: $color-background;
  }

  svg {
    font-size: 24px;
    width: 1em;
    height: 1em;
  }
}
</style>