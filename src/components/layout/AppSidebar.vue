<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

defineEmits(['close'])
</script>

<template>
  <!-- Overlay -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
    @click="$emit('close')"
  ></div>

  <aside
    class="fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300"
    :class="{
      '-translate-x-full md:translate-x-0': !isOpen,
      'translate-x-0': isOpen
    }"
  >
    <div class="p-6 text-xl font-bold border-b" style="height: 73px">
      Payment Admin
    </div>

    <nav class="p-4 space-y-2">
      <a class="block px-4 py-2 rounded-lg bg-blue-500 text-white">
        Dashboard
      </a>
    </nav>
  </aside>
</template>
