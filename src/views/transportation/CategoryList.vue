<template>
  <div class="">
    <AddCategorymodal v-if="isModalOpen" @close="toggleModal" />
    <div class="flex justify-between items-center p-10">
      <h2 class="text-2xl">Transportation Categories</h2>
      <customButton @click="toggleModal"> Add Category </customButton>
    </div>
    <div class="px-20">
      <table class="tftable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Slug</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in transportationCategories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ category.description }}</td>
            <td>{{ category.slug }}</td>
            <td>{{ category.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddCategorymodal from '../../components/pages/transportation/AddCategoryModal.vue';

const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const transportationCategories = [
  {
    id: '1',
    name: 'Road',
    description: 'Travel by vehicles on roads.',
    slug: 'road',
    status: 'active',
  },
  {
    id: '2',
    name: 'Rail',
    description: 'Travel using trains on tracks.',
    slug: 'rail',
    status: 'active',
  },
  {
    id: '3',
    name: 'Air',
    description: 'Travel by airplanes or helicopters.',
    slug: 'air',
    status: 'active',
  },
  {
    id: '4',
    name: 'Water',
    description: 'Travel by boats or ships.',
    slug: 'water',
    status: 'active',
  },
  {
    id: '6',
    name: 'Space',
    description: 'Travel beyond Earth.',
    slug: 'space',
    status: 'inactive',
  },
];

// import { onMounted, reactive } from 'vue';

// const categoryList = reactive([]);

// const getAllCategory = async () => {
//   try {
//     const response = await fetch('url');
//     const data = await JSON.parse(response);
//     categoryList = data;
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// onMounted(() => {
//   getAllCategory();
// });
</script>

<style scoped>
.tftable {
  font-size: 14px;
  color: #333333;
  width: 100%;
  border-width: 1px;
  border-color: #9810fa;
  border-collapse: collapse;
}
.tftable th {
  font-size: 18px;
  background-color: #9810fa;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #9810fa;
  text-align: left;
}
.tftable tr {
  background-color: #ffffff;
}
.tftable td {
  font-size: 14px;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #9810fa;
}
.tftable tr:hover {
  background-color: #e0ffff;
}
</style>
