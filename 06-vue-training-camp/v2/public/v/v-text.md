> v-text 绑定数值 等价于 {{}} 语法

> 如果只想更新部分值 请使用 {{}} 语法

```html
<template>
  <div class="app">
    <p>username: {{ username }}</p>
    <p v-text="username"></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: 'chou',
      };
    },
  };
</script>
```
