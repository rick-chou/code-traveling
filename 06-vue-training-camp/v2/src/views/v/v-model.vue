<template>
  <div class="app">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <h1>你输入的值是：{{ input }}</h1>
    <code-preview path="/v/v-modal.md" />
  </div>
</template>

<script>
import codePreview from '@/components/code-preview.vue';
export default {
  components: { codePreview },
  data() {
    return {
      input: '',
    };
  },
};
</script>
