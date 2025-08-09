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
          <InputBox label="Name" v-model="transportMode.name" />
          <InputBox
            class="mt-4"
            label="Descriptions"
            v-model="transportMode.description"
          />
          <SelectBox
            v-model="transportMode.category"
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
import { computed, onMounted, reactive, ref } from 'vue';
import { useTransportationStore } from '../../../stores/transportations';
import { createTransportModePayload } from '../../../dtos/transportationDto';
import useFormError from '../../../hooks/FormError';

const transportMode = reactive(createTransportModePayload());

const emit = defineEmits();

const transportStore = useTransportationStore();
const { error, setError } = useFormError();

const options = computed(() => {
  return transportStore.transportationCategories.map((category) => ({
    id: category.id,
    label: category.name,
  }));
});

onMounted(() => {
  transportStore.getTransportationCategories();
});

const submit = () => {
  if (
    transportMode.name &&
    transportMode.description &&
    transportMode.category
  ) {
    const payload = {
      ...transportMode,
    };

    console.log(payload);

    transportStore.addTransportationMode(payload);

    transportMode.name = '';
    transportMode.description = '';
    transportMode.category = '';

    emit('close');
  } else {
    setError('Name and descripton Required');
  }
};
</script>

<style scoped></style>
