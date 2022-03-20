import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react-demo',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/start/react',
  },
]);

start();
