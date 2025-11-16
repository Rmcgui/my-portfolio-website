<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Simple Hero with Fixed Background -->
    <section class="relative h-screen flex items-center justify-center">
      <div 
        class="fixed-bg"
        :style="{ backgroundImage: `url('${heroImage}')` }"
      ></div>
      <div class="absolute inset-0 bg-black/40"></div>
      
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl font-bold mb-4">Your Title Here</h1>
        <p class="text-xl mb-6">Change the images and content to experiment!</p>
      </div>
    </section>

    <!-- Animated Tiles Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Scroll to See Animation</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in items"
            :key="index"
            :ref="el => itemRefs[index] = el"
            class="item-animate bg-white p-6 rounded-lg shadow-lg"
            :class="{ 'item-visible': visibleItems[index] }"
          >
            <h3 class="text-2xl font-bold mb-2">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Easy configuration - change these!
const heroImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072'

const items = [
  { title: 'Item 1', text: 'This appears first' },
  { title: 'Item 2', text: 'This appears second' },
  { title: 'Item 3', text: 'This appears third' },
]

// Animation setup
const visibleItems = ref({})
const itemRefs = ref([])
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = itemRefs.value.indexOf(entry.target)
        if (index !== -1 && entry.isIntersecting) {
          setTimeout(() => {
            visibleItems.value[index] = true
          }, index * 150) // Change delay here (150ms between each)
        }
      })
    },
    { threshold: 0.1 }
  )

  itemRefs.value.forEach(item => {
    if (item) observer.observe(item)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* Fixed background */
.fixed-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

/* Animation - modify these values to experiment! */
.item-animate {
  opacity: 0;
  transform: translateY(50px); /* Try: translateX(-50px) or scale(0.8) */
  transition: all 0.7s ease-out; /* Try: 0.3s or 1.2s */
}

.item-animate.item-visible {
  opacity: 1;
  transform: translateY(0); /* Try: translateX(0) or scale(1) */
}
</style>