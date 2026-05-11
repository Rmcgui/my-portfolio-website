<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()
const route = useRoute()

const email = ref('')
const password = ref('')
const error = ref('')
const validationError = ref('')
const loading = ref(false)

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

watchEffect(() => {
  if (user.value && route.path === '/login') {
    router.push('/dashboard')
  }
})

const handleLogin = async () => {
  validationError.value = ''
  error.value = ''

  if (!isValidEmail(email.value)) {
    validationError.value = 'Please enter a valid email address.'
    return
  }

  if (!password.value) {
    validationError.value = 'Password is required.'
    return
  }

  loading.value = true
  const { error: loginError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  loading.value = false

  if (loginError) {
    error.value = 'Invalid email or password.'
    return
  }

  // Wait for the user ref to populate before redirecting
  await new Promise<void>((resolve) => {
    const stop = watch(user, (val) => {
      if (val) {
        stop()
        resolve()
      }
    }, { immediate: true })
  })

  const redirectTo = (route.query.redirect as string) || '/dashboard'
  await router.push(redirectTo)
}
</script>

<template>
  <div class="max-w-md mx-auto py-12">
    <h1 class="text-3xl font-bold mb-6">Log In</h1>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label for="email" class="block mb-1">Email</label>
        <input
          id="email"
          v-model="email"
          type="text"
          autocomplete="email"
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label for="password" class="block mb-1">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          autocomplete="current-password"
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <p v-if="validationError" class="text-red-600 text-sm">{{ validationError }}</p>
      <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
      <button
        type="button"
        @click="handleLogin"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {{ loading ? 'Logging in…' : 'Log In' }}
      </button>
    </form>
    <p class="mt-4 text-sm text-gray-600">
      Don't have an account?
      <NuxtLink to="/signup" class="text-blue-600 underline">Sign up</NuxtLink>
    </p>
  </div>
</template>