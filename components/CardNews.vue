<script setup>
defineProps({
   image: {
      x1: String,
      x2: String,
   },
   title: String,
   description: String,
})
</script>

<template>
  <div class='card'>
    <picture>
      <source :srcset='`${image.x2} 2x, ${image.x1}`'>
      <img :src='image.x1' :alt='title' class='image' />
    </picture>
    <div class="card-content">
      <p>20 авг 2021</p>
      <h4 class="card-title">{{title}}</h4>
      <p class="card-description" v-html='description'></p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 20px;
  background: white;
  overflow: hidden;
  height: 100%;
  transition: transform 0.3s ease;
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
}

p {
  margin: 0px;
  padding: 0px;
  color: rgb(102, 102, 102);
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
}

.card-title {
  color: rgb(0, 0, 0);
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 500;
  line-height: 120%;
  margin: 0;
}

.card-description {
  color: rgb(102, 102, 102);
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 135%;
  margin: 0;
  overflow: hidden;
}

@media (max-width: 768px) {
  .card {
    min-width: 280px;
    max-width: 85vw;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-title {
    font-size: 18px;
  }
  
  .card-description {
    font-size: 14px;
  }
}
</style>