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
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentsList = [
          {
            date: "28.03.2023",
            category: "Food",
            value: 169,
          },
          {
            date: "24.03.2023",
            category: "Transport",
            value: 360,
          },
          {
            date: "24.03.2023",
            category: "Food",
            value: 532,
          },
        ]
        commit("SET_PAYMENT", paymentsList)
      }, 1000);
    }
  }
});
