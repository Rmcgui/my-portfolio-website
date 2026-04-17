<script setup lang="ts">
import type { Page, Section, HeroSection } from '@/types/websitePlan'

const props = defineProps<{
  page: Page
}>()

const isHero = (section: Section): section is HeroSection => section.type === 'hero'
</script>

<template>
  <aside class="bg-white rounded-xl border border-slate-100 p-3 text-xs">
    <header class="mb-2">
      <p class="font-medium text-sm">Live preview (wireframe)</p>
      <p class="text-slate-500">Rough layout of how this page could feel.</p>
    </header>

    <div class="border rounded-lg p-3 space-y-3">
      <div
        v-for="section in page.sections"
        :key="section.id"
        class="border rounded p-2 bg-slate-50/80"
      >
        <div v-if="isHero(section)">
          <p class="font-semibold mb-1">{{ section.title }}</p>
          <p class="mb-2">{{ section.body }}</p>
          <button class="px-3 py-1 rounded bg-blue-600 text-white text-[11px]">
            {{ section.primaryCtaLabel }}
          </button>
        </div>
        <!-- Add small wireframes for other section types -->
      </div>
    </div>
  </aside>
</template>
