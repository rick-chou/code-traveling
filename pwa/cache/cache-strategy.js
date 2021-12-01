// cache only
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request));
});

// network only
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

// cache first
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// network first
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

// network & cache race

// cache then network

// generic fallback
