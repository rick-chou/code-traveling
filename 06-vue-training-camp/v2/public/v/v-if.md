> v-if 条件不满足时 移除 dom

> v-show 条件不满足时 通过 display: none 来隐藏元素

```html
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
```
