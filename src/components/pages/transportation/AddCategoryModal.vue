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
          <InputBox label="Name" v-model="category.name" />
          <InputBox
            class="mt-4"
            label="Descriptions"
            v-model="category.description"
          />
          <p class="text-red-500 mt-2" v-if="error">{{ error }}</p>
          <CustomButton class="mt-4" @click.prevent="submit">Add</CustomButton>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useTransportationStore } from '../../../stores/transportations';
import { createTransportCategoryPayload } from '../../../dtos/transportationDto';
import useGenerateSlug from '../../../hooks/generateSlug';
import useFormError from '../../../hooks/FormError';

const transportStore = useTransportationStore();

const category = reactive(createTransportCategoryPayload());

const slug = computed(() => useGenerateSlug(category.name));
const { error, setError } = useFormError();
const emit = defineEmits();

const submit = async (e) => {
  if (category.name && category.description) {
    const payload = {
      ...category,
      slug: slug.value,
    };

    console.log(slug);
    transportStore.addTransportationCategory(payload);

    category.name = '';
    category.description = '';

    emit('close');
  } else {
    setError('Name and descripton Required');
  }
};
</script>

<style scoped></style>
