<template>
  <div class="app">
    <el-tag v-once>{{ result ? 'success' : 'error' }}</el-tag>
    <el-tag>{{ result ? 'success' : 'error' }}</el-tag>
    <el-switch v-model="result" active-text="success" inactive-text="error" />

    <code-preview path="/v/v-once.md" />
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
  methods: {
    toggle() {
      this.result = !this.result;
    },
  },
};
</script>
