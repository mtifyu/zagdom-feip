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
        <div class="card-description">
            <p>20 авг 2021</p>
            <h4 class="card-title">{{title}}</h4>
            <p class="card-description" v-html='description' />
        </div>
    </div>
</template>

<style scoped>
.card {
   display: flex;
   flex-direction: column;
   border-radius: 20px;
   max-width: 624px;
   min-width: 200px;
   gap:16px;
}
.card-description {
   display: flex;
   flex-direction: column;
   width: 236px;
   margin: 32px 16px;
   gap: 12px;
   white-space: pre-line; 
}
p {
    margin: 0px;
    padding: 0px;
}
.card-title {
    width: 300px;
   color: rgb(0, 0, 0);
   font-family: 'Montserrat';
   font-size: 20px;
   font-weight: 500;
   line-height: 120%;
   text-align: left;
   margin: 0px;
   padding: 0px;
}
.card-description {
    width: 300px;
   color: rgb(102, 102, 102);
   font-family: 'Open Sans';
   font-size: 16px;
   font-weight: 400;
   line-height: 120%;
   text-align: left;
   margin: 0px;
   padding: 0px;
}
.image {
    border-radius: 20px 20px 0px 0px;
}
</style>

