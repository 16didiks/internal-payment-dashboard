<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/modules/auth/store'

const auth = useAuthStore()
</script>

<template>
  <router-view />
</template>
