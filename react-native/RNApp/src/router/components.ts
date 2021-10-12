/**
 * @description Components
 * @link https://reactnative.cn/docs/components-and-apis
 */
import Components from '@views/components/index';
import ActivityIndicator from '@views/components/activityIndicator';
import FlatList from '@views/components/flatList';

import { NavigatorRouterProps } from '@types';

const router: NavigatorRouterProps[] = [
  {
    name: 'Components',
    component: Components,
  },
  {
    name: 'ActivityIndicator',
    component: ActivityIndicator,
  },
  {
    name: 'FlatList',
    component: FlatList,
  },
];

export default router;
