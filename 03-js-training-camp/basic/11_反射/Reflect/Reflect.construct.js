/**
 * @example Reflect.construct(target, argumentsList[, newTarget])
 * @description Reflect.construct() 方法的行为有点像 new 操作符 构造函数 ， 相当于运行 new target(...args)
 * @param target 被运行的目标构造函数
 * @param argumentsList 类数组，目标构造函数调用时的参数。
 * @param newTarget 可选 作为新创建对象的原型对象的constructor属性
 */

var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
