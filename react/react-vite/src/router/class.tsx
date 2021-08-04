import classComponents from '@/containers/class';

import setState from '@containers/class/setState';
import lifecycle from '@containers/class/lifecycle';
import errorBoundary from '@containers/class/errorBoundary';
import context from '@containers/class/context';

const routes = [
  {
    path: '/class',
    component: classComponents,
    routes: [
      {
        path: '/class/setState',
        component: setState,
      },
      {
        path: '/class/lifecycle',
        component: lifecycle,
      },
      {
        path: '/class/errorBoundary',
        component: errorBoundary,
      },
      {
        path: '/class/context',
        component: context,
      },
    ],
  },
];

export default routes;
