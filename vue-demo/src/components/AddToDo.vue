<template>
  <div>
    <el-input
      v-model="input"
      placeholder="请输入内容"
      class="add"
      @change="handleInputChange"
    ></el-input>
    <el-button type="info"><router-link to="list">列表</router-link></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleInputChange() {
      this.$store.commit("addItem", this.input);
      this.input = "";
    },
  },
};
</script>


<style lang="scss" scoped>
.add {
  width: 200px;
}
</style>



