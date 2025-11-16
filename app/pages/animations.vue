<template>
  <div class="min-h-screen">
    <!-- Hero Section with Fixed Background -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Fixed Background Image -->
      <div 
        class="fixed-bg"
        :style="{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')`
        }"
      ></div>
      
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-black/50"></div>
      
      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4 fade-in">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-slide-down">
          Animation Playground
        </h1>
        <p class="text-xl md:text-2xl mb-8 animate-slide-up animation-delay-200">
          Scroll down to see tiles appear with smooth animations
        </p>
        <button 
          class="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slide-up animation-delay-400"
        >
          Explore Animations
        </button>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Regular Content Section -->
    <section class="bg-white py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4 text-gray-800">
          Scroll-Triggered Animations
        </h2>
        <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          As you scroll, watch how these tiles fade in and slide up into view. 
          Each one appears with a slight delay for a staggered effect.
        </p>

        <!-- Grid of Animated Tiles -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(tile, index) in tiles"
            :key="index"
            :ref="el => setTileRef(el, index)"
            class="tile-animate bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
            :class="{ 'tile-visible': visibleTiles[index] }"
          >
            <div class="text-white">
              <div class="text-4xl mb-4">{{ tile.icon }}</div>
              <h3 class="text-2xl font-bold mb-3">{{ tile.title }}</h3>
              <p class="text-blue-100">{{ tile.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section with Parallax Background -->
    <section class="relative h-96 flex items-center justify-center overflow-hidden">
      <div 
        class="parallax-bg"
        :style="{
          backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070')`
        }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70"></div>
      <div class="relative z-10 text-center text-white px-4">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Parallax Effect</h2>
        <p class="text-xl">This background scrolls at a different speed</p>
      </div>
    </section>

    <!-- More Animated Content -->
    <section class="bg-gray-50 py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">
          Different Animation Styles
        </h2>

        <!-- Staggered Cards -->
        <div class="space-y-8">
          <div
            v-for="(card, index) in cards"
            :key="index"
            :ref="el => setCardRef(el, index)"
            class="card-animate bg-white rounded-xl p-8 shadow-md border-l-4 transition-all duration-700"
            :class="[
              visibleCards[index] ? 'card-visible' : '',
              card.color
            ]"
          >
            <div class="flex items-start gap-6">
              <div class="text-5xl">{{ card.icon }}</div>
              <div>
                <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ card.title }}</h3>
                <p class="text-gray-600">{{ card.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Grid with Hover Effects -->
    <section class="bg-white py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">
          Interactive Image Grid
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="n in 8"
            :key="n"
            class="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
          >
            <img 
              :src="`https://images.unsplash.com/photo-${1500000000000 + n * 100000000}?q=80&w=400&h=400&fit=crop`"
              :alt="`Gallery image ${n}`"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span class="text-white font-semibold">Image {{ n }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action with Fixed Background -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        class="fixed-bg"
        :style="{
          backgroundImage: `url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071')`
        }"
      ></div>
      <div class="absolute inset-0 bg-black/60"></div>
      
      <div class="relative z-10 text-center text-white px-4 max-w-3xl">
        <h2 class="text-5xl font-bold mb-6 animate-fade-in">
          Ready to Build Something Amazing?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          These animations are just the beginning. Let's create something unique together.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button class="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Tile data
const tiles = [
  {
    icon: '🚀',
    title: 'Fast Performance',
    description: 'Optimized for speed and efficiency with modern web technologies.'
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Stunning visuals that capture attention and engage users.'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Perfect experience on any device, from mobile to desktop.'
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built with performance in mind for instant page loads.'
  },
  {
    icon: '🔒',
    title: 'Secure & Safe',
    description: 'Industry-standard security practices to protect your data.'
  },
  {
    icon: '🌟',
    title: 'Amazing UX',
    description: 'Intuitive interfaces that users love to interact with.'
  }
]

// Card data
const cards = [
  {
    icon: '💡',
    title: 'Slide from Left',
    description: 'This card slides in from the left side when it enters the viewport.',
    color: 'border-yellow-400'
  },
  {
    icon: '🎯',
    title: 'Slide from Right',
    description: 'This card slides in from the right side with a smooth transition.',
    color: 'border-blue-400'
  },
  {
    icon: '⭐',
    title: 'Fade and Scale',
    description: 'This card fades in while slightly scaling up for a subtle effect.',
    color: 'border-purple-400'
  },
  {
    icon: '🔥',
    title: 'Rotate and Slide',
    description: 'This card combines rotation with sliding for a dynamic entrance.',
    color: 'border-red-400'
  }
]

// Reactive state for visibility
const visibleTiles = ref({})
const visibleCards = ref({})

// Refs for tile elements
const tileRefs = ref([])
const cardRefs = ref([])

// Functions to set refs
const setTileRef = (el, index) => {
  if (el) tileRefs.value[index] = el
}

const setCardRef = (el, index) => {
  if (el) cardRefs.value[index] = el
}

// Intersection Observer for tiles
let tileObserver = null
let cardObserver = null

onMounted(() => {
  // Observer for tiles
  tileObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = tileRefs.value.indexOf(entry.target)
        if (index !== -1 && entry.isIntersecting) {
          // Add a delay based on index for staggered effect
          setTimeout(() => {
            visibleTiles.value[index] = true
          }, index * 100)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  // Observer for cards
  cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.value.indexOf(entry.target)
        if (index !== -1 && entry.isIntersecting) {
          setTimeout(() => {
            visibleCards.value[index] = true
          }, index * 150)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  // Observe all tiles
  tileRefs.value.forEach((tile) => {
    if (tile) tileObserver.observe(tile)
  })

  // Observe all cards
  cardRefs.value.forEach((card) => {
    if (card) cardObserver.observe(card)
  })
})

onUnmounted(() => {
  if (tileObserver) {
    tileObserver.disconnect()
  }
  if (cardObserver) {
    cardObserver.disconnect()
  }
})
</script>

<style scoped>
/* Fixed Background Effect */
.fixed-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Parallax Background Effect */
.parallax-bg {
  position: absolute;
  top: -50%;
  left: 0;
  width: 100%;
  height: 200%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateZ(-1px) scale(2);
}

/* Initial state for tiles (hidden) */
.tile-animate {
  opacity: 0;
  transform: translateY(50px);
}

/* Visible state for tiles */
.tile-animate.tile-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Initial state for cards (hidden) */
.card-animate {
  opacity: 0;
  transform: translateX(-50px);
}

/* Visible state for cards */
.card-animate.card-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Vary animation directions for cards */
.card-animate:nth-child(even) {
  transform: translateX(50px);
}

.card-animate.card-visible:nth-child(even) {
  transform: translateX(0);
}

/* Keyframe Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Animation Classes */
.animate-slide-down {
  animation: slideDown 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-out;
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-out;
}

/* Animation Delays */
.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>