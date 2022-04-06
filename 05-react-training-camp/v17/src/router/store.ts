import reduxBase from '@/store/redux/counter-base/view';
import reduxThunk from '@/store/redux/counter-thunk/view';
import reduxSaga from '@/store/redux/counter-saga/view';

const routes = [
  { path: '/store/redux/basic', component: reduxBase },
  { path: '/store/redux/thunk', component: reduxThunk },
  { path: '/store/redux/saga', component: reduxSaga },
];

export default routes;
