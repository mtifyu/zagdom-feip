<template>
  <Breadcrumbs current-page="Контакты" />
  <div class="content">
    <PageTitle title="Контакты" />
    <div class="contact-map-container">
      <div class="contact-info">
        <div class="contact-item">
          <img src="/icons/telephone.svg" alt="Телефон">
          <a :href="`tel:${phone.value}`" class="phone-text">{{ phone.label }}</a>
        </div>
        
        <div class="contact-item">
          <img src="/icons/email.svg" alt="Email">
          <a :href="`mailto:${email}`">{{ email }}</a>
        </div>
        
        <div class="contact-item">
          <img src="/icons/point.svg" alt="Адрес">
          <p v-html="address"></p>
        </div>
      </div>
      
      <!-- Блок карты -->
      <div class="map-section">
        <div v-if="mapLoading" class="map-loading">
          <div class="loader"></div>
          <div>Загрузка карты...</div>
        </div>
        <div v-if="mapError" class="map-error">
          Не удалось загрузить карту: {{ mapError }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { mockContacts } from '@/mock/contacts'
const { phone, email, address } = mockContacts
const mapCoords = [43.153141, 131.953129]
const mapContainer = ref(null)
const mapLoading = ref(true)
const mapError = ref(null)

const openYandexMaps = () => {
  window.open(`https://yandex.ru/maps/?ll=${mapCoords[1]}%2C${mapCoords[0]}&z=15`)
}

onMounted(() => {
  if (window.ymaps) {
    initMap()
    return
  }
  const script = document.createElement('script')
  script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш_ключ_здесь&lang=ru_RU&coordorder=longlat'
  script.async = true
  
  script.onload = () => {
    if (window.ymaps) {
      window.ymaps.ready(initMap)
    } else {
      mapLoading.value = false
      mapError.value = 'API Яндекс Карт не загрузилось'
    }
  }
  
  script.onerror = () => {
    mapLoading.value = false
    mapError.value = 'Ошибка загрузки API Яндекс Карт'
  }
  
  document.head.appendChild(script)
})

</script>

<style scoped lang="scss">
.content {
  padding: 0px 88px;
  max-width: 1440px;
  margin: 18px auto;
}
@media (max-width: 1150px) {
  .content {
      padding: 30px 40px;
      margin: 0px;
  }
}
.contact-map-container {
  display: flex;
  gap: 40px;
  margin-top: 32px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 300px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  
  img {
    margin-top: 3px;
    flex-shrink: 0;
  }
  
  a, p {
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-family: 'Montserrat';
    font-size: 20px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
    margin: 0px;
    
    &:hover {
      text-decoration: underline;
    }
  }
  .phone-text {
    font-weight: bold;
  }
}

.map-section {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.map-button {
  padding: 12px 25px;
  background: #029F59;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  align-self: flex-start;
  
  &:hover {
    background: #028a4d;
  }
}

.yandex-map {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  background: #f8f8f8;
}

.map-loading {
  margin-top: -100px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  color: #254741;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.map-error {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  border-radius: 10px;
  color: #e53935;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 20px;
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

@media (max-width: 768px) {
  .yandex-map,
  .map-loading,
  .map-error {
    height: 300px;
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 10px;
  }
}
</style>