<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')
const validationError = ref('')

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

const handleSignup = async () => {
    console.log('handleSignup called')  // ← add this
    validationError.value = ''
    error.value = ''

    if (!isValidEmail(email.value)) {
        validationError.value = 'Please enter a valid email address.'
        return
    }

    if (password.value.length < 8) {
        validationError.value = 'Password must be at least 8 characters.'
        return
    }

    const { data, error: signupError } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    })

    if (signupError) {
        if (signupError.message.toLowerCase().includes('already')) {
        error.value = 'This email is already in use.'
        } else {
        error.value = signupError.message
        }
        return
    }

    if (!data.session) {
        error.value = 'Account created. Please check your email to confirm before logging in.'
        return
    }

    // Wait until the Supabase user ref is actually populated before redirecting.
    // The session is in data, but useSupabaseUser() updates via its own listener
    // and can lag behind, causing the auth middleware to bounce us.
    await new Promise<void>((resolve) => {
        const stop = watch(user, (val) => {
        if (val) {
            stop()
            resolve()
        }
        }, { immediate: true })
    })

    await router.push('/dashboard')
}
</script>

<template>
  <div class="max-w-md mx-auto py-12">
    <h1 class="text-3xl font-bold mb-6">Sign Up</h1>
    <form @submit.prevent="handleSignup" class="space-y-4">
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
          autocomplete="new-password"
          class="w-full border rounded px-3 py-2"
        />
      </div>
      <p v-if="validationError" class="text-red-600 text-sm">{{ validationError }}</p>
      <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
        <button
            type="button"
            @click="handleSignup"
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
            Sign Up
        </button>
    </form>
  </div>
</template>