<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ title }}</span>
      </div>
      <div v-for="(item, idx) in list" :key="idx" @click="handleClick(idx)">
        {{ item }}
      </div> </el-card
    ><el-button type="info"><router-link to="add">添加</router-link></el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: mapState({
    title: (state) => state.title,
    list: (state) => state.list,
  }),
  // created() {
  //   setInterval(() => {
  //     this.$store.dispatch("autoAddAsync");
  //   }, 5000);
  // },
  methods: {
    handleClick(idx) {
      console.log(idx);
    },
  },
};
</script>

<style>
</style>