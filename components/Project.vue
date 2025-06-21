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
   <div class='project'>
      <div class="card-description">
         <h4 class="project-title">{{title}}</h4>
         <p class="project-description" v-html='description' />
      </div>
      <picture>
         <source :srcset='`${image.x2} 2x, ${image.x1}`'>
         <img :src='image.x1' :alt='title' class='image' />
      </picture>
   </div>
</template>

<style scoped>
.project {
   display: flex;
   border-radius: 20px;
   background: white;
   max-width: 573px;
   min-width: 572px;
   height: 100%;
}

.card-description {
   display: flex;
   flex-direction: column;
   width: 236px;
   margin: 32px 16px;
   gap: 12px;
   white-space: pre-line; 
}

.project-title {
   color: rgb(0, 0, 0);
   font-family: 'Montserrat';
   font-size: 20px;
   font-weight: 500;
   line-height: 120%;
   text-align: left;
   margin: 0px;
   padding: 0px;
}

.project-description {
   color: rgb(102, 102, 102);
   font-family: 'Open Sans';
   font-size: 16px;
   font-weight: 400;
   line-height: 135%;
   text-align: left;
   margin: 0px;
   padding: 0px;
}

.image {
   border-radius: 0px 20px 20px 0px;
   width: 304px;
   height: 100%;
   object-fit: cover;
}

@media (max-width: 768px) {
  .project {
    flex-direction: column;
    min-width: 300px;
    max-width: 85vw;
  }
  
  .card-description {
    order: 2;
    width: auto;
    margin: 24px;
  }
  
  .image {
    order: 1;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 200px;
  }
}
</style>