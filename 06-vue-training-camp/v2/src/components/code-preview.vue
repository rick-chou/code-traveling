<template>
  <el-collapse accordion class="mt-4">
    <el-collapse-item>
      <template slot="title">
        Code Preview <i class="header-icon el-icon-info"></i>
      </template>
      <v-md-preview :text="text"></v-md-preview>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  props: {
    path: String,
  },
  mounted() {
    fetch(this.path)
      .then((res) => res.text())
      .then((res) => (this.text = res));
  },
};
</script>

<style lang="scss" scoped>
.mt-4 {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
