<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
          Admin Login
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to your admin account
        </p>
      </div>

      <!-- Login Form Card -->
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Input -->
          <div>
            <label class="block text-sm">
              <span class="text-gray-700 dark:text-gray-400">
                Email Address
              </span>
              <input
                type="email"
                placeholder="admin@example.com"
                v-model="formData.email"
                @blur="validateEmail"
                :class="[
                  'block w-full mt-1 text-sm border outline outline-2 rounded-md px-3 py-2',
                  emailError 
                    ? 'border-red-300 outline-red-400 dark:border-red-600 dark:outline-red-400' 
                    : 'border-gray-300 outline-purple-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:outline-purple-400'
                ]"
              />
            </label>
            <p v-if="emailError" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ emailError }}
            </p>
          </div>

          <!-- Password Input -->
          <div>
            <label class="block text-sm">
              <span class="text-gray-700 dark:text-gray-400">
                Password
              </span>
              <div class="relative">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Enter your password"
                  v-model="formData.password"
                  @blur="validatePassword"
                  :class="[
                    'block w-full mt-1 text-sm border outline outline-2 rounded-md px-3 py-2 pr-10',
                    passwordError 
                      ? 'border-red-300 outline-red-400 dark:border-red-600 dark:outline-red-400' 
                      : 'border-gray-300 outline-purple-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:outline-purple-400'
                  ]"
                />
                <button
                  type="button"
                  @click="togglePassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <ion-icon 
                    :name="showPassword ? 'eye-off-outline' : 'eye-outline'"
                    class="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  ></ion-icon>
                </button>
              </div>
            </label>
            <p v-if="passwordError" class="mt-1 text-sm text-red-600 dark:text-red-400">
              {{ passwordError }}
            </p>
          </div>

          <!-- Remember Me Checkbox -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                v-model="formData.rememberMe"
                class="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300">
                Forgot your password?
              </a>
            </div>
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              :disabled="isLoading || !isFormValid"
              :class="[
                'w-full px-10 py-4 font-medium leading-5 text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-purple',
                isLoading || !isFormValid
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 active:bg-purple-600'
              ]"
            >
              <span v-if="isLoading" class="flex items-center justify-center">
                <ion-icon name="reload-outline" class="animate-spin h-5 w-5 mr-2"></ion-icon>
                Signing in...
              </span>
              <span v-else>Sign in</span>
            </button>
          </div>

          <!-- Error Message -->
          <div v-if="loginError" class="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
            <div class="flex">
              <ion-icon name="alert-circle-outline" class="h-5 w-5 text-red-400"></ion-icon>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800 dark:text-red-200">
                  Login Failed
                </h3>
                <div class="mt-2 text-sm text-red-700 dark:text-red-300">
                  {{ loginError }}
                </div>
              </div>
            </div>
          </div>

          <!-- Success Message -->
          <div v-if="loginSuccess" class="rounded-md bg-green-50 dark:bg-green-900/20 p-4">
            <div class="flex">
              <ion-icon name="checkmark-circle-outline" class="h-5 w-5 text-green-400"></ion-icon>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-green-800 dark:text-green-200">
                  Login Successful
                </h3>
                <div class="mt-2 text-sm text-green-700 dark:text-green-300">
                  Welcome back! Redirecting to admin dashboard...
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Footer -->
      <div class="text-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Don't have an admin account? 
          <a href="#" class="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300">
            Contact administrator
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

// Form data
const formData = reactive({
  email: '',
  password: '',
  rememberMe: false
})

// UI state
const showPassword = ref(false)
const isLoading = ref(false)
const loginError = ref('')
const loginSuccess = ref(false)

// Validation errors
const emailError = ref('')
const passwordError = ref('')

// Computed properties
const isFormValid = computed(() => {
  return formData.email && 
         formData.password && 
         !emailError.value && 
         !passwordError.value
})

// Validation functions
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email) {
    emailError.value = 'Email is required'
  } else if (!emailRegex.test(formData.email)) {
    emailError.value = 'Please enter a valid email address'
  } else {
    emailError.value = ''
  }
}

const validatePassword = () => {
  if (!formData.password) {
    passwordError.value = 'Password is required'
  } else if (formData.password.length < 6) {
    passwordError.value = 'Password must be at least 6 characters'
  } else {
    passwordError.value = ''
  }
}

// UI functions
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Mock API function
const mockLoginAPI = async (credentials) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Mock validation - you can change these credentials
  const validCredentials = {
    email: 'admin@example.com',
    password: 'admin123'
  }
  
  if (credentials.email === validCredentials.email && 
      credentials.password === validCredentials.password) {
    return {
      success: true,
      data: {
        user: {
          id: 1,
          email: credentials.email,
          name: 'Admin User',
          role: 'admin'
        },
        token: 'mock-jwt-token-12345'
      }
    }
  } else {
    throw new Error('Invalid email or password')
  }
}

// Login handler
const handleLogin = async () => {
  // Clear previous errors
  loginError.value = ''
  loginSuccess.value = false
  
  // Validate form
  validateEmail()
  validatePassword()
  
  if (!isFormValid.value) {
    return
  }
  
  try {
    isLoading.value = true
    
    const response = await mockLoginAPI({
      email: formData.email,
      password: formData.password
    })
    
    // Handle successful login
    loginSuccess.value = true
    
    // Store user data (in a real app, you'd use Vuex/Pinia)
    localStorage.setItem('adminUser', JSON.stringify(response.data.user))
    localStorage.setItem('adminToken', response.data.token)
    
    if (formData.rememberMe) {
      localStorage.setItem('rememberMe', 'true')
    }
    
    // Simulate redirect to admin dashboard
    setTimeout(() => {
      console.log('Redirecting to admin dashboard...')
      // In a real app: router.push('/admin/dashboard')
    }, 2000)
    
  } catch (error) {
    loginError.value = error.message
  } finally {
    isLoading.value = false
  }
}

// Load saved credentials if "remember me" was checked
onMounted(() => {
  const remembered = localStorage.getItem('rememberMe')
  if (remembered === 'true') {
    const savedUser = localStorage.getItem('adminUser')
    if (savedUser) {
      const user = JSON.parse(savedUser)
      formData.email = user.email
      formData.rememberMe = true
    }
  }
})
</script>

