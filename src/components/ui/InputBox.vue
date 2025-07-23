<template>
  <label class="block text-sm">
    <span class="text-gray-700 dark:text-gray-400">
      {{ label }}
    </span>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full mt-1 text-sm border border-gray-300 outline outline-2 outline-purple-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:outline-purple-400 rounded-md px-3 py-2"

    />
  </label>
</template>

<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>
