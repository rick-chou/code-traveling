<template>
  <div class="app">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { EventBus } from './event-bus';
export default {
  data() {
    return {
      msg: '等兄弟来消息',
    };
  },
  mounted() {
    EventBus.$on('siblingMsg', (msg) => {
      this.msg = msg;
    });
  },
};
</script>
