> v-modal 用于例如输入框的双向绑定

> 是 @input 和 v-bind 的一种简写

```html
<template>
  <div class="app">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <h1>你输入的值是：{{ input }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
      };
    },
  };
</script>
```
