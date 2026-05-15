<script setup>
useHead({
  title: 'Blog — Ryan McGuire',
  meta: [
    { name: 'description', content: 'Development writing from Ryan McGuire: testing, Nuxt, Supabase, and building things that work.' },
    { property: 'og:title', content: 'Blog — Ryan McGuire' },
    { property: 'og:url', content: 'https://webdesignbyryan.com/blog' },
  ],
  link: [{ rel: 'canonical', href: 'https://webdesignbyryan.com/blog' }],
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// Tag-keyed cover themes (inline styles to avoid Tailwind JIT purging dynamic classes)
const THEMES = {
  playwright: {
    gradient: 'linear-gradient(135deg, #022c22 0%, #0d4b44 55%, #0f172a 100%)',
    orb1: 'rgba(16,185,129,0.22)', orb2: 'rgba(20,184,166,0.15)',
  },
  testing: {
    gradient: 'linear-gradient(135deg, #022c22 0%, #0d4b44 55%, #0f172a 100%)',
    orb1: 'rgba(16,185,129,0.22)', orb2: 'rgba(20,184,166,0.15)',
  },
  graphql: {
    gradient: 'linear-gradient(135deg, #1a0536 0%, #4c1d95 55%, #0f172a 100%)',
    orb1: 'rgba(232,121,249,0.22)', orb2: 'rgba(168,85,247,0.15)',
  },
  nuxt: {
    gradient: 'linear-gradient(135deg, #003a1e 0%, #065f46 55%, #0f172a 100%)',
    orb1: 'rgba(52,211,153,0.22)', orb2: 'rgba(0,220,130,0.15)',
  },
  supabase: {
    gradient: 'linear-gradient(135deg, #013326 0%, #065843 55%, #0f172a 100%)',
    orb1: 'rgba(62,207,142,0.22)', orb2: 'rgba(0,196,112,0.15)',
  },
  default: {
    gradient: 'linear-gradient(135deg, #0c1445 0%, #1e1b4b 55%, #0f172a 100%)',
    orb1: 'rgba(59,130,246,0.22)', orb2: 'rgba(99,102,241,0.15)',
  },
}

function theme(tags) {
  for (const tag of (tags ?? [])) {
    if (THEMES[tag]) return THEMES[tag]
  }
  return THEMES.default
}
</script>

<template>
  <div class="bg-slate-50 min-h-screen">

    <!-- ── Hero ───────────────────────────────────────────────── -->
    <section class="relative overflow-hidden py-28 px-6" style="background: #080c18;">
      <!-- AI neural-network SVG background -->
      <svg
        class="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1400 480"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="hero-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <radialGradient id="hero-fade" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.07" />
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
          </radialGradient>
          <!-- animated pulse gradient -->
          <radialGradient id="hero-pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#818cf8" stop-opacity="0.12" />
            <stop offset="100%" stop-color="transparent" stop-opacity="0" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#hero-fade)" />
        <rect width="100%" height="100%" fill="url(#hero-pulse)" />

        <!-- Layer 1: far background nodes (dimmer, larger spread) -->
        <g stroke="#6366f1" stroke-width="0.5" opacity="0.12">
          <line x1="0"    y1="240" x2="200"  y2="100" />
          <line x1="200"  y1="100" x2="460"  y2="220" />
          <line x1="460"  y1="220" x2="700"  y2="80"  />
          <line x1="700"  y1="80"  x2="940"  y2="200" />
          <line x1="940"  y1="200" x2="1200" y2="60"  />
          <line x1="1200" y1="60"  x2="1400" y2="160" />
          <line x1="100"  y1="380" x2="340"  y2="300" />
          <line x1="340"  y1="300" x2="580"  y2="400" />
          <line x1="580"  y1="400" x2="820"  y2="320" />
          <line x1="820"  y1="320" x2="1060" y2="420" />
          <line x1="1060" y1="420" x2="1300" y2="340" />
          <line x1="200"  y1="100" x2="100"  y2="380" />
          <line x1="460"  y1="220" x2="340"  y2="300" />
          <line x1="700"  y1="80"  x2="580"  y2="400" />
          <line x1="940"  y1="200" x2="820"  y2="320" />
          <line x1="1200" y1="60"  x2="1060" y2="420" />
        </g>
        <!-- Layer 2: main network (blue/indigo) -->
        <g stroke="#60a5fa" stroke-width="0.7" opacity="0.2">
          <line x1="80"   y1="120" x2="280"  y2="200" />
          <line x1="280"  y1="200" x2="500"  y2="100" />
          <line x1="500"  y1="100" x2="720"  y2="240" />
          <line x1="720"  y1="240" x2="940"  y2="120" />
          <line x1="940"  y1="120" x2="1160" y2="240" />
          <line x1="1160" y1="240" x2="1360" y2="140" />
          <line x1="160"  y1="360" x2="380"  y2="430" />
          <line x1="380"  y1="430" x2="600"  y2="360" />
          <line x1="600"  y1="360" x2="820"  y2="450" />
          <line x1="820"  y1="450" x2="1040" y2="370" />
          <line x1="1040" y1="370" x2="1280" y2="460" />
          <line x1="280"  y1="200" x2="160"  y2="360" />
          <line x1="500"  y1="100" x2="380"  y2="430" />
          <line x1="720"  y1="240" x2="600"  y2="360" />
          <line x1="940"  y1="120" x2="820"  y2="450" />
          <line x1="1160" y1="240" x2="1040" y2="370" />
          <line x1="80"   y1="120" x2="160"  y2="360" />
          <line x1="500"  y1="100" x2="600"  y2="360" />
        </g>

        <!-- Glow halos -->
        <g fill="#818cf8" opacity="0.15" filter="url(#hero-glow)">
          <circle cx="80"   cy="120" r="12" />
          <circle cx="280"  cy="200" r="16" />
          <circle cx="500"  cy="100" r="12" />
          <circle cx="720"  cy="240" r="20" />
          <circle cx="940"  cy="120" r="14" />
          <circle cx="1160" cy="240" r="16" />
          <circle cx="1360" cy="140" r="12" />
          <circle cx="160"  cy="360" r="12" />
          <circle cx="380"  cy="430" r="14" />
          <circle cx="600"  cy="360" r="16" />
          <circle cx="820"  cy="450" r="12" />
          <circle cx="1040" cy="370" r="14" />
          <circle cx="1280" cy="460" r="12" />
        </g>

        <!-- Bright inner nodes -->
        <g fill="#a5b4fc" opacity="0.7">
          <circle cx="80"   cy="120" r="2.5" />
          <circle cx="280"  cy="200" r="3.5" />
          <circle cx="500"  cy="100" r="2.5" />
          <circle cx="720"  cy="240" r="4.5" />
          <circle cx="940"  cy="120" r="3" />
          <circle cx="1160" cy="240" r="3.5" />
          <circle cx="1360" cy="140" r="2.5" />
          <circle cx="160"  cy="360" r="2.5" />
          <circle cx="380"  cy="430" r="3" />
          <circle cx="600"  cy="360" r="3.5" />
          <circle cx="820"  cy="450" r="2.5" />
          <circle cx="1040" cy="370" r="3" />
          <circle cx="1280" cy="460" r="2.5" />
        </g>

        <!-- Accent highlight nodes (purple/pink) -->
        <g fill="#f0abfc" opacity="0.6">
          <circle cx="720"  cy="240" r="2" />
          <circle cx="280"  cy="200" r="1.5" />
          <circle cx="1040" cy="370" r="1.5" />
        </g>
      </svg>

      <!-- Glow orbs (complement the SVG) -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-3xl pointer-events-none opacity-50"
           style="background: radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
           style="background: radial-gradient(ellipse, rgba(168,85,247,0.15) 0%, transparent 70%)"></div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <div class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-slate-400 mb-8 border border-white/10"
             style="background: rgba(255,255,255,0.05); backdrop-filter: blur(8px);">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Technical Writing
        </div>
        <h1 class="text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-5">
          Blog
        </h1>
        <p class="text-lg text-slate-400 max-w-md mx-auto leading-relaxed">
          Notes on testing, development, and building software that actually works.
        </p>
        <p class="mt-6 text-xs text-slate-600">
          {{ posts?.length ?? 0 }} {{ posts?.length === 1 ? 'post' : 'posts' }}
        </p>
      </div>
    </section>

    <!-- ── Posts ─────────────────────────────────────────────── -->
    <section class="max-w-5xl mx-auto px-6 py-16">
      <div v-if="!posts?.length" class="text-center text-slate-400 py-24">
        No posts yet — check back soon.
      </div>

      <!-- Featured layout when only 1 post -->
      <div v-else-if="posts.length === 1" class="max-w-3xl mx-auto">
        <NuxtLink
          :to="posts[0].path"
          class="group block bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <!-- Cover -->
          <div class="relative h-64 overflow-hidden" :style="{ background: theme(posts[0].tags).gradient }">
            <div class="absolute -top-16 -right-16 w-80 h-80 rounded-full blur-3xl pointer-events-none" :style="{ background: theme(posts[0].tags).orb1 }"></div>
            <div class="absolute -bottom-8 -left-8 w-56 h-56 rounded-full blur-2xl pointer-events-none" :style="{ background: theme(posts[0].tags).orb2 }"></div>
            <!-- Neural network SVG -->
            <svg class="absolute inset-0 w-full h-full text-white pointer-events-none" viewBox="0 0 800 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <filter id="fc-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>
              </defs>
              <g stroke="currentColor" stroke-width="0.6" opacity="0.2">
                <line x1="60"  y1="70"  x2="200" y2="130"/>
                <line x1="200" y1="130" x2="360" y2="60" />
                <line x1="360" y1="60"  x2="520" y2="150"/>
                <line x1="520" y1="150" x2="680" y2="70" />
                <line x1="680" y1="70"  x2="800" y2="120"/>
                <line x1="100" y1="200" x2="260" y2="190"/>
                <line x1="260" y1="190" x2="440" y2="220"/>
                <line x1="440" y1="220" x2="620" y2="195"/>
                <line x1="620" y1="195" x2="780" y2="230"/>
                <line x1="200" y1="130" x2="100" y2="200"/>
                <line x1="360" y1="60"  x2="260" y2="190"/>
                <line x1="520" y1="150" x2="440" y2="220"/>
                <line x1="680" y1="70"  x2="620" y2="195"/>
              </g>
              <g fill="currentColor" opacity="0.15" filter="url(#fc-glow)">
                <circle cx="60"  cy="70"  r="10"/>
                <circle cx="200" cy="130" r="14"/>
                <circle cx="360" cy="60"  r="10"/>
                <circle cx="520" cy="150" r="16"/>
                <circle cx="680" cy="70"  r="12"/>
                <circle cx="100" cy="200" r="10"/>
                <circle cx="260" cy="190" r="12"/>
                <circle cx="440" cy="220" r="14"/>
                <circle cx="620" cy="195" r="10"/>
                <circle cx="780" cy="230" r="10"/>
              </g>
              <g fill="currentColor" opacity="0.7">
                <circle cx="60"  cy="70"  r="2.5"/>
                <circle cx="200" cy="130" r="3.5"/>
                <circle cx="360" cy="60"  r="2.5"/>
                <circle cx="520" cy="150" r="4"/>
                <circle cx="680" cy="70"  r="3"/>
                <circle cx="100" cy="200" r="2.5"/>
                <circle cx="260" cy="190" r="3"/>
                <circle cx="440" cy="220" r="3.5"/>
                <circle cx="620" cy="195" r="2.5"/>
                <circle cx="780" cy="230" r="2.5"/>
              </g>
            </svg>
            <div v-if="posts[0].readTime" class="absolute top-4 right-5 text-xs text-white/70 px-3 py-1 rounded-full border border-white/15"
                 style="background: rgba(0,0,0,0.35); backdrop-filter: blur(8px);">
              {{ posts[0].readTime }}
            </div>
            <div class="absolute bottom-5 left-6 flex flex-wrap gap-2">
              <span v-for="tag in posts[0].tags ?? []" :key="tag"
                    class="text-xs text-white/70 px-2.5 py-1 rounded-full border border-white/15"
                    style="background: rgba(0,0,0,0.35); backdrop-filter: blur(8px);">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Body -->
          <div class="p-10">
            <h2 class="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
              {{ posts[0].title }}
            </h2>
            <p class="text-slate-500 text-sm leading-relaxed mb-8">
              {{ posts[0].description }}
            </p>
            <div class="flex items-center justify-between pt-6 border-t border-slate-100">
              <time class="text-xs text-slate-400" :datetime="posts[0].date">
                {{ new Date(posts[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) }}
              </time>
              <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all duration-200">
                Read post
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Grid layout for multiple posts -->
      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="post.path"
          class="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div class="relative h-48 overflow-hidden shrink-0" :style="{ background: theme(post.tags).gradient }">
            <div class="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-3xl pointer-events-none" :style="{ background: theme(post.tags).orb1 }"></div>
            <div class="absolute -bottom-6 -left-6 w-48 h-48 rounded-full blur-2xl pointer-events-none" :style="{ background: theme(post.tags).orb2 }"></div>
            <div class="absolute inset-0 pointer-events-none opacity-[0.08]"
              style="background-image: linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 24px 24px;"></div>
            <div v-if="post.readTime" class="absolute top-3 right-4 text-xs text-white/70 px-2.5 py-1 rounded-full border border-white/15"
                 style="background: rgba(0,0,0,0.35); backdrop-filter: blur(8px);">
              {{ post.readTime }}
            </div>
            <div class="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
              <span v-for="tag in post.tags ?? []" :key="tag"
                    class="text-[11px] text-white/70 px-2 py-0.5 rounded-full border border-white/15"
                    style="background: rgba(0,0,0,0.35); backdrop-filter: blur(8px);">
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="p-7 flex flex-col flex-1">
            <h2 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug line-clamp-2">
              {{ post.title }}
            </h2>
            <p class="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
              {{ post.description }}
            </p>
            <div class="flex items-center justify-between pt-4 border-t border-slate-100">
              <time class="text-xs text-slate-400" :datetime="post.date">
                {{ new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }}
              </time>
              <span class="text-sm text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                Read
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
