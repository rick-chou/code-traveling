import Router from '@/views/vue-router/index.vue';

const routes = [
  {
    path: '/vue-router',
    name: 'vue-router',
    component: Router,
    children: [
      {
        path: '/vue-router/essentials',
        name: 'essentials',
        component: () =>
          import(
            /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials.vue'
          ),
        children: [
          {
            path: '/vue-router/essentials/base',
            name: 'base',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/base.vue'
              ),
          },
          {
            path: '/vue-router/essentials/dynamic-route-matching',
            name: 'dynamic-route-matching',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/dynamic-route-matching.vue'
              ),
          },
          {
            path: '/vue-router/essentials/nested-routes',
            name: 'nested-routes',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/nested-routes.vue'
              ),
          },
          {
            path: '/vue-router/essentials/programmatic-navigation',
            name: 'programmatic-navigation',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/programmatic-navigation.vue'
              ),
          },
          {
            path: '/vue-router/essentials/named-routes',
            name: 'named-routes',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/named-routes.vue'
              ),
          },
          {
            path: '/vue-router/essentials/named-views',
            name: 'named-views',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/named-views.vue'
              ),
          },
          {
            path: '/vue-router/essentials/redirect-alias',
            name: 'redirect-alias',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/redirect-alias.vue'
              ),
          },
          {
            path: '/vue-router/essentials/passing-props-to-route-components',
            name: 'passing-props-to-route-components',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/passing-props-to-route-components.vue'
              ),
          },
          {
            path: '/vue-router/essentials/h5-history-mode',
            name: 'h5-history-mode',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/essentials/h5-history-mode.vue'
              ),
          },
        ],
      },
      {
        path: '/vue-router/advanced',
        name: 'advanced',
        component: () =>
          import(
            /* webpackChunkName: "vue-router" */ '@/views/vue-router/advanced.vue'
          ),
        children: [
          {
            path: '/vue-router/advanced/navigation-guards',
            name: 'navigation-guards',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/advanced/navigation-guards.vue'
              ),
          },
          {
            path: '/vue-router/advanced/route-meta-fields',
            name: 'route-meta-fields',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/advanced/route-meta-fields.vue'
              ),
          },
          {
            path: '/vue-router/advanced/transitions',
            name: 'transitions',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/advanced/transitions.vue'
              ),
          },
          {
            path: '/vue-router/advanced/data-fetching',
            name: 'data-fetching',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/advanced/data-fetching.vue'
              ),
          },
          {
            path: '/vue-router/advanced/scroll-behavior',
            name: 'scroll-behavior',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/advanced/scroll-behavior.vue'
              ),
          },
          {
            path: '/vue-router/advanced/lazy-loading-routes',
            name: 'lazy-loading-routes',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/advanced/lazy-loading-routes.vue'
              ),
          },
          {
            path: '/vue-router/advanced/navigation-failures',
            name: 'navigation-failures',
            component: () =>
              import(
                /* webpackChunkName: "vue-router" */ '@/views/vue-router/advanced/navigation-failures.vue'
              ),
          },
        ],
      },
    ],
  },
];

export default routes;
