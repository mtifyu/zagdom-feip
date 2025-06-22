<template>
    <div class="footer">
        <div class="footer-ul">
          <img class="logo" src="/public/pictures/logo2.png" alt="logo">
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
                      {{ item.label }}
                  </a>
              </li>
          </ul>
          <button class="f-button">Оставить заявку</button>
        </div>
        <div class="footer-bottom">
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
import { mockContacts } from '~/mock/contacts'
import { ref } from 'vue'

const { phone, email, address } = mockContacts

// Заменяем <br /> на \n для корректного отображения переноса
const formattedAddress = address.replace('<br />', '\n')

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
    url: `tel:${phone.value}`,
    icon: Telephone,
    label: phone.label,
  },
  {
    url: `mailto:${email}`,
    icon: Email,
    label: email,
  },
  {
    url: 'https://www.google.com/maps/dir/?api=1&destination=55.751244 ,37.618423',
    icon: Point,
    label: formattedAddress, // Используем отформатированный адрес
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

<style scoped lang="scss">
$footer-bg: rgb(37, 71, 65);
$text-color: rgb(255, 255, 255);
$button-bg: rgba(2, 159, 89, 1);
$footer-bottom-text-color: rgba(255, 255, 255, 0.6);
$footer-link-opacity: 0.6;

* {
  box-sizing: border-box;
}

.footer {
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  background-color: $footer-bg;
}

.footer-ul {
  display: grid;
  grid-template-columns: auto 1fr 1fr auto;
  grid-template-areas: 
    "logo nav1 nav2 button";
  align-items: start;
  margin-top: 31.5px;
  padding: 0 88px; 
  gap: 40px;
  width: 100%;
}

.logo { grid-area: logo; }
.nav1 { grid-area: nav1; }
.nav2 { grid-area: nav2; }
.f-button { grid-area: button; }

ul li {
  display: flex;
  align-items: center;
  gap: 8px;              
}

.nav1 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px;
  
  a {
    color: $text-color;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    text-align: left;
    text-decoration: none;
  }
}

.nav2 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px;
  
  a {
    color: $text-color;
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    text-align: left;
    text-decoration: none;
    white-space: pre-line; /* Сохраняем переносы строк */
  }
}

.horizontal-list {
  display: flex;
  margin-bottom: 33px;
  margin-left: 88px;
  padding: 0px;
  
  li, li a {
    margin-right: 0;
    color: $footer-bottom-text-color;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
    line-height: 121%;
    text-decoration: none;
  }
  
  li:first-child {
    margin-right: 290px;
  }
  
  li:nth-child(2) {
    margin-right: 185px;
  }
}

.f-button {
  padding: 16px 40px;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif; 
  color: $text-color;
  background-color: $button-bg;
  border: none;          
  border-radius: 10px;    
  cursor: pointer;       
  text-decoration: none; 
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .footer-ul{
    padding: 0 40px; 
    gap: 30px;
  }
  
  .nav1 a {
    font-size: 14px;
  }
  
  .nav2 a {
    font-size: 12px;
  }
  
  .horizontal-list {
    gap: 6px;
    
    li:first-child {
      margin-right: 60px;
    }
    
    li:nth-child(2) {
      margin-right: 50px;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    margin: 0;
    padding: 0;
  }
  
  .footer-ul {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "logo"
      "nav1"
      "nav2"
      "button";
    gap: 24px;
    padding: 0 40px;
  }
  
  .f-button {
    justify-self: start;
    margin-top: 10px;
  }
  
  .footer-bottom {
    margin-top: 20px;
  }
  
  .horizontal-list {
    flex-direction: column;
    margin-left: 40px;
    margin-bottom: 40px;
    gap: 16px;
    
    li {
      opacity: $footer-link-opacity;
      margin-right: 0 !important;
    }
  }
}
</style>