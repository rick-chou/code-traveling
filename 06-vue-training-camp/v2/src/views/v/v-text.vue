<template>
  <div class="app">
    <p>username: {{ username }}</p>
    <p v-text="username"></p>
    <code-preview path="/v/v-text.md" />
  </div>
</template>

<script>
import codePreview from '@/components/code-preview.vue';
export default {
  components: { codePreview },
  data() {
    return {
      username: 'chou',
    };
  },
};
</script>
