import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: ['fixing bug...'],
    title: 'TODO LIST',
  },
  mutations: {
    addItem(state, item) {
      state.list.push(item);
    },
    deleteItem(state, idx) {
      state.list.splice(idx, 1);
    },
    autoAdd(state) {
      state.list.push('fixing bug...');
    },
  },
  actions: {
    autoAddAsync(state) {
      setTimeout(() => {
        state.commit('autoAdd');
      }, 1000);
    },
  },
});
