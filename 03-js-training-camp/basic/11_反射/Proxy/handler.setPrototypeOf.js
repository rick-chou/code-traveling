/**
 * @example setPrototypeOf: function(target, prototype) {}
 * @description 主要用来拦截 Object.setPrototypeOf()
 * @param target 目标对象
 * @param prototype 对象新原型
 */

var handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false;
  },
};

var newProto = {},
  target = {};

var p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
