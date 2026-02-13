<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../store'
import { login } from '../api'

const router = useRouter()
const { setToken } = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  try {
    const response = await login({
      email: email.value,
      password: password.value
    })

    setToken(response.token)
    router.push('/')
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow w-96 space-y-4">
      <h1 class="text-xl font-bold">Login</h1>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full border p-2 rounded"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full border p-2 rounded"
      />

      <button
        @click="handleLogin"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-2 rounded"
      >
        {{ loading ? 'Loading...' : 'Login' }}
      </button>

      <p v-if="error" class="text-red-500 text-sm">
        {{ error }}
      </p>
    </div>
  </div>
</template>
