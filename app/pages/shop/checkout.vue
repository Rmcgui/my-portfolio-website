<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Checkout</h1>

      <div v-if="cartStore.items.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Checkout Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Shipping Information -->
          <div class="card p-6">
            <h2 class="text-2xl font-semibold mb-6">Shipping Information</h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold mb-2">First Name *</label>
                  <input
                    v-model="formData.firstName"
                    type="text"
                    required
                    class="input-field"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label class="block text-sm font-semibold mb-2">Last Name *</label>
                  <input
                    v-model="formData.lastName"
                    type="text"
                    required
                    class="input-field"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2">Email *</label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="input-field"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2">Phone *</label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  required
                  class="input-field"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2">Address *</label>
                <input
                  v-model="formData.address"
                  type="text"
                  required
                  class="input-field"
                  placeholder="123 Main Street"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-semibold mb-2">City *</label>
                  <input
                    v-model="formData.city"
                    type="text"
                    required
                    class="input-field"
                    placeholder="Dublin"
                  />
                </div>
                
                <div>
                  <label class="block text-sm font-semibold mb-2">County *</label>
                  <input
                    v-model="formData.state"
                    type="text"
                    required
                    class="input-field"
                    placeholder="Co. Dublin"
                  />
                </div>
                
                <div>
                  <label class="block text-sm font-semibold mb-2">ZIP/Postal Code *</label>
                  <input
                    v-model="formData.zip"
                    type="text"
                    required
                    class="input-field"
                    placeholder="10001"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2">Country *</label>
                <select v-model="formData.country" required class="input-field">
                  <option value="">Select a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="IE">Ireland</option>
                </select>
              </div>
            </form>
          </div>

          <!-- Payment Information -->
          <div class="card p-6">
            <h2 class="text-2xl font-semibold mb-6">Payment Information</h2>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold mb-2">Card Number *</label>
                <input
                  v-model="formData.cardNumber"
                  type="text"
                  required
                  class="input-field"
                  placeholder="1234 5678 9012 3456"
                  maxlength="19"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold mb-2">Expiry Date *</label>
                  <input
                    v-model="formData.expiryDate"
                    type="text"
                    required
                    class="input-field"
                    placeholder="MM/YY"
                    maxlength="5"
                  />
                </div>
                
                <div>
                  <label class="block text-sm font-semibold mb-2">CVV *</label>
                  <input
                    v-model="formData.cvv"
                    type="text"
                    required
                    class="input-field"
                    placeholder="123"
                    maxlength="4"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2">Cardholder Name *</label>
                <input
                  v-model="formData.cardholderName"
                  type="text"
                  required
                  class="input-field"
                  placeholder="John Doe"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="card p-6 sticky top-4">
            <h2 class="text-2xl font-semibold mb-6">Order Summary</h2>
            
            <div class="space-y-4 mb-6">
              <div
                v-for="item in cartStore.items"
                :key="item.id"
                class="flex items-center space-x-4 pb-4 border-b"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-16 h-16 object-cover rounded"
                />
                <div class="flex-1">
                  <h3 class="font-semibold text-sm">{{ item.name }}</h3>
                  <p class="text-sm text-gray-600">Qty: {{ item.quantity }}</p>
                </div>
                <span class="font-semibold">
                  €{{ (item.price * item.quantity).toFixed(2) }}
                </span>
              </div>
            </div>

            <div class="space-y-3 mb-6 pb-6 border-b">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-semibold">€{{ cartStore.subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Shipping</span>
                <span class="font-semibold">
                  {{ cartStore.subtotal > 50 ? 'FREE' : '€9.99' }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Tax</span>
                <span class="font-semibold">€{{ tax.toFixed(2) }}</span>
              </div>
            </div>

            <div class="flex justify-between items-center mb-6">
              <span class="text-xl font-semibold">Total</span>
              <span class="text-2xl font-bold text-primary-600">
                €{{ total.toFixed(2) }}
              </span>
            </div>

            <button
              @click="handleSubmit"
              class="w-full btn-primary text-lg py-4"
            >
              Place Order
            </button>

            <p class="text-xs text-gray-500 text-center mt-4">
              By placing your order, you agree to our Terms & Conditions
            </p>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <h2 class="text-3xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
        <p class="text-gray-500 mb-8">Add some products to checkout</p>
        <NuxtLink to="/shop/products" class="btn-primary">
          Browse Products
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'shop'
})

const cartStore = useCartStore()
const router = useRouter()

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  cardholderName: ''
})

const shipping = computed(() => {
  return cartStore.subtotal > 50 ? 0 : 9.99
})

const tax = computed(() => {
  return (cartStore.subtotal + shipping.value) * 0.08
})

const total = computed(() => {
  return cartStore.subtotal + shipping.value + tax.value
})

const handleSubmit = () => {
  // In a real application, this would process the payment
  alert('Order placed successfully! (Demo mode)')
  cartStore.clearCart()
  router.push('/shop')
}
</script>
