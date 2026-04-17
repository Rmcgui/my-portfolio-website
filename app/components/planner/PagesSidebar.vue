<script setup lang="ts">
import type { Page } from '@/types/websitePlan'

const props = defineProps<{
  pages: Page[]
  selectedPageId: string | null
}>()

const emit = defineEmits<{
  (e: 'select', pageId: string): void
}>()
</script>

<template>
  <aside class="bg-white rounded-xl border border-slate-100 p-3 text-sm">
    <header class="mb-2 font-medium text-xs text-slate-500">Pages</header>
    <ul class="space-y-1">
      <li
        v-for="page in pages"
        :key="page.id"
        class="cursor-pointer px-2 py-1 rounded flex items-center justify-between"
        :class="page.id === selectedPageId ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-50'"
        @click="emit('select', page.id)"
      >
        <span>{{ page.name }}</span>
      </li>
    </ul>
  </aside>
</template>
