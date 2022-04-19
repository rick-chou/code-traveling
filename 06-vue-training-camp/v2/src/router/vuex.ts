import Vuex from '@/views/vuex/index.vue';

const routes = [
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex,
    children: [
      {
        path: '/vuex/state',
        name: 'state',
        component: () =>
          import(/* webpackChunkName: "vuex" */ '@/views/vuex/state.vue'),
      },
      {
        path: '/vuex/getters',
        name: 'getters',
        component: () =>
          import(
            /* webpackChunkName: "vuex" */ '@/views/vuex/getters.vue'
          ),
      },
      {
        path: '/vuex/mutations',
        name: 'mutations',
        component: () =>
          import(
            /* webpackChunkName: "vuex" */ '@/views/vuex/mutations.vue'
          ),
      },
      {
        path: '/vuex/actions',
        name: 'actions',
        component: () =>
          import(
            /* webpackChunkName: "vuex" */ '@/views/vuex/actions.vue'
          ),
      },
      {
        path: '/vuex/modules',
        name: 'modules',
        component: () =>
          import(
            /* webpackChunkName: "vuex" */ '@/views/vuex/modules.vue'
          ),
      },
    ],
  },
];

export default routes;
