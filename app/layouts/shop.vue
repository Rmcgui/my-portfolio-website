<!-- layouts/shop.vue -->
<template>
    <div class = "shop">
        <div>
            <!-- Ecommerce-specific header -->
            <ShopHeader />

            <!-- Page content goes here -->
            <main class="min-h-screen bg-gray-50">
            <slot />
            </main>

            <!-- Ecommerce cart sidebar -->
            <CartSidebar />
        </div>
  </div>
</template>

<script setup>
import ShopHeader from '~/components/shop/ShopHeader.vue'
import CartSidebar from '~/components/shop/CartSidebar.vue'
</script>
