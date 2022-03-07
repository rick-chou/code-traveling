/**
 * @example Reflect.preventExtensions(target)
 * @description 静态方法 Reflect.preventExtensions() 方法阻止新属性添加到对象
 * @description(例如：防止将来对对象的扩展被添加到对象中)。该方法与 Object.preventExtensions()相似
 * @returns {boolean} 返回一个 Boolean 值表明目标对象是否成功被设置为不可扩展
 */

// Objects are extensible by default.
var empty = {};
Reflect.isExtensible(empty); // === true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false
