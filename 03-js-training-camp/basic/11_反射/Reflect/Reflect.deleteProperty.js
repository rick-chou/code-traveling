/**
 * @example Reflect.deleteProperty(target, propertyKey)
 * @description 静态方法 Reflect.deleteProperty() 允许用于删除属性。它很像 delete operator ，但它是一个函数
 * @param target 删除属性的目标对象
 * @param propertyKey 需要删除的属性的名称
 * @returns {boolean} 是否删除成功
 */

var obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, 'x'); // true
obj; // { y: 2 }

var arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, '3'); // true
arr; // [1, 2, 3, , 5]

// 如果属性不存在，返回 true
Reflect.deleteProperty({}, 'foo'); // true

// 如果属性不可配置，返回 false
Reflect.deleteProperty(Object.freeze({ foo: 1 }), 'foo'); // false
