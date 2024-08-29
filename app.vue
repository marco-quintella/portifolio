<script setup lang="ts">
import '@unocss/reset/eric-meyer.css'
</script>

<template>
  <div class="flex flex-col items-center bg-purple-800 text-white h-full">
    <div class="flex flex-col gap-2 items-center mt-18">
      <h1 class="text-6xl font-bold">MqDev</h1>
      <sub class="font-semibold">A software development</sub>
    </div>

    <h2 class="text-4xl font-bold mb-8 mt-20">Our products</h2>
    <div class="flex flex-col items-center mb-2">
      <img src="~/assets/image-hub.png" class="w-100" />
      <a href="https://image-hub.mqdev.com.br/" class="text-xl font-semibold">Image Hub</a>
      <div>Online image tooling</div>
    </div>
    <h2 class="text-4xl font-bold mb-8 mt-20">About us</h2>
    <div class="text-center">
      We are a software development company active in Games, Media, Tooling and Management sectors.
      <br />
      We focus on <strong>Vue.js</strong>, <strong>Nuxt</strong>, <strong>Laravel</strong>, <strong>Go</strong>, <strong>C#</strong> and <strong>Unity</strong> development.
      <br />
      We already delivered solutions to many companies and individuals of different sizes. We are always looking for new challenges.
      <br />
      Our philosophy is to deliver the best solution for the problem, always focusing on the user experience.
    </div>
  </div>
</template>

<style lang="sass">
body, html, #__nuxt
  font-family: sans-serif
  width: 100%
  height: 100%

a
  color: white
  text-decoration: none
  &:hover
    text-decoration: underline
</style>
