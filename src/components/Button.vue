<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script>

</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 2px solid $color-brand-01;
  border: none;
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
    background-color: #cc456a;
    color: $color-background;
  }

  svg {
    font-size: 24px;
    width: 1em;
    height: 1em;
  }
}
</style>