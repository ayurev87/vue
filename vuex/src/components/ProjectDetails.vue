<template>
    <div>
        <section class="banner">
        </section>
        <section class="project-det">
            <div class="container">
                <div class="project-det__content">
                    <div class="project-det__title">Minimal Look Bedrooms </div>
                    <div class="project-det__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. 
                        Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                        <br>
                        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis 
                        quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, 
                        in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                    </div>

                    <div class="project-det__slider" v-for="item in currentProductList" :key="item.id">
                        <!-- <img src="../assets/proj_slider.jpg" alt=""> -->
                        <img :src="require(`@/assets/${item.src}`)" alt="">
                        <div class="project-det__number">{{ item.id }}</div>
                    </div>

                    <div class="project-det__pagination-box">
                        <router-link class="paginations"
                            v-for="somepage in 3" 
                            :to="`/project-det/${somepage}`" 
                            :key="somepage" 
                            >
                            {{ somepage  }}
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ProjectDetails',
    watch: {
        $route(to, from) {
            // const page = this.$route.params.page // ещё один вариант
            const { somepage }  = this.$route.params
            // if(page) this.currentPage = page // необязательная проверка
            this.currentPage = +somepage
            console.log(to, from);
        }
    },
    data() {
        return {
            imgList: [
                {id: 1, src: 'proj_slider.jpg'},
                {id: 2, src: 'proj_slider.jpg'},
                {id: 3, src: 'proj_slider.jpg'},
            ],
            currentPage: 1,
            itemsPerPage: 1,
        };
    },
    computed: {
        currentProductList() {
            const {currentPage , itemsPerPage} = this
            const startIndex = (currentPage - 1) * itemsPerPage
            const endIndex = startIndex + itemsPerPage
            return this.imgList.slice(startIndex, endIndex)
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.project-det
    padding: 140px 0
    &__title
        font-size: 50px
        font-weight: 500
        text-align: center
        margin-bottom: 20px
    &__subtitle
        width: 600px
        text-align: center
        font-size: 22px
        margin: 0 auto
    &__slider
        margin: 0 auto
        margin-top: 80px
        text-align: center
        position: relative
        width: 800px
        img
            width: 800px
            border-radius: 30px
    &__pagination-box
        display: flex
        justify-content: center
        align-items: center
        gap: 10px
        margin: 0 auto
        margin-top: 20px
    &__number
        position: absolute
        top: 50px
        left: 300px
        font-size: 300px
        font-weight: 700
        color: rgba(44, 62, 80, .3)
.banner
    height: 356px
    background: url("../assets/proj_det_baner.jpg") center (center / cover) no-repeat
.paginations
    min-width: 20px
    height: 20px
    border: 1px solid #CDA274
    border-radius: 100%
    color: #fff
    text-align: center
    transition: .3s
.paginations:hover
    transform: scale(1.2)
</style>