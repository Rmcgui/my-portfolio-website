<template>
  <div class="container mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold mb-4">Get In Touch</h1>
    <p class="text-gray-600 mb-12">Have a project in mind? Let's work together!</p>

    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="bg-blue-100 p-3 rounded-lg mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold mb-1">Email</h3>
              <p class="text-gray-600">your.email@example.com</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-blue-100 p-3 rounded-lg mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold mb-1">Location</h3>
              <p class="text-gray-600">Dublin, Ireland</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-blue-100 p-3 rounded-lg mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold mb-1">Social</h3>
              <div class="flex space-x-4 mt-2">
                <a href="https://github.com/yourusername" class="text-blue-600 hover:text-blue-800">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" class="text-blue-600 hover:text-blue-800">LinkedIn</a>
                <a href="https://twitter.com/yourusername" class="text-blue-600 hover:text-blue-800">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-gray-700 font-bold mb-2">Name</label>
            <input v-model="form.name" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          </div>

          <div>
            <label class="block text-gray-700 font-bold mb-2">Email</label>
            <input v-model="form.email" type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          </div>

          <div>
            <label class="block text-gray-700 font-bold mb-2">Message</label>
            <textarea v-model="form.message" required rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
          </div>

          <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>

        <p v-if="submitted" class="mt-4 text-green-600 font-semibold">Thank you! I'll get back to you soon.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  submitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.value = { name: '', email: '', message: '' }
    submitted.value = false
  }, 3000)
}
</script>