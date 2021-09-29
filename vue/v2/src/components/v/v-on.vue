<template>
  <div class="app">
    <!-- 简写 v-on:click -> @click="toggle" -->
    <el-button
      round
      :icon="flag ? 'el-icon-star-on' : 'el-icon-star-off'"
      v-on:click="toggle"
      >{{ flag ? "UnStar" : "Start" }}</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    },
  },
};
</script>
