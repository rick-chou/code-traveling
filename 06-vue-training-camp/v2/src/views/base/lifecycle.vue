<template>
  <div class="app" ref="app">
    <el-result icon="success" title="success" v-show="result" />
    <el-result icon="error" title="error" v-show="!result" />
    <el-switch v-model="result" active-text="success" inactive-text="error" />
    <code-preview path="/base/lifecycle.md" />
  </div>
</template>

<script>
import codePreview from '@/components/code-preview.vue';
export default {
  components: { codePreview },
  data() {
    return {
      result: true,
    };
  },
  beforeCreate() {
    this.$message('beforeCreate触发了');
  },
  created() {
    this.$message('created触发了');
  },
  beforeMount() {
    this.$message('beforeMount触发了');
  },
  mountd() {
    this.$message('mountd触发了');
  },
  beforeUpdate() {
    this.$message('beforeUpdate触发了');
  },
  updated() {
    this.$message('updated触发了');
  },
  beforeestory() {
    this.$message('beforeestory触发了');
  },
  destoryed() {
    this.$message('destoryed触发了');
  },
};
</script>
