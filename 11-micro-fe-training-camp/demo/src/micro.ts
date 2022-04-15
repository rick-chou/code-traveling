import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react-demo',
    entry: '//localhost:3001',
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
