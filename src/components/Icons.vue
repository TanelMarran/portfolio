<template>
  <div class="icons">
    <div class="icons__item" :class="props.highlights.unreal && 'is-hovering'">
      <div class="icons__item-inner">
        <UnrealSvg/>
      </div>
      <div class="icons__item-label">
        Unreal Engine 5
      </div>
    </div>
    <div class="icons__item" :class="props.highlights.godot && 'is-hovering'">
      <div class="icons__item-inner">
        <svg height="1024" width="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m417.61523 76.875c-42.39203 9.424151-84.32671 22.54494-123.64257 42.33398.89912 34.71618 3.14362 67.97967 7.69336 101.76758-15.26846 9.78214-31.31507 18.17757-45.57618 29.62891-14.49005 11.14747-29.2896 21.81231-42.41015 34.84961-26.21196-17.33728-53.95467-33.6299-82.53516-48.01172-30.80748 33.1552-59.61329 68.94006-83.14453 108.98437 18.493057 29.02877 38.32949 58.20569 56.69922 80.95899v197.7832 25.1211 22.86132c.44956.00417.89835.02088 1.34375.0625l150.66992 14.52735c7.89231.76176 14.07749 7.11448 14.62695 15.02343l4.64649 66.50977 131.42969 9.37891 9.05468-61.38672c1.17386-7.95891 8.00029-13.85742 16.05078-13.85742h158.96094c8.04633 0 14.87302 5.89851 16.04688 13.85742l9.05468 61.38672 131.4336-9.37891 4.64258-66.50977c.55362-7.90895 6.73464-14.25751 14.62695-15.02343l150.61133-14.52735c.4454-.04162.89028-.05833 1.33984-.0625v-19.61132l.0625-.01954v-226.13476c21.2165-26.70928 41.30684-56.1715 56.69922-80.95899-23.52291-40.04431-52.34486-75.82917-83.15234-108.98437-28.57217 14.38182-56.32515 30.67444-82.53711 48.01172-13.11639-13.0373-27.88953-23.70214-42.40039-34.84961-14.25695-11.45134-30.32318-19.84677-45.5625-29.62891 4.53724-33.78791 6.7803-67.0514 7.68359-101.76758-39.32002-19.78904-81.24927-32.909829-123.66211-42.33398-16.9335 28.45977-32.41939 59.27922-45.90625 89.4082-15.99275-2.67239-32.05995-3.66203-48.14844-3.85351v-.02539c-.11239 0-.21676.02539-.3125.02539-.0999 0-.20478-.02539-.30468-.02539v.02539c-16.11763.19148-32.17106 1.18112-48.16797 3.85351-13.47854-30.12898-28.95559-60.94843-45.91407-89.4082zm-119.19921 359.52344c50.15113 0 90.79882 40.61746 90.79882 90.75195 0 50.16779-40.64769 90.80859-90.79882 90.80859-50.12617 0-90.78711-40.6408-90.78711-90.80859 0-50.13449 40.66094-90.75195 90.78711-90.75195zm427.17773 0c50.122 0 90.7793 40.61746 90.7793 90.75195 0 50.16779-40.6573 90.80859-90.7793 90.80859-50.15946 0-90.80664-40.6408-90.80664-90.80859 0-50.13449 40.64718-90.75195 90.80664-90.75195zm-213.59961 53.10937c16.14261 0 29.25391 11.90816 29.25391 26.56055v83.58984c0 14.66488-13.1113 26.5625-29.25391 26.5625-16.1426 0-29.22656-11.89762-29.22656-26.5625v-83.58984c0-14.65239 13.08396-26.56055 29.22656-26.56055z" stroke-width="4.16261"/><path d="m0 0-1.121-16.063c-.135-1.936-1.675-3.477-3.611-3.616l-38.555-2.751c-.094-.007-.188-.01-.281-.01-1.916 0-3.569 1.406-3.852 3.33l-2.211 14.994h-31.459l-2.211-14.994c-.297-2.018-2.101-3.469-4.133-3.32l-38.555 2.751c-1.936.139-3.476 1.68-3.611 3.616l-1.121 16.063-32.547 3.138c.015-3.498.06-7.33.06-8.093 0-34.374 43.605-50.896 97.781-51.086h.066.067c54.176.19 97.766 16.712 97.766 51.086 0 .777.047 4.593.063 8.093z" fill="#010102" transform="matrix(4.162611 0 0 -4.162611 784.07144 718.723121)"/><path d="m0 0c0-7.994-6.479-14.473-14.479-14.473-7.996 0-14.479 6.479-14.479 14.473s6.483 14.479 14.479 14.479c8 0 14.479-6.485 14.479-14.479" transform="matrix(4.162611 0 0 -4.162611 367.36686 532.537071)"/><path d="m0 0c0-7.994 6.477-14.473 14.471-14.473 8.002 0 14.479 6.479 14.479 14.473s-6.477 14.479-14.479 14.479c-7.994 0-14.471-6.485-14.471-14.479" transform="matrix(4.162611 0 0 -4.162611 656.64056 532.537071)"/></svg>
      </div>
      <div class="icons__item-label">
        Godot
      </div>
    </div>
    <div class="icons__item" :class="props.highlights.unity && 'is-hovering'">
      <div class="icons__item-inner">
        <UnitySvg/>
      </div>
      <div class="icons__item-label">
        Unity
      </div>
    </div>
    <div class="icons__item" :class="props.highlights.wordpress && 'is-hovering'">
      <div class="icons__item-inner">
        <WordpressSvg/>
      </div>
      <div class="icons__item-label">
        Wordpress
      </div>
    </div>
    <div class="icons__item" :class="props.highlights.vue && 'is-hovering'">
      <div class="icons__item-inner">
        <VueSvg/>
      </div>
      <div class="icons__item-label">
        Vue.js
      </div>
    </div>
    <div class="icons__item" :class="props.highlights.react && 'is-hovering'">
      <div class="icons__item-inner">
        <ReactSvg/>
      </div>
      <div class="icons__item-label">
        React
      </div>
    </div>
  </div>
</template>

<script setup>
import UnrealSvg from '@/assets/images/unreal.svg'
import UnitySvg from '@/assets/images/unity.svg'
import WordpressSvg from '@/assets/images/wordpress.svg'
import VueSvg from '@/assets/images/vue.svg'
import ReactSvg from '@/assets/images/react.svg'
import WiggleBackground from '@/components/WiggleBackground.vue'

const props = defineProps({
  highlights: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss">
.icons {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;

  & > * {
    flex: 1 1 33%;
  }
}

.icons__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: color 150ms ease-in-out;

  svg {
    width: 1em;
    height: 1em;
  }

  &.is-hovering {
    color: $color-brand-01;
  }
}

.icons__item-inner {
  position: relative;
  margin: 16px 16px 4px 16px;
  font-size: 64px;

  .icons__item.is-hovering & {
    @include wiggle();
  }
}

.icons__wiggle {
  top: 100%;
  margin-top: 32px;
  height: 64px;
  width: 256px;
  right: 0;
}

</style>