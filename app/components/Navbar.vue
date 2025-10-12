<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
          Ryan McGuire
        </NuxtLink>
        
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </div>

        <button @click="toggleMenu" class="md:hidden text-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-2">
        <NuxtLink to="/" class="block nav-link" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/about" class="block nav-link" @click="closeMenu">About</NuxtLink>
        <NuxtLink to="/projects" class="block nav-link" @click="closeMenu">Projects</NuxtLink>
        <NuxtLink to="/contact" class="block nav-link" @click="closeMenu">Contact</NuxtLink>
      </div>
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
.nav-link {
  @apply text-gray-600 hover:text-gray-900 transition-colors duration-200;
}

.nav-link.router-link-active {
  @apply text-blue-600 font-semibold;
}
</style>