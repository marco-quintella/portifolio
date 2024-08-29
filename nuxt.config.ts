// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'google-adsense-account',
          content: 'ca-pub-7015724364902511'
        }
      ]
    }
  }
})
