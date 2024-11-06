import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './registerServiceWorker'

const pinia = createPinia()
const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .mount('#app')
