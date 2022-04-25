/**
 * @example Reflect.set(target, propertyKey, value[, receiver])
 * @description 静态方法 Reflect.set() 工作方式就像在一个对象上设置一个属性
 * @returns {boolean} 返回一个 Boolean 值表明是否成功设置属性
 */

// Object
var obj = {};
Reflect.set(obj, 'prop', 'value'); // true
obj.prop; // "value"

// Array
var arr = ['duck', 'duck', 'duck'];
Reflect.set(arr, 2, 'goose'); // true
arr[2]; // "goose"

// It can truncate an array.
Reflect.set(arr, 'length', 1); // true
arr; // ["duck"];

// With just one argument, propertyKey and value are "undefined".
var obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, 'undefined');
// { value: undefined, writable: true, enumerable: true, configurable: true }
