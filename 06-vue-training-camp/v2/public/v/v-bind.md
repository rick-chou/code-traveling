> v-bind: value 可以简写成 :value 主要用来动态绑定 data 中的值

```html
<template>
  <div class="app">
    <!-- 简写 v-bind:value -> :value -->
    <el-input
      v-bind:value="input"
      placeholder="请输入内容"
      @input="handleInputChange"
    ></el-input>
    <h1>你输入的值是：{{ input }}</h1>

    <el-result
      :icon="result ? 'success' : 'error'"
      :title="result ? 'success' : 'error'"
    />
    <el-switch v-model="result" active-text="success" inactive-text="error" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        result: true,
      };
    },
    methods: {
      handleInputChange(val) {
        this.input = val;
      },
      toggle() {
        this.result = !this.result;
      },
    },
  };
</script>
```
