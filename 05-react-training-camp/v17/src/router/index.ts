import _jsx from './jsx';
import _hook from './hook';
import _css from './css';
import _store from './store';
import _router from './router';

export const routes = [..._jsx, ..._hook, ..._css, ..._store, ..._router];

export const routeObj = routes.reduce((pre, cur) => {
  const key = cur.path.split('/')[2];
  const value = cur.path.split('/')[3];
  if (key in pre) {
    pre[key].push({ id: value, path: cur.path });
  } else {
    pre[key] = [{ id: value, path: cur.path }];
  }
  return pre;
}, {} as { [key: string]: { id: string; path: string }[] });
