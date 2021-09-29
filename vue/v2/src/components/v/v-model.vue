<template>
  <div class="app">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <h1>你输入的值是：{{ input }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>
