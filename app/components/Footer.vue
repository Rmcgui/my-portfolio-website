<template>
  <footer class="bg-gray-900 text-white mt-auto">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About Section -->
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold mb-4 text-blue-400">Ryan McGuire</h3>
          <p class="text-gray-400 mb-4 leading-relaxed">
            Full-stack software developer specializing in modern web applications. 
            Building reliable, scalable solutions for businesses in Mayo and beyond.
          </p>
          <div class="flex items-center space-x-2 text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-sm">Co. Mayo, Ireland</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-blue-400">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                → Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                → About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                → Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                → Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Connect Section -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-blue-400">Connect</h3>
          <div class="space-y-3">
            <a 
              href="mailto:mcguireryanp@gmail.com" 
              class="flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-sm">Email</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ryan-mcguire-82a8b3113" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span class="text-sm">LinkedIn</span>
            </a>

            <a 
              href="tel:+353838934120" 
              class="flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-sm">Phone</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm">
            &copy; {{ currentYear }} Ryan McGuire. All rights reserved.
          </p>
          <div class="flex items-center space-x-4 text-sm text-gray-400">
            <span>Built with Vue.js & Nuxt</span>
            <span class="hidden md:inline">•</span>
            <span class="flex items-center">
              Made with  
              <svg class="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              in Ireland
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>