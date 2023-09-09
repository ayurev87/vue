<template>
        <div  class="blog__item"  >
                            <Blog_items :item="blogs[0]"></Blog_items>
                        </div> 
</template>

<script>
import Blog_items from '@/components/Blog.vue'
export default {
    name: 'blog_left',
    props: ['blogs'],
    components: {
        Blog_items,
    },

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

<style lang="scss" scoped>

</style>