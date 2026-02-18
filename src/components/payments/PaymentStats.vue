<script setup lang="ts">
import { usePaymentStore } from '@/modules/payments/store'
const paymentStore = usePaymentStore()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    <div class="bg-white p-6 rounded-xl shadow">
      <p class="text-gray-500">Total Payments</p>
      <h2 class="text-2xl font-bold mt-2">
        {{ paymentStore.totalPayments }}
      </h2>
    </div>

    <div class="bg-white p-6 rounded-xl shadow">
      <p class="text-gray-500">Total Amount</p>
      <h2 class="text-2xl font-bold mt-2">
        Rp {{ new Intl.NumberFormat('id-ID').format(paymentStore.totalAmount) }}
      </h2>
    </div>

    <div class="bg-white p-6 rounded-xl shadow">
      <p class="text-gray-500">Completed</p>
      <h2 class="text-2xl font-bold text-green-500 mt-2">
        {{ paymentStore.completedCount }}
      </h2>
    </div>
  </div>
</template>
