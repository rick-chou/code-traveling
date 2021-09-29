<template>
  <div class="app" ref="ref">
    <el-result icon="success" title="success" v-show="result" />
    <el-result icon="error" title="error" v-show="!result" />
    <el-switch v-model="result" active-text="success" inactive-text="error" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: true,
      ref: null,
    };
  },
  methods: {
    toggle() {
      this.result = !this.result;
      console.log(`ref`, this.ref);
    },
  },
};
</script>