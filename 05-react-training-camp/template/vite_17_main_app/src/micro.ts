import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'sub-app',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/subApp',
  },
]);

start();
