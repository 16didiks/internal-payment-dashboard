<script setup lang="ts">
defineProps<{
  status: string
}>()
</script>

<template>
  <span
    class="px-3 py-1 text-xs font-medium rounded-full tracking-wide"
    :class="{
      'bg-green-100 text-green-700': status === 'completed',
      'bg-yellow-100 text-yellow-700': status === 'processing',
      'bg-red-100 text-red-700': status === 'failed'
    }"
  >
    {{ status }}
  </span>
</template>
