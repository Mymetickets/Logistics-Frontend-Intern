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
          Login
        </h1>


        <InputBox label="Email" placeholder="Enter your email" v-model="loginForm.email" type="text" />


           <InputBox label="Password" placeholder="***************" v-model="loginForm.password" type="password"/>

     


        <CustomButton class="mt-4" @click="submit">Login</CustomButton>

       

        <p class="mt-4">
          <a
            class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
            href="./forgot-password.html"
          >
            Forgot your password?
          </a>
        </p>
        <p class="mt-1">
          <router-link
            class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
            to="/register"
          >
            Create account
          </router-link>
          
        </p>
      </div>
      </div>
 
    
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthenticationStore } from '../../stores/authentication';
import { loginPayload } from '../../dtos/login';

const loginForm = ref(loginPayload);
const router = useRouter();
const authenticationStore = useAuthenticationStore();

const errorMessage = ref('');


const validateForm = () => {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(loginForm.value.email)) {
    errorMessage.value = 'Invalid email format';
    return false;
  }

  if (!loginForm.value.email || !loginForm.value.password) {
    errorMessage.value = 'Email and password are required';
    return false;
  }
  errorMessage.value = '';
  return true;
};

const submit = () => {
  
  if (validateForm()) {
    const isAuthenticated = authenticationStore.isAuthenticated({ email: loginForm.value.email, password: loginForm.value.password });
    if (isAuthenticated) {
      router.push('/transportation/category');
    } else {
      errorMessage.value = 'Invalid email or password';
    }
  }
};

</script>