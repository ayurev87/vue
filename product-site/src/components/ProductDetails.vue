<template>
    <div>
        <ProductItem 
        v-for="product in products" 
        :key="product.id" 
        :product="product"/>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'


export default {
    name: 'ProductDetails',
    components: {
        ProductItem,
    },

    data() {
        return {
            products: [
                { id: 1, name: 'product 1', price: 250, available: true },
                { id: 2, name: 'product 2', price: 150, available: false },
                { id: 3, name: 'product 3', price: 220, available: true },
                { id: 4, name: 'product 4', price: 90, available: false },
                {id:5, name: 'product 5', price: 150, available: true  },
            ]

            
        };
    },


};
</script>

<style lang="scss" scoped>

</style>