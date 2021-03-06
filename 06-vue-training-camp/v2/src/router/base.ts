import Base from '@/views/base/index.vue';

const routes = [
  {
    path: '/base',
    name: 'Base',
    component: Base,
    children: [
      {
        path: '/base/data',
        name: 'data',
        component: () =>
          import(/* webpackChunkName: "base" */ '@/views/base/data.vue'),
      },
      {
        path: '/base/lifecycle',
        name: 'lifecycle',
        component: () =>
          import(/* webpackChunkName: "base" */ '@/views/base/lifecycle.vue'),
      },
      {
        path: '/base/component',
        name: 'component',
        component: () =>
          import(/* webpackChunkName: "base" */ '@/views/base/parent-component.vue'),
      },
    ],
  },
];

export default routes;
