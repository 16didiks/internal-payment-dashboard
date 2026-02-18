import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/app/router'
import { useAuthStore } from '@/modules/auth/store'

import './assets/main.css'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)

const authStore = useAuthStore()
authStore.init()

app.mount('#app')
