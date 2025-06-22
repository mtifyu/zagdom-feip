<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<template>
  <div class="root">
    <Header />
    <div class="content-wrapper">
      <!-- Ключевое изменение: добавляем NuxtPage -->
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style>
html, body, #__nuxt {
  height: 100%;
  margin: 0;
}

.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex: 1 1 auto;
}
</style>