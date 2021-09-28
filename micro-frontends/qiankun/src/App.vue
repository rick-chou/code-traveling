<template>
  <div id="app">
    <!-- <a-menu :selectedKeys="[currentRoute]" mode="horizontal" theme="dark">
      <a-menu-item v-for="item in menus" :key="item.key">
        <router-link :to="item.route">{{ item.title }}</router-link>
      </a-menu-item>
    </a-menu> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      menus: [
        {
          key: "home",
          route: "/",
          title: "主页",
        },
        {
          key: "list",
          route: "/list",
          title: "列表页",
        },
      ],
    };
  },
  mounted: () => {
    console.log(this);
  },

  computed: {
    // currentRoute() {
    //   const menu = this.menus.find((item) => item.route === this.$route.path);
    //   return menu ? menu.key : "vue";
    // },
  },
};
</script>

<style>
</style>