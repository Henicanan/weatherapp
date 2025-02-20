<script setup lang="ts">
import { useFavorites } from '~/composables/useFavorites.client';

const route = useRoute();
const favorites = useFavorites();

const city = computed(() => route.query.city || ''); 

const isCityFavorite = computed(() => {
    return favorites.isFavorite(city.value as string);
})

const toggleFavorite = () => {
    isCityFavorite.value ? favorites.removeFavorite(city.value as string) : favorites.addFavorite(city.value as string);
}
</script>


<template>
    <div class="city">
        <div class="city__inner container">
            <div class="city__header">
                <NuxtLink to="/" class="city__back-link">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5348 0.514999L0.0498047 9L8.5348 17.485L9.9498 16.071L2.8778 9L9.9498 1.929L8.5348 0.514999Z" fill="#8A91AB" />
                    </svg>
                    <span>Назад</span>
                </NuxtLink>
                <ClientOnly>
                  <button class="city__favorite-btn" @click="toggleFavorite">
                      <svg v-if="!isCityFavorite" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 2.50004C0 1.83699 0.245833 1.20109 0.683417 0.732245C1.121 0.263396 1.71449 0 2.33333 0L11.6667 0C12.2855 0 12.879 0.263396 13.3166 0.732245C13.7542 1.20109 14 1.83699 14 2.50004V19.3753C13.9999 19.4884 13.9713 19.5993 13.917 19.6963C13.8628 19.7932 13.785 19.8726 13.692 19.926C13.599 19.9794 13.4942 20.0047 13.3888 19.9993C13.2834 19.9939 13.1813 19.958 13.0935 19.8953L7 16.3765L0.9065 19.8953C0.818656 19.958 0.716602 19.9939 0.611207 19.9993C0.505811 20.0047 0.401022 19.9794 0.307999 19.926C0.214977 19.8726 0.137205 19.7932 0.0829664 19.6963C0.028728 19.5993 5.45071e-05 19.4884 0 19.3753V2.50004ZM2.33333 1.25002C2.02391 1.25002 1.72717 1.38172 1.50838 1.61614C1.28958 1.85057 1.16667 2.16851 1.16667 2.50004V18.2078L6.67683 15.1052C6.77257 15.037 6.885 15.0006 7 15.0006C7.115 15.0006 7.22743 15.037 7.32317 15.1052L12.8333 18.2078V2.50004C12.8333 2.16851 12.7104 1.85057 12.4916 1.61614C12.2728 1.38172 11.9761 1.25002 11.6667 1.25002H2.33333Z" fill="#8A91AB" />
                      </svg>
                      <svg v-else  width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 2.50004C0 1.83699 0.245833 1.20109 0.683417 0.732245C1.121 0.263396 1.71449 0 2.33333 0L11.6667 0C12.2855 0 12.879 0.263396 13.3166 0.732245C13.7542 1.20109 14 1.83699 14 2.50004V19.3753C13.9999 19.4884 13.9713 19.5993 13.917 19.6963C13.8628 19.7932 13.785 19.8726 13.692 19.926C13.599 19.9794 13.4942 20.0047 13.3888 19.9993C13.2834 19.9939 13.1813 19.958 13.0935 19.8953L7 16.3765L0.9065 19.8953C0.818656 19.958 0.716602 19.9939 0.611207 19.9993C0.505811 20.0047 0.401022 19.9794 0.307999 19.926C0.214977 19.8726 0.137205 19.7932 0.0829664 19.6963C0.028728 19.5993 5.45071e-05 19.4884 0 19.3753V2.50004Z" fill="#8A91AB"/>
                      </svg>
                  </button>
                </ClientOnly>
            </div>
            <div class="city__body">
                <WeatherCard :city="city.toString()" />
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .city {
        background: var(--radial-gradient-bg);
        height: 100%;

        &__inner {
            display: flex;
            flex-direction: column;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: rem(27.5) rem(17);
        }

        &__back-link {
            display: flex;
            align-items: center;
            padding: rem(4) rem(7);
            column-gap: rem(19);
            color: var(--color-text);
        }

        &__favorite-btn {
            background-color: transparent;
            border: none;
            padding: rem(2) rem(5);

            @include flex-center;
        }

        &__body {
            margin-inline: auto;
        }
    }
</style>