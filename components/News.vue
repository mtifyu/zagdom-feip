<script setup>
import CardNews from './CardNews.vue';

const news = [
  {
    image: { x1: '/news/news1_1x.jpg', x2: '/news/news1_2x.jpg' },
    date: new Date('2021-08-20'), 
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...',
  },
  {
    image: { x1: '/news/news2_1x.jpg', x2: '/news/news2_2x.jpg' },
    date: new Date('2021-09-15'), 
    title: 'Почему Гуд Вилл строит лучшие дома?',
    description: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...',
  },
  {
    image: { x1: '/news/news3_1x.jpg', x2: '/news/news3_2x.jpg' },
    date: new Date('2021-10-03'), 
    title: 'Преимущества и недостатки частного дома',
    description: 'Первое и главное: строим дом индивидуально для вас, по вашим...',
  },
  {
    image: { x1: '/news/news4_1x.jpg', x2: '/news/news4_2x.jpg' },
    date: new Date('2021-11-27'), 
    title: 'Из чего мы строим дома в ипотеку?',
    description: 'Самый популярный вопрос наших клиентов касается материалов, которы...',
  }
];
</script>

<template>
  <div class="part-of-page">
    <div class="news-header">
      <h1>Новости</h1>
      <NuxtLink to="/news" class="btn-news">Все новости</NuxtLink>
    </div>
    <div class="list">
      <CardNews
        v-for="(item, index) in news"
        :key="index"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :date="item.date"
      />
    </div>
  </div>
</template>


<style scoped>
.part-of-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  margin: 0;
  padding: 80px 90px;
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
  gap: 10px;
  padding: 16px 24px;
  box-sizing: border-box;
  border: 1px solid rgb(2, 159, 89);
  border-radius: 10px;
  color: rgb(2, 159, 89);
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  background-color: #ffff;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
}

.news-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  width: 100%;
}

@media (max-width: 1150px) {
  .part-of-page {
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .part-of-page {
    padding: 40px 16px;
    gap: 24px;
  }
  
  h1 {
    font-size: 28px;
  }
  
  .news-header {
    align-items: flex-start;
    gap: 16px;
  }
  
  .btn-news {
    align-self: flex-start;
  }
  
  .list {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    gap: 16px;
    padding-bottom: 16px;
  }
  
  .list::-webkit-scrollbar {
    display: none;
  }
}
</style>