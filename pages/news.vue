<template>
  <div class="content">
    <div class="breadcrumbs">
      <NuxtLink to="/" class="breadcrumb-link">Главная</NuxtLink> / Новости
    </div>
    
    <h1 class="page-title">Новости</h1>
    
    <div class="news-grid">
      <CardNews
        v-for="(news, index) in paginatedNews"
        :key="index"
        :image="news.image"
        :date="news.date"
        :title="news.title"
        :description="news.description"
      />
    </div>
    
    <div class="pagination-container">
      <Pagination 
        :current-page="currentPage" 
        :total-pages="totalPages"
        @update:current-page="currentPage = $event"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import CardNews from '~/components/CardNews.vue';
import Pagination from '~/components/Pagination.vue';

const newsList = [
  {
    image: { x1: '/news/news1_1x.jpg', x2: '/news/news1_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...'
  },
  {
    image: { x1: '/news/news2_1x.jpg', x2: '/news/news2_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Почти две лучи',
    description: 'Хотите перейти в кабинет...'
  },
  {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
    {
    image: { x1: '/news/news1_1x.jpg', x2: '/news/news1_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...'
  },
  {
    image: { x1: '/news/news2_1x.jpg', x2: '/news/news2_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Почти две лучи',
    description: 'Хотите перейти в кабинет...'
  },
  {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
    {
    image: { x1: '/news/news1_1x.jpg', x2: '/news/news1_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...'
  },
  {
    image: { x1: '/news/news2_1x.jpg', x2: '/news/news2_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Почти две лучи',
    description: 'Хотите перейти в кабинет...'
  },
  {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
  {
    image: { x1: '/news/news1_1x.jpg', x2: '/news/news1_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'фцвфцвфцвцфвСтроительство дома можно сделать дешевле — выбрав проект...'
  },
  {
    image: { x1: '/news/news2_1x.jpg', x2: '/news/news2_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Почти две лучи',
    description: 'Хотите перейти в кабинет...'
  },
  {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
    {
    image: { x1: '/news/news1_1x.jpg', x2: '/news/news1_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...'
  },
  {
    image: { x1: '/news/news2_1x.jpg', x2: '/news/news2_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Почти две лучи',
    description: 'Хотите перейти в кабинет...'
  },
  {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
    {
    image: { x1: '/news/news1_1x.jpg', x2: '/news/news1_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...'
  },
  {
    image: { x1: '/news/news2_1x.jpg', x2: '/news/news2_2x.jpg' },
    date: new Date('2021-08-20'),
    title: 'Почти две лучи',
    description: 'Хотите перейти в кабинет...'
  },
  {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
    {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
    {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
    {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  },
    {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-08-21'),
    title: 'Залог №3',
    description: 'Логики обращаются, как планирует готовить и подготовить дом...'
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-08-22'),
    title: 'Залог №4',
    description: 'Управляющая компания будет выполнена для работы...'
  }
]

const currentPage = ref(1);
const perPage = 12;

const totalPages = computed(() => Math.ceil(newsList.length / perPage));
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return newsList.slice(start, start + perPage);
});

watch(newsList, () => {
  currentPage.value = 1;
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  max-width: 1440px;
  margin: 0 auto;
}

.breadcrumb-link {
  color: rgb(2, 159, 89);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumbs {
  color: #666;
  font-family: 'Open Sans';
  font-size: 14px;
  margin-bottom: 24px;
}

.page-title {
  font-family: 'Montserrat';
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 40px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}

.pagination-container {
  display: flex;
  justify-content: center;
}

@media (max-width: 1200px) {
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1150px) {
  .content {
    padding: 30px 40px;
  }
}

@media (max-width: 768px) {
  .content {
    padding: 20px 16px;
  }
  
  .page-title {
    font-size: 28px;
  }
  
  .news-grid {
    gap: 20px;
  }
}
</style>