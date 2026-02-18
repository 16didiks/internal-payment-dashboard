<script setup lang="ts">
import { usePaymentStore } from '@/modules/payments/store'
import StatusBadge from './StatusBadge.vue'

const paymentStore = usePaymentStore()

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID').format(Number(value))
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleString('id-ID')
}

const getStatusClass = (status: string) => {
  if (status === 'completed') return 'text-green-500'
  if (status === 'processing') return 'text-yellow-500'
  if (status === 'failed') return 'text-red-500'
  return ''
}
</script>

<template>
  <div class="bg-white rounded-xl shadow">
    <div class="p-4 border-b font-semibold">Payment List</div>

    <div v-if="paymentStore.loading" class="p-6 text-center text-gray-500">
      Loading payments...
    </div>

    <div
      v-else-if="paymentStore.payments.length === 0"
      class="p-6 text-center text-gray-500"
    >
      No payments found.
    </div>

    <div v-else>
      <!-- Desktop Table -->
      <div class="hidden md:block overflow-x-auto">
        <table class="w-full text-left">
          <thead class="bg-gray-50">
            <tr>
              <th class="p-4">ID</th>
              <th class="p-4">Merchant</th>
              <th class="p-4">Amount</th>
              <th class="p-4">Status</th>
              <th class="p-4">Created At</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="payment in paymentStore.payments"
              :key="payment.ID"
              class="border-t hover:bg-gray-50 transition"
            >
              <td class="p-4">#{{ payment.ID }}</td>
              <td class="p-4">{{ payment.Merchant }}</td>
              <td class="p-4">Rp {{ formatCurrency(payment.Amount) }}</td>
              <td class="p-4">
                <StatusBadge :status="payment.Status" />
              </td>
              <td class="p-4 text-gray-500">
                {{ formatDate(payment.CreatedAt) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Card View -->
      <div class="md:hidden space-y-4 p-4">
        <div
          v-for="payment in paymentStore.payments"
          :key="payment.ID"
          class="border rounded-xl p-4 shadow-sm bg-white"
        >
          <div class="flex justify-between items-center mb-2">
            <div class="font-semibold">
              #{{ payment.ID }} - {{ payment.Merchant }}
            </div>
            <StatusBadge :status="payment.Status" />
          </div>

          <div class="text-sm text-gray-600">
            <div>
              <span class="font-medium">Amount:</span>
              Rp {{ formatCurrency(payment.Amount) }}
            </div>
            <div>
              <span class="font-medium">Created:</span>
              {{ formatDate(payment.CreatedAt) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
