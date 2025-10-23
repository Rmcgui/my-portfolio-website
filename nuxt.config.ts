// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        { property: 'og:url', content: 'https://webdesignbyryan.netlify.app' },
        
        // Additional
        { name: 'author', content: 'Ryan McGuire' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://webdesignbyryan.netlify.app' }
      ]
    }
  }, 
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap']
})
