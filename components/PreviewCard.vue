<script setup lang="ts">

const props = defineProps({
  city: {
    type: String,
    required: true,
  },
  dataWeather: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <NuxtLink  class="city-card">
    <span class="city-card__name">{{city}}</span>
    <span class="city-card__temperature">{{ Math.floor(dataWeather?.temp) }}°</span>
    <img class="city-card__image" :src="`/images/${dataWeather?.weather}.png`" alt="weather-icon" loading="lazy">
  </NuxtLink>
</template>



<style lang="scss" scoped>
.city-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var( --color-cards);
  border-radius: 6px;
  height: 190px;


  &__name{
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    margin-top: 23px;
  }

  &__temperature{
    font-weight: 500;
    font-size: 40px;
    color: #ffffff;
    margin-top: 12px;
    line-height: 1;
  }

  &__image{
    height: 104px;
    width: 120px;
    margin-top: -2px;
  }
}
</style>