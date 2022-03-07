/**
 * @example construct: function (target, argumentsList, newTarget) {},
 * @description 方法用于拦截new 操作符. 为了使new操作符在生成的Proxy对象上生效，用于初始化代理的目标对象自身必须具有[[Construct]]内部方法
 * @param target 目标对象
 * @param argumentsList constructor的参数列表
 * @param newTarget 最初被调用的构造函数
 * 必须返回一个对象
 */

var p = new Proxy(function () {}, {
  construct: function (target, argumentsList, newTarget) {
    console.log('called: ' + argumentsList.join(', '));
    return { value: argumentsList[0] * 10 };
  },
});

console.log(new p(1).value); // "called: 1"
// 10
