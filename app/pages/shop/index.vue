<template>
  <div class="bg-gray-50">
    <!-- HERO -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-sky-700 text-white"
    >
      <!-- soft background shapes -->
      <div class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div class="pointer-events-none absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-cyan-400/40 blur-3xl" />

      <div class="relative container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div class="grid gap-12 lg:grid-cols-2 items-center">
          <!-- Left: text + CTAs -->
          <div class="space-y-6 fade-in-up">
            <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.25em] uppercase">
              Demo Storefront
            </span>

            <div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Welcome to ShopHub
              </h1>
            </div>

            <p class="text-base md:text-lg text-sky-100 max-w-xl">
              Browse products, view details, add items to your cart and walk through
              a checkout flow – all powered by Vue, Nuxt, Tailwind and Pinia in a
              single integrated demo.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/shop/products"
                class="btn-primary bg-white text-sky-700 hover:bg-sky-50 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
              >
                Shop the demo
              </NuxtLink>

              <button
                class="btn-secondary bg-sky-700/70 hover:bg-sky-600 text-white border-0 backdrop-blur-sm flex items-center justify-center gap-2 transform hover:-translate-y-0.5 transition"
              >
                View features
                <span class="text-xl">↗</span>
              </button>
            </div>

            <div class="flex flex-wrap gap-6 pt-4 text-sm text-sky-100/90">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-300" />
                Real-time cart & sidebar
              </div>
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-amber-300" />
                Product detail & filters
              </div>
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-sky-300" />
                Demo checkout flow
              </div>
            </div>
          </div>

          <!-- Right: hero “mock product” image -->
          <div class="relative flex justify-center lg:justify-end">
            <div
              class="animate-float-slow relative max-w-md w-full rounded-3xl bg-white/10 backdrop-blur border border-white/20 shadow-2xl overflow-hidden"
            >
              <!-- image wrapper -->
              <div class="aspect-[4/3] bg-gradient-to-br from-sky-100 to-sky-300 flex items-center justify-center">
                <!-- 
                  Replace src with your own image, e.g. /images/shop-hero.jpg
                  Drop that file into /public/images/
                -->
                <img
                  src="/images/headphones.jpg"
                  alt="E-commerce demo preview"
                  class="h-full w-full object-cover"
                >
              </div>

              <!-- overlay product info -->
              <div class="p-5 space-y-3">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-xs uppercase tracking-[0.18em] text-sky-200 mb-1">
                      Featured product
                    </p>
                    <p class="font-semibold text-sm md:text-base">
                      Wireless Noise-Cancelling Headphones
                    </p>
                  </div>
                  <span class="inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-100">
                    In stock
                  </span>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-baseline gap-1">
                    <span class="text-lg font-bold">€129.99</span>
                    <span class="text-xs line-through text-sky-100/60">€149.99</span>
                  </div>
                  <span class="text-xs text-sky-100/80">Free demo shipping</span>
                </div>

                <button
                  type="button"
                  class="w-full mt-1 inline-flex items-center justify-center rounded-xl bg-sky-600 hover:bg-sky-500 text-sm font-medium py-2.5 transition"
                >
                  Add to cart (demo)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST / TECH STRIP -->
    <section class="border-b border-gray-100 bg-white">
      <div class="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm text-gray-500">
        <div class="flex items-center gap-2">
          <span class="h-6 w-6 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 text-xs font-bold">
            V
          </span>
          <span>Built with Vue &amp; Nuxt</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="h-6 w-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 text-xs font-bold">
            T
          </span>
          <span>Styled with Tailwind CSS</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="h-6 w-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
            P
          </span>
          <span>State managed via Pinia</span>
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Shop by category</h2>
            <p class="text-gray-500 text-sm md:text-base">
              Quickly jump into the areas you care about most.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
          <button
            v-for="category in categories"
            :key="category.name"
            class="group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:border-sky-300 hover:shadow-md transition-all text-left"
            @click="goToCategory(category.name)"
          >
            <div
              class="aspect-video bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center"
            >
              <span class="text-4xl md:text-5xl group-hover:scale-110 transition-transform">
                {{ category.icon }}
              </span>
            </div>
            <div class="p-3 md:p-4">
              <p class="font-semibold text-sm md:text-base text-gray-900">
                {{ category.name }}
              </p>
              <p class="text-xs text-gray-500 mt-1">
                Explore {{ category.name.toLowerCase() }} picks
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- FEATURED PRODUCTS -->
    <section class="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Featured products</h2>
            <p class="text-gray-500 text-sm md:text-base">
              A selection of items to showcase the product grid and cart flow.
            </p>
          </div>
          <NuxtLink
            to="/shop/products"
            class="text-sm font-medium text-sky-600 hover:text-sky-700"
          >
            View all products →
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>

    <!-- BOTTOM CTA -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div
          class="rounded-3xl bg-gradient-to-r from-sky-600 to-sky-700 px-6 py-10 md:px-10 md:py-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-2">
              Ready to explore the full flow?
            </h2>
            <p class="text-sm md:text-base text-sky-100 max-w-xl">
              Browse products, add a few to your cart, and go through the demo checkout
              to see how everything connects inside a single Nuxt application.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
              to="/shop/products"
              class="btn-primary bg-white text-sky-700 hover:bg-sky-50 shadow-md"
            >
              Start shopping
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="btn-secondary bg-transparent border border-sky-200 text-white hover:bg-sky-600/40"
            >
              Back to portfolio
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from '#app'
import { useProductsStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'
import ProductCard from '~/components/shop/ProductCard.vue'

definePageMeta({
  layout: 'shop',
})

const router = useRouter()
const productsStore = useProductsStore()

const categories = [
  { name: 'Electronics', icon: '💻' },
  { name: 'Fashion', icon: '👕' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Lifestyle', icon: '🏠' },
]

const goToCategory = (categoryName) => {
  if (productsStore.setCategory) {
    productsStore.setCategory(categoryName)
  }
  router.push('/shop/products')
}

const featuredProducts = computed(() => {
  if (Array.isArray(productsStore.featuredProducts) && productsStore.featuredProducts.length) {
    return productsStore.featuredProducts
  }
  const list = productsStore.products || []
  return list.slice(0, 4)
})

onMounted(() => {
  const cartStore = useCartStore()
  if (cartStore.loadFromLocalStorage) {
    cartStore.loadFromLocalStorage()
  }
})
</script>
