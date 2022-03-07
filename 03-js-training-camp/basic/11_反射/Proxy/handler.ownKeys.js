/**
 * @example ownKeys: function(target) {}
 * @description 用于拦截 Reflect.ownKeys()
 * @param target 目标对象
 */

var p = new Proxy(
  {},
  {
    ownKeys: function (target) {
      console.log('called');
      return ['a', 'b', 'c'];
    },
  }
);

console.log(Object.getOwnPropertyNames(p)); // "called"
// [ 'a', 'b', 'c' ]
