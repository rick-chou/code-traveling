/**
 * @example arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 * 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值
 *
 * reducer 函数接收4个参数:
 * Accumulator (acc) (累计器)
 * Current Value (cur) (当前值)
 * Current Index (idx) (当前索引)
 * Source Array (src) (源数组)
 */

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((pre, cur) => pre + cur, 0);
console.log(sum); // 15
