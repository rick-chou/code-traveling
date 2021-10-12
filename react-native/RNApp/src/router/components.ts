/**
 * @description Components
 * @link https://reactnative.cn/docs/components-and-apis
 */
import Components from '@views/components/index';
import ActivityIndicator from '@views/components/activityIndicator';
import FlatList from '@views/components/flatList';
import ImageBackground from '@views/components/imageBackground';
import KeyboardAvoidingView from '@views/components/keyboardAvoidingView';
import Modal from '@views/components/modal';
import RefreshControl from '@views/components/refreshControl';
import StatusBar from '@views/components/statusBar';
import TouchableHighlight from '@views/components/touchableHighlight';
import TouchableOpacity from '@views/components/touchableOpacity';
import TouchableWithoutFeedback from '@views/components/touchableWithoutFeedback';

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
  {
    name: 'ImageBackground',
    component: ImageBackground,
  },
  {
    name: 'KeyboardAvoidingView',
    component: KeyboardAvoidingView,
  },
  {
    name: 'Modal',
    component: Modal,
  },
  {
    name: 'RefreshControl',
    component: RefreshControl,
  },
  {
    name: 'StatusBar',
    component: StatusBar,
  },
  {
    name: 'TouchableHighlight',
    component: TouchableHighlight,
  },
  {
    name: 'TouchableOpacity',
    component: TouchableOpacity,
  },
  {
    name: 'TouchableWithoutFeedback',
    component: TouchableWithoutFeedback,
  },
];

export default router;
