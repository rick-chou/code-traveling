/**
 * @example Promise.allSettled(iterable);
 * @description 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果
 */

var p1 = Promise.resolve(710);
var p2 = 209;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('setTimeout');
  });
});

var p4 = Promise.reject('no');

Promise.allSettled([p1, p2, p3]).then(console.log);
// [
//   { status: 'fulfilled', value: 710 },
//   { status: 'fulfilled', value: 209 },
//   { status: 'fulfilled', value: 'setTimeout' },
// ];

Promise.allSettled([p1, p2, p3, p4]).then(console.log).catch(console.log);
// [
//   { status: 'fulfilled', value: 710 },
//   { status: 'fulfilled', value: 209 },
//   { status: 'fulfilled', value: 'setTimeout' },
//   { status: 'rejected', reason: 'no' },
// ];
