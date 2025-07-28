<template>
  <button
  
    :class="[
      'px-10 py-4 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple cursor-pointer',
    ]"
  >
    <slot />
  </button>
</template>

<script setup>

</script>
