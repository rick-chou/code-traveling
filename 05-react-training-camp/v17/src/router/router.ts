import routeV5 from '@/basic/router/v5/route';
import hookV5 from '@/basic/router/v5/hook';
import linkV5 from '@/basic/router/v5/link';

const routes = [
  { path: '/basic/router/v5-route', component: routeV5 },
  { path: '/basic/router/v5-hook/:id', component: hookV5 },
  { path: '/basic/router/v5-link', component: linkV5 },
];

export default routes;
