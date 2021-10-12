/**
 * @description Home
 */
import Home from '@views/index';

import apis from './apis';
import components from './components';
import navigation from './navigation';

import { NavigatorRouterProps } from '@types';

const router: NavigatorRouterProps[] = [
  {
    name: 'Home',
    component: Home,
  },
  ...apis,
  ...components,
  ...navigation,
];

export default router;
