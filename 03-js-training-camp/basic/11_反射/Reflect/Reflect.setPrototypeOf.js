/**
 * @example Reflect.setPrototypeOf(target, prototype)
 * @description 除了返回类型以外，静态方法 Reflect.setPrototypeOf() 与 Object.setPrototypeOf() 方法是一样的。
 * @description 它可设置对象的原型（即内部的 [[Prototype]] 属性）为另一个对象或 null，如果操作成功返回 true，否则返回 false
 * @returns {boolean} 返回一个 Boolean 值表明是否原型已经成功设置
 */

Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
var target = {};
var proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
