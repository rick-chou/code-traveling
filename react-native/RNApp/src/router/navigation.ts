/**
 * @description Navigation
 * @link https://reactnavigation.org/
 */
import Navigation from '@views/navigation';
import HomeScreen from '@views/navigation/homeScreen';
import DetailsScreen from '@views/navigation/detailsScreen';

import { NavigatorRouterProps } from '@types';

const router: NavigatorRouterProps[] = [
  {
    name: 'Navigation',
    component: Navigation,
  },
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      title: 'My Home',
    },
  },
  {
    name: 'DetailsScreen',
    component: DetailsScreen,
  },
];

export default router;
