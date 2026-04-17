<script setup lang="ts">
import { reactive } from 'vue'
import type { BusinessProfile, Tone } from '@/types/websitePlan'

const props = defineProps<{
  isGenerating: boolean
}>()

const emit = defineEmits<{
  (e: 'submit', profile: BusinessProfile): void
}>()


const form = reactive<BusinessProfile>({
  name: 'Sky Barbers',
  location: 'Castlebar, Co. Mayo',  
  industry: 'Hair and Beauty',
  description: 'Sky Barbers is a family-run barber shop that has been operating for 20 years.The business serves the local community and has built long-term relationships with customers.Services are provided by experienced barbers with a focus on quality and consistency.The shop offers grooming services for men and boys of all ages.Emphasis is placed on customer service, reliability, and a welcoming atmosphere.',
  customers: 'Local residents. Men and boys of all ages. Families looking for a reliable, long-established barber. Customers who value consistency and personal service',
  tone: 'friendly',
  brandKeywords: [],
  websiteGoals: [],
  existingUrl: '',
  competitors: []
})

const toneOptions: Tone[] = ['professional', 'friendly', 'playful', 'luxury', 'minimal']

// 
const toggleGoal = (goal: string) => {
  if (form.websiteGoals.includes(goal)) {
    form.websiteGoals = form.websiteGoals.filter(g => g !== goal)
  } else {
    form.websiteGoals.push(goal)
  }
}

const handleSubmit = () => {
  emit('submit', { ...form })
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <div class="grid gap-4 md:grid-cols-2">
      <label class="text-sm">
        Business name
        <input v-model="form.name" class="mt-1 w-full border rounded px-2 py-1 text-sm" />
      </label>

      <label class="text-sm">
        Location (optional)
        <input v-model="form.location" class="mt-1 w-full border rounded px-2 py-1 text-sm" />
      </label>
    </div>

    <label class="text-sm block">
      Industry / niche
      <input v-model="form.industry" class="mt-1 w-full border rounded px-2 py-1 text-sm" />
    </label>

    <label class="text-sm block">
      Describe your business in 2–3 sentences
      <textarea
        v-model="form.description"
        rows="3"
        class="mt-1 w-full border rounded px-2 py-1 text-sm"
      />
    </label>

    <label class="text-sm block">
      Who are your typical customers?
      <textarea
        v-model="form.customers"
        rows="2"
        class="mt-1 w-full border rounded px-2 py-1 text-sm"
      />
    </label>

    <div>
      <p class="text-sm mb-1">Website goals</p>
      <div class="flex flex-wrap gap-2 text-xs">
        <button
          type="button"
          class="px-2 py-1 rounded border"
          :class="form.websiteGoals.includes('get_calls') && 'bg-blue-50 border-blue-500'"
          @click="toggleGoal('get_calls')"
        >
          Get more calls
        </button>
        <button
          type="button"
          class="px-2 py-1 rounded border"
          :class="form.websiteGoals.includes('online_orders') && 'bg-blue-50 border-blue-500'"
          @click="toggleGoal('online_orders')"
        >
          Get online orders
        </button>
        <button
          type="button"
          class="px-2 py-1 rounded border"
          :class="form.websiteGoals.includes('build_trust') && 'bg-blue-50 border-blue-500'"
          @click="toggleGoal('build_trust')"
        >
          Build credibility / trust
        </button>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <label class="text-sm">
        Tone & style
        <select v-model="form.tone" class="mt-1 w-full border rounded px-2 py-1 text-sm">
          <option v-for="tone in toneOptions" :key="tone" :value="tone">
            {{ tone }}
          </option>
        </select>
      </label>

      <label class="text-sm">
        Existing website (optional)
        <input v-model="form.existingUrl" class="mt-1 w-full border rounded px-2 py-1 text-sm" />
      </label>
    </div>

    <div class="flex justify-end gap-2 pt-4">
      <button type="submit" :disabled="props.isGenerating" class="px-4 py-2 text-sm rounded bg-blue-600 text-white">
        {{ props.isGenerating ? 'Generating…' : 'Generate Website Plan' }}
      </button>
    </div>
  </form>
</template>
