import Vuex from '@/views/vuex/index.vue';

const routes = [
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex,
    children: [
      {
        path: '/vuex/count',
        name: 'state',
        component: () =>
          import(/* webpackChunkName: "vuex" */ '@/views/vuex/count.vue'),
      },
    ],
  },
];

export default routes;
