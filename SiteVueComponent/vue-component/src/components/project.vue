<template>
    <section class="Project">
        <div class="top">
            <div class="containter top__die">
                <h3 class="top__title">Our Project</h3>
                  <ul class="top__breadcrumbs">
                    <li class="top__breadcrumb post__description" v-for="bread in breadcrumb" :key="bread.id">
                        <div>
                            <h6>{{bread.name}}</h6>
                        </div>
                    </li>

</ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Our_project',
    props: ['breadcrumb'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.top {
    background-image: url(@/assets/Banner_proejct.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 356px;
    position: relative;
}
</style>