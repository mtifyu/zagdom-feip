<template>
  <DialogRoot :open="props.open">
    <DialogPortal>
      <DialogOverlay class="DialogOverlay" @click="closeDialog">
        <DialogContent class="DialogContent" @click.stop>
          <form @submit.prevent="handleSubmit">
            <div class="modal-header">
              <h3>Оставить заявку</h3>
              <button class="close-btn" @click="closeDialog">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#2B2F34" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            <div class="placeholders">
                <div class="form-group">
                    <input type="text" id="name" placeholder="Имя" required>
                </div>
                <div class="form-group">
                    <input type="tel" id="phone" placeholder="Телефон" required>
                </div>
                <div class="form-group">
                    <textarea id="message" placeholder="Сообщение"></textarea>
                </div>
            </div>
            <div class="btn-accept">
                <button type="submit" class="submit-btn">Оставить заявку</button>
                <p>Нажимая на кнопку «Отправить», вы принимаете <span> пользовательское соглашение 
и политику конфиденциальности </span></p>
            </div>
          </form>
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import { 
  DialogContent, 
  DialogOverlay, 
  DialogPortal, 
  DialogRoot
} from 'reka-ui'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  open: Boolean
})

const emit = defineEmits(['update:open'])

function handleSubmit() {
  closeDialog()
}

function closeDialog() {
  emit('update:open', false)
}
</script>

<style lang="scss" scoped>
.DialogOverlay {
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

.DialogContent {
  width: 448px;
  height: auto; 
  min-height: 603px;
  border-radius: 10px;
  background: rgb(245, 247, 243);
  padding: 48px;
  z-index: 2;
  position: relative;
  max-height: 90vh; 

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
  }

  .placeholders {
    display:flex;
    flex-direction:column;
    gap:24px;
  }
  
  .btn-accept {
    display: flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
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
  }
  
  .form-group {
    margin-bottom: 20px;
    
    label {
      display: block;
      margin-bottom: 8px;
      color: rgba(255, 255, 255, 0.85);
      font-size: 1rem;
    }
    
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

  p {
    color: rgb(102, 102, 102);
    font-size: 14px;
    margin-top: 16px;
  }
  
  span {
    color: rgb(2, 159, 89);
    font-size: 14px;
    margin-top: 16px;
    cursor:pointer;
  }
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: 16px;
}

@media (max-width: 1024px) {
  .DialogContent {
    max-width: 600px;
    padding: 40px;
  }
}
@media (max-width: 768px) {
  .DialogContent {
    width: 90%;
    max-width: 100%; 
    padding: 24px; 
    min-height: 500px; 
    h3 {
      font-size: 30px;
      line-height: 130%;
    }
    
    .modal-header {
      margin-top: 40px;
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
}
</style>