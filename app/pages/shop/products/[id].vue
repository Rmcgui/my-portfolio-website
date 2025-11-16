<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="product" class="max-w-6xl mx-auto">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm">
        <ol class="flex items-center space-x-2">
          <li>
            <NuxtLink to="/" class="text-primary-600 hover:underline">Home</NuxtLink>
          </li>
          <li class="text-gray-400">/</li>
          <li>
            <NuxtLink to="/shop/products" class="text-primary-600 hover:underline">Products</NuxtLink>
          </li>
          <li class="text-gray-400">/</li>
          <li class="text-gray-600">{{ product.name }}</li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div class="space-y-4">
          <div class="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-3">
              {{ product.category }}
            </span>
            <h1 class="text-4xl font-bold mb-4">{{ product.name }}</h1>
            
            <!-- Rating -->
            <div class="flex items-center space-x-2 mb-4">
              <div class="flex items-center space-x-1">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="w-5 h-5"
                  :class="star <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <span class="text-gray-600">({{ product.rating }}/5)</span>
            </div>
          </div>

          <!-- Price -->
          <div class="border-t border-b py-6">
            <div class="flex items-baseline space-x-3">
              <span class="text-4xl font-bold text-gray-900">
                ${{ product.price.toFixed(2) }}
              </span>
              <span
                v-if="product.originalPrice"
                class="text-xl text-gray-500 line-through"
              >
                ${{ product.originalPrice.toFixed(2) }}
              </span>
              <span
                v-if="product.discount"
                class="inline-block px-3 py-1 bg-red-500 text-white text-sm font-bold rounded"
              >
                Save {{ product.discount }}%
              </span>
            </div>
          </div>

          <!-- Stock Status -->
          <div class="flex items-center space-x-2">
            <div
              class="w-3 h-3 rounded-full"
              :class="product.stock > 0 ? 'bg-green-500' : 'bg-red-500'"
            />
            <span class="font-semibold" :class="product.stock > 0 ? 'text-green-700' : 'text-red-700'">
              {{ product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock' }}
            </span>
          </div>

          <!-- Description -->
          <div>
            <h2 class="text-xl font-semibold mb-3">Description</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <!-- Quantity Selector -->
          <div>
            <label class="block text-sm font-semibold mb-2">Quantity</label>
            <div class="flex items-center space-x-4">
              <div class="flex items-center border border-gray-300 rounded-lg">
                <button
                  @click="decrementQuantity"
                  :disabled="quantity <= 1"
                  class="px-4 py-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span class="px-6 py-2 font-semibold">{{ quantity }}</span>
                <button
                  @click="incrementQuantity"
                  :disabled="quantity >= product.stock"
                  class="px-4 py-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <!-- Add to Cart Button -->
          <div class="space-y-3">
            <button
              @click="addToCart"
              :disabled="product.stock === 0"
              class="w-full btn-primary text-lg py-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {{ product.stock > 0 ? 'Add to Cart' : 'Out of Stock' }}
            </button>
            
            <button class="w-full btn-secondary text-lg py-4">
              Add to Wishlist
            </button>
          </div>

          <!-- Product Features -->
          <div class="border-t pt-6">
            <h3 class="font-semibold mb-3">Features:</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600">Free shipping on orders over €50</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600">30-day return policy</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600">1-year warranty included</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold mb-8">You May Also Like</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
          />
        </div>
      </div>
    </div>

    <!-- Product Not Found -->
    <div v-else class="text-center py-16">
      <h2 class="text-3xl font-bold text-gray-700 mb-4">Product Not Found</h2>
      <p class="text-gray-500 mb-8">The product you're looking for doesn't exist.</p>
      <NuxtLink to="/shop/products" class="btn-primary">
        Browse All Products
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'

definePageMeta({
  layout: 'shop'
})

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()

const quantity = ref(1)

const product = computed(() => {
  return productsStore.productById(route.params.id)
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return productsStore.products
    .filter(p => p.category === product.value.category && p.id !== product.value.id)
    .slice(0, 4)
})

const incrementQuantity = () => {
  if (quantity.value < product.value.stock) {
    quantity.value++
  }
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  if (product.value && product.value.stock > 0) {
    for (let i = 0; i < quantity.value; i++) {
      cartStore.addItem(product.value)
    }
    quantity.value = 1
  }
}
</script>
