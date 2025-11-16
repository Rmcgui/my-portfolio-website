<template>
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/shop" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">E</span>
          </div>
          <span class="text-2xl font-bold text-gray-900">ShopHub</span>
        </NuxtLink>

        <!-- Search Bar -->
        <div class="hidden md:flex flex-1 max-w-2xl mx-8">
          <div class="relative w-full">
            <input
              v-model="searchQuery"
              @input="handleSearch"
              type="text"
              placeholder="Search products..."
              class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <svg
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex items-center space-x-6">
          <NuxtLink
            to="/shop/products"
            class="hidden md:block text-gray-700 hover:text-primary-600 font-medium transition-colors"
          >
            Products
          </NuxtLink>
          
          <!-- Cart Button -->
          <button
            @click="toggleCart"
            class="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              v-if="cartStore.itemCount > 0"
              class="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartStore.itemCount }}
            </span>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-700"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t pt-4">
        <div class="mb-4">
          <input
            v-model="searchQuery"
            @input="handleSearch"
            type="text"
            placeholder="Search products..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <NuxtLink
          to="/shop/products"
          class="block py-2 text-gray-700 hover:text-primary-600 font-medium"
          @click="mobileMenuOpen = false"
        >
          Products
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useProductsStore } from '~/stores/products'

const cartStore = useCartStore()
const productsStore = useProductsStore()
const searchQuery = ref('')
const mobileMenuOpen = ref(false)

const toggleCart = () => {
  cartStore.toggleSidebar()
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleSearch = () => {
  productsStore.setSearchQuery(searchQuery.value)
}
</script>
