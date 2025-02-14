<template>
 <header class="header">
    <div class="header__body">
        <div class="header__body-inner container">
            <a href="/" class="header__logo logo" aria-label="Home" title="Home">
                <img src="/public/icons/logo.svg" alt="" width="29" height="18" class="logo__image" loading="lazy">
                <span class="logo__title">WeatherCheck</span>
            </a>
        </div>
    </div>
 </header>
</template>

<style scoped lang="scss">
.header {
    &__body {
        background-color: var(--color-dark-minor);

        @include mobile {
            background-color: transparent;
        }

        &-inner {
            display: flex;
            align-items: center;
            height: rem(65);
        }
    }

    &__logo {
        display: flex;
        align-items: center;
        column-gap: rem(12);
    }
}

.logo {
    &__title {
        color: var(--color-light);
    }
}
</style>