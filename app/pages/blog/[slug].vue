<script setup>
const route = useRoute()
const slug = route.params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useHead({
  title: `${post.value.title} — Ryan McGuire`,
  meta: [
    { name: 'description', content: post.value.description },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:url', content: `https://webdesignbyryan.com/blog/${slug}` },
    { property: 'og:type', content: 'article' },
  ],
  link: [{ rel: 'canonical', href: `https://webdesignbyryan.com/blog/${slug}` }],
})

const THEMES = {
  playwright: {
    gradient: 'linear-gradient(135deg, #022c22 0%, #0d4b44 55%, #0f172a 100%)',
    orb1: 'rgba(16,185,129,0.25)', orb2: 'rgba(20,184,166,0.18)', bar: '#10b981',
  },
  testing: {
    gradient: 'linear-gradient(135deg, #022c22 0%, #0d4b44 55%, #0f172a 100%)',
    orb1: 'rgba(16,185,129,0.25)', orb2: 'rgba(20,184,166,0.18)', bar: '#10b981',
  },
  graphql: {
    gradient: 'linear-gradient(135deg, #1a0536 0%, #4c1d95 55%, #0f172a 100%)',
    orb1: 'rgba(232,121,249,0.25)', orb2: 'rgba(168,85,247,0.18)', bar: '#e879f9',
  },
  nuxt: {
    gradient: 'linear-gradient(135deg, #003a1e 0%, #065f46 55%, #0f172a 100%)',
    orb1: 'rgba(52,211,153,0.25)', orb2: 'rgba(0,220,130,0.18)', bar: '#34d399',
  },
  supabase: {
    gradient: 'linear-gradient(135deg, #013326 0%, #065843 55%, #0f172a 100%)',
    orb1: 'rgba(62,207,142,0.25)', orb2: 'rgba(0,196,112,0.18)', bar: '#3ecf8e',
  },
  default: {
    gradient: 'linear-gradient(135deg, #0c1445 0%, #1e1b4b 55%, #0f172a 100%)',
    orb1: 'rgba(59,130,246,0.25)', orb2: 'rgba(99,102,241,0.18)', bar: '#3b82f6',
  },
}

function theme(tags) {
  for (const tag of (tags ?? [])) {
    if (THEMES[tag]) return THEMES[tag]
  }
  return THEMES.default
}

const postTheme = computed(() => theme(post.value?.tags ?? []))

// ── TOC ──────────────────────────────────────────────────────────
const articleRef = ref(null)
const headings = ref([])
const activeId = ref('')

let observer = null

// ── Reading progress ──────────────────────────────────────────
const scrollProgress = ref(0)

function onScroll() {
  const scrolled = window.scrollY
  const total = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = total > 0 ? Math.min(scrolled / total, 1) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  if (!articleRef.value) return

  const h2s = articleRef.value.querySelectorAll('h2')
  headings.value = Array.from(h2s).map(el => ({
    id: el.id,
    text: el.textContent.trim(),
  }))

  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
          break
        }
      }
    },
    { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
  )

  h2s.forEach(el => observer.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <!-- Reading progress bar (fixed, sits above the sticky navbar) -->
  <div class="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none">
    <div
      class="h-full transition-[width] duration-75 ease-linear"
      :style="{ width: `${scrollProgress * 100}%`, background: postTheme.bar }"
    ></div>
  </div>

  <div class="bg-slate-50 min-h-screen">

    <!-- ── Hero ─────────────────────────────────────────────── -->
    <section class="relative overflow-hidden px-6 py-20" :style="{ background: postTheme.gradient }">

      <!-- AI neural-network SVG background -->
      <svg
        class="absolute inset-0 w-full h-full text-white pointer-events-none"
        viewBox="0 0 1400 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <radialGradient id="ai-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="white" stop-opacity="0.15" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />
          </radialGradient>
        </defs>

        <!-- Soft fade so the network doesn't fight the title -->
        <rect width="100%" height="100%" fill="url(#ai-fade)" />

        <!-- Connection lines -->
        <g stroke="currentColor" stroke-width="0.6" opacity="0.18">
          <line x1="80"  y1="120" x2="280"  y2="200" />
          <line x1="280" y1="200" x2="500"  y2="140" />
          <line x1="500" y1="140" x2="720"  y2="240" />
          <line x1="720" y1="240" x2="940"  y2="160" />
          <line x1="940" y1="160" x2="1160" y2="260" />
          <line x1="1160" y1="260" x2="1340" y2="180" />

          <line x1="160" y1="380" x2="380"  y2="440" />
          <line x1="380" y1="440" x2="600"  y2="380" />
          <line x1="600" y1="380" x2="820"  y2="480" />
          <line x1="820" y1="480" x2="1040" y2="400" />
          <line x1="1040" y1="400" x2="1280" y2="500" />

          <line x1="280" y1="200" x2="160"  y2="380" />
          <line x1="500" y1="140" x2="380"  y2="440" />
          <line x1="720" y1="240" x2="600"  y2="380" />
          <line x1="940" y1="160" x2="820"  y2="480" />
          <line x1="1160" y1="260" x2="1040" y2="400" />

          <line x1="80"  y1="120" x2="160"  y2="380" />
          <line x1="500" y1="140" x2="600"  y2="380" />
          <line x1="940" y1="160" x2="1040" y2="400" />
          <line x1="380" y1="440" x2="280"  y2="200" />
          <line x1="820" y1="480" x2="720"  y2="240" />
        </g>

        <!-- Outer glow halos -->
        <g fill="currentColor" opacity="0.18" filter="url(#ai-glow)">
          <circle cx="80"   cy="120" r="10" />
          <circle cx="280"  cy="200" r="14" />
          <circle cx="500"  cy="140" r="10" />
          <circle cx="720"  cy="240" r="16" />
          <circle cx="940"  cy="160" r="12" />
          <circle cx="1160" cy="260" r="14" />
          <circle cx="1340" cy="180" r="10" />
          <circle cx="160"  cy="380" r="10" />
          <circle cx="380"  cy="440" r="12" />
          <circle cx="600"  cy="380" r="14" />
          <circle cx="820"  cy="480" r="10" />
          <circle cx="1040" cy="400" r="12" />
          <circle cx="1280" cy="500" r="10" />
        </g>

        <!-- Bright inner nodes -->
        <g fill="currentColor" opacity="0.65">
          <circle cx="80"   cy="120" r="2.5" />
          <circle cx="280"  cy="200" r="3.5" />
          <circle cx="500"  cy="140" r="2.5" />
          <circle cx="720"  cy="240" r="4" />
          <circle cx="940"  cy="160" r="3" />
          <circle cx="1160" cy="260" r="3.5" />
          <circle cx="1340" cy="180" r="2.5" />
          <circle cx="160"  cy="380" r="2.5" />
          <circle cx="380"  cy="440" r="3" />
          <circle cx="600"  cy="380" r="3.5" />
          <circle cx="820"  cy="480" r="2.5" />
          <circle cx="1040" cy="400" r="3" />
          <circle cx="1280" cy="500" r="2.5" />
        </g>
      </svg>

      <!-- Colour orbs -->
      <div class="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
           :style="{ background: postTheme.orb1 }"></div>
      <div class="absolute -bottom-16 -left-16 w-96 h-96 rounded-full blur-3xl pointer-events-none"
           :style="{ background: postTheme.orb2 }"></div>

      <!-- Hero content -->
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="lg:grid lg:grid-cols-[1fr,minmax(0,720px),1fr] lg:gap-8">
          <div class="hidden lg:block"></div>
          <div>
            <NuxtLink
              to="/blog"
              class="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm font-medium mb-10 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Blog
            </NuxtLink>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in post?.tags ?? []"
                :key="tag"
                class="text-xs font-medium text-white/70 px-2.5 py-1 rounded-full border border-white/15"
                style="background: rgba(0,0,0,0.3); backdrop-filter: blur(8px);"
              >
                {{ tag }}
              </span>
            </div>

            <h1 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-7">
              {{ post?.title }}
            </h1>

            <p class="text-white/60 text-base leading-relaxed mb-8">
              {{ post?.description }}
            </p>

            <div class="flex items-center gap-6 text-sm text-white/40 border-t border-white/10 pt-6">
              <time v-if="post?.date" :datetime="post.date">
                {{ new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) }}
              </time>
              <span v-if="post?.readTime" class="flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                {{ post.readTime }}
              </span>
            </div>
          </div>
          <div class="hidden lg:block"></div>
        </div>
      </div>
    </section>

    <!-- ── Body: TOC sidebar + page-centred article ─────────── -->
    <div class="px-6 py-14">
      <div class="max-w-7xl mx-auto lg:grid lg:gap-8" style="grid-template-columns: 1fr minmax(0, 720px) 1fr;">

        <!-- TOC sidebar (left column, right-aligned to sit next to article) -->
        <aside v-if="headings.length" class="hidden lg:block lg:justify-self-end w-full max-w-[240px]">
          <div class="sticky top-28 pr-4">
            <p class="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
              On this page
            </p>
            <nav class="space-y-0.5">
              <a
                v-for="h in headings"
                :key="h.id"
                :href="`#${h.id}`"
                class="block text-sm py-1.5 pl-3 border-l-2 transition-all duration-150 leading-snug"
                :class="activeId === h.id
                  ? 'border-blue-500 text-blue-600 font-semibold'
                  : 'border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-400'"
              >
                {{ h.text }}
              </a>
            </nav>
          </div>
        </aside>
        <div v-else class="hidden lg:block"></div>

        <!-- Article (centred middle column) -->
        <div>
          <article
            ref="articleRef"
            class="bg-white rounded-3xl shadow-sm border border-slate-100 px-8 py-12 md:px-14 md:py-14
              prose prose-slate prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
              prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-slate-800
              prose-p:leading-relaxed prose-p:text-slate-600
              prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-code:text-blue-700 prose-code:bg-blue-50/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-[0.85em] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#0d1117] prose-pre:text-slate-300 prose-pre:rounded-2xl prose-pre:shadow-xl prose-pre:border prose-pre:border-slate-800
              prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-emerald-400 prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:text-slate-600
              prose-ul:text-slate-600 prose-ol:text-slate-600 prose-li:my-1.5
              prose-hr:border-slate-200 prose-hr:my-10"
          >
            <ContentRenderer v-if="post" :value="post" />
          </article>

          <div class="mt-12 grid sm:grid-cols-2 gap-4">
            <NuxtLink
              to="/blog"
              class="flex items-center justify-center gap-2 bg-white rounded-2xl border border-slate-200 px-6 py-4 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All posts
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="flex items-center justify-center gap-2 bg-blue-600 rounded-2xl px-6 py-4 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              Get in touch
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right spacer to keep article centred -->
        <div class="hidden lg:block"></div>

      </div>
    </div>
  </div>
</template>

<style scoped>
article :deep(h2),
article :deep(h3) {
  scroll-margin-top: 100px;
}
</style>
