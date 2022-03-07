/**
 * @example isExtensible: function(target) {}
 * @description 用于拦截对对象的Object.isExtensible()
 * @param target 目标对象
 */

var p = new Proxy(
  {},
  {
    isExtensible: function (target) {
      console.log('called');
      return true; //也可以return 1;等表示为true的值
    },
  }
);

console.log(Object.isExtensible(p)); // "called"
// true
