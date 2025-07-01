<template>
    <div class="footer">
        <div class="footer-content">
          <img class="logo" src="/public/pictures/logo2.png" alt="logo">
          <div class="navs">
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
          </div>
          <button class="f-button" @click="modalOpen = true">Оставить заявку</button>
        </div>
        <div class="footer-bottom">
            <ul class="footer-links">
                <li>© Загдом, 2021</li>
                <div class="footer-links-2">
                  <li v-for="item in nav3" :key="item.url">
                    <a :href="item.url">
                      {{ item.label }}
                    </a>
                  </li>
                </div>
            </ul>
        </div>
        <RequestModal v-model:open="modalOpen" />
    </div>
</template>

<script setup>
import Telephone from '/icons/telephone.svg'
import Email from '/icons/email.svg'
import Point from '/icons/point.svg'
import { mockContacts } from '~/mock/contacts'
import { ref } from 'vue'
import RequestModal from './RequestModal.vue'

const { phone, email, address } = mockContacts

const formattedAddress = address.replace('<br />', '\n')
const modalOpen = ref(false)

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
    label: formattedAddress,
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

.footer {
  width: 100%;
  background-color: $footer-bg;
  color: $text-color;
  padding-top: 32px;
}

.navs {
  display: grid;
  grid-template-columns: auto auto;
  gap: 25px;
  
  @media (max-width: 1024px) {
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  gap: 40px;
  padding: 0 88px;
  margin-bottom: 15px;
  
  @media (max-width: 1200px) {
    gap: 30px;
    padding: 0 60px;
  }
  
  @media (max-width: 1024px) {
    gap: 25px;
    padding: 0 40px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 24px;
  }
}

.logo { 
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
}

.nav1, .nav2 {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
}

.nav1 a {
  color: $text-color;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
}

.nav2 li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.nav2 a {
  color: $text-color;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-decoration: none;
  white-space: pre-line;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
}

.f-button {
  padding: 16px 40px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: $text-color;
  background-color: $button-bg;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: darken($button-bg, 10%);
  }
  
  @media (max-width: 1024px) {
    padding: 14px 32px;
    font-size: 13px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    margin-top: 8px;
    padding: 16px;
  }
}

.footer-bottom {
  padding: 24px 88px;
  
  @media (max-width: 1024px) {
    padding: 24px 40px;
  }
  
  @media (max-width: 768px) {
    padding: 24px;
  }
}

.footer-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 96px;
  padding: 0;
  margin: 0;
  list-style: none;
  
  li, li a {
    color: $footer-bottom-text-color;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    text-decoration: none;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.8;
    }
  }
}

.footer-links-2 {
  display: flex;
  gap: 130px;
  
  @media (max-width: 1200px) {
    gap: 100px;
  }
  
  @media (max-width: 1024px) {
    gap: 60px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
}

@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>