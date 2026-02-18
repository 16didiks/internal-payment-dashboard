import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/app/router'
import { useAuthStore } from '@/modules/auth/store'

import './assets/main.css'

import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(VueApexCharts)

const authStore = useAuthStore()
authStore.init()

app.mount('#app')
