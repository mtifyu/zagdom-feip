<script setup>
import { NuxtLink } from '#components'
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
        <NuxtLink to="/about" class="link">Новости</NuxtLink>
        <NuxtLink to="/about" class="link">Контакты</NuxtLink>
    </div>
    <div class="header-button">
        <img src="/public/pictures/phone.png" alt="phone" class="phone">
        <a href="tel:+7 (900) 900-90-90" class="phone">+7 (900) 900-90-90</a>
        <button class="h-button">Оставить заявку</button>
    </div>
</div>
</template>

<style scoped>
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
    gap: 24px;
    justify-content: center; 
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
.phone {
    color: rgba(37, 71, 65, 1);
    text-decoration: none;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 14px;
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
</style>