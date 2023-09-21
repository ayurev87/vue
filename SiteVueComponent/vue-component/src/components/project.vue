<template>
    <section class="project">
        <div class="top">
            <div class="containter top__die">
                <h3 class="top__title">Our Project</h3>
                <ul class="top__breadcrumbs">
                    <li class="top__breadcrumb" v-for="bread in breadcrumb" :key="bread.id">
                        <h6 class="top__text">{{ bread.name }}</h6>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="project__nav">
                <ul class="project__nav_ul">
                    <li class="project__nav_li" @click="selectNav(item_nav)" v-for="item_nav in nav" :key="item_nav.id">
                        <h8>{{ item_nav }}</h8>
                    </li>
                </ul>

            </div>
            <div class="project__categories">
                <div class="project__contnet" v-for="image in projectFilter()" :key="image.id">
                    <img class="project__image" :src="image.img" />
                    <div class="project__subimage">
                        <div class="project__text">
                            <h5>{{ image.name }}</h5>
                            <h6>{{ image.subtitle }}</h6>
                        </div>
                        <div class="button_main">
                            <svg width="52" height="53" viewBox="0 0 52 53">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                <path class="minright"></path>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
<ul class="project__numbers">
    <li class="project__number" v-for="number in numbersCount()" :key="number.id">
        <p>0{{number}}</p>

    </li>
</ul>

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
                { premises: 'Bed Room', name: 'Minimal Bedroom', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/project_bed_room1.png`) },
                { premises: 'Bed Room', name: 'Minimal Bedroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project_bed_room2.png`) },
                { premises: 'Bed Room', name: 'Classic Minimal Bedroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project_bed_room3.png`) },
                { premises: 'Bed Room', name: 'Modern Bedroom', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/project_bed_room4.png`) },
                { premises: 'Bed Room', name: 'Minimal Bedroom table', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project_bed_room5.png`) },
                { premises: 'Bed Room', name: 'System Table', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project_bed_room6.png`) },
                { premises: 'Bed Room', name: 'Modern Medroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project_bed_room7.png`) },
                { premises: 'Bed Room', name: 'Modern Bedroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project_bed_room8.png`) },
                { premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/kitchen1.png`) },
                { premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/kitchen2.png`) },
                { premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/news_1.png`) },
                { premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/news_2.png`) },
                { premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/news_3.png`) },
                { premises: 'Kitchen', name: 'Modern Kitchen', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/news_4.png`) },
                { premises: 'Living Area', name: 'Living Area', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/news_5.png`) },
                { premises: 'Living Area', name: 'Living Area', subtitle: 'Decor / Artchitecture', star: true, img: require(`@/assets/gallary4.png`) },
                { premises: 'Bathroom', name: 'Modern Bathroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project_Bathroom1.png`) },
                { premises: 'Bathroom', name: 'Modern Bathroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project__bathroom2.jpg`) },
                { premises: 'Bathroom', name: 'Modern Bathroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project__bathroom3.jpg`) },
                { premises: 'Bathroom', name: 'Modern Bathroom', subtitle: 'Decor / Artchitecture', star: false, img: require(`@/assets/project__bathroom4.jpg`) }
            ],
            current_nav: '',
            numbers: [],
            current_num: 1,
            minItem: 0,
            maxItem: 7,

        };
    },

    mounted() {


    },

    methods: {
        projectFilter() {
            if (this.current_nav === '') return this.project_image
            else return this.project_image.filter((image) => {
                return image.premises === this.current_nav;
            });
        },
        selectNav(button) {
            return this.current_nav = button;
        },
        numbersCount() {
            let items = this.projectFilter().length/8;
            let array = [];
            if (array.length < items) {
                for (let index = array.length+1; index <= items; index++) {
                    array.push(index);
                }
            } else if (array.length > items) {
                for (let index = array.length; index > items; index--)
                    array.pop();
            }
            return this.numbers = array;
        },
        numItem() {
            
        }


    },
};
</script>

<style lang="scss" scoped>

</style>