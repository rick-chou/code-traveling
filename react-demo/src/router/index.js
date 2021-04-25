import Comment from '@containers/Comments';
import Counter from '@containers/Counter';

const routes = [
  {
    path: '/comment',
    exact: true,
    component: Comment,
  },
  {
    path: '/counter',
    exact: true,
    component: Counter,
  },
];

export default routes;
