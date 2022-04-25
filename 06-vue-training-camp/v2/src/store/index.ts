import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 存储state
  state: {
    count: 0,
  },
  // 更改 state 的唯一方法 必须是同步的
  mutations: {
    increment(state, n) {
      state.count += n;
    },
    decrement(state, n) {
      state.count -= n;
    },
  },
  // 处理state的派生状态
  getters: {
    countX2: (state) => {
      return state.count * 2;
    },
  },
  // 提交的是 mutation
  // 可以包含异步操作
  actions: {
    incrementAsync(context, payload) {
      setTimeout(() => context.commit('increment', payload), 1000);
    },
    decrementAsync({ commit }, payload) {
      setTimeout(() => commit('decrement', payload), 1000);
    },
  },
});

export default store;
