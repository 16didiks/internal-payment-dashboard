<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store'
const authStore = useAuthStore()

defineEmits(['logout', 'toggle-sidebar'])
</script>

<template>
  <header
    class="bg-white shadow px-4 md:px-6 py-4 flex justify-between items-center"
  >
    <div class="flex items-center gap-3">
      <button class="md:hidden text-gray-600" @click="$emit('toggle-sidebar')">
        ☰
      </button>

      <h1 class="text-lg font-semibold">Dashboard</h1>
    </div>

    <div class="flex items-center gap-4">
      <div class="text-sm text-gray-600 text-right">
        <div class="font-medium">
          {{ authStore.user?.email }}
        </div>
        <div class="text-xs text-gray-400 uppercase">
          {{ authStore.user?.role }}
        </div>
      </div>

      <button
        @click="$emit('logout')"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  </header>
</template>
