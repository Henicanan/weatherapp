export default defineNuxtConfig({
  compatibilityDate: "2025-02-13",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@formkit/auto-animate/nuxt"],
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
    }
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
