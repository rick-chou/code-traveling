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
  </div>
</template>

<script>
export default {
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
