/**
 * Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值
 * 一个 Promise 必然处于以下几种状态之一：
 * 待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。
 * 已兑现（fulfilled）: 意味着操作成功完成。
 * 已拒绝（rejected）: 意味着操作失败。
 */

/**
 * 创建一个Promise
 */

const myFirstPromise = new Promise((resolve, reject) => {
  //   做一些异步操作，最终会调用下面两者之一:
  //
  //   resolve(someValue); // fulfilled
  //   或
  //   reject("failure reason"); // rejected
});
