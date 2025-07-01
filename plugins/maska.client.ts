import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('maska', {
    mounted(el, binding) {
      const handler = (e: InputEvent) => {
        const mask = binding.value
        let value = el.value.replace(/\D/g, '')
        let result = ''
        let charIndex = 0
        
        for (let i = 0; i < mask.length; i++) {
          if (mask[i] === '#' && value[charIndex]) {
            result += value[charIndex++]
          } else if (value[charIndex]) {
            result += mask[i]
          }
        }
        
        el.value = result
      }

      el.addEventListener('input', handler)
      el.addEventListener('change', handler)
      const cleanup = () => {
        el.removeEventListener('input', handler)
        el.removeEventListener('change', handler)
      }
      
      nuxtApp.hook('app:beforeMount', cleanup)
    }
  })
})