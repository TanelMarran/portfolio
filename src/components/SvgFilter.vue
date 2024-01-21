<template>
  <svg style="visibility:hidden;width:0;height:0;">
    <defs>
      <!--SVG filter to remove alpha-->
      <filter id="crisp">
        <feComponentTransfer>
          <feFuncA type="discrete" tableValues="0,1"></feFuncA>
        </feComponentTransfer>
      </filter>
    </defs>
  </svg>
</template>