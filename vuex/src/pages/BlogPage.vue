<template>
    <div>
        <section class="banner">
            <div class="banner__wrapper">
                <div class="banner__content">
                    <div class="banner__title">Articles & News</div>
                <div class="banner__subtitle">Home / Blog</div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="latest-post">
                <h2 class="latest-post__title">Latest Post</h2>
                <div class="latest-post__wrapper">
                    <img :src="require(`@/assets/${getLastElement.src}`)" alt="">
                    <div class="latest-post__descriptions">
                        <div class="latest-post__descriptions_title">
                            {{ getLastElement.titleText }} 
                        </div>
                        <p class="latest-post__descriptions_text">
                            {{ getLastElement.text }}
                        </p>
                        <div class="latest-post__descriptions_box">
                            <div class="latest-post__descriptions_date"> 
                                Data {{ getCurrentData }}
                            </div>
                            <div class="latest-post__descriptions_icon">
                                <router-link class="header__link" to="/blog-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
        <ArticlesBlock/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticlesBlock from '../components/ArticlesBlock.vue';
export default {
    name: 'BlogPage',
    data() {
        return {
            
        };
    },
    components: {
        ArticlesBlock,
    },
    computed: {
        ...mapGetters(['getLastElement', 'getCurrentData']),
        
    },
    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.banner
    height: 356px
    background: url("../assets/Image_laceholder.jpg") center (center / cover) no-repeat
    &__wrapper
        margin-top: 300px
        width: 503px
        padding-top: 180px
        margin: 0 auto
        text-align: center
        height: 300px
    &__content
        background-color: #fff
        width: 503px
        padding: 51px 78px
        border-radius: 30px 30px 0px 0px
    &__title
        font-size: 46px
        font-style: normal
        font-weight: 500
    &__subtitle
        font-size: 22px
        font-style: normal
        font-weight: 400
        margin-top: 10px
.latest-post
    margin-top: 140px
    &__title
        margin-bottom: 20px
        font-size: 50px
    &__wrapper
        display: flex
        align-items: center
        gap: 65px
        border: 1px solid #E7E7E7
        border-radius: 80px
        padding: 20px
        img
            height: 480px
            border-bottom-left-radius: 14%
            border-bottom-right-radius: 14%
    &__descriptions
        &_title
            font-size: 25px
            color: #292F36
            font-weight: 500
            line-height: 31px
            margin-bottom: 22px
        &_text
            line-height: 33px
            margin-bottom: 30px
            font-size: 20px
        &_box
            display: flex
            justify-content: space-between
    &__descriptions_icon
        img
            width: 52px
            height: 52px
    &__descriptions-title
        font-size: 24px
        margin-bottom: 20px
    
</style>