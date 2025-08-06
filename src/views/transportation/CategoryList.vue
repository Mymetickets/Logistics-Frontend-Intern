<template>
  <div class="">
    <AddCategorymodal v-if="isModalOpen" @close="toggleModal" />
    <div class="flex justify-between items-center p-10">
      <h2 class="text-2xl">Transportation Categories</h2>
      <customButton @click="toggleModal"> Add Category </customButton>
    </div>
    <div class="px-20">
      <table class="w-full border border-gray-300 p-5">
        <thead>
          <tr class="bg-purple-600 text-white">
            <th class="px-6 py-3">Id</th>
            <th class="px-6 py-3">Name</th>
            <th class="px-6 py-3">Description</th>
            <th class="px-6 py-3">Slug</th>
            <th class="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border border-gray-300" v-for="category in transportationCategories" :key="category.id">
            <td class="px-6 py-3">{{ category.id }}</td>
            <td class="px-6 py-3">{{ category.name }}</td>
            <td class="px-6 py-3">{{ category.description }}</td>
            <td class="px-6 py-3">{{ category.slug }}</td>
            <td class="px-6 py-3">{{ category.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import AddCategorymodal from '../../components/pages/transportation/AddCategoryModal.vue';
import { useTransportationStore } from '../../stores/transportations';
import useModalToggle from '../../hooks/toggle';

const transportStore = useTransportationStore();
const transportationCategories = computed(() => {
  return transportStore.transportationCategories;
});
const { isModalOpen, toggleModal } = useModalToggle(false);
onMounted(()=>{
  transportStore.getTransportationCategories();
});
</script>

<style scoped>
</style>
