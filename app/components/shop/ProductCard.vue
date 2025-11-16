<template>
  <div class="card hover:shadow-xl transition-shadow duration-300">
    <NuxtLink :to="`/shop/products/${product.id}`">
      <div class="relative aspect-square overflow-hidden bg-gray-100">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span
          v-if="product.discount"
          class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
        >
          -{{ product.discount }}%
        </span>
      </div>
    </NuxtLink>

    <div class="p-4">
      <NuxtLink :to="`/shop/products/€{product.id}`">
        <h3 class="font-semibold text-lg mb-2 hover:text-primary-600 transition-colors line-clamp-2">
          {{ product.name }}
        </h3>
      </NuxtLink>
      
      <p class="text-sm text-gray-600 mb-3 line-clamp-2">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mb-3">
        <div class="flex items-baseline space-x-2">
          <span class="text-2xl font-bold text-gray-900">
            €{{ product.price.toFixed(2) }}
          </span>
          <span
            v-if="product.originalPrice"
            class="text-sm text-gray-500 line-through"
          >
            €{{ product.originalPrice.toFixed(2) }}
          </span>
        </div>
      </div>

      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-1">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-4 h-4"
            :class="star <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <span class="text-sm text-gray-600">
          {{ product.stock > 0 ? `${product.stock} in stock` : 'Out of stock' }}
        </span>
      </div>

      <button
        @click="addToCart"
        :disabled="product.stock === 0"
        class="w-full btn-primary disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {{ product.stock > 0 ? 'Add to Cart' : 'Out of Stock' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const addToCart = () => {
  if (props.product.stock > 0) {
    cartStore.addItem(props.product)
  }
}
</script>
