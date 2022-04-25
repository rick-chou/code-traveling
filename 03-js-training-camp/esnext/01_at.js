/**
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 * @description 要返回的数组元素的索引（位置）。当传递负数时，支持从数组末端开始的相对索引；也就是说，如果使用负数，返回的元素将从数组的末端开始倒数
 */

const arr = [1, 2, 3, 4, 5];

const lastItem_v_after = arr[arr.length - 1];

const lastItem_v_now = arr.at(-1);

console.log(lastItem_v_after);
console.log(lastItem_v_now);
