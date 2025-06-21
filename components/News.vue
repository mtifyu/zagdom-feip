<template>
  <div class="part-of-page">
    <div class="news-header">
        <h1>Новости</h1>
        <button class="btn-news">Все новости</button>
    </div>
    <div class="list">
      <CardNews
        v-for="(news, index) in news"
        :key="index"
        :title="news.title"
        :description="news.description"
        :image="news.image"
      />
  </div>
  </div>
</template>

<script setup>
import CardNews from './CardNews.vue';
const news1_image_1x = '/news/news1_1x.jpg';
const news1_image_2x = '/news/news1_2x.jpg';
const news2_image_1x = '/news/news2_1x.jpg';
const news2_image_2x = '/news/news2_2x.jpg';
const news3_image_1x = '/news/news3_1x.jpg';
const news3_image_2x = '/news/news3_2x.jpg';
const news4_image_1x = '/news/news4_1x.jpg';
const news4_image_2x = '/news/news4_2x.jpg';

const news = [
  {
    image: {
      x1: news1_image_1x,
      x2: news1_image_2x,
    },
    title: 'Как сделать строительство дешевле?',
    description:
      'Строительство дома можно сделать дешевле — выбрав проект...',
  },
  {
    image: {
      x1: news2_image_1x,
      x2: news2_image_2x,
    },
    title: 'Почему Гуд Вилл строит лучшие дома?',
    description:
      'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...',
  },
    {
    image: {
      x1: news3_image_1x,
      x2: news3_image_2x,
    },
    title: 'Преимущества и недостатки частного дома',
    description:
      'Первое и главное: строим дом индивидуально для вас, по вашим...',
  },
    {
    image: {
      x1: news4_image_1x,
      x2: news4_image_2x,
    },
    title: 'Из чего мы строим дома в ипотеку?',
    description:
      'Самый популярный вопрос наших клиентов касается материалов, которы...',
  }
];
</script>

<style scoped>
.part-of-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  margin: 0;
  padding: 80px 90px 80px 90px;
}
h1 {
  color: rgb(0, 0, 0);
  font-family: 'Montserrat';
  font-size: 38px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
  margin: 0px;
}
.btn-news {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10;
    padding: 16px 24px 16px 24px;
    box-sizing: border-box;
    border: 1px solid rgb(2, 159, 89);
    border-radius: 10px;
    color: rgb(2, 159, 89);
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    background-color: #ffff;
}
.news-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.list {
    display: flex;
    gap: 16px;
}
@media (max-width: 1150px) {

}
@media (max-width: 768px) {
  .h1 {
    font-size: 28px;
  }
}
</style>