<template>
  <h1 class="page-title">
    {{ title }}
  </h1>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.page-title {
  color: rgb(0, 0, 0);
  font-family: 'Montserrat', sans-serif;
  font-size: 46px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
  margin: 0px;
    @media (max-width: 768px) {
      color: rgb(0, 0, 0);
      font-size: 32px;
      font-weight: 700;
      line-height: 120%;
      letter-spacing: 0%;
      text-align: left;
    }
}
</style>