### store

```ts
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
```

### count

```html
<template>
  <div class="app">
    <div>mapState: {{ count }}</div>
    <div>$store.state.count: {{ $store.state.count }}</div>
    <div>mapGetters: {{ countX2 }}</div>
    <div>$store.getters.countX2: {{ $store.getters.countX2 }}</div>
    <el-button icon="el-icon-minus" @click="sub(1)">同步减少1</el-button>
    <el-button icon="el-icon-plus" @click="add(2)">同步增加2</el-button>
    <el-button icon="el-icon-minus" @click="subAsync(3)">异步减少3</el-button>
    <el-button icon="el-icon-plus" @click="addAsync(4)">异步增加4</el-button>
  </div>
</template>

<script>
  import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState({
        count: (state) => state.count,
      }),
      ...mapGetters({
        countX2: 'countX2',
      }),
    },
    methods: {
      ...mapMutations({
        add: 'increment',
        sub: 'decrement',
      }),
      ...mapActions({
        addAsync: 'incrementAsync',
        subAsync: 'decrementAsync',
      }),
    },
  };
</script>
```
