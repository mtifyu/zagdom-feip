<template>
    <div class="footer">
        <div class="footer-ul">
            <img src="/public/pictures/logo2.png" alt="logo">
            <ul class="nav1">
                <li v-for="item in nav" :key="item.url">
                    <a :href="item.url">
                    {{ item.label }}
                    </a>
                </li>
            </ul>
            <ul class="nav2">
                <li v-for="item in nav2" :key="item.url">
                    <img :src="item.icon" alt="icon">
                    <a :href="item.url">
                        {{ item.label}}
                    </a>
                </li>
            </ul>
            <button class="f-button">Оставить заявку</button>
        </div>
        <div>
            <ul class="horizontal-list">
                <li>© Загдом, 2021</li>
                <li v-for="item in nav3" :key="item.url">
                    <a :href="item.url">
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import Telephone from '/icons/telephone.svg'
import Email from '/icons/email.svg'
import Point from '/icons/point.svg'
import { ref } from 'vue'
const nav = ref([
  {
    url: '/projects',
    label: 'Реализованные проекты',
  },
  {
    url: '/news',
    label: 'Новости',
  },
  {
    url: '/contacts',
    label: 'Контакты',
  },
])
const nav2 = ref([
  {
    url: 'tel:+7(900)900-90-90',
    icon: Telephone,
    label: '+7 (900) 900-90-90',
  },
  {
    url: 'mailto:info@gmail.com',
    icon: Email,
    label: 'info@gmail.com',
  },
  {
    url: 'https://www.google.com/maps/dir/?api=1&destination=55.751244 ,37.618423',
    icon: Point,
    label:`Владивосток
      ул. Выселковая 49, стр.3
    `,
  },
])
const nav3 = ref([
  {
    url: 'https://dogovor.ru/contracts/view/politika-konfidencialnosti?yclid=7851537546016718847',
    label: 'Политика конфиденциальности',
  },
  {
    url: 'https://direct.yandex.ru/base/articles/polzovatelskoe-soglashenie?utm_source=yandex_search&utm_medium=cpc&utm_campaign=RU_SEA_Ydirect_DYN_EPK_Hub_Autotarget_desktop_03_02&utm_term=---autotargeting&utm_content=search%7Cph%7C54173728204%7Cret%7C54173728204%7Ccid%7C117673750%7Cgid%7C5535243924%7Caid%7C1866797787778245627%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Ccr%7C0%7Cad%7C0&yclid=7386752285437329407',
    label: 'Пользовательское соглашение',
  },
])
</script>

<style scoped>
.footer {
  width: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    background-color: rgb(37, 71, 65);;
}
.footer-ul{
    display: flex;
    flex-direction: row;
    gap: 122px;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 31.5px;
    padding: 0 88px; /* Вместо margin-left — добавляем padding слева и справа */
    box-sizing: border-box; /* Важно для корректной работы padding */
    width: 100%;
}
ul li {
  display: flex;
  align-items: center;
  gap: 8px;              
}
.nav1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    padding: 0px;
}
.nav1 a{
    color: rgb(255, 255, 255);
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
    text-decoration: none;
}
.nav2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    padding: 0px;
}
.nav2 a {
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
    text-decoration: none;
    white-space: pre-line;
}

.horizontal-list {
  display: flex;
  flex-direction: row;
  margin-bottom: 33px;
  margin-left: 88px;
  padding: 0px;
}
.horizontal-list li,
.horizontal-list li a{
    margin-right: 0;
    color: rgb(255, 255, 255);
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
    line-height: 121%;
    letter-spacing: 0%;
    text-align: left;
    opacity: 0.6;
    text-decoration: none;
}
.horizontal-list li:first-child {
  margin-right: 290px;
}
.horizontal-list li:nth-child(2) {
  margin-right: 185px;
}
.f-button {
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