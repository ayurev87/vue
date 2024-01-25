<template>
    <div>
        <section class="banner">
        </section>
        <section class="blog-details">
            <div class="container">
                <div class="blog-details__wrapper" >

                    <div class="blog-details__articles" v-if="!currentArticle.length">
                        <div class="blog-details__article-item"  v-for="article in getArticleItems" :key="article.id" >
                        <div class="blog-details__img">
                            <img :src="require(`@/assets/${article.src}`)" alt="">
                        </div>
                        <div class="blog-details__info-box">
                            <div class="blog-details__title">
                                {{ article.titleText }}
                            </div>
                            <div class="blog-details__text">
                                {{ article.text }}
                            </div>
                            <div class="blog-details__data">
                                {{ getCurrentData }}
                            </div>
                        </div>
                    </div>

                    </div>

                    <div class="blog-details__articles" v-else>
                        <div class="blog-details__article-item"  v-for="article in currentArticle" :key="article.id" >
                        <div class="blog-details__img">
                            <img :src="require(`@/assets/${article.src}`)" alt="">
                        </div>
                        <div class="blog-details__info-box">
                            <div class="blog-details__title">
                                {{ article.titleText }}
                            </div>
                            <div class="blog-details__text">
                                {{ article.text }}
                            </div>
                            <div class="blog-details__data">
                                {{ getCurrentData }}
                            </div>
                        </div>
                    </div>

                    </div>
                    

                    <div class="blog-details__tags" >
                        <h2>Tags</h2>
                        <div class="blog-details__btn-box">
                            <div class="blog-details__btn" @click="getTag(article)" v-for="article in getArticleItems" :key="article.id" >
                                {{ article.tag }}
                            </div>
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
    name: 'BlogDetails',

    data() {
        return {
                curentIndex: 0,
                currentArticle: [],
        };
    },
    computed: {
        ...mapGetters(['getArticleItems', 'getCurrentData'])
    },
    mounted() {
        
    },

    methods: {
        getTag(item){ 
            this.currentArticle = this.getArticleItems.filter(elem => elem.tag === item.tag)
        },
    },
};
</script>

<style lang="sass" scoped>
.banner
    height: 356px
    background: url("../assets/baner_blog_details.jpg") center (center / cover) no-repeat
.blog-details
    &__article-item
        margin-bottom: 40px
        display: flex
        align-items: center
        gap: 20px
    h2
        font-family: DM Serif Display
    &__img
        img
            width: 360px
            border-bottom-left-radius: 14%
            border-bottom-right-radius: 14%
    &__wrapper
        display: flex
        margin-top: 120px
        gap: 40px
    &__info-box
        width: 400px
    &__title
        font-family: DM Serif Display
        font-size: 30px
        font-style: normal
        font-weight: 400
        margin-bottom: 20px
    &__btn-box
        margin-top: 14px
        width: 250px
        height: 100px
        display: flex
        flex-wrap: wrap
        gap: 10px
    &__text
        margin-bottom: 12px
    &__btn
        height: 41px
        border-radius: 10px
        background: #F4F0EC
        text-align: center
        padding: 9px 30px
        transition: .4s
        cursor: pointer
    &__btn:hover
        background: #292F36
        color: #fff
</style>