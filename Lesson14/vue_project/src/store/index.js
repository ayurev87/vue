// import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//     count: 0
//   },
//   mutations: {
//     INCREMENT(state) {
//       state.count++;
//     },
//     DECREMENT(state) {
//       state.count--;
//     }
//   }
// })
// export default store;
export default {
  state: {
    count: 0
  },
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state) {
      state.count--;
    }
  }
}

