/**
 * @description 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
 */

const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);

console.log(roots); // [ 1, 2, 3 ]
