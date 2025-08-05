<template>
       <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <router-link to="/"><h1 class="text-2xl font-bold text-blue-600">LogiTrack</h1></router-link>
        <ul class="flex gap-6 text-gray-600 font-medium">
          <!-- <li><router-link to="/features" class="hover:text-blue-600">Features</router-link></li>
          <li><router-link to="/about" class="hover:text-blue-600">About</router-link></li>
          <li><router-link to="/contact" class="hover:text-blue-600">Contact</router-link></li> -->
          <li><router-link to="/login" class="hover:text-blue-600">Login</router-link></li>
          <li><router-link to="/register" class="hover:text-blue-600">Register</router-link></li>
        </ul>
      </div>
    </nav>
</template>


<script setup></script>