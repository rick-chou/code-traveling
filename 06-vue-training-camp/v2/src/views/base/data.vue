<template>
  <div class="app">
    <p>username: {{ username }}</p>
    <code-preview path="/base/data.md" />
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
