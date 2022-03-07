/**
 * @example Promise.all(iterable)
 * @param iterable 一个可迭代对象，如 Array 或 String
 * @returns
 * 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise。
 * 如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved） Promise。注意：Google Chrome 58 在这种情况下返回一个已完成（already resolved）状态的 Promise。
 * 其它情况下返回一个处理中（pending）的Promise。这个返回的 promise 之后会在所有的 promise 都完成或有一个 promise 失败时异步地变为完成或失败。 见下方关于“Promise.all 的异步或同步”示例。返回值将会按照参数内的 promise 顺序排列，而不是由调用 promise 的完成顺序决定
 */

var p1 = Promise.resolve(710);
var p2 = 209;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('setTimeout');
  });
});

var p4 = Promise.reject('no');

Promise.all([p1, p2, p3]).then(console.log);
// [ 710, 209, 'setTimeout' ]

Promise.all([p1, p2, p3, p4]).then(console.log).catch(console.log); // no
