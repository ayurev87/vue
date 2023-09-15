<template>
  <HeaderBlock :menus="menus" @selectMenu="selectMenu" eventBu/>
  <Our_project :breadcrumb="breadcrumb" v-if="select.name === 'Project'"/>
  <Blog_main v-else/>
  <FooterBlock :menus="menus"/>
  
  
</template>

<script>
import HeaderBlock from './components/Header.vue'
import Blog_main from './components/blog_main.vue'
import FooterBlock from './components/footer.vue'
import Our_project from './components/project.vue'


export default {
  name: 'App', 
  components: {
    HeaderBlock,
    Blog_main,
    Our_project,
    FooterBlock,
    
  },

      data() {
        return {
          menus: [{id:1,  name: 'Home' }, {id:2, name: 'Project' }, {id:3,  name: 'Articles' }, {id:4, name: 'Blog' }],
            select: '',
          
        };
       
  },

  methods: {
        selectMenu(data) {
            this.select = data
        }
  },
  computed: {
    breadcrumb (){
      const data = this.menus.slice(0, 1);
      data.push(this.menus.slice(this.select.id - 1, this.select.id));
      // data.push(this.menus.filter((object)=>object.name === this.select.name));
      return data;
      
      // return data.push(this.menus.filter(this.selectMenu));

      }
     }

}
</script>

<style lang="scss" scoped  >

</style>
