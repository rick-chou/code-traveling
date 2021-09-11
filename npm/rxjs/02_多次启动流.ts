import { Observable } from 'rxjs';

// stream$尾部的$是表示当前这个变量是个observable
const stream$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next([1, 2, 3]);
  }, 500);
  setTimeout(() => {
    subscriber.next({ a: 1000 });
  }, 1000);
  setTimeout(() => {
    subscriber.next('end');
  }, 3000);
  setTimeout(() => {
    subscriber.complete();
  }, 4000);
});

const now = new Date().getTime();

// 启动流
stream$.subscribe({
  complete: () => console.log('done'),
  next: v => console.log(new Date().getTime() - now, 'ms stream1', v),
  error: () => console.log('error'),
});

// 延时1s后，启动流
setTimeout(() => {
  stream$.subscribe({
    complete: () => console.log('done'),
    next: v => console.log(new Date().getTime() - now, 'ms stream2', v),
    error: () => console.log('error'),
  });
}, 1000);
