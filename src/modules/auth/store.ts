import { defineStore } from 'pinia'
import { loginApi } from './api'

interface User {
  email: string
  role: string
  token: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null
  }),

  getters: {
    isAuthenticated: (state) => !!state.user?.token,
    userRole: (state) => state.user?.role,
    isOperation: (state) => state.user?.role === 'operation'
  },

  actions: {
    init() {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      const email = localStorage.getItem('email')

      if (token && role && email) {
        this.user = {
          email,
          role,
          token
        }
      }
    },

    async login(payload: { email: string; password: string }) {
      try {
        this.loading = true
        this.error = null

        const data = await loginApi(payload)

        this.user = data

        localStorage.setItem('token', data.token)
        localStorage.setItem('role', data.role)
        localStorage.setItem('email', data.email)
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Login failed'
        throw err
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      localStorage.clear()
    }
  }
})
