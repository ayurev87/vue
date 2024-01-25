<template>
  <div>
    <section class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <img class="header__logo_img" src="../assets/Logo.svg" alt=""> 
                    <div class="header__logo_text">Interno</div>
                </div>
                <div class="header__nav">
                    <ul>
                        <router-link class="header__link" to="/main">Main</router-link>
                        <router-link class="header__link" to="/blog">Blog</router-link>
                        <router-link class="header__link" to="/project">Project</router-link>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'HeaderBlock',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.header
    margin: 60px 0px 57px 0px
    &__link
        margin-left: 10px
    &__wrapper
        display: flex
        justify-content: space-between
        align-items: center
    &__logo
        display: flex
        align-items: center
        gap: 10px
        margin-bottom: 18px
        &_text
            font-size: 40px
        &_img
            width: 34px
    &__nav
        ul
            display: flex   
            gap: 10px
            align-items: center
            justify-content: space-between
            font-size: 20px
            font-weight: 400
            li
                margin-right: 24px
            a
                color: #222
  
</style>
