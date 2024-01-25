<template>
    <div>
        <section class="error-page">
            <div class="container">
                <div class="error-page__wrapper">
                    <div class="error-page__content">
                    <div class="error-page__title">
                        404
                    </div>
                    <div class="error-page__subtitle">
                        We are sorry, but the page
                        you requested was not found
                    </div>
                    <div class="error-page__btn">Back To Home</div>
                </div>
                <div class="error-page__img">
                    <img src="../assets/error_img.jpg" alt="">
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',

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
.error-page
    &__wrapper
        display: flex
        align-items: center
        gap: 60px
    &__title
        color: #CDA274
        font-family: DM Serif Display
        font-size: 250px
    &__subtitle
        color: #292F36
        font-family: DM Serif Display
        font-size: 35px
        font-style: normal
        font-weight: 400
        margin-bottom: 40px
    &__img
        img
            width: 600px
            height: 700px
            border-bottom-left-radius: 30%
    &__btn
        width: 250px
        height: 75px
        border-radius: 18px
        background: #292F36
        padding: 26px 0px
        text-align: center
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35)
        color: #fff
</style>