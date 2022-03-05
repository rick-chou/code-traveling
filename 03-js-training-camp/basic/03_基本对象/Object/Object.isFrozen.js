/**
 * @example Object.isFrozen(obj)
 * @description 判断一个对象是否被冻结
 * @returns {boolean}
 */

const obj = { name: 'chou' };

console.log(Object.isFrozen(obj)); // false

Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
