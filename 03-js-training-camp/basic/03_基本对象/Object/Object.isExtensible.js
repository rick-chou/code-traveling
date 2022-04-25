/**
 * @example Object.isExtensible(obj)
 * @description 判断一个对象是否是可扩展的
 * @returns {boolean}
 */

const obj1 = { name: 'chou' };
const obj2 = Object.defineProperty({}, 'name', {
  value: 'chou',
});
const obj3 = Object.preventExtensions({ name: 'chou' });
const obj4 = Object.seal({ name: 'chou' });
const obj5 = Object.freeze({ name: 'chou' });

console.log(Object.isExtensible(obj1)); // true
console.log(Object.isExtensible(obj2)); // true
console.log(Object.isExtensible(obj3)); // false
console.log(Object.isExtensible(obj4)); // false
console.log(Object.isExtensible(obj5)); // false
