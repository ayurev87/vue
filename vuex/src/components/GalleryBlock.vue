<template>
    <div>
        <section class="gallery">
        <div class="container">
            <h2 class="title">Follow Our Projects</h2>
        <p class="subtitle">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        <div class="gallery__wrapper">
            <div class="gallery__item">
                <img src="../assets/gal1.png" alt="" class="gallery__img">
                <div class="gallery__info">
                    <div class="gallery__text">
                        <div class="gallery__title">Modern Kitchan</div>
                        <div class="gallery__subtitle">Decor / Artchitecture</div>
                    </div>
                    <div class="gallery__icon">
                        <router-link class="header__link" to="/project-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                    </div>
                </div>
            </div>

            <div class="gallery__item">
                <img src="../assets/gal2.png" alt="" class="gallery__img">
                <div class="gallery__info">
                    <div class="gallery__text">
                        <div class="gallery__title">Modern Kitchan</div>
                        <div class="gallery__subtitle">Decor / Artchitecture</div>
                    </div>
                    <div class="gallery__icon">
                        <router-link class="header__link" to="/project-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                    </div>
                </div>
            </div>

            <div class="gallery__item">
                <img src="../assets/gal3.png" alt="" class="gallery__img">
                <div class="gallery__info">
                    <div class="gallery__text">
                        <div class="gallery__title">Modern Kitchan</div>
                        <div class="gallery__subtitle">Decor / Artchitecture</div>
                    </div>
                    <div class="gallery__icon">
                        <router-link class="header__link" to="/project-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                    </div>
                </div>
            </div>

            <div class="gallery__item">
                <img src="../assets/gal4.png" alt="" class="gallery__img">
                <div class="gallery__info">
                    <div class="gallery__text">
                        <div class="gallery__title">Modern Kitchan</div>
                        <div class="gallery__subtitle">Decor / Artchitecture</div>
                    </div>
                    <div class="gallery__icon">
                        <router-link class="header__link" to="/project-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'GalleryBlock',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.gallery
    padding-top: 90px
    &__wrapper
        margin-top: 80px
        display: flex
        flex-wrap: wrap
        justify-content: space-between
    &__item
        width: 547px
        margin-bottom: 56px
    &__img
        margin-bottom: 20px
    &__info
        display: flex
        justify-content: space-between
        align-items: center
    &__title
        font-size: 25px
        font-style: normal
        font-weight: 400
    &__icon
        width: 52px
        height: 52px
        margin-right: 14px
</style>