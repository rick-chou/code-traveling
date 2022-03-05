/**
 * @example Object.entries(obj)
 * @description 返回一个给定对象自身可枚举属性的键值对数组
 * @returns {Array}
 */

const obj1 = Object.defineProperty({}, 'age', {
  value: 18,
  enumerable: true,
});

const obj2 = Object.defineProperty({}, 'age', {
  value: 18,
  enumerable: false,
});

console.log(Object.entries(obj1)); // [ [ 'age', 18 ] ]
console.log(Object.entries(obj2)); // []
