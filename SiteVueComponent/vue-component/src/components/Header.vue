<template>
   <header class="header">
            <div class="container menu">
                <div class="menu__left">
                    <a href="index.html" class="menu__logo_link">
                        <svg width="34" height="34" viewBox="0 0 34 34">
                            <path class="logo"></path>
                        </svg>
                        <h4 class="menu__logo_name">Interno</h4>
                    </a>
                </div>
                <div class="menu__right">
                    <nav class="menu_links">
                        <ul class="links-main">
                            <li class="links-main__link" v-for="menu in menus" :key="menu.id">
                                <div  @click="onSelectMenu(menu)">
                                    <h7 class="nav__text">{{menu.name}}</h7>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
</template>

<script>

export default {
    name: 'HeaderBlock',
    props: ['menus'],
    emits: ['selectmenu'],
    methods: {
        onSelectMenu(name) {
            const data = name;
            this.$emit('selectMenu', data);
        }
    },


};
</script>

<style lang="sass" scoped>

</style>