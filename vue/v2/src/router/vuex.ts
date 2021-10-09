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
          import(/* webpackChunkName: "vuex" */ '@/components/vuex/state.vue'),
      },
      {
        path: '/vuex/getters',
        name: 'getters',
        component: () =>
          import(
            /* webpackChunkName: "vuex" */ '@/components/vuex/getters.vue'
          ),
      },
      {
        path: '/vuex/mutations',
        name: 'mutations',
        component: () =>
          import(
            /* webpackChunkName: "vuex" */ '@/components/vuex/mutations.vue'
          ),
      },
      {
        path: '/vuex/actions',
        name: 'actions',
        component: () =>
          import(
            /* webpackChunkName: "vuex" */ '@/components/vuex/actions.vue'
          ),
      },
      {
        path: '/vuex/modules',
        name: 'modules',
        component: () =>
          import(
            /* webpackChunkName: "vuex" */ '@/components/vuex/modules.vue'
          ),
      },
    ],
  },
];

export default routes;
