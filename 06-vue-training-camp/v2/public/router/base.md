### router

```ts
import V from '@/views/v/index.vue';

const routes = [
  {
    path: '/v',
    name: 'v',
    component: V,
    children: [
      {
        path: '/v/v-for',
        name: 'v-for',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-for.vue'),
      },
      {
        path: '/v/v-model',
        name: 'v-model',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-model.vue'),
      },
      {
        path: '/v/v-if',
        name: 'v-if',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-if.vue'),
      },
      {
        path: '/v/v-on',
        name: 'v-on',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-on.vue'),
      },
      {
        path: '/v/v-bind',
        name: 'v-bind',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-bind.vue'),
      },
      {
        path: '/v/v-show',
        name: 'v-show',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-show.vue'),
      },
      {
        path: '/v/v-once',
        name: 'v-once',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-once.vue'),
      },
      {
        path: '/v/v-text',
        name: 'v-text',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-text.vue'),
      },
    ],
  },
];

export default routes;
```

### view

```html
<template>
  <div>
    <div id="nav">
      <router-link to="/v/v-once">v-once</router-link> |
      <router-link to="/v/v-text">v-text</router-link> |
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
```

### main

```ts
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```
