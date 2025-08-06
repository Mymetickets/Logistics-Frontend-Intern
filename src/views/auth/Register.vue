<template>

  <NavBar />


      <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex-1 h-ful px-4 py-8 l max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >

    <p class="mt-4 text-sm text-center text-red-600 dark:text-gray-400">
       {{ errorMessage }}
    </p>

        <h1 class="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Register
        </h1>


        <InputBox label="Email" placeholder="Enter your email" v-model="email" type="text" />


           <InputBox label="Password" placeholder="***************" v-model="password" type="password"/>


           <InputBox label="Confirm Password" placeholder="***************" v-model="confirmPassword" type="password"/>


        <CustomButton class="mt-4" @click="submit">Register</CustomButton>

        <p class="mt-4">
          Already have an account?
          <router-link
            class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
            to="/login"
          >
            Login
          </router-link>
        </p>

      </div>
      </div>
 
 
    
</template>

<script setup>

import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthenticationStore } from '../../stores/authentication';


const authenticationStore = useAuthenticationStore();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const router = useRouter();

const payload = computed(() => ({
  email: email.value,
  password: password.value,
}));

const validateForm = () => {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value)) {
    errorMessage.value = 'Please enter a valid email address';
    return false;
  }

  if (!email.value || !password.value || !confirmPassword.value) {
    errorMessage.value = 'All fields are required';
    return false;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match';
    return false;
  }
  errorMessage.value = '';
  return true;
};


const submit = () => {
  // Handle registration logic
  if (validateForm()) {
    authenticationStore.registerUser(payload.value);
  } else {
    errorMessage.value = 'Passwords do not match';
    return;
  }
 
  router.push('/login');
};

</script>