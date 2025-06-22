<script setup>
import { NuxtLink } from '#components'
import Drawer from '~/components/Drawer.vue'
import Modalka from '~/components/Modalka.vue' 
import { ref } from 'vue'
const drawerOpen = ref(false)
const modalOpen = ref(false)

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}

function openModal() {
  modalOpen.value = true;
}

function closeModal() {
  modalOpen.value = false;
}
</script>

<template>
<div class="header">
    <div class="header-logo">
    <a href="/">
        <img src="/pictures/logo.png" alt="logo">
    </a>
    </div>
    <div class="header-navbar">
        <NuxtLink to="/" class="link">Реализованные проекты</NuxtLink>
        <NuxtLink to="/news" class="link">Новости</NuxtLink>
        <NuxtLink to="/contacts" class="link">Контакты</NuxtLink>
    </div>
    <div class="phone-and-button">
      <div class="header-phone">
        <img src="/public/pictures/phone.png" alt="phone" class="phone">
        <a href="tel:+7 (900) 900-90-90" class="phone1">+7 (900) 900-90-90</a>
      </div>
      <div class="header-button">
        <button class="h-button" @click="openModal">Оставить заявку</button>
      </div>
    </div>
    <button @click="toggleDrawer" class="burger-btn">
      <img src="/pictures/Button.png" alt="burger menu">
    </button>
    <Drawer v-model:isOpen="drawerOpen" />
    <Modalka :open="modalOpen" @update:open="closeModal" />
</div>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(2, 159, 89) !important;
}
.header {
    display: flex;
    padding: 24px 88px;
    align-items: center; 
}
.header-logo {
    margin-right: 80px;
}
.header-navbar{
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}
.phone-and-button {
  margin-left: auto;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
}
.header-phone {
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
}
.header-button {
  margin-left: auto;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
}
.header-button .phone {
  height: 16px;
}
.phone1 {
  color: rgba(37, 71, 65, 1);
  text-decoration: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: 134px;
}
.link {
  color:rgba(102, 102, 102, 1);
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  font-family: "Open Sans";
  line-height: 120%;
  letter-spacing: 0%;
  text-align: left;
}
.h-button {
  width: 200px;
  height: 50px;
  padding: 16px 40px;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif; 
  color: white;
  background-color: rgba(2, 159, 89, 1);
  border: none;          
  border-radius: 10px;    
  cursor: pointer;       
  text-decoration: none; 
  transition: all 0.3s ease;
}
.burger-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}
@media (max-width: 514px) {
  .header-phone {
    display: none; 
  }
}
@media (max-width: 848px) {
  .header {
    padding: 24px 24px;
  }
  .header-navbar {
    display: none; 
  }
  .header-button {
    display: none; 
  }
  .burger-btn {
    display: block; 
    margin-left: 25px;
  }
}
@media (max-width: 955px) {
  .header {
    padding: 18px 40px;
  }
}
@media (max-width: 1150px) {
  .header-logo {
    margin-right: 40px;
  }
  .header-navbar {
    gap: 13px;
    margin: 3px;
  }
  .header-button {
    padding: 12px 0px;
    font-size: 12px;
  }
}
</style>