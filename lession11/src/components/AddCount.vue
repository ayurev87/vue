<template>
    <div>
        <button @click="UpCounter()">Значение счетчика равно {{counter}}</button>
    </div>
</template>

<script>
export default {
    name: 'AddCount',

    data() {
        return {
            counter: 0,
        };
    },


    methods: {
        UpCounter() {
            this.counter++
        }
    },
    beforeCreate() {
        this.counter = 1;
    },
    created() {
        this.counter = 2;
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeupdate');
    },
    updated() {
        console.log('updated');
    },

    // beforeDestroy() {
        
    // },

    // destroyed() {
        
    // },



};
</script>

<style lang="scss" scoped>

</style>