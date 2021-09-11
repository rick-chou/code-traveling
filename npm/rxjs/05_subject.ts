import { Subject } from 'rxjs';

// 创建subject
const subject = new Subject();

// 订阅一个observer
subject.subscribe(v => console.log('stream 1', v));
// 再订阅一个observer
subject.subscribe(v => console.log('stream 2', v));
// 延时1s再订阅一个observer
setTimeout(() => {
  subject.subscribe(v => console.log('stream 3', v));
}, 1000);
// 产生数据1
subject.next(1);
// 产生数据2
subject.next(2);
// 延时3s产生数据3
setTimeout(() => {
  subject.next(3);
}, 3000);
// output
// stream 1 1 //立即输出
// stream 2 1 //立即输出
// stream 1 2 //立即输出
// stream 2 2 //立即输出
// stream 1 3 //3s后输出
// stream 2 3 //3s后输出
// stream 3 3 //3s后输出
