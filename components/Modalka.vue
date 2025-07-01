<template>
  <div v-if="open" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <slot></slot>
      <button class="modal-close" @click="close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="#2B2F34" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  open: Boolean
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>
<style scoped>
.modal-overlay {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
  z-index: 9999;
}

.modal-content {
  width: 448px;
  height: auto; 
  min-height: 603px;
  border-radius: 10px;
  background: rgb(245, 247, 243);
  padding: 48px;
  z-index: 2;
  position: relative;
  max-height: 90vh;
}

.modal-close {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

@media (max-width: 1024px) {
  .modal-content {
    max-width: 600px;
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .modal-content {
    width: 90%;
    max-width: 100%; 
    padding: 24px; 
    min-height: 500px;
  }
}
</style>