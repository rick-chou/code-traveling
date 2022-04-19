<template>
  <div class="app">
    <div>
      <div class="mb-2">
        <el-button icon="el-icon-date" plain>mapState: {{ count }}</el-button>
        <el-button icon="el-icon-date" plain
          >$store.state.count: {{ $store.state.count }}</el-button
        >
      </div>
      <div class="mb-2">
        <el-button icon="el-icon-date" plain
          >mapGetters: {{ countX2 }}</el-button
        >
        <el-button icon="el-icon-date" plain
          >$store.getters.countX2: {{ $store.getters.countX2 }}</el-button
        >
      </div>
    </div>
    <el-button icon="el-icon-minus" @click="sub(1)">同步减少1</el-button>
    <el-button icon="el-icon-plus" @click="add(2)">同步增加2</el-button>
    <el-button icon="el-icon-minus" @click="subAsync(3)">异步减少3</el-button>
    <el-button icon="el-icon-plus" @click="addAsync(4)">异步增加4</el-button>
    <code-preview path="/store/count.md" />
  </div>
</template>

<script>
import codePreview from '@/components/code-preview.vue';
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
export default {
  components: { codePreview },
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
