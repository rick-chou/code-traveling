import memo from '@basic/performance/memo';
import pureComponent from '@basic/performance/pureComponent';
import shouldComponentUpdate from '@basic/performance/shouldComponentUpdate';

const routes = [
  { path: '/basic/performance/memo', component: memo },
  { path: '/basic/performance/pureComponent', component: pureComponent },
  { path: '/basic/performance/shouldComponentUpdate', component: shouldComponentUpdate },
];

export default routes;
