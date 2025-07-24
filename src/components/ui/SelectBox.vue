<template>
  
    <label class="block mt-4 text-sm">
  <span class="text-gray-700 dark:text-gray-400">Select one</span>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="block w-full mt-1 text-sm border border-gray-300 outline outline-2 outline-purple-400 rounded-md px-3 py-2 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:outline-purple-400"
  >
    
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
  </label>




</template>

<script setup>
const props = defineProps({
  modelValue: String,
  options: {
    type: Array,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>
