/**
 * @example getPrototypeOf(target) {}
 * @description 是一个代理（Proxy）方法，当读取代理对象的原型时，该方法就会被调用
 * @param target 目标对象
 */

var obj = {};
var proto = {};
var handler = {
  getPrototypeOf(target) {
    console.log(target === obj); // true
    console.log(this === handler); // true
    return proto;
  },
};

var p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto); // true
