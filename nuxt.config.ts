export default defineNuxtConfig({
  compatibilityDate: "2025-02-13",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  runtimeConfig: {
    private: {
     openWeatherApiKey: process.env.NUXT_OPEN_WEATHER_API_KEY
    }
  },
  css: ['~/assets/styles/main.scss'],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/icons/logo.svg" }],
      title: 'WeatherCheck'
    },
    baseUrl: '/weatherapp'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/helpers" as *;`,
        },
      },
    },
  },
});
