export default defineNuxtConfig({
 compatibilityDate: '2025-02-13',
 devtools: { enabled: true },
 modules: ['@pinia/nuxt', '@vueuse/nuxt'],
 runtimeConfig: {
  private: {
   openWeatherApiKey: process.env.NUXT_OPEN_WEATHER_API_KEY
  }
 },
 vite: {
  css: {
   preprocessorOptions: {
    scss: {
     additionalData: `@use "@/styles/global.scss" as *;`
    }
   }
  }
 }
})
