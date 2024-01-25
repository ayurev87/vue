<template>
    <div>
        <section class="numbers">
        <div class="container">
            <div class="numbers__wrapper">
                <!-- <div class="numbers__item" v-for="num in numberItems" :key="num.id">
                    <div class="numbers__content-box">
                        <div class="numbers__num">{{ num.number }}</div>
                        <div class="numbers__text">{{ num.text }}</div>
                    </div>
                    <hr class="numbers__line">
                </div> -->
                <div class="numbers__item" v-for="num in numberItems" :key="num.id">
                    <div class="numbers__num">{{ num.number }}</div>
                    <div class="numbers__text">{{ num.text }}</div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'NumberBlock',

    data() {
        return {
            numberItems: [
                {id: 1, number: 12, text: 'Years Of Experiance'},
                {id: 2, number: 85, text: 'Success Project'},
                {id:3 , number: 15, text: 'Active Project'},
                {id:4 , number: 92, text: 'Happy Customers'},
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>
.numbers
    padding-top: 151px 
    background: #F4F0EC
    height: 457px
    &__wrapper
        display: flex
        text-align: center
        align-items: center
        justify-content: space-around
    &__item
        height: 155px  
        // display: flex
        // align-items: center
        // justify-content: space-between
        border-right: 1.5px solid #CDA274 // было перемещено из ontent-box
        padding-right: 60px // было перемещено из ontent-box
    // &__content-box
    //     text-align: center
    //     margin: 0
    //     border-right: 1.5px solid #CDA274
    //     padding-right: 60px
    &__num
        font-size: 85px
        color: #CDA274
    &__text
        font-size: 22px
    // hr
    //     width: 110px
    //     height: 3px
    //     border-top: 1px solid #CDA274
    //     transform: rotate(90deg)
    //     margin: 0px
    //     padding: 0
</style>