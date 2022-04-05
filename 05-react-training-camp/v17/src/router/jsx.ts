import event from '@basic/jsx/event';
import expression from '@basic/jsx/expression';
import listRender from '@basic/jsx/list-render';
import specialPoints from '@basic/jsx/special-points';
import start from '@basic/jsx/start';

const routes = [
  { path: '/basic/jsx/start', component: start },
  { path: '/basic/jsx/expression', component: expression },
  { path: '/basic/jsx/list-render', component: listRender },
  { path: '/basic/jsx/special-points', component: specialPoints },
  { path: '/basic/jsx/event', component: event },
];

export default routes;
