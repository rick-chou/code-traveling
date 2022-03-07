/**
 * @example Reflect.getPrototypeOf(target)
 * @description 静态方法 Reflect.getPrototypeOf() 与 Object.getPrototypeOf() 方法几乎是一样的。都是返回指定对象的原型
 * @returns 给定对象的原型。如果给定对象没有继承的属性，则返回 null
 */

Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null
