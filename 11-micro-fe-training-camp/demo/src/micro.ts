import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react-demo',
    // entry: import.meta.env.VITE_SUB_APP_REACT_URL,
    entry: 'http://124.223.71.181:3001/',
    container: '#container',
    activeRule: '/react',
  },
  {
    name: 'monitor',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/monitor',
  },
]);

start();
