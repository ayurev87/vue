<template>
    <div>
        <MainBlock/>
        <GalleryBlock/>
        <ArticlesBlock/>
        <NumberBlock/>
    </div>
</template>

<script>
import MainBlock from '../components/MainBlock.vue'
import NumberBlock from '../components/NumberBlock.vue'
import ArticlesBlock from '../components/ArticlesBlock.vue'
import GalleryBlock from '../components/GalleryBlock.vue'
export default {
    components: {
        MainBlock,
        NumberBlock,
        ArticlesBlock,
        GalleryBlock,
    },
    name: 'MainPage',

    data() {
        return {
            
        };
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>