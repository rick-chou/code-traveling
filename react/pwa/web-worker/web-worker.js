const sum = eval(Array.from({ length: 1000000 }, (__, idx) => idx).join('+'));

// 发消息给主线程
self.postMessage({ sum });

// 监听主进程的消息
self.addEventListener('message', (e) => {
  console.log(e.data);
});
