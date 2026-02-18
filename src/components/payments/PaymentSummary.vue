<script setup lang="ts">
import { usePaymentStore } from '@/modules/payments/store'

const store = usePaymentStore()

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID').format(Number(value))
}
</script>

<template>
  <section class="bg-white rounded-xl shadow p-6 mb-6">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
    >
      <h2 class="text-lg font-semibold">Payment Overview</h2>
      <div class="text-sm text-gray-500">
        {{ store.totalPayments }} payments found
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <!-- Total -->
      <div
        class="p-5 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
      >
        <p class="text-xs text-gray-500">Total</p>
        <h3 class="text-2xl font-bold">
          {{ store.totalPayments }}
        </h3>
      </div>

      <!-- Completed -->
      <div class="p-4 rounded-xl bg-green-50">
        <p class="text-xs text-green-600">Completed</p>
        <h3 class="text-2xl font-bold text-green-700">
          {{ store.completedCount }}
        </h3>
      </div>

      <!-- Processing -->
      <div class="p-4 rounded-xl bg-yellow-50">
        <p class="text-xs text-yellow-600">Processing</p>
        <h3 class="text-2xl font-bold text-yellow-700">
          {{ store.processingCount }}
        </h3>
      </div>

      <!-- Failed -->
      <div class="p-4 rounded-xl bg-red-50">
        <p class="text-xs text-red-600">Failed</p>
        <h3 class="text-2xl font-bold text-red-700">
          {{ store.failedCount }}
        </h3>
      </div>
    </div>

    <!-- Total Amount Row -->
    <div class="mt-6 pt-6 border-t flex justify-between items-center">
      <span class="text-sm text-gray-500">Total Amount</span>
      <span class="text-xl font-semibold">
        Rp {{ formatCurrency(store.totalAmount) }}
      </span>
    </div>
  </section>
</template>
