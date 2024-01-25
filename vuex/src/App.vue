<template>
  <div id="app">
    <HeaderBlock/>
    <main>
      <router-view/>
    </main>
    <!-- <MainPage/> -->
    <FooterBlock/>
    
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'
// import MainPage from './pages/MainPage.vue'


export default {
  name: 'App',
  components: {
    HeaderBlock,
    FooterBlock,
    // MainPage
  }
}
</script>

<style lang="sass">
#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
.container
  width: 1200px
  margin: 0 auto
.title
  font-size: 50px
  text-align: center
.subtitle
  font-size: 22px
  font-style: normal
  font-weight: 400
  text-align: center
*
  margin: 0
  padding: 0
  box-sizing: border-box
  list-style-type: none
  text-decoration: none

</style>