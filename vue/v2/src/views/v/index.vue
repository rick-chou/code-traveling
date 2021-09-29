<template>
  <div>
    <div id="nav">
      <router-link to="/v/v-model">v-modal</router-link> |
      <router-link to="/v/v-on">v-on</router-link> |
      <router-link to="/v/v-bind">v-bind</router-link> |
      <router-link to="/v/v-show">v-show</router-link> |
      <router-link to="/v/v-if">v-if</router-link> |
      <router-link to="/v/v-for">v-for</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.app {
  width: 70vw;
  margin: auto;
}
</style>
