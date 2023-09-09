<template>
      <div class="blog__btn-box">
                    <div v-for="(button, index) in tagbtn" :key="index" @click="getButton(button)" class="blog__btn"> {{ button.title }} </div>   
                </div>    
</template>

<script>
    
    export default {
    name: 'blog_bth',
    props: ['tagbtn'],
    methods: {
         getButton (button) {
      const newButton = button.title
      this.$emit('getarticle', newButton)
    }
    },
    }
</script>

<style lang="scss" scoped>

</style>