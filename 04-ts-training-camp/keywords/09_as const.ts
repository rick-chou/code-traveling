/**
 * 类型断言
 */

const routes = [
  {
    id: 'home',
    config: {},
  },
  {
    id: 'setting',
    config: {},
  },
  {
    id: 'profile',
    config: {},
  },
] as const;

const router = routes.map((item) => item.id);
type Routes = typeof router[number];

const page: Routes = 'home';
