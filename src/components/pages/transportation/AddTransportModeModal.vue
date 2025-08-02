<template>
  <div
    class="bg-black/70 flex justify-center items-center absolute w-full h-full"
  >
    <div class="w-[500px]">
      <Card>
        <div class="flex justify-between">
          <h2>Add Transportation Mode</h2>
          <p @click="emit('close')" class="text-lg cursor-pointer">X</p>
        </div>
        <form>
          <InputBox label="Name" v-model="name" />
          <InputBox class="mt-4" label="Descriptions" v-model="description" />
          <SelectBox
            v-model="selectedOption"
            :options="options"
            label="Category"
          />

          <p class="text-red-500 mt-2" v-if="error">{{ error }}</p>
          <CustomButton class="mt-4" @click.prevent="submit">Add</CustomButton>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useTransportationStore } from '../../../stores/transportations';

const name = ref('');
const description = ref('');
const selectedOption = ref('');
const error = ref('');

const emit = defineEmits();

const transportStore = useTransportationStore();

const options = computed(() => {
  return transportStore.transportationCategories.map((category) => ({
    id: category.id,
    label: category.name,
  }));
});

onMounted(() => {
  transportStore.getTransportationCategories();
});

const generateId = () => {
  const id = Math.floor(Math.random() * 10000);
  return id;
};

const submit = async (e) => {
  if (name.value && description.value && selectedOption.value) {
    const payload = {
      id: generateId(),
      name: name.value,
      description: description.value,
      category: selectedOption.value,
      status: 'active',
    };

    console.log(payload);

    transportStore.addTransportationMode(payload);

    name.value = '';
    description.value = '';
    selectedOption.value = '';

    emit('close');
  } else {
    error.value = 'Name, description and category Required';

    setTimeout(() => {
      error.value = '';
    }, 3000);
  }
};
</script>

<style scoped></style>
