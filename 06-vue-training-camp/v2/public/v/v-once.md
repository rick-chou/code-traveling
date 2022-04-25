> v-once 只会展示初始值 不随数值的变化而变化

```html
<template>
  <div class="app">
    <el-tag v-once>{{ result ? 'success' : 'error' }}</el-tag>
    <el-tag>{{ result ? 'success' : 'error' }}</el-tag>
    <el-switch v-model="result" active-text="success" inactive-text="error" />
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
```