<template>
  <div class="content">
    <ProjectsList />
    <News />
  </div>
</template>

<script setup>
import ProjectsList from './ProjectsList.vue'; 
import News from './News.vue'; 
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
}
@media (max-width: 1150px) {

}
@media (max-width: 768px) {
}
</style>
