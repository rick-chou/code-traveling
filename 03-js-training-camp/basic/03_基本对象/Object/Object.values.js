/**
 * @example Object.values(obj)
 * @description 方法返回一个给定对象自身的所有可枚举属性值的数组
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

console.log(Object.values(obj1)); // [ 18 ]
console.log(Object.values(obj2)); // []
