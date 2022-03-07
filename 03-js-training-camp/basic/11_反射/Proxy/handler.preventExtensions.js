/**
 * @example preventExtensions: function(target) {}
 * @description 用于设置对Object.preventExtensions()的拦截
 * @param target 目标对象
 */

var p = new Proxy(
  {},
  {
    preventExtensions: function (target) {
      console.log('called');
      Object.preventExtensions(target);
      return true;
    },
  }
);

console.log(Object.preventExtensions(p)); // "called"
// false
