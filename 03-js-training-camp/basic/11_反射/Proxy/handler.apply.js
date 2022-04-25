/**
 * @example apply: function (target, thisArg, argumentsList) {}
 * @description 用于拦截函数的调用
 * @param target 目标对象（函数）
 * @param thisArg 被调用时的上下文对象
 * @param argumentsList 被调用时的参数数组
 */

function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function (target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // expected output: "Calculate sum: 1,2"
    return target(argumentsList[0], argumentsList[1]) * 10;
  },
};

const proxy1 = new Proxy(sum, handler);

console.log(sum(1, 2));
// expected output: 3
console.log(proxy1(1, 2));
// expected output: 30
