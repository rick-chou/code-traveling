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
          import(/* webpackChunkName: "base" */ '@/components/base/data.vue'),
      },
      {
        path: '/base/life',
        name: 'life',
        component: () =>
          import(/* webpackChunkName: "base" */ '@/components/base/life.vue'),
      },
    ],
  },
];

export default routes;
