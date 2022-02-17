<template>
  <div id="app">
    <div id="nav">
      <router-link to="/vue-router/advanced/navigation-guards"
        >Navigation Guards</router-link
      >
      |
      <router-link to="/vue-router/essentials/route-meta-fields"
        >Route Meta Fields</router-link
      >
      |
      <router-link to="/vue-router/essentials/transitions"
        >Transitions</router-link
      >
      |
      <router-link to="/vue-router/essentials/data-fetching"
        >Data Fetching</router-link
      >
      |
      <router-link to="/vue-router/essentials/scroll-behavior"
        >Scroll Behavior</router-link
      >
      |
      <router-link to="/vue-router/essentials/lazy-loading-routes"
        >Lazy Loading Routes</router-link
      >
      |
      <router-link to="/vue-router/essentials/navigation-failures"
        >Navigation Failures</router-link
      >
    </div>
    <router-view />
  </div>
</template>
