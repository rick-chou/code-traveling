> v-show 条件不满足时 通过 display: none 来隐藏元素

> v-if 条件不满足时 移除 dom

```html
<template>
  <div class="app">
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
      };
    },
  };
</script>
```
