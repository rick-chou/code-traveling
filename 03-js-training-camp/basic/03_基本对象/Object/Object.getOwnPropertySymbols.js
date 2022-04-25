/**
 * @example Object.getOwnPropertySymbols(obj)
 * @description 方法返回一个给定对象自身的所有 Symbol 属性的数组
 * @returns {Array}
 */

const obj = {
  name: 'chou',
  [Symbol()]: 'private',
};

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol() ]
