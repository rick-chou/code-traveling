<template>
  <div id="app">
    <div id="nav">
      <router-link to="/vue-router/essentials/getting-started"
        >Getting Started</router-link
      >
      |
      <router-link to="/vue-router/essentials/dynamic-route-matching"
        >Dynamic Route Matching</router-link
      >
      |
      <router-link to="/vue-router/essentials/nested-routes"
        >Nested Routes</router-link
      >
      |
      <router-link to="/vue-router/essentials/proframmatic-navigation"
        >Programmatic Navigation</router-link
      >
      |
      <router-link to="/vue-router/essentials/named-routes"
        >Named Routes</router-link
      >
      |
      <router-link to="/vue-router/essentials/named-views"
        >Named Views</router-link
      >
      |
      <router-link to="/vue-router/essentials/redirect-alias"
        >Redirect and Alias</router-link
      >
      |
      <router-link to="/vue-router/essentials/passing-props-to-route-components"
        >Passing Props to Route Components</router-link
      >
      |
      <router-link to="/vue-router/essentials/h5-history-mode"
        >HTML5 History Mode</router-link
      >
    </div>
    <router-view />
  </div>
</template>
