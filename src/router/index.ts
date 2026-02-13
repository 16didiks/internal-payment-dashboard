import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from '@/modules/auth'
import paymentRoutes from '@/modules/payments'
import { useAuth } from '@/modules/auth/store'

const routes = [...authRoutes, ...paymentRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * 🔐 Global Auth Guard
 */
router.beforeEach((to, _, next) => {
  const { isAuthenticated } = useAuth()

  const isLoginPage = to.path === '/login'
  const isAuth = isAuthenticated()

  // Kalau belum login dan bukan ke halaman login → redirect
  if (!isAuth && !isLoginPage) {
    return next('/login')
  }

  // Kalau sudah login tapi mau ke login lagi → redirect ke dashboard
  if (isAuth && isLoginPage) {
    return next('/')
  }

  next()
})

export default router
