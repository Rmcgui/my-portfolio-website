<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Page Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4">Our Products</h1>
      <p class="text-gray-600 text-lg">
        Explore our wide selection of quality products
      </p>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Category Filter -->
        <div class="flex-1">
          <label class="block text-sm font-semibold mb-2">Category</label>
          <select
            v-model="productsStore.selectedCategory"
            class="input-field"
          >
            <option
              v-for="category in productsStore.categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>

        <!-- Search -->
        <div class="flex-1">
          <label class="block text-sm font-semibold mb-2">Search</label>
          <input
            v-model="productsStore.searchQuery"
            type="text"
            placeholder="Search products..."
            class="input-field"
          />
        </div>

        <!-- Clear Filters -->
        <div class="flex items-end">
          <button
            @click="productsStore.clearFilters()"
            class="btn-secondary whitespace-nowrap"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>

    <!-- Results Count -->
    <div class="mb-6">
      <p class="text-gray-600">
        Showing {{ productsStore.filteredProducts.length }} products
      </p>
    </div>

    <!-- Products Grid -->
    <div v-if="productsStore.filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in productsStore.filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- No Results -->
    <div v-else class="text-center py-16">
      <svg
        class="w-24 h-24 text-gray-300 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 class="text-2xl font-semibold text-gray-700 mb-2">No products found</h3>
      <p class="text-gray-500 mb-6">Try adjusting your filters or search query</p>
      <button
        @click="productsStore.clearFilters()"
        class="btn-primary"
      >
        Clear All Filters
      </button>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '~/components/shop/ProductCard.vue'
import { useProductsStore } from '~/stores/products'

definePageMeta({
  layout: 'shop'
})

const productsStore = useProductsStore()
</script>
