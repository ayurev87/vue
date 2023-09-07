<template>
  <HeaderBlock/>
</template>

<script>
import HeaderBlock from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderBlock,
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/fonts.scss';

</style>
