<script setup>
import { ref, computed } from 'vue'
import { usePlannerStore } from '~/stores/planner'
import PlannerShell from '~/components/planner/PlannerShell.vue'
import IntakeForm from '~/components/planner/IntakeForm.vue'
import PagesSidebar from '~/components/planner/PagesSidebar.vue'
import SectionsEditor from '~/components/planner/SectionsEditor.vue'
import LivePreview from '~/components/planner/LivePreview.vue'

const step = ref(1)
const planner = usePlannerStore()

const isGenerating = ref(false)

const hasPlan = computed(() =>
  planner.plan &&
  Array.isArray(planner.plan.pages) &&
  planner.plan.pages.length > 0
)


const goNext = () => {
  if (step.value < 3) step.value++
}
const goPrev = () => {
  if (step.value > 1) step.value--
}


// TEMP: fake generator so UI visiblle before wiring AI
const generateSamplePlan = async () => {
  // later this will call backend /api/plan/generate
  const homePage = {
    id: crypto.randomUUID(),
    name: 'Home',
    slug: '/',
    purpose: 'Introduce the business and drive calls',
    seo: { title: 'Home', metaDescription: '', keywords: [] },
    sections: [
      {
        id: crypto.randomUUID(),
        type: 'hero',
        internalName: 'Hero - homepage',
        title: 'Fresh Fish & Chips in Your Town',
        body: 'Crispy, golden batter and hand-cut chips made to order.',
        primaryCtaLabel: 'Call Now',
        primaryCtaTarget: '#contact'
      }
    ]
  }

  planner.setPages([homePage])
  step.value = 2
}

const generatePlanFromAI = async (profile) => {

  try{
    isGenerating.value = true
    const { data, error } = await useFetch('/api/plan-generate', {
      method: 'POST',
      body: { businessProfile: profile }
    })

    console.log('API data:', data.value)

    if (error.value) {
      console.error(error.value)
      // show toast or message
      return
    }

    planner.setBusinessProfile(profile)
    planner.setPages(data.value.pages)
    step.value = 2

  } finally {
    isGenerating.value = false
  }
}

async function handleSubmitted(profile) {
  planner.setBusinessProfile(profile)
  await generatePlanFromAI(profile)
}

</script>

<template>
  <PlannerShell>
    <!-- Step indicator -->
    <div class="mb-6 text-xs text-slate-500 flex gap-4">
      <span :class="step === 1 && 'font-semibold text-slate-900'">1. Intake</span>
      <span :class="step === 2 && 'font-semibold text-slate-900'">2. Plan</span>
      <span :class="step === 3 && 'font-semibold text-slate-900'">3. Review</span>
    </div>

    <!-- Step 1: Intake -->
    <section v-if="step === 1" class="grid gap-6 lg:grid-cols-[2fr,1.2fr]">
      <div>
        <h1 class="text-2xl font-semibold mb-4">AI Website Planner</h1>
        <p class="text-sm text-slate-600 mb-4">
          Describe your business and goals.
        </p>
        <IntakeForm
          :is-generating="isGenerating"
          @submit="handleSubmitted"  
        />
      </div>
      <aside class="bg-white rounded-xl border p-4 text-sm">
        <h2 class="font-medium mb-2">What you’ll get</h2>
        <ul class="text-xs text-slate-600 space-y-1">
          <li>• Proposed pages & sections</li>
          <li>• Draft text for each section</li>
          <li>• SEO titles & meta descriptions</li>
          <li>• A downloadable website plan</li>
        </ul>
      </aside>
    </section>

    <!-- Step 2: Plan -->
    <section v-else-if="step === 2">
      <h1 class="text-2xl font-semibold mb-4">Edit Website Plan</h1>

      <div v-if="!hasPlan" class="border rounded-xl bg-white p-6 text-sm">
        <p>No plan yet. Go back and fill in your business details first.</p>
      </div>

      <div
        v-else
        class="grid gap-4 mt-2 lg:grid-cols-[220px,1.8fr,1.4fr]"
      >
        <PagesSidebar
          :pages="planner.plan.pages"
          :selected-page-id="planner.selectedPageId"
          @select="planner.setSelectedPage"
        />
        <SectionsEditor v-if="planner.selectedPage" :page="planner.selectedPage" />
        <LivePreview v-if="planner.selectedPage" :page="planner.selectedPage" />
      </div>
    </section>

    <!-- Step 3: Review -->
    <section v-else>
      <h1 class="text-2xl font-semibold mb-4">Review & Export</h1>

      <div class="bg-white rounded-xl border p-4 text-sm mb-4">
        <h2 class="font-medium mb-2">Business Summary</h2>
        <p class="font-semibold">{{ planner.plan.businessProfile.name }}</p>
        <p class="text-xs text-slate-600 mt-1">
          {{ planner.plan.businessProfile.description }}
        </p>
      </div>

      <div class="bg-white rounded-xl border p-4 text-sm">
        <h2 class="font-medium mb-2">Pages & Content</h2>
        <div
          v-for="page in planner.plan.pages"
          :key="page.id"
          class="border-b last:border-b-0 pb-3 mb-3"
        >
          <h3 class="font-semibold text-sm">{{ page.name }}</h3>
          <p class="text-xs text-slate-500 mb-2">{{ page.purpose }}</p>
          <ul class="text-xs text-slate-700">
            <li
              v-for="section in page.sections"
              :key="section.id"
            >
              <strong>{{ section.type }}</strong>
              <span v-if="section.type === 'hero'">
                – {{ (section).title }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Navigation buttons -->
    <div class="flex justify-between mt-6 text-sm">
      <button
        class="px-3 py-2 rounded border border-slate-300"
        :disabled="step === 1"
        @click="goPrev"
      >
        ← Back
      </button>
      <button
        v-if="step < 3"
        class="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
        :disabled="step === 1 && !hasPlan"
        @click="goNext"
      >
        Continue →
      </button>
    </div>
  </PlannerShell>
</template>
