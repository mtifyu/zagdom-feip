<template>
  <div class="drawer">
    <transition name="fade">
      <div v-if="isOpen" @click.self="toggleDrawer" class="overlay"></div>
    </transition>

    <transition name="slide-right">
      <div v-show="isOpen" class="sidebar right-drawer">
        <button @click="toggleDrawer" class="close-btn">
            <img src="/pictures/Close.png" alt="close">
        </button>
        <div class="content-container">
            <div class="navs">
                <nav class="nav1">
                <ul>
                    <li><a href="/">Реализованные проекты</a></li>
                    <li><a href="/">Новости</a></li>
                    <li><a href="/">Контакты</a></li>
                </ul>
                </nav>
                <ul class="nav2">
                    <li v-for="item in nav2" :key="item.url">
                        <img :src="item.icon" alt="icon">
                        <a :href="item.url">
                            {{ item.label}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import WhiteTelephone from '/icons/WhiteTelephone.svg'
import WhiteEmail from '/icons/WhiteEmail.svg'
import WhitePoint from '/icons/WhitePoint.svg'
import { ref } from 'vue';

const props = defineProps(['isOpen'])
const emit = defineEmits(['update:isOpen'])

function toggleDrawer() {
  const newValue = !props.isOpen
  emit('update:isOpen', newValue)

  document.body.style.overflow = newValue ? 'hidden' : ''
}

watch(
  () => props.isOpen,
  (newVal) => {
    document.body.style.overflow = newVal ? 'hidden' : ''
  }
)
const nav2 = ref([
  {
    url: 'tel:+7(900)900-90-90',
    icon: WhiteTelephone,
    label: '+7 (900) 900-90-90',
  },
  {
    url: 'mailto:info@gmail.com',
    icon: WhiteEmail,
    label: 'info@gmail.com',
  },
  {
    url: 'https://www.google.com/maps/dir/?api=1&destination=55.751244 ,37.618423',
    icon: WhitePoint,
    label:`г. Владивосток
      ул. Выселковая 49, стр.3
    `,
  },
])
</script>

<style scoped>
ul li {
  display: flex;
  align-items: center;
  gap: 8px;              
}
.drawer {
  position: relative;
}
.open-btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: none;
}
.sidebar {
  position: fixed;
  top: 0;
  height: 100%;
  width: 250px; 
  background-color: rgba(2, 159, 89, 1);
  z-index: 1000;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.content-container {
  flex: 1; 
  display: flex;
  flex-direction: column;
}
.navs {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1; 
}
.right-drawer {
  right: 0; 
}
.close-btn {
  align-self: flex-end;
  margin-bottom: 20px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
}
.nav1 ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.nav1 ul li {
    padding: 10px 0;
}
.nav1 ul li a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
    text-align: left;
} 
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}
.nav2 {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style: none;
    padding: 0;
}
.nav2 a {
    color: rgb(255, 255, 255);
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
    text-decoration: none;
    white-space: pre-line;
}

/* Анимации */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>