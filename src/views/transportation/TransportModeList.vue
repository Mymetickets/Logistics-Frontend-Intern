<template>
  <div class="">
    <AddTransportModeModal v-if="isModalOpen" @close="toggleModal" />

    <div class="flex justify-between items-center p-10">
      <h2 class="text-2xl">Transportation Mode</h2>
      <customButton @click="toggleModal"> Add Mode </customButton>
    </div>
    <div class="px-20">
      <table class="tftable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mode in transportModes" :key="mode.id">
            <td>{{ mode.id }}</td>
            <td>{{ mode.name }}</td>
            <td>{{ mode.description }}</td>
            <td>{{ mode.category }}</td>
            <td>{{ mode.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddTransportModeModal from '../../components/pages/transportation/AddTransportModeModal.vue';

const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
const transportModes = [
  {
    id: 1,
    name: 'Intercity Bus',
    description: 'Bus service between cities and towns.',
    category: 'Road',
    status: 'active',
  },
  {
    id: 2,
    name: 'Taxi',
    description: 'Private road transport service.',
    category: 'Road',
    status: 'active',
  },
  {
    id: 3,
    name: 'Freight Train',
    description: 'Rail transport for goods and cargo.',
    category: 'Rail',
    status: 'active',
  },
  {
    id: 4,
    name: 'Passenger Train',
    description: 'Rail service for passengers.',
    category: 'Rail',
    status: 'active',
  },
  {
    id: 5,
    name: 'Domestic Flight',
    description: 'Air travel within a country.',
    category: 'Air',
    status: 'active',
  },
  {
    id: 6,
    name: 'International Flight',
    description: 'Air travel between countries.',
    category: 'Air',
    status: 'active',
  },
  {
    id: 7,
    name: 'Ferry',
    description: 'Boat service for passengers and vehicles.',
    category: 'Water',
    status: 'active',
  },
  {
    id: 8,
    name: 'Cargo Ship',
    description: 'Large ship used for transporting goods.',
    category: 'Water',
    status: 'active',
  },

  {
    id: 10,
    name: 'Space Shuttle',
    description: 'Vehicle for space travel and transport.',
    category: 'Space',
    status: 'inactive',
  },
];

// import { onMounted, reactive } from 'vue';

// const TransportModes = reactive([]);

// const getAllTransportMode = async () => {
//   try {
//     const response = await fetch('url');
//     const data = await JSON.parse(response);
//     TransportModes = data;
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// onMounted(() => {
//   getAllTransportMode();
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
