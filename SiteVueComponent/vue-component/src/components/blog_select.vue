<template>
     <div v-for="item in items" :key="item.id" class="blog__item" >
    <Blog_items :item="item"></Blog_items>
                                  </div> `
</template>

<script>
   import Blog_items from '@/components/Blog.vue'

export default {
    name: 'blog_select',
    props: ['items'],
    components: {
        Blog_items,
    },

   
};
</script>

<style lang="scss" scoped>

</style>