<template>
  <div class="">
    <h2>Add Transportation Category</h2>
    <div class="w-[500px]">
      <Card>
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

const name = ref('');
const description = ref('');
const error = ref('');

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
    console.log({
      id: generateId(),
      name: name.value,
      description: description.value,
      slug: generateSlug(name.value),
    });

    name.value = '';
    description.value = '';
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
