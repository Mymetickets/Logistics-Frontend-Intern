<template>
  <div
    class="bg-black/70 flex justify-center items-center absolute w-full h-full"
  >
    <div class="w-[500px]">
      <Card>
        <div class="flex justify-between text-white">
          <h2 class="">Add Transportation Category</h2>
          <p @click="emit('close')" class="text-lg cursor-pointer">X</p>
        </div>
        <form>
          <InputBox label="Name" v-model="name" />
          <InputBox class="mt-4" label="Descriptions" v-model="description" />
          <p class="text-red-500 mt-2" v-if="error">{{ error }}</p>
          <CustomButton class="mt-4" @click.prevent="submit">Add</CustomButton>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTransportationStore } from '../../../stores/transportations';

const transportStore = useTransportationStore();

const name = ref('');
const description = ref('');
const error = ref('');

const emit = defineEmits();

const generateId = () => {
  const id = Math.floor(Math.random() * 10000);
  return id;
};

const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
};

const submit = async (e) => {
  if (name.value && description.value) {
    const payload = {
      id: generateId(),
      name: name.value,
      description: description.value,
      slug: generateSlug(name.value),
    }
    console.log(payload);
    transportStore.addTransportationCategory(payload);

    name.value = '';
    description.value = '';

    emit('close');
  } else {
    error.value = 'Name and descripton Required';

    setTimeout(() => {
      error.value = '';
    }, 3000);
  }

  //   try {
  //     if (name.value && description.value) {
  //       const response = await fetch('', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           id: generateId(),
  //           name: name.value,
  //           description: description.value,
  //           slug: generateSlug(name.value),
  //         }),
  //       });
  //     } else {
  //       error.value = 'Name and descripton Required';
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
};
</script>

<style scoped></style>
