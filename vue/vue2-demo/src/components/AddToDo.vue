<template>
  <div>
    <el-input
      v-model="input"
      placeholder="请输入内容"
      class="add"
      @change="handleInputChange"
    ></el-input>
    <el-button type="info"><router-link to="list">列表</router-link></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.$data, this.$el);
  },
  created() {
    console.log("created", this.$data, this.$el);
    console.log("route:", this.$route);
    console.log("router:", this.$router);
  },
  beforeMount() {
    console.log("beforeMount", this.$data, this.$el);
  },
  mounted() {
    console.log("mounted", this.$data, this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this);
  },
  updated() {
    console.log("updated", this);
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.$data, this.$el);
  },
  destroyed() {
    console.log("destroyed", this.$data, this.$el);
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  methods: {
    handleInputChange() {
      this.$store.commit("addItem", this.input);
      this.input = "";
    },
  },
};
</script>


<style lang="scss" scoped>
.add {
  width: 200px;
}
</style>



