<template>
  <Modalka :open="props.open" @close="handleClose">
    <RequestForm @submit="handleSubmit" />
  </Modalka>
</template>

<script setup>
import Modalka from './Modalka.vue'
import RequestForm from './RequestForm.vue'

const props = defineProps({
  open: Boolean
})

const emit = defineEmits(['update:open'])

function handleClose() {
  console.log('HandleClose in RequestModal - closing modal'); // Добавлено
  emit('update:open', false)
}

function handleSubmit(formData) {
  console.log('Form submitted with data:', formData); // Добавлено
  handleClose()
}
</script>