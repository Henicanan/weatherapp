<script setup lang="ts">
</script>

<template >
 <header class="header">
    <HeaderApp />
 </header>
 <main class="main">
    <NuxtPage />
 </main>
</template>

<style scoped lang="scss">
   main {
      height: calc(100vh - var(--header-height));
   }

   .header {
      background-color: var(--color-dark-minor);

      @include mobile {
         background-color: transparent;
      }
   }
</style>