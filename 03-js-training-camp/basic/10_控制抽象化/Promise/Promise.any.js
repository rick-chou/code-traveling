/**
 * @example Promise.any(iterable)
 * @description 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise
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

Promise.any([p1, p2, p3]).then(console.log); // 2s
