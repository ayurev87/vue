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
                                <a href=menu.url>
                                    <h7 class="nav__text">{{menu.name}}</h7>
                                </a>
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

    data() {
        return {
            menus: [{ url: '@/index.html', name: 'Home' }, { url: '', name: 'Project' }, { url: 'articles.html', name: 'Articles.html' }, { url: 'blog.html', name: 'Blog' }]
            
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