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
          import(/* webpackChunkName: "v" */ '@/components/v/v-for.vue'),
      },
      {
        path: '/v/v-model',
        name: 'v-model',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/components/v/v-model.vue'),
      },
      {
        path: '/v/v-if',
        name: 'v-if',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/components/v/v-if.vue'),
      },
      {
        path: '/v/v-on',
        name: 'v-on',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/components/v/v-on.vue'),
      },
      {
        path: '/v/v-bind',
        name: 'v-bind',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/components/v/v-bind.vue'),
      },
      {
        path: '/v/v-show',
        name: 'v-show',
        component: () =>
          import(/* webpackChunkName: "v" */ '@/components/v/v-show.vue'),
      },
    ],
  },
];

export default routes;
