import { createStore } from "vuex";

export default createStore({
  state: {
    paymentList: [],
  },
  mutations: {
    SET_PAYMENT(state, payments) {
      state.paymentList = payments;
    },
    ADD_PAYMENT(state, pay) {
      state.paymentList.push(pay);
    },
  },
  getters: {
    getPayment: (state) => state.paymentList,
    getFullPayment: (state) => {
      return state.paymentList.reduce((a, b) => a + b.value, 0);
    },
  },
  actions: {},
});
