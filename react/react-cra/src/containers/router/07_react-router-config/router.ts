import Home from './home';
import Article from './article';
import A from './a';
import B from './b';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/article',
    component: Article,
    routes: [
      {
        path: '/article/a',
        component: A,
      },
      {
        path: '/article/b',
        component: B,
      },
    ],
  },
];
