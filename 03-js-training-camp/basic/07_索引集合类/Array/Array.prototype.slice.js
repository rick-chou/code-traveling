/**
 * @example arr.slice([begin[, end]])
 * @description 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。
 * 原始数组不会被改变
 */

const arr = [1, 2, 3, 4, 5].slice(0, 2);
console.log(arr); // [ 1, 2 ]
