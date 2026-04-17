import { defineStore } from 'pinia'

const createEmptyBusinessProfile = () => ({
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

export const usePlannerStore = defineStore('planner', {
  state: () => ({
    businessProfile: createEmptyBusinessProfile(),
    plan: {
      id: null,
      createdAt: null,
      updatedAt: null,
      pages: [],
      notes: [],
      openQuestions: []
    },
    selectedPageId: null
  }),
  
  getters: {
    selectedPage(state) {
      return state.plan.pages.find(p => p.id === state.selectedPageId) || null
    }
  },
  actions: {
    setBusinessProfile(profile) {
      this.plan.businessProfile = { ...this.plan.businessProfile, ...profile }
      this.plan.updatedAt = new Date().toISOString()
    },
    setPages(pages) {
      this.plan.pages = pages
      if (!this.selectedPageId && pages.length) {
        this.selectedPageId = pages[0].id
      }
      this.plan.updatedAt = new Date().toISOString()
    },
    setSelectedPage(id) {
      this.selectedPageId = id
    },
    updateSection(pageId, sectionId, updates) {
      const page = this.plan.pages.find(p => p.id === pageId)
      if (!page) return
      const section = page.sections.find(s => s.id === sectionId)
      if (!section) return
      Object.assign(section, updates)
      this.plan.updatedAt = new Date().toISOString()
    }
  }
})
