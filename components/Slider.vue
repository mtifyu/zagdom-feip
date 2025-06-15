<template>
    <Swiper ref="swiperEl" :modules="modules"
    navigation pagination :loop="true">
        <SwiperSlide v-for="slide in slides" >
            <figure class="s-figure">
                <picture class="s-figure-picture">
                    <source
                    :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`"
                    media="(min-width: 768px)"
                    >
                    <source :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`">
                    <img :src="slide.image_portrait.x1" :alt='slide.title'>
                </picture>
                <figcaption class="s-figure-caption">
                    <p class="caption-title">{{ slide.title }}</p>
                    <p class="caption-text">{{ slide.text }}</p>
                </figcaption>
            </figure>
        </SwiperSlide>
        <SliderControls :swiper="swiperEl?.swiper" />
    </Swiper>
</template>

<style lang="scss">
.swiper{
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 120px;
    margin-top: 40px;
}

.s-figure {
    position: relative;
}
.swiper-wrapper {
    border-radius: 30px;
}

.s-figure img {
    height: 450px;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
}

.s-figure-picture {
    position: relative;
}

.s-figure::before {
    border-radius: 30px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    z-index: 4;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
    );
}

.s-figure-caption {
    position: absolute;
    bottom: 113px;
    left: 144px;
    right: 144px;
    color: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 450px;
    @media(max-width: 1150px){
        position: absolute;
        bottom: 113px;
        left: 60px;
        right: 144px;
    }
    @media (max-width: 514px) {
        position: absolute;
        bottom: 43px;
        left: 28px;
    }
}

.caption-title{
    margin: 0;
    padding: 0;
    color: rgb(255, 255, 255);
    font-family: "Montserrat";
    font-size: 46px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
    @media(max-width: 1150px){
        font-size: 36px;
    }
    @media(max-width: 768px){
        font-size: 30px;
        width: 400px;
    }
    @media(max-width: 514px){
        font-size: 30px;
        width: 300px;
    }
}

.caption-text{
    margin: 0;
    padding: 0;
    color: rgb(255, 255, 255);
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 135%;
    letter-spacing: 0%;
    text-align: left;
    @media(max-width: 1150px){
        font-size: 16px;
    }
    @media(max-width: 768px){
        font-size: 16px;
        width: 300px;
    }
    @media(max-width: 514px){
        font-size: 16px;
        width: 250px;
    }
}

.swiper-pagination {
    margin-bottom: 40px;
}

.swiper-pagination-bullet {
    background-color: #C6C6C6;
    opacity: 1;
    margin: 0 12px;
}

.swiper-pagination-bullet-active {
    background-color: #03B766;
}

.swiper-button-next, .swiper-button-prev{
    background-color: #03B766;
    color: white;
    padding: 2px 22px;
    border-radius: 10px;;
}

.swiper-button-prev:after, .swiper-button-next:after{
    font-size: 12px;
}

@media(max-width: 1150px){
.swiper{
    margin-top: 24px;
    margin-bottom: 80px;
}
}

@media(max-width: 768px){
.swiper{
    margin-top: 24px;
    margin-bottom: 80px;
}
.s-figure {
    position: relative;
    margin: 15px;
}
.swiper-pagination{
    display: none;
}
.swiper-button-next, .swiper-button-prev{
    display: none;
}
}
</style>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import SliderControls from '~/components/SliderControls.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const swiperEl = ref()

const modules = [Navigation, Pagination]

const slides = [
  {
    image_portrait: {
      x1: '/slider/slide-1-portrait.jpg',
      x2: '/slider/slide-1-portrait@2x.jpg'
    },
    image_landscape: {
      x1: '/slider/slide-1-landscape.jpg',
      x2: '/slider/slide-1-landscape@2x.jpg'
    },
    title: 'Проектируем и строим загородные дома',
    text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений'
  },
  {
    image_portrait: {
      x1: '/slider/slide-2-portrait.jpg',
      x2: '/slider/slide-2-portrait@2x.jpg'
    },
    image_landscape: {
      x1: '/slider/slide-2-landscape.jpg',
      x2: '/slider/slide-2-landscape@2x.jpg'
    },
    title: 'Материалы и технологии',
    text: 'Используем проверенные строительные решения и экологичные материалы...'
  },
  {
    image_portrait: {
      x1: '/slider/slide-3-portrait.jpg',
      x2: '/slider/slide-3-portrait@2x.jpg'
    },
    image_landscape: {
      x1: '/slider/slide-3-landscape.jpg',
      x2: '/slider/slide-3-landscape@2x.jpg'
    },
    title: 'Проектируем и строим загородные дома',
    text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений'
  }
]
</script>