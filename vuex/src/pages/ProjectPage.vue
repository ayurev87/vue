<template>
    <div>
        <section class="banner">
            <div class="banner__wrapper">
                <div class="banner__content">
                    <div class="banner__title">Our Project</div>
                <div class="banner__subtitle">Home / Project</div>
                </div>
            </div>
        </section>
        <section class="project">
            <div class="container">
                <div class="project__link-box">
                    <div class="project__btn" v-for="button in buttonItems" :key="button.id" @click="getTagBtn(button.buttonTag)">
                    {{ button.buttonName }}
                    </div>
                    <!-- <div class="project__btn">Bathroom</div>
                    <div class="project__btn">Bed Room</div>
                    <div class="project__btn">Kitchan</div>
                    <div class="project__btn">Living Area</div> -->
                </div>
                <div class="project__gallereya" v-if="!currentArticle.length">
                    <div :class="item.class" v-for="item in currentProductList2" :key="item.id">
                        <div class="project__img-box">
                            <img :src="require(`@/assets/${item.src}`)" alt="">
                        </div>
                        <div class="project__descr-box">
                            <div class="project__descr-box_text">
                                <div class="project__descr-box_title">{{ item.name }}</div>
                                <div class="project__descr-box_subtitle">{{ item.subtitle }}</div>
                            </div>
                            <div class="gallery__icon">
                                <router-link class="header__link" to="/project-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="project__gallereya" v-else>
                    <div :class="item.class" v-for="item in currentArticle" :key="item.id">
                        <div class="project__img-box">
                            <img :src="require(`@/assets/${item.src}`)" alt="">
                        </div>
                        <div class="project__descr-box">
                            <div class="project__descr-box_text">
                                <div class="project__descr-box_title">{{ item.name }}</div>
                                <div class="project__descr-box_subtitle">{{ item.subtitle }}</div>
                            </div>
                            <div class="gallery__icon">
                                <router-link class="header__link" to="/project-det"><img src="../assets/ar_icon.svg" alt=""></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="project__pagination-box">
                    <router-link class="paginations"
                        v-for="page in 3" 
                        :to="`/project/${page}`" 
                        :key="page" 
                        >
                        {{ page  }}
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'ProjectPage',
    watch: {
        $route(to, from) {
            // const page = this.$route.params.page // ещё один вариант
            const { page }  = this.$route.params
            // if(page) this.currentPage = page // необязательная проверка
            this.currentPage = +page
            console.log(to, from);
        }
    },

    data() {
        return {
            buttonItems: [
                {id: 1, buttonName: 'Bathroom', buttonTag: 'Bathroom'},
                {id: 2, buttonName: 'Bed Room', buttonTag: 'Bed Room'},
                {id: 3, buttonName: 'Kitchan', buttonTag: 'Bathroom'},
                {id: 4, buttonName: 'Living Area', buttonTag: 'Bed Room'}
            ],
            currentPage: 1,
            itemsPerPage: 4,
            currentArticle: [],
        };
    },
    computed: {
        currentProductList2() {
            const {currentPage , itemsPerPage} = this
            const startIndex = (currentPage - 1) * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            return this.getProjectItems.slice(startIndex, endIndex)
        },
        ...mapGetters(['getProjectItems'])
    },
    mounted() {
        
    },

    methods: {
        getTagBtn(item){ 
            console.log(item);
            console.log(item.buttonTag);
            this.currentArticle = this.getProjectItems.filter(elem => elem.buttonTag === item)
            
        },
    },
};
</script>

<style lang="sass" scoped>
.project
    &__link-box
        display: flex
        justify-content: space-between
        align-items: center
        
        width: 880px
        height: 75px
        margin: 0 auto
        border: 1px solid #CDA274
        border-radius: 20px
        margin-top: 160px
        margin-bottom: 100px
    &__btn
        cursor: pointer
        text-align: center
        width: 219px
        height: 75px
        border-radius: 20px
        padding-top: 26px
    &__btn:hover
        background-color: #CDA274
    &__descr-box
        margin-top: 10px
        display: flex
        justify-content: space-between
        &_title
            font-size: 20px
            font-weight: 500
    &__pagination-box
        margin-top: 40px
        display: flex
        justify-content: center
        gap: 10px
    &__gallereya
        display: grid
        grid-template-columns: repeat(2, 585px)
        gap: 20px
    &__item
    &__item1
        grid-column: 1 / 2
        grid-row: 1 / 3
        min-height: 700px
        .project__img-box
            img
                height: 850px
    &__item2
        min-height: 600px
        grid-column: 2 / 3
        .project__img-box
            img
                height: 519px
    &__item3
        grid-column: 1 / 2
        grid-row: 3 / 4
        min-height: 600px
        .project__img-box
            img
                height: 519px
    &__item4
        grid-row: 2 / 4
        min-height: 700px
        .project__img-box
            img
                height: 850px
    &__item5
        grid-column: 1 / 2
        grid-row: 1 / 3
        min-height: 700px
        .project__img-box
            img
                height: 850px
    &__item6
        min-height: 600px
        grid-column: 2 / 3
        .project__img-box
            img
                height: 519px
    &__item7
        grid-column: 1 / 2
        grid-row: 3 / 4
        min-height: 600px
        .project__img-box
            img
                height: 519px
    &__item8
        grid-row: 2 / 4
        min-height: 700px
        .project__img-box
            img
                height: 850px
    // &__item5
    //     grid-column: 1 / 2
    //     grid-row: 4 / 6
    //     min-height: 700px
    //     .project__img-box
    //         img
    //             height: 850px
    // &__item6
    //     min-height: 600px
    //     grid-column: 2 / 3
    //     .project__img-box
    //         img
    //             height: 519px
    // &__item7
    //     grid-column: 1 / 2
    //     grid-row: 6 / 7
    //     min-height: 600px
    //     .project__img-box
    //         img
    //             height: 519px
    // &__item8
    //     grid-row: 5 / 7
    //     min-height: 700px
    //     .project__img-box
    //         img
    //             height: 850px
.banner
    height: 356px
    background: url("../assets/baner_project.jpg") center (center / cover) no-repeat
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
button
    padding: 0
    border: none
    font: inherit
    color: inherit
    background-color: transparent
    cursor: pointer
.paginations
    border: 1px solid #CDA274
    padding: 14px
    width: 52px
    height: 52px
    border-radius: 50%
    text-align: center
    color: #222
</style>