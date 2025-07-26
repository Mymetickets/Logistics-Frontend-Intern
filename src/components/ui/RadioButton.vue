<template>
  <div class="mt-4 text-sm">
    <span class="text-gray-700 dark:text-gray-400 font-medium mb-1 block">
      {{ label }}
    </span>
    <div class="mt-2 flex items-center gap-6">
      <label
        v-for="option in options"
        :key="option.value"
        class="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300"
      >
        <input
          type="radio"
          :name="name"
          :value="option.value"
          :checked="option.value === modelValue"
          @change="$emit('update:modelValue', option.value)"
          class="form-radio text-purple-600 border-gray-300 focus:ring-purple-500"
        />
        <span>{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  label: {
    type: String,
    default: 'Choose an option',
  },
  name: {
    type: String,
    default: 'radioGroup',
  },
  options: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['update:modelValue'])
</script>
