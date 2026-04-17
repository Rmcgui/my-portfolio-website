export type Tone = 'professional' | 'friendly' | 'playful' | 'luxury' | 'minimal'

export interface BusinessProfile {
  name: string
  location?: string
  industry?: string
  description: string
  customers: string
  tone: Tone
  brandKeywords: string[]
  websiteGoals: string[]
  existingUrl?: string
  competitors?: string[]
}

export interface SeoMeta {
  title: string
  metaDescription: string
  keywords: string[]
}

export interface SectionBase {
  id: string
  type: string
  internalName?: string
}

export interface HeroSection extends SectionBase {
  type: 'hero'
  title: string
  body: string
  primaryCtaLabel: string
  primaryCtaTarget?: string
}

export interface FeatureItem {
  title: string
  description: string
  iconName?: string
}

export interface FeaturesSection extends SectionBase {
  type: 'features'
  heading: string
  intro?: string
  items: FeatureItem[]
}

export type Section = HeroSection | FeaturesSection // add more later

export interface Page {
  id: string
  name: string
  slug: string
  purpose: string
  seo: SeoMeta
  sections: Section[]
}

export interface WebsitePlan {
  id: string
  createdAt: string
  updatedAt: string
  businessProfile: BusinessProfile
  pages: Page[]
  notes: string[]
  openQuestions: string[]
}
