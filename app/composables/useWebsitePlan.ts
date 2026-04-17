import { reactive, readonly, computed } from 'vue'
import type { WebsitePlan, BusinessProfile, Page, Section } from '@/types/websitePlan'

const createEmptyBusinessProfile = (): BusinessProfile => ({
  name: '',
  location: '',
  industry: '',
  description: '',
  customers: '',
  tone: 'friendly',
  brandKeywords: [],
  websiteGoals: [],
  existingUrl: '',
  competitors: []
})

const createInitialPlan = (): WebsitePlan => ({
  id: crypto.randomUUID(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  businessProfile: createEmptyBusinessProfile(),
  pages: [],
  notes: [],
  openQuestions: []
})

const state = reactive<{
  plan: WebsitePlan
  selectedPageId: string | null
}>({
  plan: createInitialPlan(),
  selectedPageId: null
})

export function useWebsitePlan() {
  const setBusinessProfile = (profile: Partial<BusinessProfile>) => {
    state.plan.businessProfile = { ...state.plan.businessProfile, ...profile }
    state.plan.updatedAt = new Date().toISOString()
  }

  const setPages = (pages: Page[]) => {
    state.plan.pages = pages
    if (!state.selectedPageId && pages.length > 0) {
      const firstPage = pages[0]
      if (firstPage) {
        state.selectedPageId = firstPage.id
      }
    }
    state.plan.updatedAt = new Date().toISOString()
  }

  const addPage = (page: Page) => {
    state.plan.pages.push(page)
    if (!state.selectedPageId) state.selectedPageId = page.id
    state.plan.updatedAt = new Date().toISOString()
  }

  const updatePage = (pageId: string, updates: Partial<Page>) => {
    const page = state.plan.pages.find(p => p.id === pageId)
    if (!page) return
    Object.assign(page, updates)
    state.plan.updatedAt = new Date().toISOString()
  }

  const setSelectedPage = (pageId: string) => {
    state.selectedPageId = pageId
  }

  const updateSection = (pageId: string, sectionId: string, updates: Partial<Section>) => {
    const page = state.plan.pages.find(p => p.id === pageId)
    if (!page) return
    const section = page.sections.find(s => s.id === sectionId)
    if (!section) return
    Object.assign(section, updates)
    state.plan.updatedAt = new Date().toISOString()
  }

  const addSectionToPage = (pageId: string, section: Section) => {
    const page = state.plan.pages.find(p => p.id === pageId)
    if (!page) return
    page.sections.push(section)
    state.plan.updatedAt = new Date().toISOString()
  }

  return {
    plan: readonly(state.plan),
    selectedPageId: computed(() => state.selectedPageId),
    setBusinessProfile,
    setPages,
    addPage,
    updatePage,
    setSelectedPage,
    updateSection,
    addSectionToPage
  }
}
