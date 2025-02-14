<script setup>
import DefaultLayout from './src/layouts/DefaultLayout.vue'
</script>

<template>

    <DefaultLayout>
        <div class="container">
            <h1>Добро пожаловать на домашнюю страницу</h1>
            <a href="/city">Перейти на страницу города</a>
        </div>
    </DefaultLayout>
</template>


<style scoped lang="scss">
h1 {color: yellow}
</style>