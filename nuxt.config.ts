export default defineNuxtConfig({
  compatibilityDate: "2025-02-13",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/global.scss" as *;`,
        },
      },
    },
  },
});
