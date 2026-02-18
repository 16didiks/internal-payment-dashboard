import api from '@/shared/services/api'

export interface LoginPayload {
  email: string
  password: string
}

export const loginApi = async (payload: LoginPayload) => {
  const { data } = await api.post('/auth/login', payload)
  return data
}
