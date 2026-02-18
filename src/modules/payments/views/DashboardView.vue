<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { usePaymentStore } from '@/modules/payments/store'
import { useAuthStore } from '@/modules/auth/store'
import { useRouter } from 'vue-router'

import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import PaymentFilter from '@/components/payments/PaymentFilter.vue'
import PaymentSummary from '@/components/payments/PaymentSummary.vue'
import PaymentChart from '@/components/payments/PaymentChart.vue'
import PaymentTable from '@/components/payments/PaymentTable.vue'
import { ref } from 'vue'

const isSidebarOpen = ref(false)

const paymentStore = usePaymentStore()
const authStore = useAuthStore()
const router = useRouter()
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
onMounted(() => {
  paymentStore.fetchPayments()
})

const selectedStatus = computed({
  get: () => paymentStore.selectedStatus,
  set: (val: string) => paymentStore.setStatusFilter(val)
})

const logout = () => {
  authStore.logout()
  router.replace('/login')
}
</script>

<template>
  <div
    class="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative"
  >
    <AppSidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <div class="flex-1 flex flex-col">
      <AppNavbar @logout="logout" @toggle-sidebar="toggleSidebar" />

      <main class="p-6 overflow-auto">
        <PaymentFilter v-model="selectedStatus" />

        <template v-if="authStore.isOperation">
          <PaymentSummary />
          <PaymentChart /> </template
        ><br />

        <PaymentTable />
      </main>
    </div>
  </div>
</template>
