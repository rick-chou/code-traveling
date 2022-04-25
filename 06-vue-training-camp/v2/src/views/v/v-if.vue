<template>
  <div class="app">
    <el-result icon="success" title="success" v-if="result" />
    <el-result icon="error" title="error" v-else />
    <el-switch
      v-model="result"
      active-text="success"
      inactive-text="error"
      change="toggle"
    />
    <code-preview path="/v/v-if.md" />
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
