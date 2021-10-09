<template>
  <div id="app">
    <div id="nav">
      <router-link to="/vuex/store">store</router-link> |
      <router-link to="/vuex/getters">getters</router-link> |
      <router-link to="/vuex/mutations">mutations</router-link> |
      <router-link to="/vuex/actions">actions</router-link> |
      <router-link to="/vuex/modules">modules</router-link>
    </div>
    <router-view />
  </div>
</template>
