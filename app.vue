<script setup lang="ts">
import '@unocss/reset/eric-meyer.css';

const Hero = defineAsyncComponent(() => import('./components/hero.vue'))
</script>

<template>
  <div>
    <pre-loader />
    <hero />
  </div>
</template>

<style lang="sass">
*
  margin: 0
  padding: 0
  -webkit-box-sizing: border-box
  box-sizing: border-box
  scrollbar-width: thin
  scrollbar-color: #8750f7 #2a1454

html, body
  min-height: 100%
  overflow-x: hidden

body
  font-family: sans-serif
  font-size: 16px
  font-weight: 400
  color: #ddd

body
  margin: 0
  line-height: 1.5
  -webkit-text-size-adjust: 100%
  -webkit-tap-highlight-color: transparent

img, svg
  vertical-align: middle
</style>
