<template>
  <div class="part-of-page">
    <h1>Реализованные проекты</h1>
    <div class="list">
      <Project
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
      />
    </div>
  </div>
</template>

<script setup>
import Project from './Project.vue';
const project1_image_1x = '/projects/project1_image_1x.jpg';
const project1_image_2x = '/projects/project1_image_2x.jpg';
const project2_image_1x = '/projects/project2_image_1x.jpg';
const project2_image_2x = '/projects/project2_image_2x.jpg';

const projects = [
  {
    image: {
      x1: project1_image_1x,
      x2: project1_image_2x,
    },
    title: 'Дом в скандинавском стиле',
    description:
      'Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей.\n\nПостроен по индивидуальному проекту.',
  },
  {
    image: {
      x1: project2_image_1x,
      x2: project2_image_2x,
    },
    title: 'Дом из газобетона',
    description:
      'Одноэтажный дом габаритными размерами 15.2 х 9.7м.\nПриведенная площадь – 127.7 м.кв.\n\nТри спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.',
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
  padding: 80px 90px;
  background-color: #f5f7f3;
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
  width: 100%;
}

.list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(572px, 1fr));
  justify-content: space-between;
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