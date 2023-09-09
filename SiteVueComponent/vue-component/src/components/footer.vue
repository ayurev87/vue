<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__info">
                <div class="menu__left footer__brand-info">
                    <a href="index.html" class="menu__logo_link">
                        <svg width="34" height="34" viewBox="0 0 34 34">
                            <path class="logo"></path>
                        </svg>
                        <h4 class="menu__logo_name">Interno</h4>
                    </a>
                    <h6 class="brand-info__description">
                        It is a long established fact that a reader will be distracted lookings.
                    </h6>
                    <ul class="brand-info__links links-main">
                        <li class="social-link">
                            <a href="#">
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path class="twitter" />
                                </svg>
                            </a>
                        </li>
                        <li class="social-link">
                            <a href="#">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path class="in" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer__links">
                    <h5 class="links__title footer__title">Pages</h5>
                    <ul class="links">
                        <li class="footer__link" v-for="menu in menus" :key="menu.id">
                            <a :href="menu.url">
                                <h6>{{ menu.name }}</h6>
                            </a>
                        </li>

                    </ul>
                </div>
                <div></div>
                <div class="footer__contacts">
                    <h5 class="footer__title">{{ contact.name }} </h5>
                    <h6 class="footer__address">{{ contact.adress }}

                    </h6>
                    <h6 class="footer__email">
                        <a href="mailto:{{contact.email}}">{{ contact.email }} </a>
                    </h6>
                    <h6 class="footer__tel">
                        <a href="tel:{{ contact.tel }}">{{ contact.tel }} </a>
                    </h6>
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
export default {
   
    name: 'FooterBlock',
    props: ['menus'],
    data() {
        return {
           
            contact: {
                name: 'Contacts',
                adress: '55 East Birchwood Ave. Brooklyn, New York 11201', email: 'contact@interno.com',
                tel: '(123) 456 - 7890'
            }

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>


<style lang="scss" scoped></style>