// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    'nuxt-svgo',
    'nuxt-swiper'
  ],
  build: {
    transpile: ['vue-yandex-maps']
  },
  runtimeConfig: {
    public: {
      yandexMapsApiKey: process.env.YANDEX_MAPS_API_KEY || ''
    }
  }
})