import { defineStore } from 'pinia'
import { getPaymentsApi } from './api'
import type { Payment } from './types'

export const usePaymentStore = defineStore('payments', {
  state: () => ({
    payments: [] as Payment[],
    loading: false,
    selectedStatus: '' as string
  }),

  getters: {
    totalPayments: (state) => state.payments.length,

    completedCount: (state) =>
      state.payments.filter((p) => p.Status === 'completed').length,

    processingCount: (state) =>
      state.payments.filter((p) => p.Status === 'processing').length,

    failedCount: (state) =>
      state.payments.filter((p) => p.Status === 'failed').length,

    totalAmount: (state) => state.payments.reduce((acc, p) => acc + p.Amount, 0)
  },

  actions: {
    async fetchPayments() {
      try {
        this.loading = true
        const data = await getPaymentsApi(this.selectedStatus)
        this.payments = data
      } finally {
        this.loading = false
      }
    },

    setStatusFilter(status: string) {
      this.selectedStatus = status
      this.fetchPayments()
    }
  }
})
