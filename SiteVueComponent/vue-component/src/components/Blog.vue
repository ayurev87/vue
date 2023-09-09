<template>
    <div>
        <h3 class="blog__title"> {{ item.title }} </h3>
        <img class="blog__img" :src=" item.img ">
        <div class="blog__under-images">
            <p class="blog__data">{{ item.date }}</p>
            <p class="blog__path">Interior / Home / Decore </p>
        </div>
        <h6> {{ item.text }}</h6>
        <div class="blog__quotes">
            <h2 class="blog__quotes-header">”</h2>
            <h5 class="blog__quotes-text"> {{ item.quotes }}</h5>
        </div>
        <h3 class="blog__desigh_title">
            {{ item.title_design }}</h3>
        <h6> {{ item.text_design_start }}</h6>
        <ul class="blog__lists">
            <li v-for="element in item.list" :key="element.id" class="blog__list">
                <h6 class="blog__num">{{ element.id }}</h6>
                <h6>{{ element.text }}</h6>
            </li>
        </ul>
        <img class="blog__img" :src="item.img_design">
        <h6> {{ item.text_design_end }}</h6>
    </div>
</template>

<script>

export default {
    name: 'Blog_items',
    props: ['item'],
    data() {
        return {
                };
    },

}
</script>

<style lang="scss" scoped></style>