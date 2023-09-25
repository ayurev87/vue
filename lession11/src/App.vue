<template>
  <div id="app ">
    <PaymentsDisplay :items="paymentList" :info="infoText"/>
    <AddList @addNewPay="addNewPay"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import AddList from './components/AddList.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';




export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddList
},
  data() {
    return {
      // paymentList: [],
      infoText: '',
    };
  },
  methods: {
    // fetchData() {
    //   return [
    //     {
    //       date: '28.03.2023',
    //       category: 'Food',
    //       value: 169,
    //     },
    //     {
    //       date: '24.03.2023',
    //       category: 'Transport',
    //       value: 360,
    //     },
    //     {
    //       date: '24.03.2023',
    //       category: 'Food',
    //       value: 532,z
    //     }
    //   ]
    // },
    addNewPay(data) {
      // this.paymentList.push(data)
      this.ADD_PAYMENT(data)
    },
    ...mapMutations(['SET_PAYMENT', 'ADD_PAYMENT'])
        
  },
  computed: {
    ...mapState(['paymentList']),
    ...mapGetters(['getPayment', 'getFullPayment']),
    ...mapActions(['fetchData']),
  },
  created() {
    // this.paymentList = this.fetchData();
    this.SET_PAYMENT(this.fetchData)
     
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
