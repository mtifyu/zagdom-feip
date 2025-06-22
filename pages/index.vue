<script>
import MainPage1 from '/components/MainPage1.vue';
import MainPage2 from '/components/MainPage2.vue';
import '@csstools/normalize.css';
import 'sanitize.css';
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<template>
  <div class="page">
    <MainPage1  class="content-wrapper"/>
    <MainPage2  class="content-wrapper"/>
  </div>
</template>

<style>
  html, body, #__nuxt, .root {
    height: 100%;
    margin: 0;
  }
  .page {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
  }
  .content-wrapper {
    flex: 1 1 auto;
  }
</style>