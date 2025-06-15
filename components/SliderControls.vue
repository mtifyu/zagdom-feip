<script setup>
const props = defineProps({
  swiper: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div v-if="swiper" class="slider-controls">
    <button @click="swiper.slidePrev()">Предыдущий</button>
    <button @click="swiper.slideNext()">Следующий</button>

    <div class="pagination">
      <button
        v-for="(slide, index) in swiper.slides"
        :key="index"
        @click="swiper.slideTo(index)"
        :disabled="swiper.activeIndex === index"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.slider-controls {
  margin-top: 20px;
}
</style>