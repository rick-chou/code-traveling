/**
 * @example prototypeObj.isPrototypeOf(object)
 * @description 方法用于测试一个对象是否存在于另一个对象的原型链上
 * @returns {boolean}
 */

const proto = {};
const obj = { name: 'chou' };
Object.setPrototypeOf(obj, proto);

console.log(proto.isPrototypeOf(obj)); // true
