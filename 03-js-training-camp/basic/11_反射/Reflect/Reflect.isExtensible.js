/**
 * @example Reflect.isExtensible(target)
 * @description 静态方法 Reflect.isExtensible() 判断一个对象是否可扩展 （即是否能够添加新的属性）。与它 Object.isExtensible() 方法相似
 * @returns {boolean} 返回一个 Boolean 值表明该对象是否可扩展
 */

// New objects are extensible.
var empty = {};
Reflect.isExtensible(empty); // === true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
Reflect.isExtensible(sealed); // === false

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
Reflect.isExtensible(frozen); // === false
