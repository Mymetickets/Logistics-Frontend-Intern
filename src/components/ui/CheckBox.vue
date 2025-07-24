<template>
  <div class="mt-4 text-sm">
    <span class="text-gray-700 dark:text-gray-400 font-medium mb-1 block">
      {{ label }}
    </span>
    <div class="mt-2 flex flex-col gap-2">
      <label
        v-for="option in options"
        :key="option.value"
        class="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300"
      >
        <input
          type="checkbox"
          :value="option.value"
          :checked="modelValue.includes(option.value)"
          @change="toggleValue(option.value)"
           class="form-checkbox text-purple-600 border-gray-300 focus:ring-purple-500"
        />
        <span>{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: 'Select options',
  },
  options: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

function toggleValue(value) {
  const newValue = [...props.modelValue]
  const index = newValue.indexOf(value)

  if (index === -1) {
    newValue.push(value)
  } else {
    newValue.splice(index, 1)
  }

  emit('update:modelValue', newValue)
}
</script>
