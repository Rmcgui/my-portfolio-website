<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Ryan McGuire
        </NuxtLink>
        
        <div class="hidden md:flex space-x-8 items-center">
          <NuxtLink 
            to="/" 
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink to="/process"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/process' }"
          >How It Works</NuxtLink>
          <NuxtLink 
            to="/projects" 
            class="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/projects' }"
          >
            Projects
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Contact
          </NuxtLink>
        </div>

        <button 
          @click="toggleMenu" 
          class="md:hidden text-gray-800 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide-fade">
        <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-2 pb-4">
          <NuxtLink 
            to="/" 
            class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all font-medium"
            :class="{ 'text-blue-600 bg-blue-50 font-semibold': $route.path === '/' }"
            @click="closeMenu"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all font-medium"
            :class="{ 'text-blue-600 bg-blue-50 font-semibold': $route.path === '/about' }"
            @click="closeMenu"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/projects" 
            class="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all font-medium"
            :class="{ 'text-blue-600 bg-blue-50 font-semibold': $route.path === '/projects' }"
            @click="closeMenu"
          >
            Projects
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="block bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center shadow-md"
            @click="closeMenu"
          >
            Contact
          </NuxtLink>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* Slide fade transition for mobile menu */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>