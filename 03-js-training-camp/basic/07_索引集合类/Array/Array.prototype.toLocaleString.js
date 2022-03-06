/**
 * 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开
 */

console.log([1, 2, 3].toLocaleString()); // 1,2,3
console.log([1, 2, 3].toString()); // 1,2,3
