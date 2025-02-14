export default defineNuxtConfig({
  compatibilityDate: "2025-02-13",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
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
