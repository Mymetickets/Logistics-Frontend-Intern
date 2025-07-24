<template>

  <div class="container mx-auto px-4 py-8">
    <Card>
      <h1 class="text-2xl font-semibold mb-4">Form Example</h1>

      <InputBox
        label="Name"
        placeholder="Enter your name"
        v-model="name"
      />

      <SelectBox
        v-model="selectedOption"
        :options="options"
      />

      <CheckBox
        v-model="selectedValues"
        :options="checkboxOptions"
        label="Select your interests"
      />
      <RadioButton v-model="gender" :options="genders" name="gender" />
      <CustomButton class="mt-4" @click="submit">Submit</CustomButton>
    </Card>
  </div>
 
</template>

<script setup>

import { ref } from 'vue'
import CheckBox from "./components/ui/CheckBox.vue";


const name = ref('')
const selectedOption = ref('')
const gender = ref('')
const selectedValues = ref([])


const checkboxOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]


const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' }
]

const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
]

function submit() {
  console.log({ name: name.value, selectedOption: selectedOption.value, gender: gender.value, selectedValues: selectedValues.value })
}

</script>
