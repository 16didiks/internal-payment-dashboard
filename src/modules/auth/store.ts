import { ref } from 'vue'

const token = ref<string | null>(localStorage.getItem('token'))

export function useAuth() {
  const setToken = (newToken: string) => {
    token.value = newToken
    localStorage.setItem('token', newToken)
  }

  const logout = () => {
    token.value = null
    localStorage.removeItem('token')
  }

  const isAuthenticated = () => !!token.value

  return {
    token,
    setToken,
    logout,
    isAuthenticated
  }
}
