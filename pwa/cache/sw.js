const CACHE_NAME = 'cache_v1';

// 缓存内容
self.addEventListener('install', async (event) => {
  // 开启一个cache 得到一个cache对象
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll([
    '/',
    '/static/img1.jpg',
    '/static/img2.jpg',
    '/static/img3.jpg',
    '/manifest.json',
    '/index.css',
  ]);
  await self.skipWaiting();
});

// 清除旧的缓存
self.addEventListener('activate', async (event) => {
  const keys = await caches.keys();
  keys.forEach((key) => {
    if (key !== CACHE_NAME) {
      caches.delete(key);
    }
  });
  event.waitUntil(self.clients.claim());
});

// fetch 事件会在发送请求的时候触发 主要用于缓存或者读取网络资源
// 判断资源能否请求成功 请求成功 --> 响应成功的结果 请求失败 --> 读取caches缓存
self.addEventListener('fetch', (event) => {
  // 请求对象
  const req = event.request;
  // 浏览器响应
  event.respondWith(networkFirst(req));
});

// 网络优先策略
const networkFirst = async (req) => {
  try {
    // 先从网络读取资源
    const fresh = await fetch(req);
    return fresh;
  } catch (e) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    return cached;
  }
};
