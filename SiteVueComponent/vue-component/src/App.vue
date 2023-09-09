<template>
  <HeaderBlock :menus="menus"/>
  <section class="top"></section>
  <Blog_main/>
  <FooterBlock :menus="menus"/>
  
</template>

<script>
import HeaderBlock from './components/Header.vue'
import Blog_main from './components/blog_main.vue'
import FooterBlock from './components/footer.vue'


export default {
  name: 'App',
  components: {
    HeaderBlock,
    Blog_main,
    FooterBlock,
    
  },
      data() {
        return {
            menus: [{ url: 'index.html', name: 'Home' }, { url: 'Project.html', name: 'Project' }, { url: 'articles.html', name: 'Articles' }, { url: 'blog.html', name: 'Blog' }]
            
        };
  },

}
</script>

<style lang="scss" scoped  >

</style>
