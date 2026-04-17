<script setup lang="ts">
import type { Page, Section, HeroSection, FeaturesSection } from '@/types/websitePlan'
import { useWebsitePlan } from '@/composables/useWebsitePlan'
import SectionEditorHero from './SectionEditorHero.vue'

const props = defineProps<{
  page: Page
}>()

const { updateSection } = useWebsitePlan()

const handleSectionChange = (section: Section) => {
  updateSection(props.page.id, section.id, section)
}
</script>

<template>
  <section class="bg-white rounded-xl border border-slate-100 p-4 text-sm">
    <header class="flex justify-between items-center mb-4">
      <div>
        <h2 class="font-medium">{{ page.name }}</h2>
        <p class="text-xs text-slate-500">
          {{ page.purpose }}
        </p>
      </div>
    </header>

    <div class="space-y-4">
      <div v-for="section in page.sections" :key="section.id">
        <SectionEditorHero
          v-if="section.type === 'hero'"
          :model-value="section as HeroSection"
          @update:model-value="handleSectionChange"
        />
        <!-- Add other section editors similarly, e.g. Features -->
      </div>
    </div>
  </section>
</template>
