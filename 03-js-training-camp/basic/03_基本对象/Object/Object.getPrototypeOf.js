/**
 * @example Object.getPrototypeOf(object)
 * @description 返回指定对象的原型（内部[[Prototype]]属性的值）
 */

const proto = {};
const obj = { name: 'chou' };
Object.setPrototypeOf(obj, proto);

console.log(Object.getPrototypeOf(obj) === proto); // true
console.log(Object.getPrototypeOf(obj) === obj.__proto__); // true
