<template>
  <footer class="bg-gray-800 text-white mt-auto">
    <div class="container mx-auto px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">YourName</h3>
          <p class="text-gray-400">Software Developer building amazing web experiences.</p>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/projects" class="text-gray-400 hover:text-white transition-colors">Projects</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Connect</h3>
          <div class="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" class="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ currentYear }} YourName. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>