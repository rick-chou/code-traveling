![生命周期图谱](https://cn.vuejs.org/images/lifecycle.png)

```html
<template>
  <div class="app" ref="app">
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
    beforeCreate() {
      this.$notify.info({
        message: 'beforeCreate触发了',
      });
    },
    created() {
      this.$notify.info({
        message: 'created触发了',
        offset: 50,
      });
    },
    beforeMount() {
      this.$notify.info({
        message: 'beforeMount触发了',
        offset: 100,
      });
    },
    mounted() {
      this.$notify.info({
        message: 'mounted触发了',
        offset: 150,
      });
    },
    beforeUpdate() {
      this.$notify.info({
        message: 'beforeUpdate触发了',
      });
    },
    updated() {
      this.$notify.info({
        message: 'updated触发了',
      });
    },
    beforeestory() {
      this.$notify.info({
        message: 'beforeestory触发了',
      });
    },
    destoryed() {
      this.$notify.info({
        message: 'destoryed触发了',
      });
    },
  };
</script>
```
