// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Ryan McGuire | Full-Stack Web Developer in Mayo, Ireland',
      meta: [
        { name: 'description', content: 'Professional web developer in Co. Mayo specializing in Vue.js, C#, and custom web applications. Building modern websites for businesses across Ireland.' },
        { name: 'keywords', content: 'web developer Mayo, software engineer Ireland, Vue.js developer, website design Mayo, custom web applications, Ballina web developer' },
       
        // Open Graph (Facebook, LinkedIn)
        { property: 'og:title', content: 'Ryan McGuire | Full-Stack Web Developer in Mayo' },
        { property: 'og:description', content: 'Professional web developer specializing in custom web applications and business websites in Ireland.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://webdesignbyryan.com' },
        { property: 'og:image', content: 'https://webdesignbyryan.com/og-image.jpg' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ryan McGuire | Full-Stack Web Developer' },
        { name: 'twitter:description', content: 'Building modern web applications for businesses in Ireland' },
        { name: 'twitter:image', content: 'https://webdesignbyryan.com/twitter-image.jpg' },
        
        // Additional SEO
        { name: 'author', content: 'Ryan McGuire' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        
        // Geo tags for local SEO
        { name: 'geo.region', content: 'IE-MO' },
        { name: 'geo.placename', content: 'County Mayo' },
        { name: 'geo.position', content: '53.9;-9.3' },
        { name: 'ICBM', content: '53.9, -9.3' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://webdesignbyryan.com' }
      ]
    }
  },
  
  // Site configuration for sitemap and SEO
  site: {
    url: 'https://webdesignbyryan.com',
    name: 'Web Design by Ryan',
  },
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap']
})