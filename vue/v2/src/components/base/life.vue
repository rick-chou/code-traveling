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
    console.log(`beforeCreate`, "beforeCreate");
  },
  created() {
    console.log(`created`, "created");
  },
  beforeMount() {
    console.log(`beforeMount`, "beforeMount");
  },
  mountd() {
    console.log(`mountd`, "mountd");
  },
  beforeUpdate() {
    console.log(`beforeUpdate`, "beforeUpdate");
  },
  updated() {
    console.log(`updated`, "updated");
  },
  beforeestory() {
    console.log(`beforeestory`, "beforeestory");
  },
  destoryed() {
    console.log(`destoryed`, "destoryed");
  },
};
</script>