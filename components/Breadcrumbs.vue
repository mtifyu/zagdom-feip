<template>
  <div class="breadcrumbs">
    <NuxtLink to="/">Главная</NuxtLink>
    <span> / </span>
    <span>{{ currentPage }}</span>
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.breadcrumbs {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #666;
  margin-top: 40px;
  padding: 0px 88px;
  a {
    color: #029F59;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span:last-child {
    color: #333;
  }
}
@media (max-width: 1150px) {
  .breadcrumbs {
    padding: 30px 40px;
    margin: 0px;
  }
}

/* Адаптация для мобильных устройств (до 768px) */
@media (max-width: 768px) {
  .breadcrumbs {
    padding: 0 16px;
    margin-top: 24px;
    
    /* Перенос на маленьких экранах */
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    
    span {
      white-space: nowrap;
    }
  }
}
</style>