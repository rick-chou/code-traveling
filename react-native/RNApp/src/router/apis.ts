/**
 * @description APIs
 * @link https://reactnative.cn/docs/accessibilityinfo
 */

import APIs from '@views/apis/index';
import Alert from '@views/apis/alert';
import Animated from '@views/apis/animated';
import View from '@views/apis/animated/view';
import Image from '@views/apis/animated/image';
import ScrollView from '@views/apis/animated/scrollView';
import ValueXY from '@views/apis/animated/2D';
import AppState from '@views/apis/appState';
import Dimensions from '@views/apis/dimensions';
import Keyboard from '@views/apis/keyboard';
import Platform from '@views/apis/platform';
import Share from '@views/apis/share';
import Transforms from '@views/apis/transforms';

import { NavigatorRouterProps } from '@types';

const router: NavigatorRouterProps[] = [
  {
    name: 'APIs',
    component: APIs,
  },
  {
    name: 'Alert',
    component: Alert,
  },
  {
    name: 'Animated',
    component: Animated,
  },
  {
    name: 'Animated/View',
    component: View,
  },
  {
    name: 'Animated/Image',
    component: Image,
  },
  {
    name: 'Animated/ScrollView',
    component: ScrollView,
  },
  {
    name: 'Animated/2D',
    component: ValueXY,
  },
  {
    name: 'AppState',
    component: AppState,
  },
  {
    name: 'Dimensions',
    component: Dimensions,
  },
  {
    name: 'Keyboard',
    component: Keyboard,
  },
  {
    name: 'Platform',
    component: Platform,
  },
  {
    name: 'Share',
    component: Share,
  },
  {
    name: 'Transforms',
    component: Transforms,
  },
];

export default router;
