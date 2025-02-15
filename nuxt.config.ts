export default defineNuxtConfig({
  compatibilityDate: "2025-02-13",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  runtimeConfig: {
    private: {
     openWeatherApiKey: process.env.NUXT_OPEN_WEATHER_API_KEY
    }
  },
  css: ['~/assets/styles/main.scss'],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "./public/icons/logo.svg" }],
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
