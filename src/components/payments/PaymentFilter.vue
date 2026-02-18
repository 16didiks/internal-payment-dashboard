<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="mb-6 flex items-center gap-4">
    <label class="font-medium">Filter Status:</label>
    <select
      :value="modelValue"
      @change="onChange"
      class="border rounded-lg px-3 py-2"
    >
      <option value="">All</option>
      <option value="completed">Completed</option>
      <option value="processing">Processing</option>
      <option value="failed">Failed</option>
    </select>
  </div>
</template>
