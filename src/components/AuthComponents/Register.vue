<template>

      <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex-1 h-ful px-4 py-8 l max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      
     
 
        <h1 class="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Register
        </h1>


        <InputBox label="Email" placeholder="Enter your email" v-model="email" type="text" />


           <InputBox label="Password" placeholder="***************" v-model="password" type="password"/>


           <InputBox label="Confirm Password" placeholder="***************" v-model="confirmPassword" type="password"/>


        <Button class="mt-4" @click="submit">Register</Button>

        <p class="mt-4">
          <a
            class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
            href="./login.html"
          >
            Already have an account? Login
          </a>
        </p>

      </div>
      </div>
 
 
    
</template>

<script setup></script>