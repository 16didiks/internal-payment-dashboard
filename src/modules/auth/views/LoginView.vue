<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuthStore()

const handleLogin = async () => {
  try {
    await auth.login({
      email: email.value,
      password: password.value
    })

    router.push('/dashboard')
  } catch (error) {}
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
      <h1 class="mb-2 text-2xl font-bold text-center">
        Internal Payment Dashboard
      </h1>
      <p class="mb-6 text-sm text-center text-gray-500">Sign in to continue</p>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block mb-1 text-sm font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block mb-1 text-sm font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div v-if="auth.error" class="text-sm text-red-500">
          {{ auth.error }}
        </div>

        <button
          type="submit"
          :disabled="auth.loading"
          class="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          <span v-if="auth.loading">Signing in...</span>
          <span v-else>Login</span>
        </button>
      </form>
    </div>
  </div>
</template>
