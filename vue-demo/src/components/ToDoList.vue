<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>TODOLIST</span>
      </div>
      <div
        v-for="(item, idx) in $store.state.list"
        :key="idx"
        @click="handleClick(idx)"
      >
        {{ item }}
      </div> </el-card
    ><el-button type="info"><router-link to="add">添加</router-link></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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