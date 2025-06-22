<template>
  <div class="yandex-map-container">
    <yandex-map
      v-if="mapLoaded"
      :coords="coords"
      :zoom="zoom"
      :settings="mapSettings"
      class="yandex-map"
    >
      <ymap-marker :coords="coords" marker-id="1" />
    </yandex-map>
    
    <div v-else class="map-loading">
      <div class="loader"></div>
      <div>Загрузка карты...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  coords: {
    type: Array,
    required: true,
    default: () => [55.751244, 37.618423] // Москва по умолчанию
  },
  zoom: {
    type: Number,
    default: 15
  },
  apiKey: {
    type: String,
    required: true
  }
})

const mapLoaded = ref(false)
const mapSettings = ref({
  apiKey: props.apiKey,
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
})

onMounted(async () => {
  try {
    // Динамический импорт для решения проблем с SSR
    const { loadYmap } = await import('vue-yandex-maps')
    
    await loadYmap({
      ...mapSettings.value,
      enterprise: false,
      strictMode: true
    })
    
    mapLoaded.value = true
  } catch (error) {
    console.error('Ошибка загрузки Яндекс Карт:', error)
    
    // Пробуем показать карту через 3 секунды
    setTimeout(() => {
      mapLoaded.value = true
    }, 3000)
  }
})
</script>

<style scoped lang="scss">
.yandex-map-container {
  width: 100%;
  height: 100%;
}

.yandex-map {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.map-loading {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 10px;
  color: #254741;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #029F59;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>