import api from '@/shared/services/api'
import type { Payment } from './types'

export const getPaymentsApi = async (status?: string) => {
  const { data } = await api.get<{ payments: Payment[] }>('/payments', {
    params: status ? { status } : {}
  })

  return data.payments
}
