import axios from 'axios'
import { useAuth } from '@/modules/auth/store'
import router from '@/router'

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * Request Interceptor
 * Auto inject token
 */
api.interceptors.request.use((config) => {
  const { token } = useAuth()

  if (token.value) {
    config.headers.Authorization = `Bearer ${token.value}`
  }

  return config
})

/**
 * Response Interceptor
 * Auto logout if 401
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const { logout } = useAuth()
      logout()
      router.push('/login')
    }

    return Promise.reject(error)
  }
)

export default api
