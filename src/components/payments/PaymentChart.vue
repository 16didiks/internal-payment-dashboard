<script setup lang="ts">
import { computed } from 'vue'
import { usePaymentStore } from '@/modules/payments/store'

const store = usePaymentStore()

const series = computed(() => [
  store.completedCount,
  store.processingCount,
  store.failedCount
])

const chartOptions = {
  chart: { type: 'donut' },
  labels: ['Completed', 'Processing', 'Failed'],
  colors: ['#16a34a', '#eab308', '#dc2626'],
  legend: { show: false },
  dataLabels: { enabled: true }
}
</script>

<template>
  <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
    <h3 class="text-lg font-semibold mb-6">Payment Status Breakdown</h3>

    <div class="grid md:grid-cols-2 gap-8 items-center">
      <!-- Chart -->
      <div class="max-w-xs mx-auto">
        <apexchart
          type="donut"
          height="280"
          :options="chartOptions"
          :series="series"
        />
      </div>

      <!-- Breakdown Details -->
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-green-600 rounded-full"></span>
            <span>Completed</span>
          </div>
          <span class="font-semibold text-green-600">
            {{ store.completedCount }}
          </span>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>Processing</span>
          </div>
          <span class="font-semibold text-yellow-600">
            {{ store.processingCount }}
          </span>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-red-600 rounded-full"></span>
            <span>Failed</span>
          </div>
          <span class="font-semibold text-red-600">
            {{ store.failedCount }}
          </span>
        </div>

        <div class="pt-4 border-t flex justify-between items-center">
          <span class="text-gray-500 text-sm">Total Payments</span>
          <span class="font-bold text-lg">
            {{ store.totalPayments }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
