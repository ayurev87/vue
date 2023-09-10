<template>
    <div class="product">
        <h2>Наименование товара: {{product.name}}</h2>
        <h3>Цена в рублях: {{product.price}}₽</h3>
        <h3>Цена в долларах: {{RubToDol(product.price)}}$ </h3>
        <h3 v-if="product.available" class="green">Availble</h3>
        <h3 v-else class="red">Out of stock {{product.available}}</h3>
        
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product'],
    data() {
        return {
           
        };
    },


    methods: {
        RubToDol(price) {
            return  price / 100;
        }
    },
};
</script>

<style lang="css" scoped>
.product{
    border: 1px solid black;
    margin: 10px;
    border-radius: 10px;
    width: 500px;
   
}
.green {
    color: green;
}
.red {
    color: red;
}
</style>