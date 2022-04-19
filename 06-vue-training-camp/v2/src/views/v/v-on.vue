<template>
  <div class="app">
    <!-- 简写 v-on:click -> @click="toggle" -->
    <el-button
      round
      :icon="flag ? 'el-icon-star-on' : 'el-icon-star-off'"
      v-on:click="toggle"
      >{{ flag ? "UnStar" : "Start" }}</el-button
    >
    <code-preview path="/v/v-on.md" />
  </div>
</template>

<script>
import codePreview from '@/components/code-preview.vue';
export default {
  components: { codePreview },
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    },
  },
};
</script>
