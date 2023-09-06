<template>
    <div>
        <div class="calc">
            <input class=" input" type="text" disabled v-model="result">
            <button @click="addButton(num)" v-for="num in nums" :key="num.id" >{{num}}</button>
             <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id" >{{tab}}</button>
             <button @click="calcResult()" >=</button>
             <button class="reset" @click="reset()" >Сброс</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueProejctCalcComp',

    data() {
        return {
            nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            tabs: ['-', '+', '*', '/'],
            result: '',
            
        };
    },

    methods: {
        addButton(char) {
            // if(char !== '-' || char !== '+' || char !== '*' || char !== '/')
            // { this.result += String(char); }
            // else {
            //     this.result = Number(this.result);
                this.result += String(char);
            // }
        },
        calcResult() {
            this.result = eval(this.result);
        },
        reset() {
            this.result = '';
        }

        
    },
};
</script>

<style lang="css" scoped>
    .calc {
        display: grid;
        grid-template-columns: repeat(3, 150px);
        justify-content: center;
        padding-top: 48px; 
    }
    .input {
        grid-column: 1/-1;
        text-align: right;
    }
    .reset {
        grid-column: 1/-1;
    }
</style>