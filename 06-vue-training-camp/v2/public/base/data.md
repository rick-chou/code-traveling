> 可以在 template 内用 {{}} 的语法获取到渲染data中的数据

```html
<template>
  <div class="app">
    <p>username: {{ username }}</p>
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
