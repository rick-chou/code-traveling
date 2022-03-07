/**
 * @example Promise.race(iterable);
 * @description 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('1s');
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('2s');
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('3s');
  }, 3000);
});

Promise.race([p1, p2, p3]).then(console.log).catch(console.log); // 1s
