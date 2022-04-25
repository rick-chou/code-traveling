<template>
  <div class="app">
    <el-descriptions
      :title="item.username"
      v-for="item in list"
      :key="item.username"
      class="desc"
    >
      <el-descriptions-item label="username">
        {{ item.username }}
      </el-descriptions-item>
      <el-descriptions-item label="tel">{{ item.tel }}</el-descriptions-item>
      <el-descriptions-item label="base">{{ item.base }}</el-descriptions-item>
      <el-descriptions-item label="desc">
        <el-tag size="small">{{ item.desc }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="address">
        {{ item.address }}
      </el-descriptions-item>
    </el-descriptions>

    <code-preview path="/v/v-for.md" />
  </div>
</template>

<script>
import codePreview from '@/components/code-preview.vue';
export default {
  components: { codePreview },
  data() {
    return {
      list: [
        {
          username: 'chou',
          tel: 1810000000,
          base: 'hangzhou',
          desc: 'school',
          address: 'hangzhou',
        },
        {
          username: 'nanshu',
          tel: 1810000000,
          base: 'hangzhou',
          desc: 'school',
          address: 'hangzhou',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.desc {
  margin-bottom: 10vh;
  margin-top: 10vh;
}
</style>
