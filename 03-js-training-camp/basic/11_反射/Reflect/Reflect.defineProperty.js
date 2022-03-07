/**
 * @example Reflect.defineProperty(target, propertyKey, attributes)
 * @description 静态方法 Reflect.defineProperty() 基本等同于 Object.defineProperty() 方法，唯一不同是返回 Boolean 值
 * @param target 目标对象
 * @param propertyKey 要定义或修改的属性的名称
 * @param attributes 要定义或修改的属性的描述
 * @returns {boolean}  指示了属性是否被成功定义
 */

let obj = {};
Reflect.defineProperty(obj, 'x', { value: 7 }); // true
obj.x; // 7
