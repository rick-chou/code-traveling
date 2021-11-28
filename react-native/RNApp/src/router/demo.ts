/**
 * @description Demo
 */
import Demo from '@views/demo';
import Fan from '@views/demo/fan';

import { NavigatorRouterProps } from '@types';

const router: NavigatorRouterProps[] = [
  {
    name: 'Demo',
    component: Demo,
  },
  {
    name: 'Fan',
    component: Fan,
  },
];

export default router;
