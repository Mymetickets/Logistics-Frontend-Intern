<template>
  <div class="">
    <AddTransportModeModal v-if="isModalOpen" @close="toggleModal" />

    <div class="flex justify-between items-center p-10">
      <h2 class="text-2xl">Transportation Mode</h2>
      <customButton @click="toggleModal"> Add Mode </customButton>
    </div>
    <div class="px-20">
      <table class="w-full border border-gray-300 p-5">
        <thead>
          <tr class="bg-purple-600 text-white">
            <th class="px-6 py-3">Id</th>
            <th class="px-6 py-3">Name</th>
            <th class="px-6 py-3">Description</th>
            <th class="px-6 py-3">Category</th>
            <th class="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border border-gray-300"
            v-for="mode in transportModes"
            :key="mode.id"
          >
            <td class="px-6 py-3">{{ mode.id }}</td>
            <td class="px-6 py-3">{{ mode.name }}</td>
            <td class="px-6 py-3">{{ mode.description }}</td>
            <td class="px-6 py-3">{{ mode.category }}</td>
            <td class="px-6 py-3">{{ mode.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import AddTransportModeModal from '../../components/pages/transportation/AddTransportModeModal.vue';
import { useTransportationStore } from '../../stores/transportations';

const transportStore = useTransportationStore();
const transportModes = computed(() => {
  return transportStore.transportationModes;
});

const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

onMounted(() => {
  transportStore.getTransportationMode();
});
</script>

<style scoped></style>
