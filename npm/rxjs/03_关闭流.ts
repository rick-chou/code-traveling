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

// 启动流
const subscription = stream$.subscribe({
  complete: () => console.log('done'),
  next: v => console.log(v),
  error: () => console.log('error'),
});

// 1s后 关闭流
setTimeout(() => subscription.unsubscribe(), 1000);
