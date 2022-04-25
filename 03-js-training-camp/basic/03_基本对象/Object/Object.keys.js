/**
 * @example Object.keys(obj)
 * @description 返回一个由一个给定对象的自身可枚举属性组成的数组
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

console.log(Object.keys(obj1)); // [ 'age' ]
console.log(Object.keys(obj2)); // []
