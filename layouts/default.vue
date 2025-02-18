<script setup lang="ts">
</script>

<template >
 <header class="header">
    <HeaderApp />
 </header>
 <main class="container main">
    <NuxtPage />
 </main>
</template>

<style scoped lang="scss">
   .main {
       @include flex-center(false);
       flex-direction: column;
   }
</style>