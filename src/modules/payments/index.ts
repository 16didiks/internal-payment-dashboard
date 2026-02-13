import type { RouteRecordRaw } from 'vue-router'
import DashboardView from './views/DashboardView.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardView
      }
    ]
  }
]

export default routes
