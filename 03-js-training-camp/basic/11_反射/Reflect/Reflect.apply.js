/**
 * @example Reflect.apply(target, thisArgument, argumentsList)
 * @description 通过指定的参数列表发起对目标(target)函数的调用
 * @param target 目标函数。
 * @param thisArgument target函数调用时绑定的this对象。
 * @param argumentsList target函数调用时传入的实参列表，该参数应该是一个类数组的对象
 * @returns 返回值是调用完带着指定参数和 this 值的给定的函数后返回的结果
 */

// 该方法与ES5中Function.prototype.apply()方法类似：
// 调用一个方法并且显式地指定 this 变量和参数列表(arguments) ，参数列表可以是数组，或类似数组的对象

Reflect.apply(Math.floor, undefined, [1.75]); // 1;
