<template>
  <div class="app">
    <p>{{ this.msg }}</p>
    <el-button type="primary" @click="toParent">通知父组件</el-button>
    <el-button type="primary" @click="toSibling">通知兄弟组件</el-button>
  </div>
</template>

<script>
import { EventBus } from './event-bus';
export default {
  props: {
    msg: String,
  },
  methods: {
    toParent() {
      this.$emit('handleChange', 'nanshu');
    },
    toSibling() {
      EventBus.$emit('siblingMsg', 'hello brother');
    },
  },
};
</script>
