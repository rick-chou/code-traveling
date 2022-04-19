<template>
  <div class="app">
    <div id="nav">
      <!-- <router-link to="/vue-router/essentials">essentials</router-link> | -->
      <!-- <router-link to="/vue-router/advanced">advanced</router-link> -->
    </div>
    <router-view />
    <code-preview path="/router/base.md" />
  </div>
</template>

<script>
import codePreview from '@/components/code-preview.vue';
export default {
  components: { codePreview },
};
</script>
