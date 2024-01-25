<template>
    <div>
        <section class="articles">
        <div class="container">
            <h2 class="title">Articles & News</h2>
            <p class="subtitle">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div class="articles__wrapper">

            <div class="articles__item" v-for="article in getArticleItems" :key="article.id" :style="article">
                <div class="articles__img">
                    <!-- <img :src="article.url" alt=""> -->
                    <!-- <img src="../assets/artcl1.png" alt=""> -->
                    <img :src="require(`@/assets/${article.src}`)" alt="">
                    <div class="articles__small-block">{{ article.category }}</div>
                </div>
                <div class="articles__description">{{ article.titleText }}</div>
                <div class="articles__box">
                    <div class="articles__date"> Data: {{ getCurrentData }} </div>
                    <div class="gallery__icon">
                        <!-- <img src="../assets/ar_icon.svg" alt=""> -->
                        <router-link class="header__link" to="/blog-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'ArticlesBlock',

    data() {
        return {
            // articleItems: [
            //         {id:1, url: '../assets/artcl1.png', category: 'Kitchan Design', titleText: 'Lets Get Solution For Building Construction Work', backgroundColor: 'white'},
            //         {id:2, url: '../assets/artcl2.png', category: 'Living Design', titleText: 'Cost Latest Invented Interior Designing Ideas.', backgroundColor: '#F4F0EC'},
            //         {id:3, url: '../assets/artcl3.png' , category: 'Interior Design', titleText: 'Best For Any Office & Business Interior Solution', backgroundColor: 'white'},
            //     ],
                someData: '26 December, 2022 ',
        };
    },
    // ../assets/artcl2.png
    computed: {
        ...mapGetters(['getArticleItems', 'getCurrentData'])
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.articles
    padding: 96px
    &__wrapper
        margin-top: 52px
        display: flex
        gap: 27px
        align-items: center
        justify-content: space-between
        flex-wrap: wrap
    &__item
        padding: 21px
        width: 382px
        border: 1px solid #E7E7E7
        border-radius: 62px
        &_2
            background-color: #F4F0EC
    &__img
        position: relative
        // height: 289px
        // background: url("../img/artcl1.png") center (center / cover) no-repeat
        margin-bottom: 21px
        img
            width: 340px
    &__small-block
        position: absolute
        top: 220px
        left: 20px
        height: 41px
        width: 124px
        padding: 7px
        border-radius: 8px 8px 8px 0px
        background-color: #fff
        text-align: center

    &__description
        font-size: 25px
        font-style: normal
        font-weight: 400
        margin-bottom: 30px
    &__box
        display: flex
        justify-content: space-between
        align-items: center
        font-size: 16px
        font-style: normal
        font-weight: 400
    &__date
        margin-left: 4px
    
</style>