<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import Content from './components/Content.vue';
import Drawer from './components/Drawer.vue'
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
    <Header />
    <Content  class="content-wrapper" />
    <Footer />
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