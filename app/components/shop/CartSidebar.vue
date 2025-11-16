<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div
      v-if="cartStore.sidebarOpen"
      @click="cartStore.closeSidebar()"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
    />
  </Transition>

  <!-- Sidebar -->
  <Transition name="slide">
    <div
      v-if="cartStore.sidebarOpen"
      class="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-6 border-b">
        <h2 class="text-2xl font-bold">Shopping Cart</h2>
        <button
          @click="cartStore.closeSidebar()"
          class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Cart Items -->
      <div v-if="cartStore.items.length > 0" class="flex-1 overflow-y-auto p-6">
        <div
          v-for="item in cartStore.items"
          :key="item.id"
          class="flex space-x-4 mb-6 pb-6 border-b last:border-b-0"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-20 h-20 object-cover rounded-lg"
          />
          
          <div class="flex-1">
            <h3 class="font-semibold mb-1">{{ item.name }}</h3>
            <p class="text-sm text-gray-600 mb-2">€{{ item.price.toFixed(2) }}</p>
            
            <div class="flex items-center space-x-2">
              <button
                @click="cartStore.decrementItem(item.id)"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
              >
                -
              </button>
              <span class="w-8 text-center font-semibold">{{ item.quantity }}</span>
              <button
                @click="cartStore.incrementItem(item.id)"
                class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
              >
                +
              </button>
              <button
                @click="cartStore.removeItem(item.id)"
                class="ml-auto text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="flex-1 flex flex-col items-center justify-center p-6">
        <svg
          class="w-24 h-24 text-gray-300 mb-4"
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
        <p class="text-gray-500 text-lg mb-4">Your cart is empty</p>
        <button
          @click="goToProducts"
          class="btn-primary"
        >
          Continue Shopping
        </button>
      </div>

      <!-- Footer -->
      <div v-if="cartStore.items.length > 0" class="border-t p-6 bg-gray-50">
        <div class="flex items-center justify-between mb-4">
          <span class="text-lg font-semibold">Total:</span>
          <span class="text-2xl font-bold text-primary-600">
            €{{ cartStore.total.toFixed(2) }}
          </span>
        </div>
        
        <button
          @click="proceedToCheckout"
          class="w-full btn-primary text-lg py-3"
        >
          Proceed to Checkout
        </button>
        
        <button
          @click="cartStore.closeSidebar()"
          class="w-full btn-secondary mt-2"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const goToProducts = () => {
  cartStore.closeSidebar()
  router.push('/shop/products')
}

const proceedToCheckout = () => {
  cartStore.closeSidebar()
  router.push('/shop/checkout')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
