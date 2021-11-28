/**
 * @description Home
 */
import Home from '@views/index';

import apis from './apis';
import components from './components';
import navigation from './navigation';
import demo from './demo';

import { NavigatorRouterProps } from '@types';

const router: NavigatorRouterProps[] = [
  {
    name: 'Home',
    component: Home,
  },
  ...apis,
  ...components,
  ...navigation,
  ...demo,
];

export default router;
