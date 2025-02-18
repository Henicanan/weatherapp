<script setup lang="ts">
const cityExample = ref('')

const clickOnCity = (event: MouseEvent | TouchEvent) => {
  const target = event.target as HTMLElement;
  if (!target) return;
  cityExample.value = ''; 
  setTimeout(() => {
    cityExample.value = target.textContent ?? ''; 
  }, 0);
};
</script>

<template>
    <div class="search-wrapper">
        <SearchInput v-model:cityExample="cityExample"/>
    </div>
    <div class="example-wrapper">
        <div class="example">
            <img class="example__image" src="/icons/arrow-up.svg" alt="стрелка для примера">
            <span class="example__text">
                Начните вводить город,<br>
                например, <span @pointerdown="clickOnCity" class="example__city">Ижевск</span>
            </span>
        </div>
    </div>
     <div class="bookmark-wrapper">
        <div class="bookmark">
            <span class="bookmark__text">
                Используйте значок «закладки»,<br>
                чтобы закрепить город на главной
            </span>
            <img src="/icons/bookmark.svg" alt="иконка" class="bookmark__image">
        </div>
     </div>   
</template>


<style scoped lang="scss">
    .search-wrapper {
        margin-top: fluid(80, 20);
        position: relative;
    }
    .example-wrapper {
        margin-top: rem(26);
    }
    .example {
        width: rem(215);
        position: relative;
        display: flex;
        justify-content: end;
    
        &__image {
        position: absolute;
        width: rem(38);
        height: rem(32);
        top: 0;
        left: 0;
        }

        &__text {
            display: block;
            text-align: center;
            padding-top: rem(17);
            width: rem(170);
        }

        &__city {
            color: var(--color-light);
            border-bottom: 1px dashed var(--color-light);
            cursor: pointer;
            transition: 0.3s ease-in-out;
            display: inline-block;
            @include hover {
                transform: scale(1.05);
            }
        }
    }
    .bookmark-wrapper {
        margin-top: rem(88);
    }
    .bookmark {
        @include flex-center;
        flex-direction: column;
        gap: rem(20);
    }
    @include mobile {
        .search-wrapper{
            margin-top: rem(20);
        }
        .bookmark-wrapper {
            margin-top: rem(95);
        }
      }
</style>