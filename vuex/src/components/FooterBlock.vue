<template>
    <div>
        <section class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__item">
                    <div class="header__logo">
                        <img class="header__logo_img" src="../assets/Logo.svg" alt="">
                        <div class="header__logo_text">Interno</div>
                    </div>
                    <p class="footer__text">It is a long established fact that a reader <br> will be distracted lookings.</p>
                    <div class="footer__social">
                        <img src="../assets/twiter.svg" alt="">
                        <img src="../assets/lin.svg" alt="">
                    </div>
                </div>
                <div class="footer__item">
                    <h3 class="footer__title">Pages</h3>
                    <ul class="footer__list">
                        <li><a href="">Home</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div class="footer__item">
                    <h3 class="footer__title">Contact</h3>
                    <p class="footer__text">
                        55 East Birchwood Ave. Brooklyn, New York 11201 
                        <br> <br>contact@interno.com
                        <br> <br>(123) 456 - 7890
                    </p>
                    
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'FooterBlock',

    data() {
        return {
            
        };
    },
    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.footer
    &__wrapper
        height: 272px
        display: flex
        justify-content: space-between
        align-items: center
    &__social
        margin-top: 31px
        img
            margin-right: 10px
    &__list
        a
            color: #222
        li
            margin-bottom: 18px
    &__title
        font-size: 32px
        font-style: normal
        font-weight: 400
        margin-bottom: 20px
.header
    &__logo
        display: flex
        align-items: center
        gap: 10px
        margin-bottom: 18px
        &_text
            font-size: 40px
        &_img
            width: 34px
*
    list-style-type: none
    text-decoration: none
</style>