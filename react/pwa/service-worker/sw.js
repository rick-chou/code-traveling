// install 事件会在service worker注册成功时触发 主要用于缓存资源
self.addEventListener('install', (event) => {
  console.log(`install`, event);
  // 让service worker跳过等待 直接进入activate状态 返回一个promise对象
  // self.skipWaiting();
  // 等待self.skipWaiting()执行结束 再进入activate事件
  event.waitUntil(self.skipWaiting());
});

// activate 事件会在service worker激活的时候触发 主要用于删除旧的资源
self.addEventListener('activate', (event) => {
  console.log(`activate`, event);
  // 当一个sw注册时 页面在下次加载时才会使用它 claim方法会立即控制这些页面
  // self.clients.claim();
  event.waitUntil(self.clients.claim());
});

// fetch 事件会在发送请求的时候触发 主要用于缓存或者读取网络资源
self.addEventListener('fetch', (event) => {
  console.log(`fetch`, event);
});
