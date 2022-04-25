<template>
  <div class="app">
    <div class="content">
      <el-card class="card">
        <div slot="header">
          <span>父组件内容</span>
        </div>
        <p>{{ username }}</p>
      </el-card>
      <el-card class="card">
        <div slot="header">
          <span>子组件A内容</span>
        </div>
        <child-component
          msg="这是父组件传递来的消息"
          @handleChange="changeName"
        />
      </el-card>
      <el-card class="card">
        <div slot="header">
          <span>子组件B内容</span>
        </div>
        <sibling-component />
      </el-card>
    </div>
    <code-preview path="/base/component.md" />
  </div>
</template>

<script>
import codePreview from '@/components/code-preview.vue';
import childComponent from './child-component.vue';
import siblingComponent from './sibling-component.vue';
export default {
  components: { childComponent, siblingComponent, codePreview },
  data() {
    return {
      username: 'chou',
    };
  },
  methods: {
    changeName(name) {
      this.username = name;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
}
.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
