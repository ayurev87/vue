<template>
    <section class="project">
        <div class="top">
            <div class="containter top__die">
                <h3 class="top__title">Our Project</h3>
                  <ul class="top__breadcrumbs">
                    <li class="top__breadcrumb" v-for="bread in breadcrumb" :key="bread.id">
                            <h6 class="top__text">{{bread.name}}</h6>
                    </li>
</ul>
            </div>
        </div>
        <div class="container"> 
            <div class="project__nav">
                <ul class="project__nav_ul">
                    <li class="project__nav_li" v-for="item_nav in nav" :key="item_nav.id">
                        <h8>{{item_nav}}</h8> 
                    </li>
                </ul>

            </div>
            <div class="project__categories" v-for="image in project_image" :key="image.id">
                <div>
                    <img :src="image:img"/>

                </div>
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
            nav: ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'],
            project_image: [
                {premises: 'Bed Room', name: 'Minimal Bedroom', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/project_bed_room1.png`) },
                {premises: 'Bed Room', name: 'Minimal Bedroom', subtitle: 'Decor / Artchitecture', star: false, img:  require(`@/assets/project_bed_room2.png`) },
                {premises: 'Bed Room', name: 'Classic Minimal Bedroom', subtitle: 'Decor / Artchitecture', star: false, img:  require(`@/assets/project_bed_room3.png`) },
                {premises: 'Bed Room', name: 'Modern Bedroom', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/project_bed_room4.png`) },
                {premises: 'Bed Room', name: 'Minimal Bedroom table', subtitle: 'Decor / Artchitecture', star: false, img:  require(`@/assets/project_bed_room5.png`) },
                {premises: 'Bed Room', name: 'System Table', subtitle: 'Decor / Artchitecture', star: false, img:  require(`@/assets/project_bed_room6.png`) },
                {premises: 'Bed Room', name: 'Modern Medroom', subtitle: 'Decor / Artchitecture', star: false, img:  require(`@/assets/project_bed_room7.png`) },
                {premises: 'Bed Room', name: 'Modern Bedroom', subtitle: 'Decor / Artchitecture', star: false, img:  require(`@/assets/project_bed_room8.png`) },
                {premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/kitchen1.png`) },
                {premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/kitchen2.png`) },
                {premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/news_1.png`) },
                {premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/news_2.png`) },
                {premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/news_3.png`) },
                {premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/news_4.png`) },
                {premises: 'Living Area', name: 'Living Area', subtitle: 'Decor / Artchitecture', star: true, img:  require(`@/assets/news_5.png`) },
                { premises: 'Living Area', name: 'Living Area', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/gallary4.png`) },
                { premises: 'Bathroom', name: 'Modern Bathroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project_Bathroom1.png`) },
                { premises: 'Bathroom', name: 'Modern Bathroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project__bathroom2.jpg`) },
                { premises: 'Bathroom', name: 'Modern Bathroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project__bathroom3.jpg`) },
                { premises: 'Bathroom', name: 'Modern Bathroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project__bathroom4.jpg`) }
                
                
            ],
        };
    },

    mounted() {

        
    },

    methods: {
        updateImage(){
           
        },  
    },
};
</script>

<style lang="scss" scoped>

</style>