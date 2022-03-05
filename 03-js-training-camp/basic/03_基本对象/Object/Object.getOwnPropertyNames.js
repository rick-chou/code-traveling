/**
 * @example Object.getOwnPropertyNames(obj)
 * @description 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组
 * @returns {Array}
 */

const obj = {
  name: 'chou',
  [Symbol()]: 'private',
};

Object.defineProperty(obj, 'age', {
  value: 18,
});

console.log(Object.getOwnPropertyNames(obj)); // [ 'name', 'age' ]
console.log(obj); // { name: 'chou', [Symbol()]: 'private' }
