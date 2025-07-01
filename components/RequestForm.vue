<template>
  <form @submit.prevent="handleSubmit">
    <h3>Оставить заявку</h3>

    <div class="form-group">
      <input 
        type="text" 
        v-model="formData.name"
        placeholder="Имя"
        required
      >
    </div>

    <div class="form-group">
      <input 
        type="tel" 
        v-model="formData.phone"
        v-maska="'+7 (###) ###-##-##'"
        placeholder="+7 (___) ___-__-__"
        required
      >
    </div>

    <div class="form-group">
      <textarea 
        v-model="formData.message"
        placeholder="Сообщение"
        rows="5"
      ></textarea>
    </div>
    <div class="btn-accept">
        <button type="submit" class="submit-btn">Оставить заявку</button>
        <p class="form-footer">
            Нажимая на кнопку «Отправить», вы принимаете 
            <span>пользовательское соглашение и политику конфиденциальности</span>
        </p>
    </div>
  </form>
</template>
<script setup>
const formData = reactive({
  name: '',
  phone: '',
  message: ''
})

const emit = defineEmits(['submit'])

function handleSubmit() {
  emit('submit', formData)
}
</script>

<style lang="scss" scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.placeholders {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.btn-accept {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h3 {
  margin: 0px;
  padding: 0px;
  color: rgb(43, 47, 52);
  font-family: 'Montserrat';
  font-size: 32px;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 19px;
}

.form-group {
  margin-bottom: 20px;
  
  input, textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgb(255, 255, 255);
    color: black;
    font-size: 1rem;
    
    &::placeholder {
      color: rgba(0, 0, 0, 0.7); 
      color: rgb(157, 156, 156);
      font-family: 'Montserrat';
      font-size: 14px;
      font-weight: 500;
      line-height: 180%;
      letter-spacing: 0px;
      text-align: left;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
}

.submit-btn {
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

.form-footer {
  color: rgb(102, 102, 102);
  font-size: 14px;
  margin-top: 16px;
  
  span {
    color: rgb(2, 159, 89);
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  h3 {
    font-size: 30px;
    line-height: 130%;
  }
  
  .form-group {
    input, textarea {
      padding: 10px 14px; 
    }
    
    textarea {
      min-height: 100px; 
    }
  }
  
  .submit-btn {
    max-width: 280px; 
  }
  
  .placeholders {
    gap: 16px; 
  }
}
</style>